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
    <div className="col-md-6 col-md-offset-3">
      <ul className="list-group">
        {todoListItems}
      </ul>
    </div>
  );
}

export default TodoList;
