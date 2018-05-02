import React from 'react';


class PostList extends React.Component {
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
  		<div> 
  			<div className="container">
				<ul>{templatelist}</ul>
			</div>
  		</div>
  	);
  }
}
export default PostList;
