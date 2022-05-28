import { useTheme } from "../../contexts/ThemeContext"

export default function TodoCreator() {
  const { theme } = useTheme()

    return (
        <div className={`todo-app__creator ${theme}`}>
            <label className="task__todo cb">
                <input type="checkbox" value=" " />
                <span className="cb__checkmark"></span>
            </label>
            <span>Create a new todo...</span>
            <input type="text" />
        </div>
    )
}
