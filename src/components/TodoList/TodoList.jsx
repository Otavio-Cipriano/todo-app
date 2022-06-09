import { useFilter } from '../../contexts/FilterContext'
import { useTheme } from '../../contexts/ThemeContext'
import { useTodo } from '../../contexts/TodoContext'
import Todo from '../Todo/Todo'
import TodoFilter from '../TodoFilter/TodoFilter'

export default function TodoList() {
    const { theme } = useTheme()
    const { activeTodo, clearCompletedTodo } = useTodo()
    const { filtredTodos } = useFilter()

    return (
        <div className={`todo-app__list ${theme}`} >
            {
                filtredTodos?.map((todo, idx) => {
                    return (
                        <Todo
                            id={idx}
                            key={idx}
                            todo={todo} />
                    )
                })
            }

            <div className="todo-app__info">
                <span>{activeTodo} items left</span>
                <TodoFilter className="todo-app__filter todo-app__filter-desktop" />
                <span onClick={clearCompletedTodo}>Clear Completed</span>
            </div>
        </div>
    )
}