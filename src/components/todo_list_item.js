import React from 'react';

const TodoListItem = (props) => {
  // console.log(props);

  return (
    <li className="list-group-item">
      {props.todo.id}
      -
      {props.todo.title}
    </li>
  )
}

export default TodoListItem;
