import React, { useState, useReducer } from 'react';
import {reducer, initialTodos} from './reducers/reducer';
import Todo from './Todo';

export default function TodoList() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [input, setInput] = useState('');

  const addTodo = e => {
    e.preventDefault();
    let todo = {item: input, completed: false, id: Date.now()};
    dispatch({type: 'APPEND', payload: todo});
    setInput('');
  };

  const clearCompleted = (e) => {
    e.preventDefault();
    let newTodos = todos.filter(t => !t.completed);
    dispatch({type: 'SET', payload: newTodos});
  };


  return (
      <div>
          <div>
            {todos.map(t => <Todo key={t.id} todo={t} dispatch={dispatch} />)}
          </div>
          <div>
            <form>
              <input type='text' name='todoForm' placeholder='Todo' value={input} onChange={(e) => setInput(e.target.value)} />
              <button type='submit' onClick={(e) => addTodo(e)}>Submit</button>
              <button onClick={clearCompleted}>Clear Completed</button>
            </form>
          </div>
      </div>
  );
}