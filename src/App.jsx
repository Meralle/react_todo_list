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
       e.preventDefault();
        var todosCopy = [...this.state.todos];
       // let emptyInput = document.getElementById('input').value="";
        todosCopy.push({
        text : this.state.inputdata,
        completed: false,
        // id: Math.random().toString(36).substring(7)
      });
        this.setState({ todos:todosCopy, inputdata:"" })

      // save the localstorage
        this.setState({ todos: todosCopy})
        localStorage.setItem("todos", JSON.stringify(todosCopy))    
        console.log(this.state.todos);
  }

    //delete items and from localstorage
     handleDelete = (item) => {
      console.log(item)
     // let todosCopy = [...this.state.todos];
     var todos = JSON.parse(localStorage.getItem('todos'));
       for(var i = 0; i < todos.length; i++) {
         if(todos[i].text === item.text) {
           todos.splice(i, 1);
       }
       localStorage.setItem('todos', JSON.stringify(todos));
        this.setState({ todos : todos}) 
     }
  }
     // handleChange = (e) => {
     //  this.setState({inpdata:e.target.value})
     // }
  
      inputName = (e) => {
        let inputdata = e.target.value
        this.setState({ inputdata });
      }
      render() {
        return (
          <div className="App">
           <CreatePost saveInput={this.saveinput}
                        inputName={this.inputName} 
                        todos={this.state.todos}
                        handleDelete={this.handleDelete}
                        value={this.state.inputdata} />
          </div>
        );
      }
  }

export default App; 