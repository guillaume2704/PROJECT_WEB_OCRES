import React from "react";
import '../index.css';

const Profile = ({item}) => (
        <div class="side_box">
             <img src={item.avatar_url} alt="profil" class="pp"></img>
            <br />
            <h3>Followers : {item.followers}   Following : {item.following}</h3>
            <h1> {item.name}</h1>
            {item.bio}
            <br />
            <h2> Follow me on my blog : {item.blog}</h2>
            <h2> Member since : {item.created_at}</h2>
        </div>
        );

export default Profile;