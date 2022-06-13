import { createContext, useContext, useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const TodoContext = createContext()

export function useTodo() {
    return useContext(TodoContext)
}

export default function TodoContextParent({ children }) {
    const { storage, saveAtLocalStorage } = useLocalStorage('TODOLIST')
    const [todos, setTodos] = useState(storage ? storage : [])
    const [activeTodo, setActiveTodo] = useState()

    const addNewTodo = (newTodo) => {
        setTodos(prevTodoList => {
            return [newTodo, ...prevTodoList]
        })
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(e => e.id !== id))
    }

    const udpateTodoState = (id, state) => {
        let newTodoList = todos.map(todo => {
            if (todo.id === id) {
                todo.state = state
                return todo
            } else {
                return todo
            }
        });
        setTodos(newTodoList)
    }

    const clearCompletedTodo = () => {
        if (todos.length > 0) {
            setTodos(prevTodoList => {
                return prevTodoList.filter(todo => todo.state !== 'completed')
            })
        }
    }

    const reOrderTodo = (dragId, dropId) => {
       const dragTodo = todos.find((todo) => todo.id === Number(dragId))
       const dropTodo = todos.find((todo) => todo.id === Number(dropId))

       const dragTodoOrder = dragTodo.order
       const dropTodoOrder = dropTodo.order
       console.log(dragTodo, dropTodo)
       
       const newTodosOrder = todos.map((todo) =>{
           if(todo.id === Number(dragId)) todo.order = dropTodoOrder;
           if(todo.id === Number(dropId)) todo.order = dragTodoOrder;

           return todo;
       })

       setTodos(newTodosOrder);
    }

    useEffect(() => {
        const countActiveTodo = () => {
            setActiveTodo(() => {
                let actives = todos.filter(e => e.state === 'active')
                return actives.length
            })
        }
        countActiveTodo()
        saveAtLocalStorage(todos)

        // eslint-disable-next-line
    }, [todos])

    const value = {
        addNewTodo,
        removeTodo,
        activeTodo,
        clearCompletedTodo,
        udpateTodoState,
        todos,
        reOrderTodo
    }

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}