import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState("");

    const handleOnChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.trim()){
            addTodo(todo);
        setTodo("");
        }
        
    }

  return (
    <div>
         <form onSubmit={handleSubmit}>
            <label>Todo Add</label><br/>
            <input type='text' value={todo} onChange={handleOnChange}/><br/>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}
