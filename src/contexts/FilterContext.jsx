import { createContext, useContext, useEffect, useState } from "react"
import { useTodo } from "./TodoContext"

const FilterContext = createContext()


export function useFilter() {
    return useContext(FilterContext)
}

export default function FilterContextParent({ children }) {
    const [filter, setFilter] = useState('all')
    const [filtredTodos, setFiltredTodos] = useState()
    

    const { todos } = useTodo()

    useEffect(() => {
        if (filter === 'all') setFiltredTodos(todos);
        else {
            setFiltredTodos(todos.filter(e => e.state === filter))
        }

    }, [todos, filter])

    const value = {
        filter,
        setFilter,
        filtredTodos
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}