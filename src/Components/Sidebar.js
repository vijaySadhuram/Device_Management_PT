// Sidebar.js
import './Sidebar.css';
// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <Link smooth to="/dashboard#dashboard-section" >Dashboard</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/employees">Employees</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/core-h">Core HR</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/finance">Finance</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/task">Task</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/performance">Performance</Link>
      </div>

      <div className="sidebar-item">
        <Link to="/Project">Project</Link>
      </div>
      <div className="sidebar-item">
        <Link to="/Report">Report</Link>
      </div>
    </div>
  );
};

export default Sidebar;
