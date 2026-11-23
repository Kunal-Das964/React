import TodoItem from "./TodoItem";

function TodoList({
    todos,
    onToggleTask,
    onDeleteTask,
    onEditTask,
    onSaveTask,
    onCancelEdit,
    editingId,
    editText,
    setEditText
}) {
    return (
        <div className="todo-list">


            {todos.length === 0 ? (

                <p className="empty-message">
                    No tasks found.
                </p>

            ) : (

                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggleTask={onToggleTask}
                        onDeleteTask={onDeleteTask}
                        onEditTask={onEditTask}
                        onSaveTask={onSaveTask}
                        onCancelEdit={onCancelEdit}
                        isEditing={editingId === todo.id}
                        editText={editText}
                        setEditText={setEditText}
                    />
                ))

            )}

        </div>
    );
}

export default TodoList;