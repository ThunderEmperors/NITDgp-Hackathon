import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <Link to="/" className="navbar-title">
                D<span className='navbar-subtitle'>Repo</span>
            </Link>
        </div>

        <div className="search-bar">
            <input placeholder='Type / to search for user' />
        </div>
    </div>
  )
}

export default Navbar