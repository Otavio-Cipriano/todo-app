import { useTheme } from '../../contexts/ThemeContext'
import { useTodo } from '../../contexts/TodoContext'
import crossIcon from '../../assets/images/icon-cross.svg'

export default function Todo({ todo, ...props }) {
  const { theme } = useTheme()
  const { removeTodo, udpateTodoState } = useTodo()

  const check = () => {
    udpateTodoState(todo.id, 'completed')
  }

  const uncheck = () => {
    udpateTodoState(todo.id, 'active')
  }

  const deleteTodo = () => {
    removeTodo(todo.id)
  }


  return (
    <div {...props} 
    className={`task 
    ${theme} 
    ${todo.state === "completed" ? 'task--completed' : ''}`}>
      <div className={`task__cb `}>
        <label className="task__cb cb" >
          {
            todo.state === "completed" ?
              <input type="checkbox" value={todo.state} checked={true} readOnly onClick={uncheck} /> :
              <input type="checkbox" value={todo.state} checked={false} readOnly onClick={check} />
          }
          <span className="cb__checkmark"></span>
        </label>
      </div>
      <p className={`task__text ${theme}`}>
        {todo.text}
      </p>
      <div className="task__trash" onClick={deleteTodo}>
        <img src={crossIcon} alt="delete icon" />
      </div>
    </div>
  )
}
