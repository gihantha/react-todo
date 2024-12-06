import React from "react";

export const TodoList = ({ todos, handleDelete }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.title}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
