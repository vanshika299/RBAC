import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Import AuthProvider
import { AuthProvider } from "./context/AuthContext";

// Import other components and pages
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./routes/PrivateRoute";
import "./styles/index.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
