import React from 'react'
import TodoFilter from '../TodoFilter/TodoFilter'
import TodoList from '../TodoList/TodoList'

export default function TodoApp() {
  return (
    <div className='todo'>
      <div className="todo__creator">
        <label className="task__todo cb">
          <input type="checkbox" value=" "/>
            <span className="cb__checkmark"></span>
        </label>
        <span>Create a new todo...</span>
        <input type="text"/>
      </div>
      <TodoList/>
      <TodoFilter className="todo__filter todo__filter-mobile"/>
      <p className="lower-message">Drag and drop to reorder list</p>
    </div>
  )
}
