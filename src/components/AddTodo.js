import axios from 'axios';
import React, { useState } from 'react';

export const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== '' && description !== '') {
      const todo = {
        "id": 100,
        "title": title,
        "description": description,
        "done": false
      }
      try {
        const response = await axios.post("http://localhost:4000/todo", todo);
      }
      catch (error) {
        console.log(error);
      }
      setDescription('');
      setTitle('');
    } else {
      alert("Completeaza titlul si descrierea");
    }
  };

  return (
    <div className="container">
      <h1>Add Todo</h1>
      <form onSubmit={handleSubmit}>
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
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary mt-4">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};
