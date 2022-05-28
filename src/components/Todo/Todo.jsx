import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

export default function Todo({text, state}) {
  const {theme} = useTheme()

  return (
    <div className={`task ${theme}`}>
      <div className="task__cb">
        <label className="task__cb cb">
          <input type="checkbox" value=""/>
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
