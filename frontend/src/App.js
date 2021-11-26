import React from 'react';
import './App.css';
import Food from "./components/Food";
import Profile from "./components/Profile";
import Stars from './components/Stars';
import Cars from './components/Cars';
// import ReactDOM from "react-dom";



var urls = [
  "https://foodish-api.herokuapp.com/api/",
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://api.nasa.gov/planetary/apod?api_key=g5OQbgckhrUaLRMKNcNVRYtKuCmj41mvfTLhRe3T",
  "https://api.github.com/users/defunkt",
  "https://forza-api.tk/",
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
        const data_food = data[0]
        const data_api1 = data[1];
        const data_nasa = data[2];
        const data_user = data[3];
        const data_cars = data[4];
        this.setState({
          isLoaded: true,
          food: data_food,
          api1: data_api1,
          nasa: data_nasa,
          users: data_user,
          cars: data_cars,
        })
        console.log(this.state);
      })

  }
  render() {
    var { food, nasa, users, cars } = this.state;
    return (
      <div>
        <div className="App">

          <Profile
            item={users}
          />
          <Stars
            item={nasa}
          />
          <Food
            item={food}
          />
          <Cars
            item={cars}
          />
        </div>

      </div>
    );
  }
}

export default App;