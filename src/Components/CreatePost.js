import React, { Component } from 'react';
class CreatePost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos : []
		}
		this.addTodo = this.addTodo.bind(this)
		console.log(this)
	}

	addTodo(todoText) {
		this.todos.push({
			todoText : todoText,
			completed: false
		});
	}

  render() {
  	return(
  		<div>
  			<form onSubmit={this.addTodo}> 
					<input placeholder="enter task"/>
					<button className="btn waves-effect waves-light"  type="submit">add</button>
				</form>	
  		</div>
  	)

  }
}
export default CreatePost;