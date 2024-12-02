// src/context/RBACContext.js
import React, { createContext, useState } from "react";

export const RBACContext = createContext();

export const RBACProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [users, setUsers] = useState([]);

  return (
    <RBACContext.Provider value={{ roles, setRoles, permissions, setPermissions, users, setUsers }}>
      {children}
    </RBACContext.Provider>
  );
};
