import { useState } from 'react'
import { useFilter } from '../../contexts/FilterContext'
import { useTheme } from '../../contexts/ThemeContext'
import { useTodo } from '../../contexts/TodoContext'
import Todo from '../Todo/Todo'
import TodoFilter from '../TodoFilter/TodoFilter'

export default function TodoList() {
    const { theme } = useTheme()
    const { activeTodo, clearCompletedTodo, reOrderTodo } = useTodo()
    const { filtredTodos } = useFilter()
    const [dragId, setDragId] = useState()

    const handleDrag = (ev) => {
        setDragId(ev.currentTarget.id)
        console.log(ev.currentTarget.id)
    }
    const handleDrop = (ev) => {
        reOrderTodo(dragId, ev.currentTarget.id)
        console.log(ev.currentTarget.id)
    }

    return (
        <div className={`todo-app__list ${theme}`} >
            {
                filtredTodos?.sort((a, b) => a.order - b.order)
                .map((todo, idx) => {
                    return (
                        <Todo
                            draggable={true}
                            onDragOver={(ev) => ev.preventDefault()}
                            onDragStart={handleDrag}
                            onDrop={handleDrop}
                            key={idx}
                            id={idx}
                            todo={todo} />
                    )
                })
            }

            <div className="todo-app__info" >
                <span>{activeTodo} items left</span>
                <TodoFilter className="todo-app__filter todo-app__filter-desktop" />
                <span onClick={clearCompletedTodo}>Clear Completed</span>
            </div>
        </div>
    )
}