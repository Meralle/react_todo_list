import React from 'react';
import CreatePost from './Components/CreatePost.jsx';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:JSON.parse(localStorage.getItem("todos")) || [],
      inputdata:""
    }
  }

  handleDelete = (item) => {
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos.splice(todos.findIndex(todo => todo.text === item.text), 1);
    //this is a oldschool for loop and there is a new methoud called findIndex() it is more 
    // for (var i = 0; i < todos.length; i++) {
    //   if (todos[i].text === item.text) {
    //     todos.splice(i, 1);
    //   }
    // }
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({ todos })
  }

  inputName = (e) => {
    let inputdata = e.target.value
    this.setState({inputdata});
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
        <CreatePost saveInput={this.saveinput} inputName={this.inputName} todos={this.state.todos} delete={this.handleDelete} done={this.doneButton}/>
      </div>
    );
  }
}
export default App; 