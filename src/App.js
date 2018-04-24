import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreatePost from './Components/CreatePost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
      <CreatePost />
         </div>
    );
  }
}

export default App;
