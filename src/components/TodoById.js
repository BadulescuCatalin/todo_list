import React, { useState } from 'react';
import axios from 'axios';
import Todo from './Todo';

export const TodoById = () => {
    const [todoId, setTodoId] = useState('');
    const [todo, setTodo] = useState({});
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleTodoIdChange = (e) => {
        setTodoId(e.target.value);
    };

    const handleDoneChange = (e) => {
        console.log(status)
    
        let newStatus = !status;
        console.log(newStatus)
        setStatus(newStatus);
    };

    const handleTodoIdSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:4000/todo/${todoId}`);
            setTodo(response.data);
            setTitle(response.data.title);
            setDescription(response.data.description);
            setStatus(response.data.done);
        } catch (error) {
            console.error('Error fetching todo:', error);
        }
    };

    const handleUpdateTodo = async (e) => {
        e.preventDefault();
        const newTodo = {
            "id": Number(todoId),
            "title": title,
            "description": description,
            "done": status
        }
        try {
            const response = await axios.post(`http://localhost:4000/todo/${todoId}`, newTodo);
        }
        catch (error) {
            console.log(error);
        }
        setTodo({})
        alert("Todo Updated!")
    }

    return (
        <div className='container'>
            <h2>Todo Details</h2>
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
                    View Todo
                </button>
            </form>
            {todo.id &&
                (<div className="container">
                    <h1>Update Todo</h1>
                    <form >
                        <div className="form-group">
                            <label htmlFor="title">Todo Title</label>
                            <input
                                className="form-control"
                                id="title"
                                type="text"
                                value={title}
                                onChange={handleTitleChange}
                            />
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="description">Todo Description</label>
                            <textarea
                                className="form-control"
                                id="description"
                                rows="5"
                                value={description}
                                onChange={handleDescriptionChange}
                            ></textarea>
                        </div>
                        <div class="form-check d-flex justify-content-end">
                            <input class="form-check-input" type="checkbox" defaultChecked={todo.done} id="flexCheckChecked" onChange={handleDoneChange} />                            <label class="form-check-label" for="flexCheckChecked">
                                Done
                            </label>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary mt-4" onClick={handleUpdateTodo}>
                                Update Todo
                            </button>
                        </div>
                    </form>
                </div>)}
        </div>
    );
};

export default TodoById;
