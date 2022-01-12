import React from "react";
import '../index.css';
import '../App.css';
import Api from "../api.js";
const apiPublication = new Api();

// Class etant dans une route, pour poster et supprimer des elements
class Formulaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            publications: [], //  profiles: [],
            deleteValue: "",
            title: "", description: "",
            updateTitle: "", updateDescription: "",
            successValue: "",
            successUpdate: "",
            isLoaded: false,

        };
        this.handleChange = this.handleChange.bind(this);
    }

    //Methode suprimer des publications
    DeletePublication() {
        var title = this.state.deleteValue;
        if (window.confirm(`Voulez-vous vraiment supprimer : ${title}`)) {
            apiPublication.deleteProfile(title);
            console.log("DELETE " + title);
            //  window.location.reload(false);
        }
    }

    //Methode creation de publications
    CreatePublication() {
        const publication = {
            title: this.state.title,
            description: this.state.description,
        };
        apiPublication
            .createProfile(publication)
            .then(res => {
                const data = res.data;
                if (data !== '') {
                    this.setState({ successValue: "Completed" })
                    setTimeout(function () {
                        window.location.reload(false);
                    }, 2000);
                } else {
                    alert("Can't add new data on database");
                }
            })
    }
    //Methode pour changer les valeurs entrées par l'utilisateur dans les champs input
    handleChange(choice, event) {
        switch (choice) {
            case 'delete':
                this.setState({ deleteValue: event.target.value });
                break;
            case 'title':
                this.setState({ title: event.target.value });
                break;
            case 'description':
                this.setState({ description: event.target.value });
                break;
            default:
                break;
        }
    }


    render() {
        return (
            <div class="mid_box">


                <div class="formulaire">
                    <h1>Nouveau post</h1>
                    <h2>Titre</h2>
                    <input type="text" value={this.state.title} placeholder="title" required onChange={(e) => this.handleChange("title", e)}></input>
                    <br />
                    <h2>Contenu</h2>
                    <textarea type="text" size="30" value={this.state.description} placeholder="description" required onChange={(e) => this.handleChange("description", e)}></textarea>
                    <br /> <br />
                    <button class="bouton" onClick={() => this.CreatePublication()}>Poster</button>
                </div>
                <div className="row justify-content-end success">{this.state.successValue}</div>
                <div class="mid_box">
                    <h1>Supprimer</h1>
                    <input type="text" value={this.state.deleteValue} placeholder="title" required onChange={(e) => this.handleChange("delete", e)} />
                    <br />
                    <button class="bouton" type="button" onClick={() => this.DeletePublication()}>Supprimer</button>

                </div>
            </div>

        );
    }
}

export default Formulaire;