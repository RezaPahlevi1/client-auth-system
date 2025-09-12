import { IoPersonSharp } from "react-icons/io5";

import Navbar from "../components/Navbar";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

function UserDashboard() {
  const [isEditing, setIsEditing] = useState(false);

  const { user } = useAuth();

  const testing = () => {
    toast.success("Edit successed!");
    window.location.reload();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className="w-3/5 h-120 bg-white mt-20 shadow-xl p-2">
        <div className="ml-5">
          <h1 className=" flex items-center gap-2 font-medium text-4xl">
            <IoPersonSharp />
            Profile Information
          </h1>
          <h3 className=" text-[14px] mt-2">
            Your registered profile information.
          </h3>
        </div>
        {/* isi */}
        <div className="flex flex-col gap-7 pt-10 px-10">
          <div className="flex justify-between">
            <span className="font-semibold text-3xl">username</span>
            <input
              placeholder={user.username}
              type="text"
              disabled={!isEditing}
              className={`text-2xl pl-4 rounded-md  w-150 ${
                !isEditing
                  ? "bg-gray-200 shadow-xs shadow-gray-700"
                  : "bg-white border-1"
              }`}
            />
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-3xl">email</span>
            <input
              placeholder={user.email}
              type="text"
              disabled={!isEditing}
              className={`text-2xl pl-4 rounded-md  w-150 ${
                !isEditing
                  ? "bg-gray-200 shadow-xs shadow-gray-700"
                  : "bg-white border-1"
              }`}
            />
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-3xl">Role</span>
            <input
              placeholder={user.role}
              type="text"
              disabled
              className="text-2xl pl-4 rounded-md  w-150 bg-gray-200 shadow-xs shadow-gray-700 "
            />
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-3xl">Status</span>
            <input
              placeholder={user.status}
              type="text"
              disabled
              className="text-2xl pl-4 rounded-md  w-150 bg-gray-200 shadow-xs shadow-gray-700 "
            />
          </div>
        </div>
        {/* button */}
        <div className="flex justify-between pt-5 px-10">
          <button
            className={`w-30 h-12 font-bold cursor-pointer rounded-[10px] shadow-sm shadow-black ${
              isEditing
                ? "bg-[#e63946] hover:bg-[#e40a1c] "
                : "bg-[#F5FB87] hover:bg-[#f2ff02]"
            }`}
            onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "cancel" : "Edit"}
          </button>
          <button
            className={`w-30 h-12 font-bold  rounded-[10px]  ${
              isEditing
                ? "bg-[#66aaf3] hover:bg-[#0575ed] cursor-pointer shadow-sm shadow-black"
                : "bg-gray-200"
            }`}
            disabled={!isEditing}
            onClick={testing}
            type="submit">
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
