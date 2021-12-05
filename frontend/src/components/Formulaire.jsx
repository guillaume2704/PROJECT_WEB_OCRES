import React from "react";
import '../index.css';
import '../App.css';

class Formulaire extends React.Component {

    render() {
        return (
            <div class="">
                <div class="formulaire">
                    <h2>Nouveau post</h2>
                    <div>Date</div>
                    <input type="text" id="date" size="10"></input>
                    <br />
                    <div>Titre</div>
                    <input type="text" id="titre" ></input>
                    <br />
                    <div>Contenu</div>
                    <input type="text" id="contenu" size="30" placeholder="Quoi de neuf ?"></input>
                    <br /> <br />
                    <button class="bouton">Poster</button>

                </div>
            </div>
        );
    }
}

export default Formulaire;