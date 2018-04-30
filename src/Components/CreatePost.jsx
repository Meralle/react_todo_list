import React from 'react';

class CreatePost extends React.Component {
	state={

	}
  render() {
        let filterTodos=this.props.todos.filter( i => i.text.toLowerCase().includes(this.props.searchFilter))
		let templatelist = this.props.todos.length > 0 ?  (
			 filterTodos.map((item, i) =>
		        (<li className="collection with-head" id={item._id} key={i} >
		        	<a className="waves-effect btn orange darken-3 btn-small right" onClick={(e) => this.props.handleDelete(item)}>delete</a>
		        	<a className={"waves-effect  btn  btn-small right"  + (item.completed ? ' orange darken-3' : '  lime accent-3')} onClick={() => this.props.handleCompleted(item._id)}>done</a>
		        	<h3 className="title">{item.text}</h3>
		        </li>)
			      		
					)) : (
					<div>no tasks</div>
					)
  	return(
			<div className="container row" >
				<div className="input-field col s12">
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
					<div className="row">
						<ul>{templatelist}
						</ul>
					</div>
			</div>
  	)
  }
}
export default CreatePost;


  