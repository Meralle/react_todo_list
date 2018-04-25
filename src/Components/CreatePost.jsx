<<<<<<< Updated upstream:src/Components/CreatePost.jsx
import React from 'react';

class CreatePost extends React.Component {
=======
import React, { Component } from 'react';
class CreatePost extends Component {
>>>>>>> Stashed changes:src/Components/CreatePost.js
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
  