import React, { useState } from 'react';

export default function Todo(props) {
  let todo = props.todo;
  const [checked, setChecked] = useState(todo.completed);
  let dispatch = props.dispatch;

  const complete = (e) => {
    setChecked(e.target.checked);
    dispatch({type: 'COMPLETE_TOGGLE', id: todo.id, payload: {...todo, completed: e.target.checked}});
  };

  return (
      <div>
        <input type='checkbox' checked={checked} onChange={(e) => complete(e)} />
        {todo.completed ? <span><strike>{todo.item}</strike></span> : <span>{todo.item}</span>}
      </div>
  );
}