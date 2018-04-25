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
      this.inputName = this.inputName.bind(this); 
      this.saveinput = this.saveinput.bind(this);
  }
  
    inputName =(e) => {
      let inputdata = this.state.inputdata
      let update = e.target.value
      this.setState({inputdata: update});
    }

    saveinput = (e)=> {
      var todosCopy = [...this.state.todos];
      e.preventDefault();
     todosCopy.push({
        text : this.state.inputdata,
        completed: false
      })
    this.setState({
      todos:todosCopy
    })
      this.setState({ todos: todosCopy})
     localStorage.setItem("todos", JSON.stringify(todosCopy))    
     console.log(this.state.todos);
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