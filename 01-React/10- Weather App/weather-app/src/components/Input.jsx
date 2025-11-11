import React from 'react';

const Input = (props) => {
  return (
    <div className='input-field'>
      <input placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default Input;
