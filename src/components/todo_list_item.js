import React from 'react';

// const TodoListItem = (props) => {
const TodoListItem = ({todo, deleteTodo, checkTodo, selectTodo}) => {
  // console.log(todo);

  // const selected = this.todo.status ? '<list-group-item-success>' : '<list-group-item>';
  // console.log(todo.status);
  let classBootstrap = todo.status === false ? 'list-group-item' : 'list-group-item list-group-item-success';

  return (
    // <li className="list-group-item" style={{cursor: 'pointer'}} onClick={() => deleteTodo(todo.id)}>
    <li className={classBootstrap}>
      {/* {todo.status} */}
      {todo.title}
      <span className="pull-right">
        <button type="button" className="btn btn-xs btn-info img-circle" onClick={() => selectTodo(todo.id)}>detail</button>	&nbsp;
        <button type="button" className="btn btn-xs btn-success img-circle" onClick={() => checkTodo(todo.id)}>&#x2713;</button>	&nbsp;
        <button type="button" className="btn btn-xs btn-danger img-circle" onClick={() => deleteTodo(todo.id)}>&#xff38;</button>
      </span>
    </li>
  )
}

export default TodoListItem;
