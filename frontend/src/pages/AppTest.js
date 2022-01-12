import React, { useState, useEffect } from "react";
import '../index.css';
import '../App.css';
import axios from "axios";

//COMPONENT pour recuperer nos publications dans notre api BDD
function AppTest() {
    // useState from REACT 
    const [publications, setpublications] = useState([])
    //useEffect from REACT 
    //Utilisation de AXIOS pour récupérer nos publications
    useEffect(() => {
        axios.get("http://localhost:3003/users").then((response) => {
            setpublications(response.data);
        });
    }, []);

    //Méthode render pour afficher notre HTML
    return (
        <div>

            {/* <table> */}
            {/* <tbody> */}
            {
                // map pour récupérer chaque publication une par une avec val, et key
                publications.map((val, key) => (
                    <div key={`profile : ${key}`}>
                        <div class="container-fluid">
                            <div class="publi">
                                <div class="row">
                                    <div class="col-3">
                                        {/* premiere ligne avec date et title */}
                                        <div class="dateTaille"> {val.date} </div>
                                    </div>
                                    <div class="col-9">
                                        <h2 >  TITRE : {val.title} </h2>
                                    </div>
                                </div>
                                {/* deuxieme ligne avec le contenu de la description */}
                                <div class="row">
                                    <div class="col-11">
                                        <h3> {val.description} </h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                ))
            }

            {/* </tbody> */}
            {/* </table> */}
        </div >

    );

}


export default AppTest;