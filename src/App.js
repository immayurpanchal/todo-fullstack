import React from 'react';
import Todo from './components/todo';
import Header from './components/header';
import Preview from './components/preview';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header title="Mayur Panchal" />
      <Todo />
      <Preview />
    </div>
  );
};

export default App;
