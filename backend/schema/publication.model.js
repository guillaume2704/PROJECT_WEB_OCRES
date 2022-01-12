// Utilisation de notre base de donnée mongodb
const mongoose = require('mongoose');

// schema pour les objets de notre base de données
const publicationSchema = new mongoose.Schema({

    // Format : Titre et description rentré manuellement et date automatiquement
    title: {
        type: String,
        required: true
    },
    // date implementée par defaut quand un post est crée
    date: {
        type: Date,
        default: Date.now

    },
    description: {
        type: String,
        required: true

    },
});

// Appliquer le schema au model
const Publication = mongoose.model("publication", publicationSchema, "publication");

//Exportation du model
module.exports = { Publication }