import React from 'react';
import './preview.scss';
import { useSelector } from 'react-redux';

const Preview = () => {
  const todos = useSelector(state => state.todos);
  
  return (
    <div className="preview">
      {todos.map(todo => <input disabled value={`${todo.name}`} key={todo.id}/>)}
    </div>
  );
}

export default Preview;
