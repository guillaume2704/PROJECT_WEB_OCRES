import React from "react";
import '../index.css';
import '../App.css';

// Importer notre API Publication
import Api from "../api.js";
const apiPublication = new Api();

class Publications extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            publi: [],
            deleteValue: "",
            title: "", date: "", description: "",
            updateFirstName: "", updateLastName: "", updateAge: "", updateCountry: "", updateCity: "", updateId: "",
            successValue: "",
            successUpdate: "",
            isLoaded: false,
        };

        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        apiPublication
            .getAllPublications()
            .then(data => {
                // assign to requested URL as define in array with array index.
                const data_publi = data;
                this.setState({
                    isLoaded: true,
                    publi: data_publi
                })
                console.log(this.state);
            })
    }

    handleChange(choice, event) {
        switch (choice) {
            case 'delete':
                this.setState({ deleteValue: event.target.value });
                break;
            case 'title':
                this.setState({ title: event.target.value });
                break;
            case 'date':
                this.setState({ date: event.target.value });
                break;
            case 'description':
                this.setState({ description: event.target.value });
                break;
            case 'updateFirstName':
                this.setState({ updateFirstName: event.target.value });
                break;
            case 'updateLastName':
                this.setState({ updateLastName: event.target.value });
                break;
            case 'updateAge':
                this.setState({ updateAge: event.target.value });
                break;
            default:
                break;
        }
    }

    render() {

        var { isLoaded, publi } = this.state;

        // if (!isLoaded) {
        //     return <div>Loading...</div>
        // }
        // else {
        return (
            <div class="mid_box">
                {publi.data.map(item => (
                    <tr>
                        <div>{item.title}</div>
                        <div>{item.date}</div>
                        <div>{item.description}</div>
                    </tr>
                ))
                }
            </div>


        );
        // }
    }

}

export default Publications;