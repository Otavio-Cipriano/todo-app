import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

export default function Todo({text, state}) {
  const [active, setActive] = useState(state === 'completed' ? true : false)
  const {theme} = useTheme()
  console.log(state)

  const handleOnChange = () =>{
    setActive(!active)
  }

  return (
    <div className={`task ${theme} ${active ? 'task--completed' : ''}`}>
      <div className={`task__cb `}>
        <label className="task__cb cb">
          <input type="checkbox" value={state} checked={active} onChange={handleOnChange}/>
            <span className="cb__checkmark"></span>
        </label>
      </div>
      <p className={`task__text ${theme}`}>
        {text}
      </p>
      <div className="task__trash">
        <img src="assets/icon-cross.svg" alt="delete icon"/>
      </div>
    </div>
  )
}
