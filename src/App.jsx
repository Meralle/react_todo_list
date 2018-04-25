import React from 'react';
import CreatePost from './Components/CreatePost.jsx';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[],
      inputdata:"todo"
    }
      this.inputName = this.inputName.bind(this); 
      this.saveinput = this.saveinput.bind(this);
  }
  
    inputName =(e) => {
      this.setState({inputdata:e.target.value});
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
  }
  render() {
    return (
      <div className="App">
       <CreatePost saveInput={this.saveinput} inputName={this.inputname}/>
      </div>
    );
  }
}

export default App; 