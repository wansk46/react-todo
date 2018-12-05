import React, { Component } from 'react'
import { connect } from "react-redux";

export default class TodoInput extends Component {
  addNewItemWhenOnClick = () => {
    const {input} = this.refs;
    this.props.addNewTodo(input.value)
    input.value = '';
  }

  
  
  render() {
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.addNewItemWhenOnClick}>add</button>
      </div>
    )
  }
}

