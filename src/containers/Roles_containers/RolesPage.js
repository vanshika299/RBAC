import React, { useState } from 'react';
import RoleForm from './RoleForm';
import RoleTable from './RoleTable';
import './Roles.css';

const RolesPage = () => {
  const [roles, setRoles] = useState([
    { id: 'R001', name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 'R002', name: 'Editor', permissions: ['Read', 'Write'] },
    { id: 'R003', name: 'Viewer', permissions: ['Read'] },
  ]);

  const handleAddRole = (role) => {
    setRoles([...roles, role]);
  };

  const handleDeleteRole = (roleId) => {
    setRoles(roles.filter((role) => role.id !== roleId));
  };

  return (
    <div className="roles-page">
      <h2>Role Management</h2>
      <RoleForm onAddRole={handleAddRole} />
      <RoleTable roles={roles} onDeleteRole={handleDeleteRole} />
    </div>
  );
};

export default RolesPage;
