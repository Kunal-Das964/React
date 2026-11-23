function TodoItem({
    todo,
    onToggleTask,
    onDeleteTask,
    onEditTask,
    onSaveTask,
    onCancelEdit,
    isEditing,
    editText,
    setEditText
}) {
    return (
        <div className="todo-item">
            {isEditing ? (

                <>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />

                    <button
                        type="button"
                        onClick={() => onSaveTask(todo.id)}
                    >
                        Save
                    </button>

                    <button
                        type="button"
                        onClick={onCancelEdit}
                    >
                        Cancel
                    </button>
                </>
            ) : (

                <>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToggleTask(todo.id)}
                    />

                    <span className={todo.completed ? "completed" : ""}>
                        {todo.title}
                    </span>

                    <div className="todo-actions">
                        <button
                            type="button"
                            onClick={() => onEditTask(todo)}
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            onClick={() => onDeleteTask(todo.id)}
                        >
                            Delete
                        </button>
                    </div>

                </>
            )}
        </div>
    );
}

export default TodoItem;