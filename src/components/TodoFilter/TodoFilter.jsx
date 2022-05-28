import { useTheme } from "../../contexts/ThemeContext"

export default function TodoFilter({...props}) {
  const { theme } = useTheme()

    return (
        <div className={`todo-app__filter ${theme}`} {...props}>
            <span>All</span>
            <span>Active</span>
            <span>Completed</span>
        </div>
    )
}
