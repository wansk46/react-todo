import React, { Component } from 'react'
import TodoItem from '../components/TodoItem'

export default class Todos extends Component {
  render() {
    const {todos} = this.props
    return (
      <div>
        {todos.map((todo, i) => <TodoItem id={todo.id} status={todo.status} content={todo.content} >{todo.content} </TodoItem>)}
      </div>
    )
  }
}