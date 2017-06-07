import React from 'react';

// const TodoListItem = (props) => {
const TodoListItem = ({todo, deleteTodo}) => {
  // console.log(props);

  return (
    <li className="list-group-item" style={{cursor: 'pointer'}} onClick={() => deleteTodo(todo.id)}>
      {todo.id}
      -
      {todo.title}
    </li>
  )
}

export default TodoListItem;
