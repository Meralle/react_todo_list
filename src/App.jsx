import React from 'react';
import CreatePost from './Components/CreatePost.jsx';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      inputdata: ""
    }
  }
  
  inputName = (e) => {
    let inputdata = e.target.value
    this.setState({inputdata});
  }
  handleDelete = () => {
    let todos = [...this.state.todos]
    
    this.setState({ todos })
  }
  saveinput = (e)=> {
    let todos = [...this.state.todos];
    e.preventDefault();
    todos.push({
      text : this.state.inputdata,
      completed: false
    })
    localStorage.setItem("todos", JSON.stringify(todos))
  this.setState({ todos })
  }
  render() {
    return (
      <div className="App">
       <CreatePost saveInput={this.saveinput} inputName={this.inputName} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App; 