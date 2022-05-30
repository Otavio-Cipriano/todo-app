import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { useTodo } from '../../contexts/TodoContext'

export default function Todo({todo}) {
  const [active, setActive] = useState(todo.state === "completed" ? true : false)
  const {theme} = useTheme()
  const { removeTodo } = useTodo()
  // const cbRef = useRef(null)

  const handleOnChange = () =>{
    if(active) todo.state = 'active'
    else todo.state = 'completed'
  }

  const handleOnClick = () =>{
    removeTodo(todo.id)
  }

  return (
    <div className={`task ${theme} ${todo.state === "completed" ? true : false ? 'task--completed' : ''}`}>
      <div className={`task__cb `}>
        <label className="task__cb cb">
          <input type="checkbox" value={todo.state} checked={todo.state === "completed" ? true : false} onChange={handleOnChange} />
            <span className="cb__checkmark"></span>
        </label>
      </div>
      <p className={`task__text ${theme}`}>
        {todo.text}
      </p>
      <div className="task__trash" onClick={handleOnClick}>
        <img src="assets/icon-cross.svg" alt="delete icon"/>
      </div>
    </div>
  )
}
