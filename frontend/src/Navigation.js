import React from 'react';
import App from './App';
import './App.css';
import Formulaire from './components/Formulaire';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


class Navigation extends React.Component {

    render() {
        return (
            <Router>
                <nav>
                    <Link to="/" >Home</Link>
                    <Link to="/poster" >Poster</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/poster" element={<Formulaire />} />


                </Routes>
            </Router>
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