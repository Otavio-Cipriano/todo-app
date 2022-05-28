import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { useTodo } from '../../contexts/TodoContext'
import Todo from '../Todo/Todo'
import TodoFilter from '../TodoFilter/TodoFilter'

export default function TodoList() {
    const {theme}= useTheme()
    const { todoList } = useTodo()

    return (
        <div className={`todo-app__list ${theme}`}>
            {
                todoList?.map((todo, idx) =>{
                    return(
                        <Todo key={idx} text={todo.text}/>
                    )
                })
            }

            <div className="todo-app__info">
                <span>X items left</span>
                <TodoFilter className="todo-app__filter todo-app__filter-desktop"/>
                <span>Clear Completed</span>
            </div>
        </div>
    )
}