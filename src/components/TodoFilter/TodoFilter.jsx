export default function TodoFilter({...props}) {
    return (
        <div className="todo__filter" {...props}>
            <span>All</span>
            <span>Active</span>
            <span>Completed</span>
        </div>
    )
}
