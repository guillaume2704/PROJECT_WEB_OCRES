import React from 'react';
import './App.css';
import Dog from "./components/Dog";
import Profile from "./components/Profile";
import Stars from './components/Stars';
// import ReactDOM from "react-dom";



var urls = [
  'https://dog.ceo/api/breeds/image/random',
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://api.nasa.gov/planetary/apod?api_key=g5OQbgckhrUaLRMKNcNVRYtKuCmj41mvfTLhRe3T",
  "https://api.github.com/users/defunkt",
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
      dog: [],
      api1: [],
      nasa: [],
      users: [],
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
        const data_dog = data[0]
        const data_api1 = data[1];
        const data_nasa = data[2];
        const data_user = data[3];
        this.setState({
          isLoaded: true,
          dog: data_dog,
          api1: data_api1,
          nasa: data_nasa,
          users: data_user,
        })
        console.log(this.state);
      })

  }
  render() {
    var { dog, nasa, users } = this.state;
    return (
      <div>
        <div className="App">
          <Profile
            item={users}
          />
          <Stars
            item={nasa}
          />

          <Dog
            item={dog}
          />
        </div>

      </div>
    );
  }
}

export default App;
