// recupere  notre modele de données à rentrer dans la bdd
const Publication = require('../schema/publication.model.js').Publication;

// Fonction pour pouvoir récuperer toutes les publications dans la base de données
function findAll(req, res) {
    // METHODE find() pour une requete GET
    return Publication.find()
        .exec()
        .then((result) => {
            if (result.length > 0) {
                res.json(result)
            } else {
                res.status(202).json({ message: 'pas de publication disponible' })
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

// Function to get one by name
function findByTitle(req, res) {
    //récupere une titre specifique
    const titleConst = req.params.title;
    // METHODE find() pour une requete GET
    console.log("findByTitle : " + titleConst);
    return Publication.find({ title: titleConst })
        .exec()
        .then((result) => {
            if (result.length > 0) {
                res.json(result)
            } else {
                res.status(202).json({ message: 'pas de publication disponible' })
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

// Ajouter une nouvelle publication à la database
function saveOne(req, res) {
    //recupere le nouveau post rentré par utilisateur
    const newPublication = new Publication(req.body);
    // METHODE save() pour une requete POST
    return newPublication
        .save()
        .then((result) => {
            res
                .status(201)
                .json({ message: `publication published`, content: result })
        })
        .catch((err) => {
            if (err.errors && Object.keys(err.errors).length > 0 && err.name === 'ValidationError') {
                res.status(422).json({ message: err.message })
            } else {
                res.status(500).json(err)
            }
        })
}

// Delete one Publication of Database
async function deleteByLastName(req, res) {
    //récupere une titre specifique
    const nameParam = req.params.title;
    console.log("Deletebylastname : " + nameParam);
    // METHODE deleteOne() pour une requete DELETE
    try {
        const result = await Publication.deleteOne({ title: nameParam });
        if (result) {
            res.json({ message: `${result.deletedCount} deleted` });
        } else {
            res.status(404).json({ message: `pas de publication disponible` });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

// Function update One Publication of database
function updatePublication(req, res) {
    const id = req.params.id;

    return Publication.updateOne({ _id: id }, req.body)
        .then((result) => {
            if (result) {
                res.json({ message: `${result.modifiedCount} updated` })
            } else {
                res.status(404).json({ message: `pas de publication disponible` })
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

module.exports = { saveOne, findAll, findByTitle, deleteByLastName, updatePublication }