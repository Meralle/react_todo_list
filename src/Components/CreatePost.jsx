import React from 'react';

class CreatePost extends React.Component {
  render() {
  	return(
			<div className="container row" >
				<div className="input-field col s12">
					<h4>Filter Todos</h4>
	           		 <input id="title" type="text" placeholder="search" onChange={this.props.handleSearchInput} value={this.props.searchFilter} />
	          	</div>
					<h1><strong>Todo - List</strong></h1>
					<div className="form">
					<form action="#" className="addTodo form-inline row">
						<input type="text" value={this.props.value} aria-describedby="emailHelp" placeholder="enter task" name="input" onChange={this.props.changeInput} />
						<br/>
						<button className="btn waves-effect orange darken-3 right" type="submit" onClick={this.props.handleAddTodo}>
							Submit
		          		</button>
					</form>
				</div>
			</div>
  	)
  }
}
export default CreatePost;


  