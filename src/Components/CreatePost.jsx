import React from 'react';

class CreatePost extends React.Component {
	constructor(props) { 
	super(props)
	this.state = {

		}
	}
  render() {
  	const style={
  		font:{
  			font:"16px"
  		},
  		 margin:"0 1rem"
  		

  	}
		const templatelist = this.props.todos.map((item, i) =>{
			return item.text !== '' ?  (			
			      		<ul className="collection with-head" data-name="meral" key={i}>
					        <li onClick={(e) => this.props.handleDelete(item)} style={{margin: 3 + 'em'}} >
					        	<a className="waves-effect btn orange darken-4 btn-small right">delete</a>
					        </li>
					        	<span className="title">{item.text}</span>
					        	<a className="waves-effect  btn orange darken-4 btn-small right"  style={style}>done</a>
			      		</ul>
					) : (null)	
  
})
  	return(
			<div className="container" >
			<h1 style={{marginRight: 12 + 'em'}} ><strong>Todo List</strong></h1>
				<form action="#" className="addTodo form-inline mb-5 row">
					<div className="col s8">
						
						<input style={style.font} type="text" value={this.props.value} className="form-control mr-2 w-100" id="input" aria-describedby="emailHelp" placeholder="enter task" name="input" onChange={this.props.inputName}/>
					</div>
					<div className="col s8">
					<button className="btn waves-effect orange darken-4 right" type="submit" onClick={this.props.saveInput}>
						Submit
          			</button>
					</div>
				</form>
				
				<ul>{templatelist}</ul>
			</div>
  	)
  }
}
export default CreatePost;
  