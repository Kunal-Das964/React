import { useState, useEffect } from 'react';

import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';

import './App.css';

function App(){
  
  // 1. Store all tasks
  const [todos, setTodos] = useState(() => {

    // Retrieve saved tasks from LocalStorage
    const savedTodos = localStorage.getItem("todos");

    // If saved tasks exist, return them
    if(savedTodos) {
      try {
        return JSON.parse(savedTodos);
      } catch (error) {
        console.error("Error loading saved tasks:", error);
      }
    }

    // otherwise, use default sample tasks

    return [
        { id: 1, title: "Learn React", completed: false },
        { id: 2, title: "Build a Todo App", completed: true },
        { id: 3, title: "Master JavaScript", completed: false }
    ];
  });

  // 2. Store input field value
  const [newTask, setNewTask] = useState("");

  // 3. Store editing task ID
  const [editingId, setEditingId] = useState(null);

  // 4. Store editing task text
  const [editText, setEditText] = useState("");

  // 5. Store selected filter
  const [filter, setFilter] = useState("All");

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // CREATE - Add Task
  const handleAddTask = (e) => {
    e.preventDefault();

    if(!newTask.trim()) {
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: newTask.trim(),
      completed: false
    };

    // setTodos([...todos, newTodo]);
    setTodos((previousTodos) => [...previousTodos, newTodo]);

    setNewTask("");
  };

  // Update
  const handleToggleTask = (id) =>
  {
    setTodos(
      todos.map((todo) =>
        todo.id === id
        ? {...todo, completed: !todo.completed}
        : todo
      )
    );
  };

  // DELETE
  const handleDeleteTask = (id) => {

    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  };

  // UPDATE - Start Editing
  const handleEditTask = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.title);
  };

  // UPDATE - Save Edited Task
  const handleSaveTask = (id) => {
    if (!editText.trim()) {
      return;
    }

    setTodos(
      todos.map((todo) =>
        todo.id === id
        ? {...todo, title: editText.trim()}
        : todo
      )
    );

    setEditingId(null);
    setEditText("");
  }

  // CANCEL - Stop EDiting
  const handleCancelEdit = () => {

    setEditingId(null);
    setEditText("");
  };

  // Filter Tasks
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") {
      return !todo.completed;
    }
    if (filter === "Completed") {
      return todo.completed;
    }
    return true;
  });

  return (
    <div className="app-container">
      <div className="todo-container">
        <Header/>
        <TodoForm
          newTask={newTask}
          setNewTask={setNewTask}
          onAddTask={handleAddTask}
        />

        <TodoFilter
          filter={filter}
          setFilter={setFilter}
        />

        <TodoList 
          todos={filteredTodos} 
          onToggleTask={handleToggleTask}
          onDeleteTask = {handleDeleteTask}
          onEditTask = {handleEditTask}
          onSaveTask = {handleSaveTask}
          onCancelEdit = {handleCancelEdit}
          editingId = {editingId}
          editText = {editText}
          setEditText = {setEditText}
        />
      </div>
    </div>
  );
}

export default App;
