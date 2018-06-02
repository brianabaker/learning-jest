import React from 'react'

const TodoItem = (props) => {
  return(
    <div className="todos">
      <li>{props.data}</li>
    </div>
  )
}

export default TodoItem
