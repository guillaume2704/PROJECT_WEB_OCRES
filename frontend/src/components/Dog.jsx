import React from "react";
import '../index.css';
import '../App.css';

const Dog = ({item}) => (
    <div class="mid_box">
        
            <h2>Your Dog</h2>
            <img src={item.message} class="nasa" alt="chien" />
        
    </div>
    );

export default Dog;