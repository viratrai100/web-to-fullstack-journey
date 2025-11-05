import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1 className='todo-header' >{props.title}</h1>
    </div>
  )
}

export default Header;