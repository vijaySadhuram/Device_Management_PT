// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';
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
        <a href="/core-h">Core HR</a>
      </div>
      <div className="sidebar-item">
        <a href="/device">Device Procurement</a>
      </div>
      <div className="sidebar-item">
        <a href="/tasks">Tasks</a>
      </div>
      <div className="sidebar-item">
        <a href="/performance">Performance</a>
      </div>
      <div className="sidebar-item">
        <a href="/projects">Projects</a>
      </div>
      <div className="sidebar-item">
        <a href="/reports">Reports</a>
      </div>

      <div className="sidebar-item">
        <a href="/Manage Clients">Manage Clients</a>
      </div>
      <div className="sidebar-item">
        <a href="/blog">Blog</a>
      </div>
    </div>
  );
};

export default Sidebar;
