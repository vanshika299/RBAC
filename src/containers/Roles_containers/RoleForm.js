import React, { useEffect, useState } from "react";
import "./roles.css";

const RoleForm = ({ role, permissions, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    permissions: [],
  });

  useEffect(() => {
    if (role) {
      setFormData(role);
    }
  }, [role]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePermissionChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      permissions: checked
        ? [...prevData.permissions, value]
        : prevData.permissions.filter((perm) => perm !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="role-form-container">
      <h3>{role ? "Edit Role" : "Add Role"}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Role Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <fieldset className="permissions-fieldset">
          <legend>Assign Permissions:</legend>
          {permissions.map((perm) => (
            <div key={perm.id} className="permission-checkbox">
              <input
                type="checkbox"
                id={`perm-${perm.id}`}
                value={perm.id}
                checked={formData.permissions.includes(perm.id)}
                onChange={handlePermissionChange}
              />
              <label htmlFor={`perm-${perm.id}`}>{perm.name}</label>
            </div>
          ))}
        </fieldset>

        <div className="form-buttons">
          <button type="submit">{role ? "Save Changes" : "Add Role"}</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoleForm;
