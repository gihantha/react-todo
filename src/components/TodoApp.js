import React, { useState } from 'react'

const TodoApp = () => {
    
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    function  handleOnChange(e){
        setTodo(e.target.value);
    };

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo('');
    };

    const handleDelete = (index) => {
        setTodos(todos.filter((_,i)=> i!== index));
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Todo Add</label><br/>
            <input type='text' value={todo} onChange={handleOnChange}/><br/>
            <button type='submit'>Add</button>
        </form>
        
            <ul>
                {todos.map((todo, index)=> 
                <li key={index}>{todo}  
                <button onClick={() => handleDelete(index)}>Delete</button></li>
                )}
            </ul>
        
    </div>
  )
}

export default TodoApp