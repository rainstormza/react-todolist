import React from 'react';

// const TodoListItem = (props) => {
const TodoListItem = ({todo, deleteTodo, checkTodo}) => {
  // console.log(props);

  return (
    // <li className="list-group-item" style={{cursor: 'pointer'}} onClick={() => deleteTodo(todo.id)}>
    <li className="list-group-item">
      {todo.id}
      -
      {todo.title}
      <span className="pull-right">
        <button type="button" className="btn btn-xs btn-success img-circle" onClick={() => checkTodo(todo.id)}>&#x2713;</button> <button type="button" className="btn btn-xs btn-danger img-circle" onClick={() => deleteTodo(todo.id)}>&#xff38;</button>
      </span>
    </li>
  )
}

export default TodoListItem;
