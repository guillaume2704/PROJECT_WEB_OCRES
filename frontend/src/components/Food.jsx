import React from "react";
import '../index.css';
import '../App.css';

const Food = ({ item }) => (
    <div class="mid_box">

        <h2>My favorite food</h2>
        <img src={item.image} class="nasa" alt="food" />

    </div>
);

export default Food