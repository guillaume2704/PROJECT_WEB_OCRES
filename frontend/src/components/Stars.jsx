import React from "react";
import '../index.css';
import '../App.css';

//COMPONENT etoiles , change tous les jours de données
const Stars = ({ item }) => (

    <div class="mid_box">
        <h2>{item.title}</h2>
        <img src={item.hdurl} class="nasa" alt="étoiles" />
    </div>
);

export default Stars;