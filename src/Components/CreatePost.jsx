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
		        <li className="collection with-head" data-name="meral" key={i} onClick={(e) => this.props.handleDelete(item)}>
		        	<a className="waves-effect btn orange darken-4 btn-small right">delete</a>
		        	<a className="waves-effect  btn orange darken-4 btn-small right">done</a>
		        	<h3 className="title">{item.text}</h3>
		        </li>	
			      		
					) : (null)	
  
})
  	return(
			<div className="container row" >
				<h1><strong>Todo List</strong></h1>
					<div className="form">
					<form action="#" className="addTodo form-inline row">
						<input style={style.font} type="text" value={this.props.value} className="" id="input" aria-describedby="emailHelp" placeholder="enter task" name="input" onChange={this.props.inputName}/>
						<br/>
						<button className="btn waves-effect orange darken-4 right" type="submit" onClick={this.props.saveInput}>
							Submit
		          		</button>
					</form>
					</div>
					<div className="row">
						<ul>{templatelist}</ul>
					</div>
			</div>
  	)
  }
}
export default CreatePost;


  {/*<li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>*/}