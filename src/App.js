import React, { Component } from 'react';


// Part_2 Enzyme testing
import TodoListContainer from './Part_2/TodoListContainer'

class App extends Component {
  render() {
    return (
      <div>
        <h4>Welcome to Testing with Jest</h4>
        <TodoListContainer/>
      </div>
    )
  }
}
