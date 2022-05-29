import { useRef } from "react"
import { useTheme } from "../../contexts/ThemeContext"
import { useTodo } from "../../contexts/TodoContext"

export default function TodoCreator() {
    const { theme } = useTheme()
    const {addNewTodo} = useTodo()
    const textRef = useRef(null)
    const cbRef = useRef(null)

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            createTodo()
        }
    }

    const createTodo = () =>{
        let todo = {}
        todo.state = cbRef.current.checked ? 'completed' : 'active'
        todo.text = textRef.current.value
        addNewTodo(todo)
        todo = {}
        textRef.current.value = ''
        cbRef.current.checked = false
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
