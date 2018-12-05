const initialState = {
    todos : []
}

export default (state = initialState, action) => {
  switch (action.type) {

  case "AddNewTodo":
    let newTodos = state.todos.concat(action.payload)
    return { todos : newTodos}

  default:
    return state
  }
}
