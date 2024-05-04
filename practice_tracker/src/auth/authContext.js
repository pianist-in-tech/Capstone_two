import React, { createContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider to wrap around components that need authentication context
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('authToken') !== null
  );

  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

  // Function to handle general login
  const login = (token) => {
    setAuthToken(token);
    setIsAuthenticated(true);
    localStorage.setItem('authToken', token); // Save token in localStorage
  };

  // Function to handle Google login
  const loginWithGoogle = (googleToken) => {
    login(googleToken.access_token); // Store the Google OAuth token
    // Optionally store additional data, like user profile info from Google
  };

  // Function to handle logout
  const logout = () => {
    setIsAuthenticated(false);
    setAuthToken(null);
    localStorage.removeItem('authToken'); // Remove token from localStorage
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authToken,
        login,
        loginWithGoogle,
        logout,
      }}
    >
      {children} {/* Render child components */}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
