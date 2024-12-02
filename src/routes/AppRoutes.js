// src/routes/AppRoutes.js
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import RolesPage from "../containers/Roles/RolesPage";
import UsersPage from "../containers/Users/UsersPage";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/login" component={LoginPage} />
      <Route path="/users" component={UsersPage} />
      <Route path="/roles" component={RolesPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRoutes;
