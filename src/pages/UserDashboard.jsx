import Navbar from "../components/Navbar";

function UserDashboard() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className="w-3/5 h-120 bg-white mt-20 shadow-xl">
        <div>
          <h1></h1>
          <h3></h3>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
