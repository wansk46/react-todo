const initialState = {
    todos : []
}

export default (state = initialState, action) => {
  switch (action.type) {

  case "AddNewTodo": {
    let newTodos = state.todos.concat(action.payload)
    return { todos : newTodos}
  }

  case "UpdateStatus": {
    let todos = state.todos;
    let status = action.payload.status;
    let targetKey = action.payload.key;
    let newTodos = todos.map(todo => {
      if (todo.id === targetKey) {
        let newStatus = status === 'active' ? 'completed' : 'active';
        return {id: todo.id, content: todo.content, status: newStatus};
      } else {
        return todo;
      }
    }) 
    return {todos: newTodos};
  }

  default:
    return state
  }
}
