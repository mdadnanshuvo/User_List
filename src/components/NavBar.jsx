import React from "react";
import { NavLink } from 'react-router-dom';



function NavBar()
{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container mt-2">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/" >User-List App</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/adduser">Add User</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}



export default NavBar;
