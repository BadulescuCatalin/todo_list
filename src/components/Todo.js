import React from 'react'
import './Todo.css'

export const Todo = (props) => {

    const todoStyle = {
        backgroundColor: props.t.done == true ? '#F2F2F2' : 'white',
        textDecoration: props.t.done == true ? 'line-through' : 'none',
        border: '1px solid #ccc',
        padding: '10px'
    };

    return (
        <div className='container d-flex justify-content-start px-4' style={todoStyle}>
            <div>
                <h3>{props.t.title}</h3>
                <p>{props.t.description}</p>
            </div>
        </div>
    )
}

export default Todo;