# React Todo List Application

A simple and interactive Todo List application built with **React**. This project was created as a hands-on way to learn core React concepts, including components, props, state, event handling, hooks, and browser storage.

Users can create and manage tasks, mark tasks as completed, filter the task list, and keep their tasks saved after refreshing the browser.

## Features

- **Add tasks** – create new todo items.
- **Edit tasks** – update an existing task.
- **Delete tasks** – remove tasks from the list.
- **Mark as completed** – toggle a task between pending and completed.
- **Filter tasks** – view all, active, or completed tasks.
- **Persistent storage** – save tasks in the browser using `localStorage`, so they remain available after a page refresh.
- **Responsive and clear UI** – a straightforward interface for managing everyday tasks.

## React Concepts Practised

| Concept | How it is used |
|---|---|
| Components | Split the interface into reusable UI parts. |
| Props | Pass data and callback functions between components. |
| `useState` | Manage task data and UI state. |
| Events | Handle form submission and task actions such as edit, delete, and complete. |
| `useEffect` | Synchronize task data with browser storage. |
| `localStorage` | Persist tasks between browser sessions and refreshes. |
| Conditional rendering | Display task states and filtered task lists. |

## Tech Stack

- **React** – UI library
- **JavaScript (ES6+)** – application logic
- **HTML5** – markup
- **CSS3** – styling
- **Browser localStorage** – client-side task persistence
- **npm** – package management

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm)
- A code editor, such as [Visual Studio Code](https://code.visualstudio.com/)
- A modern web browser

### Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/Kunal-Das964/React/tree/main/Todo%20App>
   ```

2. Open the project folder:

   ```bash
   cd <project-folder>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server using the script configured in `package.json`.

   For a Vite-based React project:

   ```bash
   npm run dev
   ```

   For other React setups, check the `scripts` section of `package.json` for the correct start command.

5. Open the local URL shown in your terminal.

## How to Use

1. Enter a task in the input field and add it to your list.
2. Mark a task as completed when it is finished.
3. Edit a task if its description needs to change.
4. Delete tasks you no longer need.
5. Use **All**, **Active**, and **Completed** filters to view the tasks you want.
6. Refresh the browser and check that your tasks are still available.

## Testing Checklist

- [ ] Add a task with valid text.
- [ ] Check how the app handles an empty task.
- [ ] Edit an existing task.
- [ ] Delete a task.
- [ ] Mark a task as completed and mark it active again.
- [ ] Confirm that **All**, **Active**, and **Completed** filters show the correct tasks.
- [ ] Refresh the browser and verify that tasks persist.
- [ ] Check the layout at desktop and mobile screen sizes.

## Project Structure

The exact structure depends on the files in your project. A typical React project may look like this:

```text
react-todo-list/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

Keep your existing project structure; the tree above is an illustrative example.

## Future Enhancements

- Add task due dates and priorities.
- Add search functionality.
- Add task categories or labels.
- Add confirmation before deleting a task.
- Add automated tests.
- Add cloud-based storage and user accounts.

## Learning Outcome

This project provides practical experience with the fundamentals of React: building components, passing data through props, managing state, responding to user events, using hooks, rendering filtered data, and persisting information with `localStorage`.

## Author

**Kunal Das**

---

If you found this project useful, feel free to star the repository.
