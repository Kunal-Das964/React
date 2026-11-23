
function TodoFilter({ filter, setFilter }) {

    return (
        <div className="todo-filter">

            <button
                type="button"
                className={filter === "All" ? "active" : ""}
                onClick={() => setFilter("All")}
            >
                All
            </button>

            <button
                type="button"
                className={filter === "Active" ? "active" : ""}
                onClick={() => setFilter("Active")}
            >
                Active
            </button>

            <button
                type="button"
                className={filter === "Completed" ? "active" : ""}
                onClick={() => setFilter("Completed")}
            >
                Completed
            </button>

        </div>
    );
}

export default TodoFilter;
