import React, { useEffect, useState } from "react";
import "./permissions.css";

const PermissionForm = ({ permission, onClose, onSave }) => {
  const [formData, setFormData] = useState({ id: "", name: "", description: "" });

  useEffect(() => {
    if (permission) {
      setFormData(permission);
    }
  }, [permission]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="permission-form-container">
      <h3>{permission ? "Edit Permission" : "Add Permission"}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit">{permission ? "Save Changes" : "Add Permission"}</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default PermissionForm;
