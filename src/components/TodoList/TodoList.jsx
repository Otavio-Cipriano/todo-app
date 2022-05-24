import React from 'react'
import TodoFilter from '../TodoFilter/TodoFilter'

export default function TodoList() {
    return (
        <div className='todo__list'>

            <div className="todo__info">
                <span>X items left</span>
                <TodoFilter className="todo__filter todo__filter-desktop"/>
                <span>Clear Completed</span>
            </div>
        </div>
    )
}
