import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Todo from './Todo';

export const AllTodos = () => {

  const [todos, setTodos] = useState([])

  async function getAllTodos() {
    try {
      const response = await axios.get("http://localhost:4000/todo");
      setTodos(response.data);
      console.log(todos)
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllTodos()
  }, []);

  return (
    <div>
      <h1 >All Todos</h1>
      {
      todos.map( todo =>
        <div key={todo.id} className='row'>
          <Todo t={todo}></Todo>
        </div>
      )}
    </div>
  )
}
