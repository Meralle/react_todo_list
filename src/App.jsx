import React from 'react';
import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList';
import { Switch, Route, NavLink } from 'react-router-dom';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
          todos:JSON.parse(localStorage.getItem("todos")) || [],
          inputdata:"",
          searchFilter:""

    }
  }
  
    handleAddTodo = (e)=> {
       e.preventDefault();
       if(this.state.inputdata === "")
          return;
        var todosCopy = [...this.state.todos];
        todosCopy.push({
            text : this.state.inputdata,
            completed: false,
            created: Date.now(),
            _id: Math.random().toString(36).substring(7)
      });
          localStorage.setItem("todos", JSON.stringify(todosCopy)); 
          this.setState({ todos:todosCopy, inputdata:"" , searchFilter:"" })   
        
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
  
      changeInput = (e) => {
        let inputdata = e.target.value.substr(0,20);
        this.setState({ inputdata });
    }
     
     handleSearchInput =(e) =>  {
     let todos = [...this.state.todos]                 
      let searchFilter = e.currentTarget.value;
      this.setState({ searchFilter });      
    }



      render() {
        return (
          <div className="container">
            <CreatePost changeInput={this.changeInput}
                        handleAddTodo={this.handleAddTodo}
                        handleSearchInput = {this.handleSearchInput}
                        value={this.state.inputdata}  /> 

         


          <nav className="z-depth-0 white">
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="right">
                  <li><NavLink className="grey-text" to="/">All</NavLink></li>
                  <li><NavLink className="grey-text" to="/open">Open</NavLink></li>
                  <li><NavLink className="grey-text" to="/closed">closed</NavLink></li>
                </ul>
            </div>
          </nav>

          <Switch>
              <Route exact path='/' component={() => <PostList
                    
                    handleCompleted ={this.handleCompleted}
                    todos={this.state.todos}
                    handleDelete={this.handleDelete}

                    searchFilter={this.state.searchFilter} /> } />

              <Route path='/open' component={() => <PostList
                    
                    handleCompleted ={this.handleCompleted}
                    todos={this.state.todos.filter(i => !i.completed)}
                    handleDelete={this.handleDelete}
                    searchFilter={this.state.searchFilter} />} />

              <Route path='/closed' component={() => <PostList
                    handleCompleted ={this.handleCompleted}
                    todos={this.state.todos.filter(i => i.completed)}
                    handleDelete={this.handleDelete}
                    value={this.state.inputdata}
                    searchFilter={this.state.searchFilter} /> } />
          </Switch>
         
          </div>
        );
      }
  }

export default App;        