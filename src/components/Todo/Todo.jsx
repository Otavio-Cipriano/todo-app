import { useTheme } from '../../contexts/ThemeContext'
import { useTodo } from '../../contexts/TodoContext'

export default function Todo({todo}) {
  const {theme} = useTheme()
  const { removeTodo, setTodoAsCompleted, setTodoAsActive } = useTodo()

  const check = () =>{
    setTodoAsCompleted(todo.id)
  }

  const uncheck = () => {
    setTodoAsActive(todo.id)
  }

  const handleTrashClick = () =>{
    removeTodo(todo.id)
  }

  return (
    <div className={`task ${theme} ${todo.state === "completed" ? 'task--completed' : ''}`}>
      <div className={`task__cb `}>
        <label className="task__cb cb" >
          {
            todo.state === "completed" ?
            <input type="checkbox" value={todo.state} checked={true} readOnly onClick={uncheck}/> :
            <input type="checkbox" value={todo.state} checked={false} readOnly onClick={check}/>
          }
            <span className="cb__checkmark"></span>
        </label>
      </div>
      <p className={`task__text ${theme}`}>
        {todo.text}
      </p>
      <div className="task__trash" onClick={handleTrashClick}>
        <img src="assets/icon-cross.svg" alt="delete icon"/>
      </div>
    </div>
  )
}
