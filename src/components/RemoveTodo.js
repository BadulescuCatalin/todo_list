import React from 'react'
import axios from 'axios';
import { useState } from 'react';

export const RemoveTodo = () => {
    const [todoId, setTodoId] = useState('');

    const handleTodoIdSubmit =  async (e) => {
        e.preventDefault();

        try {
            const response = await axios.delete(`http://localhost:4000/todo/${todoId}`);
            alert("Todo removed")
        } catch (error) {
            console.error('Error fetching todo:', error);
        }
        
    };

    
    const handleTodoIdChange = (e) => {
        setTodoId(e.target.value);
    };

    return (
        <div className='container'>
            <h2>Todo To Remove</h2>
            <form onSubmit={handleTodoIdSubmit}>
                <div className="form">
                    <label htmlFor="todoId">Enter Todo ID:</label>
                    <input
                        type="text"
                        id="todoId"
                        className="form-control"
                        value={todoId}
                        onChange={handleTodoIdChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary m-4">
                    Remove Todo
                </button>
            </form>
        </div>
    )
}
