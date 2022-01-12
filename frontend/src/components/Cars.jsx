import React from "react";
import '../index.css';
import '../App.css';

//COMPONENT cars , Affichag de voiture aléatoire
const Cars = ({ item }) => (
    <div class="mid_box">

        {/* Titre du widget */}
        <h2>My Forza Cars</h2>
        {/* recup image de api cars  */}
        <img src={item.image} class="nasa" alt="car" />

    </div>
);

export default Cars