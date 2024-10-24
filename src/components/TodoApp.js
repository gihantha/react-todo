import React, { useState } from 'react'

const TodoApp = () => {
    
    const [todo, setTodo] = useState([]);
    const [todos, setTodos] = useState([]);

    function  handleOnChange(e){
        setTodo(e.target.value);
    };

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo('');
    };

  return (
    <div>
        <form>
            <label>Todo Add</label><br/>
            <input type='text' value={todo} onChange={handleOnChange}/><br/>
            <button onClick={handleSubmit}>Add</button>
        </form>
        
            <ul>
                {todos.map((todo, index)=> <li key={index}>{todo}</li>)}
            </ul>
        
    </div>
  )
}

export default TodoApp