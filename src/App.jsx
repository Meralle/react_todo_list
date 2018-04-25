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
  

    saveinput = (e)=> {
      var todosCopy = [...this.state.todos];
      e.preventDefault();
      todosCopy.push({
        text : this.state.inputdata,
        completed: false,
        _id: Math.random().toString(36).substring(7)
      })
      this.setState({
        todos:todosCopy
    })

      this.setState({ todos: todosCopy})
      localStorage.setItem("todos", JSON.stringify(todosCopy))    
      console.log(this.state.todos);
  }

     handleDelete(_id) {
     let todosCopy = [...this.state.todos];
     var todos = JSON.parse(localStorage.getItem('todos'));
       for(var i = 0; i < todos.length; i++) {
         if(todos[i]._id === _id) {
           todos.splice(i, 1);
       }
  }
      localStorage.setItem('todos', JSON.stringify(todos));
      this.setState({todos: todos})  }
  
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