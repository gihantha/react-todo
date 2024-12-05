import React, { useEffect, useRef, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

const TodoApp = () => {
const [todos, setTodos] = useState([]);
const inputRef = useRef(null); 

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  useEffect(()=> {
    console.log("Todo List is updated", todos);
  },[todos])

  return (
    <div>
      <TodoForm addTodo={addTodo} inputRef={inputRef}/>

      <TodoList handleDelete={handleDelete} todos={todos} />
    </div>
  );
};

export default TodoApp;
