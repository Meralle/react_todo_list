import React from 'react';
// import logo from './logo.svg'; 

import './App.css';
import CreatePost from './Components/CreatePost.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = localStorage.getItem("todos")

    console.log(this.state);

  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="col s6">
            <h1>Reactish-Todolist</h1>
            <p className="lead">React with features add, change text, remove and filter by state.</p>
              <CreatePost />
            <h1>Todos:</h1>
            <small className="text-success">
              <a className="text-success mr-1" href="?state=false">show open</a>
              <a className="text-success mr-1" href="?state=true">show done</a>
              <a className="text-success mr-1" href="./index.html">show all</a>
            </small>
            <ul className="list-group">
              <li id="template" className="bg-dark list-group-item d-none justify-content-between align-items-center">
                {/* <button className="btn btn-sm checkbutton btn-outline-success">done</button> 
                      <span contentEditable="true" className="title">Cras justo odio</span> 
                      <button className="btn btn-sm btn-outline-danger">X</button> */}
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App; 