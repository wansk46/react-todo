import React, { Component } from 'react'
import { connect } from "react-redux";

class TodoItem extends Component {
    
click=() => {
    fetch("http://localhost:8080/api/todos/" + this.props.id , {
        mode: 'cors',
        method: 'PATCH', 
        body: JSON.stringify({
            "status" : this.props.status === "completed" ? "active" : "completed"
        }),
        headers: new Headers({ 'Content-Type': 'application/json'})
        })
    .then(res=>res.json())
    .then(res => {
        console.log(res)
        this.props.dispatch({ 
            type: "UpdateStatus",
            payload: { status:this.props.status, key:this.props.id }
        })
    })

}

  render() {
    return (
        <li id={this.props.id} style={{textDecoration: this.props.status === 'completed'? 'line-through': ''}} content={this.props.content} onClick={this.click}>{this.props.content}</li>
    )
  }
}

connect()(TodoItem)

export default connect()(TodoItem);