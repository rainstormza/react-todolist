import React from 'react';

const TodoListItem = (props) => {
  // console.log(props);

  return (
    <p>
      {props.todo.id}
      -
      {props.todo.title}
    </p>
  )
}

export default TodoListItem;
