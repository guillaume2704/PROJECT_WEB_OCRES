import React from 'react';
import App from './App';
import './App.css';
import Formulaire from './components/Formulaire';
// Importation du necessaire pour faire des pages differentes
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

// Class gerant la navigation entre notre page home et notre page pour faire des post ou supprimer
class Navigation extends React.Component {

    render() {
        return (
            <div class="container-fluid">

                <div >
                    <Router>
                        {/* Navigation */}
                        <nav class="row">
                            <div class="col-2 col-sm-2 col-md-2 col-lg-4 col-xl-4" />
                            <div class="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                                <Link class="mid_box bouton" to="/" >Home</Link>
                            </div>
                            <div class="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                                <Link class="mid_box bouton" to="/poster" >Poster</Link>
                            </div>
                            <div class="col-2 col-sm-2 col-md-2 col-lg-4 col-xl-4" />
                        </nav>
                        {/* </div> */}

                        {/* Definition de nos routes vers App.js avec nos widgets et Formulaire.js*/}
                        <Routes>
                            {/* localhost:3000/ */}
                            <Route path="/" element={<App />} />
                            {/* localhost:3000/poster */}
                            <Route path="/poster" element={<Formulaire />} />
                        </Routes>


                    </Router>
                </div>

            </div>
        );
    }

    // render() {
    //     return (
    //         <Router history={customHistory} >
    //             {/* <Route path={"app"} component={App} /> */}
    //             {/* <Route path={"formulaire"} component={Formulaire} /> */}

    //         </Router>
    //     );
    // }
}

export default Navigation;