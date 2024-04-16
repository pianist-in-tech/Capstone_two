import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

const MainPage = () => {
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
   // State variable to track user authentication status
   const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Define success and failure callbacks
  const responseGoogleSuccess = (response) => {
    console.log('Login success:', response);
    // Set user authentication state
    setIsAuthenticated(true);

    // Store authentication token in localStorage
    localStorage.setItem('authToken', response.token);

  // Redirect user to dashboard or home page
   // history.push('/dashboard');
  }

  const responseGoogleFailure = (error) => {
    console.error('Login failure:', error);
  // Display error message to the user
  alert('Login failed. Please check your credentials and try again.');
  }

  return (
    <div>
      <h1>Welcome to Let's Practice! Tracker</h1>
      {/* Render GoogleLogin component */}
      <GoogleLogin
        clientId={googleClientId}
        buttonText="Login with Google"
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default MainPage;
