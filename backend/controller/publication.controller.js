const Publication = require('../schema/publication.model.js').Publication;

// Fonction pour pouvoir récuperer toutes les publications dans la base de données
function findAll(req, res) {
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
    const titleConst = req.params.title;
    return Publication.find({ title: titleConst })
        .exec()
        .then((result) => {
            if (result.length > 0) {
                res.json(result)
            } else {
                res.status(202).json({ message: 'no publication found' })
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

// Ajouter une nouvelle publication à la database
function saveOne(req, res) {
    const newPublication = new Publication(req.body);

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

    const nameParam = req.params.name;

    try {
        const result = await Publication.deleteOne({ lastName: nameParam });
        if (result) {
            res.json({ message: `${result.deletedCount} deleted` });
        } else {
            res.status(404).json({ message: `Publication not found` });
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
                res.status(404).json({ message: `Publication not found` })
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

module.exports = { saveOne, findAll, findByTitle, deleteByLastName, updatePublication }