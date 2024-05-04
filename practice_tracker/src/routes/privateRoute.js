import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, redirectPath = "/" }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/home" />;
  };
export default PrivateRoute;
