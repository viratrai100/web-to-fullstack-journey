import React from 'react'

const TodoItem = (props) => {
  return (
    <div>
        <li className='todo-item'>
            <span>
            { props.completed ? <></> : <input type="checkbox" /> }
            <span className='todo-item-text'>{props.text}</span>
            </span>
            <p>...</p>
        </li>
    </div>
  );
};

export default TodoItem;