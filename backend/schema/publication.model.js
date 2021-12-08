// Utilisation de notre base de donnée mongodb
const mongoose = require('mongoose');

// schema pour les objets de notre base de données
const publicationSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true

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