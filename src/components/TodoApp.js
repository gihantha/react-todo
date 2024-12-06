import React, { useRef } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import useTodos from "../hooks/useTodos";

const TodoApp = () => {
  const { todos, loading, error, addTodo, toggleTodo, deleteTodo } = useTodos(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const inputRef = useRef(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} inputRef={inputRef} />
      <TodoList todos={todos} handleToggle={toggleTodo} handleDelete={deleteTodo} />
    </div>
  );
};

export default TodoApp;
