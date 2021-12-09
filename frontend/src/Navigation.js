import React from 'react';
import App from './App';
import './App.css';
import Formulaire from './components/Formulaire';
import Dashboard from "./pages/Dashboard";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


class Navigation extends React.Component {

    render() {
        return (
            <div class="container-fluid">

                <div >
                    <Router>
                        {/* <div class="row "> */}
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

                        <Routes>
                            <Route path="/" element={<App />} />
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