import { createContext, useContext, useState } from "react"

const TodoContext = createContext()

export function useTodo(){
    return useContext(TodoContext)
}

export default function TodoContextParent({ children }) {
    const [todoList, setTodoList] = useState([
        {
            text: 'Something Something Something',
            state: 'Active'
        }
    ])

    const addNewTodo = ({newTodo}) =>{
        setTodoList(prevTodoList => {
            return [newTodo, ...prevTodoList]
        })
    }

    return (
        <TodoContext.Provider value={{todoList, addNewTodo}}>
            {children}
        </TodoContext.Provider>
    )
}