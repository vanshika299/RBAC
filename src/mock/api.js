// src/mock/api.js
import db from "./db.json";

export const fetchUsers = () => Promise.resolve(db.users);
export const fetchRoles = () => Promise.resolve(db.roles);
export const fetchPermissions = () => Promise.resolve(db.permissions);
