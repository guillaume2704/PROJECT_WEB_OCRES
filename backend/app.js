var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// Connexion à MONGODB
mongoose.connect('mongodb+srv://mariednt21:sa4ygi52@cluster0.7clel.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Créer une aépplication express
var app = express();

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

//pour pouvoir y accéder depuis les autres fichier du projet dont le serveur : www
module.exports = app;
