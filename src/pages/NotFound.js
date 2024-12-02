import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // You can style this page as needed

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default NotFound;
