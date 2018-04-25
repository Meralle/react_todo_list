import React from 'react';
import CreatePost from './Components/CreatePost.jsx';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata:[],
      inputdata:"todo"
    }
  }
  
  inputName = (e) => {
    let value = this.state.inputdata
    let update = value.e.target
    this.setState({inputdata: update});
  }
  handleDelete = () => {
    let userdata = [...this.state.userdata]
    
    this.setState({ userdata })
  }
  saveinput = (e)=> {
    let userdata = [...this.state.userdata];
    e.preventDefault();
    userdata.push({
      text : this.state.inputdata,
      completed: false
    })
  this.setState({ userdata })
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