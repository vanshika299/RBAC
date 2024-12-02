// utils/helpers.js

// Format Date (MM/DD/YYYY)
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };
  
  // Validate Email Format
  export const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email); // Returns true if valid, false if invalid
  };
  
  // Validate if a string is empty
  export const isEmpty = (str) => {
    return !str || str.trim() === '';
  };
  
  // Generate a random ID (e.g., for unique user ID, session ID, etc.)
  export const generateRandomId = (length = 8) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };
  
  // Check if a string is a valid URL
  export const isValidUrl = (str) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(str); // Returns true if valid URL, false otherwise
  };
  
  // Deep clone an object or array (to avoid mutation)
  export const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj)); // Simple deep cloning method
  };
  
  