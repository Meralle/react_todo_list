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
  	     <div>
          
      			{/*<form onSubmit={(e) => this.props.handleTodo(e, this)}> 
    					<input placeholder="enter task"/>
    					<button classNameName="btn waves-effect waves-light"  type="submit">add</button>
    				</form>*/}	
            {/*<form className="addTodo" onSubmit={this.createTodos}>
               <h1><strong>Todo List</strong></h1> 
               <input type="text"
                placeholder="Name"
                name="name"
                ref={this.nameRef}/>
               <button type="submit" className="btn waves-effect waves-light"  type="submit">add</button>
            </form> */}
        </div>           
  	)

  }
}
export default CreatePost;
  