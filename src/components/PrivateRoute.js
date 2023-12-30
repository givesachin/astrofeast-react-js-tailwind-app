// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ path, element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
