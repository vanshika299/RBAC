import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // You can style this as you prefer

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to the Admin Dashboard</h1>
      <p>Here you can manage users, roles, and permissions.</p>
      <div className="dashboard-links">
        <Link to="/users">Manage Users</Link>
        <Link to="/roles">Manage Roles</Link>
        <Link to="/permissions">Manage Permissions</Link>
      </div>
    </div>
  );
};

export default Dashboard;
