import React from "react";
import '../index.css';

//COMPONENT profile
const Profile = ({ item }) => (
    <div class="side_box">
        <img src={item.avatar_url} alt="profil" class="pp"></img>
        <br />
        <h3>Followers : {item.followers} </h3>
        <h3>  Following : {item.following}</h3>
        <h1> {item.name}</h1>
        {item.bio}
        <br />
        <br />
        <h3> Mon site pro : {item.blog}</h3>
        <h3> Membre depuis : {item.created_at}</h3>
    </div>
);

export default Profile;