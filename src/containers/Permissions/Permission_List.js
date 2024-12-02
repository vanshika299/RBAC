import React, { useState } from "react";
import PermissionForm from "./PermissionForm";
import "./permissions.css";

const PermissionsList = ({ permissions, onEdit, onDelete }) => {
  const [selectedPermission, setSelectedPermission] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (permission) => {
    setSelectedPermission(permission);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div className="permissions-container">
      <h2>Permissions</h2>
      <table className="permissions-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id}>
              <td>{permission.id}</td>
              <td>{permission.name}</td>
              <td>{permission.description}</td>
              <td>
                <button onClick={() => handleEdit(permission)}>Edit</button>
                <button onClick={() => handleDelete(permission.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditing && (
        <PermissionForm
          permission={selectedPermission}
          onClose={() => setIsEditing(false)}
          onSave={onEdit}
        />
      )}
    </div>
  );
};

export default PermissionsList;
