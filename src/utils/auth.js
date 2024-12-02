// utils/auth.js

// Set token in localStorage
export const setAuthToken = (token) => {
    if (token) {
      localStorage.setItem('authToken', token); // Save token to localStorage
    } else {
      localStorage.removeItem('authToken'); // Remove token if no token is provided
    }
  };
  
  // Get token from localStorage
  export const getAuthToken = () => {
    return localStorage.getItem('authToken'); // Retrieve token from localStorage
  };
  
  // Check if user is logged in
  export const isLoggedIn = () => {
    const token = getAuthToken();
    return token ? true : false; // If token exists, return true (logged in), else false
  };
  
  // Decode JWT token (assuming it's in the form of a JWT)
  export const decodeToken = (token) => {
    if (!token) return null;
  
    const payload = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payload)); // Decode the base64 encoded token
    return decodedPayload;
  };
  
  // Log out user by removing the token from localStorage
  export const logout = () => {
    setAuthToken(null); // Remove the token
  };
  