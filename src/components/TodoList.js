import React, { Component } from 'react'
import TodoInputContainer from '../container/TodoInputContainer'
import Todos from './Todos'
import { connect } from "react-redux";

class TodoList extends Component {
  // state = {todos: []}

  // addNewTodo = newTodo => {
  //   this.props.dispatch({ 
  //     type: "AddNewTodo",
  //     payload: newTodo
  //   });


    // this.state.todos.push(newTodo)
    // this.setState({todos: this.state.todos})
  // }
  render() {
    return (
      <div>
        <TodoInputContainer />
        <Todos todos={this.props.todos}/>
      </div>
    )
  }
}

