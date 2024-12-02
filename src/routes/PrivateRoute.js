import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const PrivateRoute = () => {
  const { user } = useAuthContext();

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
