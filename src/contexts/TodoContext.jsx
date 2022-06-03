import { createContext, useContext, useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const TodoContext = createContext()

export function useTodo() {
    return useContext(TodoContext)
}

export default function TodoContextParent({ children }) {
    const { storage, saveAtLocalStorage } = useLocalStorage()

    const [todoList, setTodoList] = useState(storage ? storage : [])
    const [activeTodo, setActiveTodo] = useState()
    const [filter, setFilter] = useState('all')
    const [fTodoList, setFTodoList] = useState([])

    const addNewTodo = (newTodo) => {
        setTodoList(prevTodoList => {
            return [newTodo, ...prevTodoList]
        })
    }

    const removeTodo = (id) => {
        setTodoList(todoList.filter(e => e.id !== id))
    }

    const clearCompletedTodo = () => {
        if(todoList.length > 0) {
            setTodoList(prevTodoList => {
                return prevTodoList.filter(todo => todo.state !== 'completed')
            })
        }
    }

    useEffect(() => {
        if (filter === 'all') setFTodoList(todoList);
        else {
            setFTodoList(todoList.filter(e => e.state === filter))
        }
        saveAtLocalStorage(todoList)
    }, [todoList, filter, saveAtLocalStorage])

    useEffect(() => {
        const countActiveTodo = () => {
            setActiveTodo(() => {
                let actives = todoList.filter(e => e.state === 'active')
                return actives.length
            })
        }
        countActiveTodo()
    }, [todoList])

    const value = {
        fTodoList,
        filter,
        setFilter,
        addNewTodo,
        removeTodo,
        activeTodo,
        clearCompletedTodo
    }

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}