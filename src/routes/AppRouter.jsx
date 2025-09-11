import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import UserDashboard from "../pages/UserDashboard";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/dashboard-admin"
          element={<AdminDashboard />}
        />
        <Route
          path="/dashboard-user"
          element={<UserDashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}
