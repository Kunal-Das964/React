function TodoForm({newTask, setNewTask, onAddTask}) {
    return (
        <form 
            className="todo-form"
            onSubmit={onAddTask}
        >
            <input 
                type="text" 
                placeholder="Enter your task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />

            <button type="submit">
                Add Task
            </button>
        </form>
    ); 
}

export default TodoForm;