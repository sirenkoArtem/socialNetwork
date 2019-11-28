import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="menu">
                <div className="item">
                    <NavLink to="/profile"><p>Profile</p></NavLink>
                </div>
                <div className="item">
                    <NavLink to="/dialogs"><p>Messages</p></NavLink>
                </div>
                <div className="item">
                    <NavLink to="/news"><p>News</p></NavLink>
                </div>
                <div className="item">
                    <NavLink to="/music"><p>Music</p></NavLink>
                </div>
                <div className="item">
                    <NavLink to="/settings"><p>Settings</p></NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;