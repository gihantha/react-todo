import { useState, useEffect } from "react";

const useTodos = (url) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos from API
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const fetchedTodos = data.slice(0, 10); // Limit to 10 todos
        setTodos(fetchedTodos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
        setError(error);
        setLoading(false);
      });
  }, [url]);

  // Add a new todo
  const addTodo = (newTitle) => {
    const newTodo = { id: Date.now(), title: newTitle, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Toggle the completed state of a todo
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo by its ID
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return { todos, loading, error, addTodo, toggleTodo, deleteTodo };
};

export default useTodos;
