import React, { Component } from 'react';
import TodoItem from './TodoItem'

export default class TodoListContainer extends Component {
  state = {
    todos: [],
    newTodo: ''
  }

  handleInput = (e) => {
    this.setState({
      newTodo: e.target.value
    })
  }

  onSubmitTodo = (e) => {
    e.preventDefault()
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: ''
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmitTodo}>
          <input type="text" className="inputField" placeholder="New Todo" value={this.state.newTodo} onInput={this.handleInput}/>
          <input type="submit" className="inputSubmit" value="Add Todo"/>
          {this.state.todos.map((todo, idx) => <TodoItem key={idx} data={todo}/>)}
        </form>
      </div>
    )
  })

}
