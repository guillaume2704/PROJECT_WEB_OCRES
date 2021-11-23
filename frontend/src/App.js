import React from 'react';
import './App.css';

class App extends React.Component {
state = {
  post : {}
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    return response.json()
  })
  .then((result) => {
    this.setState({post: result})
  })

}
render() {
  return (
    <div className="App">
      <h1>La dernière blague : </h1>
      {this.state.post.body}
    </div>
  );
}
}

export default App;
