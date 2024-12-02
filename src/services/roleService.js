// services/roleService.js

import axios from 'axios';

// Set up the base URL for your API
const API_URL = 'http://localhost:3001/roles'; // Replace with your actual API URL

// Get all roles
export const getRoles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching roles:', error);
    throw error;
  }
};

// Get a role by ID
export const getRoleById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching role with ID ${id}:`, error);
    throw error;
  }
};

// Add a new role
export const addRole = async (roleData) => {
  try {
    const response = await axios.post(API_URL, roleData);
    return response.data;
  } catch (error) {
    console.error('Error adding role:', error);
    throw error;
  }
};

// Update an existing role
export const updateRole = async (id, roleData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, roleData);
    return response.data;
  } catch (error) {
    console.error(`Error updating role with ID ${id}:`, error);
    throw error;
  }
};

// Delete a role
export const deleteRole = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting role with ID ${id}:`, error);
    throw error;
  }
};
