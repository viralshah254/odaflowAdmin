// src/routes.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UsersList from "./pages/UsersList";
import AdminLayout from "./layouts/AdminLayout";
import { useAuthStore } from "./stores/auth";

export function AppRoutes() {
  const isAuthenticated = useAuthStore(s => s.isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/" 
          element={
            isAuthenticated ? <AdminLayout /> : <Navigate to="/login" replace />
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="users" element={<UsersList />} />
          {/* add more routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}