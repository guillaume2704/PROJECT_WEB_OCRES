import React, { useState, useEffect } from "react";
import '../index.css';
import '../App.css';
import axios from "axios";

function AppTest() {
    const [publications, setpublications] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3003/users").then((response) => {
            setpublications(response.data);
        });
    }, []);

    return (
        <div>

            {/* <table> */}
            {/* <tbody> */}
            {
                publications.map((val, key) => (
                    <div key={`profile : ${key}`}>
                        <div class="container-fluid">
                            <div class="publi">
                                <div class="row">

                                    <div class="col-3">

                                        <div > {val.date} </div>
                                    </div>
                                    <div class="col-7">
                                        <h2 >  TITRE : {val.title} </h2>
                                    </div>

                                </div>
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