// src/containers/Users/UsersPage.js
import React, { useEffect, useState } from "react";
import { addUser, deleteUser, fetchUsers, updateUser } from "../../services/UserService";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [roles] = useState([{ id: "1", name: "Admin" }, { id: "2", name: "Editor" }]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers().then((res) => setUsers(res.data));
  }, []);

  const handleAddUser = (user) => {
    if (editingUser) {
      updateUser(editingUser.id, user).then(() => {
        setUsers(users.map((u) => (u.id === editingUser.id ? { ...u, ...user } : u)));
        setEditingUser(null);
      });
    } else {
      addUser(user).then((res) => setUsers([...users, res.data]));
    }
  };

  const handleDeleteUser = (id) => {
    deleteUser(id).then(() => setUsers(users.filter((user) => user.id !== id)));
  };

  return (
    <div>
      <h1>Users</h1>
      <UserForm onSubmit={handleAddUser} initialData={editingUser} roles={roles} />
      <UserTable users={users} onEdit={setEditingUser} onDelete={handleDeleteUser} />
    </div>
  );
};

export default UsersPage;
