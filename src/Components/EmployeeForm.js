// src/components/EmployeeForm.js
import React, { useState } from 'react';
import './EmployeeForm.css';
const EmployeeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    profilePicture: '',
    EmpId: '',
    EmpName: '',
    empEmail: '',
    pwd: '',
    designation: '',
    department: '',
    country: '',
    mobile: '',
    gender: '',
    joiningDate: '',
    dob: '',
    reportingTo: '',
    language: '',
    userRole: '',
    address: '',
    about: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <label>
        Profile Picture:
        <input
          type="text"
          name="profilePicture"
          value={formData.profilePicture}
          onChange={handleChange}
        />
      </label>
      <label>
        Employee ID:
        <input type="text" name="EmpId" value={formData.EmpId} onChange={handleChange} />
      </label>
      <label>
        Employee Name:
        <input
          type="text"
          name="EmpName"
          value={formData.EmpName}
          onChange={handleChange}
        />
      </label>

      <label>
        Employee Email:
        <input
          type="text"
          name="empEmail"
          value={formData.empEmail}
          onChange={handleChange}
        />
      </label>


      {/* Add more form fields for the other data */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
