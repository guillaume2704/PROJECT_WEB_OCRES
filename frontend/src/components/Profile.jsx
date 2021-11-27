import React from "react";
import '../index.css';

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
        <h3> Follow me on my blog : {item.blog}</h3>
        <h3> Member since : {item.created_at}</h3>
    </div>
);

export default Profile;