import { createContext, useContext, useState } from "react"

const TodoContext = createContext()

export function useTodo() {
    return useContext(TodoContext)
}

export default function TodoContextParent({ children }) {
    const [todoList, setTodoList] = useState([])
    const [filter, setFilter] = useState('all')
    const [filtredTodoList, setFiltredTodoList] = useState([])

    const addNewTodo = (newTodo) => {
        setTodoList(prevTodoList => {
            return [newTodo, ...prevTodoList]
        })
    }

    // const removeTodo = (id) =>{
    //     todoList.splice(todoList.findIndex((el) =>{ return el.id === id}))
    // }

    const value = {
        todoList,
        filter,
        setFilter,
        addNewTodo
    }

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}