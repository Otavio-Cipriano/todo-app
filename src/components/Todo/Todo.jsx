import React from 'react'

export default function Todo() {
  return (
    <div className="task">
      <div className="task__cb">
        <label className="task__cb cb">
          <input type="checkbox" value=""/>
            <span className="cb__checkmark"></span>
        </label>
      </div>
      <p className="task__text">
        Jog Around the park 3x
      </p>
      <div className="task__trash">
        <img src="assets/icon-cross.svg" alt="delete icon"/>
      </div>
    </div>
  )
}
