import React from 'react'
import TodoFilter from '../TodoFilter/TodoFilter'
import TodoList from '../TodoList/TodoList'
import {useTheme} from '../../contexts/ThemeContext' 
import TodoCreator from '../TodoCreator/TodoCreator'


export default function TodoApp() {
  const { theme } = useTheme()

  return (
    <div className={`todo-app ${theme}`}>
      <TodoCreator/>
      <TodoList/>
      <TodoFilter className={`todo-app__filter todo-app__filter-mobile ${theme}`}/>
      <p className="lower-message">Drag and drop to reorder list</p>
    </div>
  )
}
