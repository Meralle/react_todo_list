import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreatePost from './Components/CreatePost';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // todos : []
      userdata:[],
      inputdata:"todo"
    }
    // this.addTodo = this.addTodo.bind(this)
      this.inputName = this.inputName.bind(this); 
      this.saveinput = this.saveinput.bind(this);
  }
  
  // addTodo(e, text) {
  //   console.log(e.target,text)
  //   var localState = [...this.state.todos]
  //   e.preventDefault();
  //   localState.push({
  //     text : this._inputElement.value,
  //     completed: false
  //   });
  //   this.setState({todos: localState
  //   })
  //   console.log(this.state.todos)
    
  //  }

  
    inputName =(e) => {
      this.setState({inputdata:e.target.value});
    }

    saveinput = (e)=> {
      var usersCopy = [... this.state.userdata];
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
     {/* <CreatePost handleTodo={this.addTodo} />*/}
            <form className="addTodo">
                <h1><strong>Todo List</strong></h1> 
                <input type="text"
                    placeholder="Name"
                    id="name"
                    onChange={this.inputName}
                    value={this.state.inputName}/>
                <button
                    type="submit"
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
