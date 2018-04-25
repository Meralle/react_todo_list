<<<<<<< Updated upstream:src/App.jsx
import React from 'react';
=======
import React, { Component } from 'react';
import logo from './logo.svg'; 
>>>>>>> Stashed changes:src/App.js

import './App.css';
import CreatePost from './Components/CreatePost.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata:[],
      inputdata:"todo"
    }
      this.inputName = this.inputName.bind(this); 
      this.saveinput = this.saveinput.bind(this);
  }
  
    inputName =(e) => {
      this.setState({inputdata:e.target.value});
    }

    saveinput = (e)=> {
      var usersCopy = [...this.state.userdata];
      e.preventDefault();
      usersCopy.push({
        text : this.state.inputdata,
        completed: false

      })
    this.setState({
      userdata: usersCopy
    })
  }
  render() {
    return (
      <div className="App">
<<<<<<< Updated upstream:src/App.jsx
        
=======
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
>>>>>>> Stashed changes:src/App.js
            <form className="addTodo">
                <h1><strong>Todo List</strong></h1> 
                <input type="text"
                    placeholder="Name"
                    id="name"
                    onChange={this.inputName}
                    value={this.state.inputName}/>
                <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    onClick={this.saveinput}>add
                </button>
            </form>
       <CreatePost />
      </div>
    );
  }
}

export default App; 