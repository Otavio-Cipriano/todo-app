import { createContext, useContext, useEffect, useState } from "react"

const TodoContext = createContext()

export function useTodo() {
    return useContext(TodoContext)
}

export default function TodoContextParent({ children }) {
    const [todoList, setTodoList] = useState([])
    const [activeTodo, setActiveTodo ] = useState()
    const [filter, setFilter] = useState('all')
    const [fTodoList, setFTodoList] = useState([])

    const addNewTodo = (newTodo) => {
        setTodoList(prevTodoList => {
            return [newTodo, ...prevTodoList]
        })
    }


    const removeTodo = (id) =>{
        setTodoList(todoList.filter(e => e.id !== id))
    }

    useEffect(()=>{
        const countActiveTodo = () =>{
            setActiveTodo(() =>{
                let actives = todoList.filter(e => e.state === 'active')
                return actives.length
            })
        }
        countActiveTodo()
        if(filter === 'all') setFTodoList(todoList);
        else{
            setFTodoList(todoList.filter(e => e.state === filter))
        }
        console.log(fTodoList)
    },[todoList, filter, fTodoList])

    const value = {
        fTodoList,
        filter,
        setFilter,
        addNewTodo, 
        removeTodo,
        activeTodo
    }

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}