import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ role }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  if (role && user.role !== role) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return <Outlet />;
}

export default PrivateRoute;
