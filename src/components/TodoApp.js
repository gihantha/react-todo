import React, { useEffect, useRef, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const inputRef = useRef(null);

  const addTodo = (newTodo) => {
    const updatedTodos = [
      ...todos,
      { id: Date.now(), title: newTodo, completed: false },
    ];
    setTodos(updatedTodos);
    console.log("Updated Todos (After Add):", updatedTodos);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    console.log("Updated Todos (After Delete):", updatedTodos);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const fetchedTodos = data.slice(0, 10); // Limit to the first 10 todos
        setTodos(fetchedTodos);
        console.log("Fetched Todos:", fetchedTodos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error Fetching Todos:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} inputRef={inputRef} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
};

export default TodoApp;
