var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//Importation des routes
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var profilesRouter = require("./routes/profiles");

// Connexion à MONGODB avec nom utilisateur et mdp
mongoose.connect('mongodb+srv://mariednt21:sa4ygi52@cluster0.7clel.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Créer une aépplication express
var app = express();

//Authorization d'accès pour toutes notre requetes CRUD
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//Amelioration des routes
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Definitions des routes
// localhost:3003/
app.use("/", indexRouter);
// localhost:3003/users
app.use("/users", usersRouter);
// localhost:3003/profiles
app.use("/profiles", profilesRouter);

//pour pouvoir y accéder depuis les autres fichier du projet dont le serveur : www
module.exports = app;
