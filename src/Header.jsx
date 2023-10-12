// src/components/Header.js
import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div className="header">
      <div className="logo">PLUTO TV</div>
      <div className="nav">
        <a href="/email">Email</a>
        <a href="/settings">Settings</a>
        <a href="/notifications">Notifications</a>
        <a href="/user">User</a>
        <a href="/logout">Logout</a>
      </div>
    </div>
  );
};

export default Header;
