import React from "react";
import '../index.css';
import '../App.css';

const Cars = ({ item }) => (
    <div class="mid_box">

        <h2>My Forza Cars</h2>
        <img src={item.image} class="nasa" alt="car" />

    </div>
);

export default Cars