import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../home'; 
import Dashboard from '../dashboard';
import Practice_Tracker from '../practice_tracker';
//import PrivateRoute from './privateRoute';
import { AuthContext } from '../auth/authContext'; // Your context for authentication

const AppRoutes = () => {
  const { isAuthenticated} = useContext(AuthContext); // Check authentication status

  return (
      <Routes>
        {/* Public route */}
        <Route path="/" 
        element={<HomePage />}    
             />

        {/* Private route */}
        <Route
        // element={<PrivateRoute isAuthenticated={isAuthenticated} />} // Apply PrivateRoute logic
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/practice-tracker" element={<Practice_Tracker />} />
        </Route>

        {/* Fallback route to redirect to the home/sign-in page */}
        <Route 
        path="*" 
        element={<Navigate 
        to="/" />} />
      </Routes>
  );
};

export default AppRoutes;
