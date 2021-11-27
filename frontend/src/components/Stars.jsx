import React from "react";
import '../index.css';
import '../App.css';

const Stars = ({ item }) => (

    <div class="mid_box">
        <h2>{item.title}</h2>
        <img src={item.hdurl} class="nasa" alt="étoiles" />
    </div>
);

export default Stars;