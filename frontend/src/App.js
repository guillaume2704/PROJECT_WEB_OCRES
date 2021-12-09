import React from 'react';
import './App.css';
import Food from "./components/Food";
import Profile from "./components/Profile";
import Stars from './components/Stars';
import Cars from './components/Cars';
import Graphe from './components/Graphe';
import AppTest from './pages/AppTest';
// import ReactDOM from "react-dom"; 

// Importer notre API Publication
import Api from "./api.js";
const apiPublication = new Api();


var urls = [
  "https://foodish-api.herokuapp.com/api/",
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://api.nasa.gov/planetary/apod?api_key=g5OQbgckhrUaLRMKNcNVRYtKuCmj41mvfTLhRe3T",
  "https://api.github.com/users/defunkt",
  "https://forza-api.tk/",
  "http://localhost:3003/users",
]

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function parseJSON(response) {
  return response.json();
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      api1: [],
      nasa: [],
      users: [],
      cars: [],
      // graphe: [],
      publications: [], //Chargement des données de notre API
      isLoaded: false,
    }
  }


  componentDidMount() {
    Promise.all(urls.map(url =>
      fetch(url)
        .then(checkStatus)  // check the response of our APIs
        .then(parseJSON)    // parse it to Json
        .catch(error => console.log('There was a problem!', error))
    ))
      .then((data) => {
        const data_food = data[0];
        const data_api1 = data[1];
        const data_nasa = data[2];
        const data_user = data[3];
        const data_cars = data[4];
        const data_publications = data[5];
        this.setState({
          isLoaded: true,
          food: data_food,
          api1: data_api1,
          nasa: data_nasa,
          users: data_user,
          cars: data_cars,
          publications: data_publications,
        })

        console.log(this.state);

      })

  }
  render() {
    var { food, nasa, users, cars, graphe, publications } = this.state;
    console.log("PUBLICATIONS :" + publications);
    return (

      <div className="App">
        <div class="container-fluid">
          <div class="row">
            <div class="col-11 col-sm-4 col-md-3 col-lg-3 col-xl-3">
              <Profile
                item={users}
              />
            </div>

            <div class="col-11 col-sm-8 col-md-9 col-lg-9 col-xl-9">
              <div class="container-fluid">
                <div class="row">

                  <div class="col-12 col-sm-11 col-md-6 col-lg-6 col-xl-6">
                    <Stars
                      item={nasa}
                    />
                  </div>

                  <div class="col-12 col-sm-11 col-md-6 col-lg-6 col-xl-6">
                    <Food
                      item={food}
                    />
                  </div>

                  {/* <div class="w-100"></div> */}
                  <div class="col-12 ccol-sm-11 col-md-6 col-lg-6 col-xl-6">
                    <Cars
                      item={cars}
                    />
                  </div>

                  <div class="col-12 col-sm-11 col-md-6 col-lg-6 col-xl-6">
                    <Graphe
                      item={publications}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div class="mid_box">
                <AppTest />
              </div>
              {/* <Publications /> */}
              <br /> <br /> <br /> <br />

            </div>
          </div>
        </div>
      </div >

    );
  }
}

export default App;