import React from "react";
import '../index.css';
import '../App.css';

import Api from "../api.js";
const apiPublication = new Api();

class Formulaire extends React.Component {

    render() {
        return (
            <div class="mid_box">
                <h1>Nouveau post</h1>
                <div class="formulaire">

                    <h2>Date</h2>
                    <input type="text" id="date" size="10"></input>
                    <br />
                    <h2>Titre</h2>
                    <input type="text" id="titre" ></input>
                    <br />
                    <h2>Contenu</h2>
                    <textarea type="text" id="contenu" size="30" placeholder="Quoi de neuf ?"></textarea>
                    <br /> <br />
                    <button class="bouton">Poster</button>

                </div>
            </div>
        );
    }
}

export default Formulaire;