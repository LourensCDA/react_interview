import React from 'react';

function TodoListItem(props) {
  const labelClass = props.todo.completed ? 'completed' : '';

  function handleToggle() {
    props.handleToggle(props.index);
  }

  function handleDelete() {
    props.handleDelete(props.index);
  }

  return (
    <li>
      <input type="checkbox" checked={props.todo.completed} onChange={handleToggle} />
      <label className={labelClass}>{props.todo.text}</label>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoListItem;
