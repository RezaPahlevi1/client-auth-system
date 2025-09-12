import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";

function AdminDashboard() {
  const { user } = useAuth();

  return (
    <h1>
      <Navbar />
      email {user.email}, role lu {user.role}
    </h1>
  );
}

export default AdminDashboard;
