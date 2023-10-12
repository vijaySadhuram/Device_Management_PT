// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <a href="/dashboard">Dashboard</a>
      </div>
      <div className="sidebar-item">
        <a href="/employees">Employees</a>
      </div>
      <div className="sidebar-item">
        <a href="/core-h">Core H</a>
      </div>
      <div className="sidebar-item">
        <a href="/device">Device</a>
      </div>
      <div className="sidebar-item">
        <a href="/tasks">Tasks</a>
      </div>
      <div className="sidebar-item">
        <a href="/projects">Projects</a>
      </div>
      <div className="sidebar-item">
        <a href="/reports">Reports</a>
      </div>
      <div className="sidebar-item">
        <a href="/blog">Blog</a>
      </div>
    </div>
  );
};

export default Sidebar;
