import React, { useState } from 'react';
const StudentForm = () => {
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting form data:');
    console.log('Name:', studentName);
    console.log('Email:', studentEmail);
    console.log('Phone Number:', phoneNumber);
  };

// Updated styles for a dark theme
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  maxWidth: '300px',
  backgroundColor: '#2d2d2d',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  color: '#f7f7f7',
};

const labelStyle = {
  marginBottom: '10px',
  fontSize: '16px',
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  marginBottom: '20px',
  border: '1px solid #555',
  backgroundColor: '#1c1c1c',
  color: '#f7f7f7',
  borderRadius: '4px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#e63946',
  color: '#f7f7f7',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const separatorStyle = {
  textAlign: 'center',
  margin: '20px 0',
  color: '#f7f7f7',
};


  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={labelStyle}>
        <label>
          Name:
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            style={inputStyle}
          />
        </label>
      </div>
      <div style={labelStyle}>
        <label>
          Email:
          <input
            type="email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
            style={inputStyle}
          />
        </label>
      </div>
      <div style={labelStyle}>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={inputStyle}
          />
        </label>
      </div>
      <div style={separatorStyle}>-----------------------------------</div>
      <div style={labelStyle}>New field Added! Parth Sharma is my name</div>
      <div style={separatorStyle}>-----------------------------------</div>
      <div>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default StudentForm;