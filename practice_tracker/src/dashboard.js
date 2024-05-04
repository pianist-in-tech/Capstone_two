import React, { useState } from 'react';
import NavBar from './nav';
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {
    // Initialize state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [instrument, setInstrument] = useState('');
    const [proficiency, setProficiency] = useState('');
    const history = useNavigate(); // To manage client-side routing
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent the form from default submission
  
      // Prepare user information to be sent to the backend
      const userInfo = {
        name,
        email,
        instrument,
        proficiency,
      };
  
      try {
        // Send user information to the backend
        const response = await fetch('/api/user-info', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userInfo), // Convert userInfo to JSON format
        });
  
        if (response.ok) {
          console.log('User info saved successfully');
          // Redirect to another page, show a message, or handle successful submit
          history.push('/thank-you'); // Example: Redirecting after submission
        } else {
          console.error('Error saving user info');
        }
      } catch (error) {
        console.error('Error occurred while saving user info:', error);
      }
    };
  
    return (
      <div>
        <NavBar /> {/* Include your navigation bar */}
        <h1>Complete Your Profile</h1> {/* Page heading */}
        <form onSubmit={handleSubmit}> {/* Form for collecting user information */}
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Instrument:
            <input
              type="text"
              value={instrument}
              onChange={(e) => setInstrument(e.target.value)}
            />
          </label>
  
          <label>
            Proficiency Level:
            <select
              value={proficiency}
              onChange={(e) => setProficiency(e.target.value)}
            >
              <option value="">Select</option>
              <option value="beginner">Complete Beginner</option>
              <option value="advanced beginner">Advanced Beginner</option>
              <option value="advanced">Advanced</option>
              <option value="professional">Professional</option>
            </select>
          </label>
  
          <button type="submit">Submit</button> {/* Submit button */}
        </form>
      </div>
    );
  };
  

export default Dashboard;