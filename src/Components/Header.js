import React from 'react'

import { Link } from 'react-router-dom';

function Header({ onMenuClick }) {
  return (
    <>
    <nav>Pluto TV - Drop in. Watch Free.</nav>
    <div className='header'>
     
    <div className="menu-icon" onClick={onMenuClick}>
        &#9776; {/* This is the hamburger menu icon */}
    </div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/user/12345">User</Link>
    </div>

    </>
  )
}

export default Header;
