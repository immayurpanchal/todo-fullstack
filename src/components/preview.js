import React, { useState } from 'react';
import './preview.scss';

const Preview = () => {
  const [todoList] = useState([
    'Eating Breakfast',
    'Go To Office',
    'Do Some Work'
  ]);

  return (
    <div className="preview">
      {todoList.map(todo => <input disabled value={`${todo}`} />)}
    </div>
  );
}

export default Preview;
