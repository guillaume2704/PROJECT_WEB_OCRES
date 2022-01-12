var express = require('express');
var router = express.Router();
const Publication = require('../controller/publication.controller.js');

// Récuperer toutes les publications
// localhost:3003/users
router.get('/', Publication.findAll);

//Récupérer une seule publication
// localhost:3003/users/:title
router.get('/:title', Publication.findByTitle);

// Ajouter une nouvelle publication
// localhost:3003/users
router.post('/', Publication.saveOne);

// Delete one
// localhost:3003/users/:title
router.delete('/:title', Publication.deleteByLastName);

// Update one
// localhost:3003/users/:id
router.put('/:id', Publication.updatePublication);

//Exporter le router
module.exports = router;
