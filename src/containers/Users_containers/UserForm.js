// src/containers/Users/UserForm.js
import React, { useState } from "react";

const UserForm = ({ onSubmit, initialData = {}, roles }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    role: initialData.role || "",
    status: initialData.status || "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label>Role:</label>
      <select name="role" value={formData.role} onChange={handleChange} required>
        <option value="" disabled>Select Role</option>
        {roles.map((role) => (
          <option key={role.id} value={role.name}>{role.name}</option>
        ))}
      </select>
      <label>Status:</label>
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
