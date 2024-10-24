import React from 'react'

const TodoApp = () => {
    const todos = ["Learn react", "Exercise", "have Break-first", "Learn Laravel"];

  return (
    <div>
        <h1>
            <ul>
                {todos.map((todo, index) => <li key={index}>{todo}</li>)}
            </ul>
        </h1>
    </div>
  )
}

export default TodoApp