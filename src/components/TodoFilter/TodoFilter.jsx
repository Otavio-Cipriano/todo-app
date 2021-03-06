import { useFilter } from "../../contexts/FilterContext"
import { useTheme } from "../../contexts/ThemeContext"

export default function TodoFilter({ ...props }) {
    const { theme } = useTheme()
    const { setFilter, filter } = useFilter()

    const handleOnClick = (fOption) => {
        setFilter(fOption)
    }

    return (
        <div className={`todo-app__filter ${theme}`} {...props}>
            <span
                onClick={() => handleOnClick('all')}
                className={filter === 'all' ? 'active' : ''}>
                All
            </span>
            <span
                onClick={() => handleOnClick('active')}
                className={filter === 'active' ? 'active' : ''}>
                Active
            </span>
            <span
                onClick={() => handleOnClick('completed')}
                className={filter === 'completed' ? 'active' : ''}>
                Completed
            </span>
        </div>
    )
}
