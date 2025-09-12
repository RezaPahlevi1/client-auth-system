import AdminTable from "../components/AdminTable";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";
import { MdOutlinePerson } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div>
      <Navbar />
      <div className="flex flex-col w-full mt-10">
        <div className="flex flex-row justify-between p-5 px-10">
          <div className="gap-5 flex-row flex">
            <button className="cursor-pointer hover:bg-[#0B63F3] p-3 w-60 flex flex-row justify-center items-center gap-3 shadow-md text-white font-bold bg-[#3B82F6] rounded-md">
              <div className="text-2xl">
                <MdOutlineAdminPanelSettings />
              </div>
              CREATE ADMIN
            </button>
            <button className="cursor-pointer hover:bg-[#FB7D19] p-3 w-60 shadow-md flex flex-row justify-center gap-3 items-center text-white font-bold bg-[#F4A261] rounded-md">
              <div className="text-2xl">
                <MdOutlinePerson />
              </div>
              CREATE USER
            </button>
          </div>
          <div className="flex flex-row gap-5">
            <div className="relative w-35">
              <select className="appearance-none p-3 pr-8 bg-[#56acbd] cursor-pointer rounded-3xl text-white w-full">
                <option>Role</option>
                <option>Alphabet</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-3xl text-white pointer-events-none">
                <RiArrowDropDownLine />
              </div>
            </div>

            <input
              placeholder="Search..."
              className="bg-white p-3 inset-shadow-sm/40 rounded-4xl w-120"
            />
          </div>
        </div>
        <div>
          <AdminTable />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
