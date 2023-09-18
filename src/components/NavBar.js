import React from 'react'
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <a className="navbar-brand" href="/">Todo App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink to='/allTodos' className="nav-link" >All Todos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/todoById' className="nav-link" >View Todo</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/addTodo' className="nav-link" >Add Todo</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/removeTodo' className="nav-link" >Remove Todo</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

