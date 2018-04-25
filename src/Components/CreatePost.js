import React, { Component } from 'react';
class CreatePost extends Component {
  // nameRef = React.createRef();


	// createTodos = (event) => {
 //    //stop the form from submiting
 //    event.preventDefault();
 //    const todo = {
 //      name:this.nameRef.value.value
 //    }
 //    console.log(todo);
 //    console.log('add todo')


 //  }

  render() {
  	return(
			<div className="container" >
				<label htmlFor="todo">Add Todo:</label>
				<form action="#" className="form-inline mb-5 row">
					<div className="col s8">
						<input type="text" className="form-control mr-2 w-100" defaultValue="milk" id="input" aria-describedby="emailHelp" name="input" placeholder="enter task" ref={(e) => this._inputElement = e} />
					</div>
					<button type="submit" className="btn btn-success">Submit</button>
				</form>
			</div>
  	)
  }
}
export default CreatePost;
  