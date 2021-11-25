import React from 'react';
import './App.css';



var urls = [
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
    this.state={
      api1:[],
      api2:[],
      api3:[],
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
      .then((result) => {
        const result_api1 = result[0];
        const result_api2= result[1];
        const result_api3= result[2];
        this.setState({
          isLoaded: true,
          api1:result_api1,
          api2:result_api2,
          api3:result_api3,
        })
        console.log(this.state);
      })

  }
  render() {

    return (
      <div>
        <div className="App">
          <h1>API 1 : </h1>
          {this.state.api1.body}
          <h1>API 2 : </h1>
          {this.state.api2.copyright}
          <h1>API 3 : </h1>
          <img src={this.state.api3.avatar_url}></img>
        </div>
      </div>
    );
  }
}

export default App;
