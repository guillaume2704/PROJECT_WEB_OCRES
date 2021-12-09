var express = require('express');
var router = express.Router();
const Publication = require('../controller/publication.controller.js');

// Récuperer toutes les publications
router.get('/', Publication.findAll);

//Récupérer une seule publication
router.get('/:title', Publication.findByTitle);

// Ajouter une nouvelle publication
router.post('/', Publication.saveOne);

// Delete one
router.delete('/:title', Publication.deleteByLastName);

// Update one
router.put('/:id', Publication.updatePublication);

// Supprimer une publication
// router.delete('/:title', Publication.);

/* GET users listing. */
// To get to this path : localhost:3003/users/
// router.get("/", function (req, res, next) {
//   res.send("user page ");
//   next();
// });

// router.post("/", function (req, res, next) {
//   res.send("publication poster ! ");
//   next();
// });

// To get to this path : localhost:3003/users/1
// router.get("/1", function (req, res, next) {
//   res.send("This is the user number 1");
// });

// router.get("/api", function (req, res, next) {
//   const publications = [
//     {
//       id: '1',
//       title: 'Mon premier post',
//       date: '06/12/2021',
//       description: 'Les infos de mon premier POST',
//     },
//     {
//       id: '2',
//       title: 'Mon deuxieme post',
//       date: '06/12/2021',
//       description: 'Les infos de mon deuxieme POST',
//     },
//   ];
//   res.status(200).json(publications);
// });

module.exports = router;
