import { useState } from "react";

// Assuming you have a Todo component defined somewhere
function Todo(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Go to gym from 7-9",
      completed: false,
    },
    {
      title: "study DSA",
      description: "Study DSA from 9-11",
      completed: true,
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "new Todo",
        description: "desc of new todo",
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

export default App;
