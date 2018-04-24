import React, { Component } from 'react';
class CreatePost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos : []
		}
		this.addTodo = this.addTodo.bind(this)
	}
	
	addTodo(e, text) {
		e.preventDefault();
		this.state.todos.push({
			text : this._inputElement.value,
			completed: false
		});
		console.log(this.state.todos)
		
	}

  render() {
  	return(
  		<div>
  			<form onSubmit={this.addTodo}> 
					<input ref={(e) => this._inputElement = e} placeholder="enter task"/>
					<button className="btn waves-effect waves-light"  type="submit">add</button>
				</form>	
  		</div>
  	)

  }
}
export default CreatePost;