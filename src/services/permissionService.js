// services/permissionService.js

import axios from 'axios';

// Set up the base URL for your API
const API_URL = 'http://localhost:3001/permissions'; // Replace with your actual API URL

// Get all permissions
export const getPermissions = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching permissions:', error);
    throw error;
  }
};

// Get a permission by ID
export const getPermissionById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching permission with ID ${id}:`, error);
    throw error;
  }
};

// Add a new permission
export const addPermission = async (permissionData) => {
  try {
    const response = await axios.post(API_URL, permissionData);
    return response.data;
  } catch (error) {
    console.error('Error adding permission:', error);
    throw error;
  }
};

// Update an existing permission
export const updatePermission = async (id, permissionData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, permissionData);
    return response.data;
  } catch (error) {
    console.error(`Error updating permission with ID ${id}:`, error);
    throw error;
  }
};

// Delete a permission
export const deletePermission = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting permission with ID ${id}:`, error);
    throw error;
  }
};
