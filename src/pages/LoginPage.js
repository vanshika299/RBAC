import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import './LoginPage.css'; // Add your CSS here for styling the page

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation (you can expand this based on real-world needs)
    if (email === 'admin@gmail.com' && password === '123') {
        login({ email }); // Log the user in and set their authentication state
        navigate('/dashboard');
      } else {
        setError('Invalid credentials, please try again.');
      }
    };
    

  return (
    <div className="login-page">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
