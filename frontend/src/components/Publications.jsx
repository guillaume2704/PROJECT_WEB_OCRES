import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import '../index.css';
import axios from "axios";


function Publications() {
    const [foodList, setFoodList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3003/profiles").then((response) => {
            setFoodList(response.data);
        });
    }, []);


    return (

        <table>
            <tbody>
                {
                    foodList.map((val, key) => (
                        <tr key={`profile : ${key}`}>
                            <th> {val.firstName} </th>
                            <th> {val.lastName} </th>
                            <th> {val.age} </th>
                            <th> {val.country} </th>
                            <th> {val.city} </th>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    );

}


export default Publications;