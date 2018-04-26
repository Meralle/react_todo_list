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
       if(this.state.inputdata === "")
          return;
        var todosCopy = [...this.state.todos];
        todosCopy.push({
            text : this.state.inputdata,
            completed: false,
            _id: Math.random().toString(36).substring(7)
      });
          localStorage.setItem("todos", JSON.stringify(todosCopy)); 
          this.setState({ todos:todosCopy, inputdata:"" })   
        
    }

   
     handleDelete = (item) => {
     var todos = JSON.parse(localStorage.getItem('todos'));
       for(var i = 0; i < todos.length; i++) {
         if(todos[i].text === item.text) {
           todos.splice(i, 1);
      }
        localStorage.setItem('todos', JSON.stringify(todos));
        this.setState({ todos : todos}) 
    }
  }

    handleCompleted = (_id) => {
      var todosCopy = [...this.state.todos];
        for(var i = 0; i < todosCopy.length; i++) {
          if(todosCopy[i]._id === _id) {
            todosCopy[i].completed = !todosCopy[i].completed     
      }
        localStorage.setItem('todos', JSON.stringify(todosCopy));
        this.setState({ todos : todosCopy}) 
    }
  }   
  
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
                        value={this.state.inputdata}
                        handleCompleted ={this.handleCompleted}/>
          </div>
        );
      }
  }

export default App; 