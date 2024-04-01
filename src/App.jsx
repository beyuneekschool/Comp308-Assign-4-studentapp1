import React from 'react';
import { createRoot } from 'react-dom/client';
import StudentForm from './StudentForm'; // Make sure this is the correct path to your component
import './index.css';

const App = () => (
  <div className="container">
    <div>Name: studentapp1</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <StudentForm /> {/* Render the StudentForm component */}
  </div>
);

// Select the element where you want to mount your app
const container = document.getElementById('app');
const root = createRoot(container); // Create a root

// Use the root to render your app
root.render(<App />);
