import React from 'react';

class CreatePost extends React.Component {
	constructor(props) { 
	super(props)
	this.state = {

		}
	}
  render() {
  	return(
			<div className="container" >
				<h1><strong>Todo List</strong></h1>
				<form action="#" className="addTodo form-inline mb-5 row">
					<div className="col s8">
						<label htmlFor="todo">Add Todo:</label>
						<input type="text" defaultValue="milk" className="form-control mr-2 w-100" id="input" aria-describedby="emailHelp" placeholder="enter task" name="input" onChange={this.props.inputName} value={this.props.inputName} />
					</div>
					<div className="col s8">
					<button className="btn waves-effect waves-light" type="submit" onClick={this.props.saveinput}>
						Submit
          </button>
						</div>
				</form>
			</div>
  	)
  }
}
export default CreatePost;
  