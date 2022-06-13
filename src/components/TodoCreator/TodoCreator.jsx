import { useRef } from "react"
import { useTheme } from "../../contexts/ThemeContext"
import { useTodo } from "../../contexts/TodoContext"

export default function TodoCreator() {
    const { theme } = useTheme()
    const {addNewTodo, todos} = useTodo()
    const textRef = useRef(null)
    const cbRef = useRef(null)

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            createTodo()
        }
    }

    const cleanCreator = () =>{
        textRef.current.value = ''
        cbRef.current.checked = false
    }

    const createTodo = () =>{
        if(!textRef.current.value) return;
        let todo = {
            id: todos.length,
            text: textRef.current.value,
            state: cbRef.current.checked ? 'completed' : 'active',
            order: todos.length + 1
        }
        addNewTodo(todo)
        todo = {}
        cleanCreator()


    }

    return (
        <div className={`todo-app__creator ${theme}`}>
            <label className="task__todo cb">
                <input type="checkbox" ref={cbRef}/>
                <span className="cb__checkmark"></span>
            </label>
            <span>Create a new todo...</span>
            <input type="text" ref={textRef} onKeyDown={handleKeyDown} />
        </div>
    )
}
