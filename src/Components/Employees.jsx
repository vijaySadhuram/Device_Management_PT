import React from 'react'
import { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import './Employees.css';

const Employees = () => {
  
    const [showAddForm, setShowAddForm] = useState(false);
    const [employeeData, setEmployeeData] = useState([]);
  
    const toggleAddForm = () => {
      setShowAddForm(!showAddForm);
    };
  
    const handleFormSubmit = (data) => {
      setEmployeeData([...employeeData, data]);
      setShowAddForm(false);
    };
  
    return (
      <div className="section">
        <h2>Employees</h2>
        <button onClick={toggleAddForm} className='addButton'>Add Employee</button>
        <button className='inviteButton'>Invite Employee</button>
        {showAddForm && <EmployeeForm onSubmit={handleFormSubmit} />}
        <div className="employee-list">
          {employeeData.map((employee, index) => (
            <div key={index} className="employee">
              <p>Profile Picture: {employee.profilePicture}</p>
              <p>Employee ID: {employee.EmpId}</p>
              <p>Employee Name: {employee.EmpName}</p>
              <p>Email: {employee.empEmail}</p>
              {/* Add more fields here */}
            </div>
          ))}
        </div>
      </div>
  )
}

export default Employees