	import React from 'react';


class PostList extends React.Component {
  render() {
  	 	let filterTodos=this.props.todos.filter( i => i.text.toLowerCase().includes(this.props.searchFilter))
  		let templatelist = this.props.todos.length > 0 ?  (
			 filterTodos.map((item, i) =>
		        (<li  id={item._id} key={i} className={"collection with-head" + (item.completed ? ' lime accent-1' : '')} >
		        	<a className="waves-effect btn orange darken-3 btn-small right" onClick={(e) => this.props.handleDelete(item)}>delete</a>
		        	<a className={"waves-effect  btn  btn-small right"  + (item.completed ? ' lime accent-3' : '  orange darken-3')} onClick={() => this.props.handleCompleted(item._id)}>{item.completed ? 'done' : 'undo' }</a>
		        	<h3 className={"title" +(item.completed ? ' light-green lighten-1' : '')}>{item.text}</h3>
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
