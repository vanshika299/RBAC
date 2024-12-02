import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './Header.css'; // Include styles for the header

const Header = ({ user, onLogout }) => {
  return (
    <header className="header">
      <div className="logo">
        <h1>
          <Link to="/">MyApp</Link> {/* Change 'MyApp' to your app's name */}
        </h1>
      </div>

      <nav className="nav">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/roles">Roles</Link>
          </li>
          <li>
            <Link to="/permissions">Permissions</Link>
          </li>
        </ul>
      </nav>

      <div className="user-info">
        {user ? (
          <>
            <span className="user-name">{user.name}</span>
            <button className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link> // If no user, show login link
        )}
      </div>
    </header>
  );
};

export default Header;
