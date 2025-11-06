import React from 'react';
import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  return (
    <div className='todo-continer'>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      {/* <Header title="Todo App" />
      <TodoItem text="Eat" />
      <TodoItem completed={true} text="Code" />
      <TodoItem text="Play" />
      <TodoItem text="Study" />
      <TodoItem text="Sleep Again" />
      <Button /> */}
    </div>
  );
}

export default App;
