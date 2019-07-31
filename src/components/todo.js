import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './todo.scss';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const addTodo = e => {
    e.preventDefault();
    if(!todo)
      return;
      
    dispatch({type: 'ADD_TODO', payload: { id: Math.random(), name: todo, completed: false}});
    setTodo('');
  }

  return (
    <form className="todo">
      <input type="text" name="todoItem" value={todo} onChange={e => setTodo(e.target.value)}/>
      {console.log(todo)}
      <button onClick={addTodo} className='btnAdd'>Add</button>
    </form>
  );
};

export default Todo;
