import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = (props) => {

  // console.log(props);

  const todoListItems = props.todos.map(todo => {
    return (
      <TodoListItem
        key={todo.id}
        todo={todo} />
    )
  });
  // console.log(todoListItems);
  return (
    <div className="">
      {todoListItems}
    </div>
  );
}

export default TodoList;
