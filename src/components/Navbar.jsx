import React from "react";
import useAuth from "../hooks/useAuth";
import LogoutButton from "./LogoutButton";

function Navbar() {
  const { user } = useAuth();
  return (
    <div className="w-full h-20 text-white font-bold bg-[#56ACBD]  justify-between flex items-center px-10">
      <div className="">
        <h1>Halo {user.username}</h1>
      </div>
      <div className="uppercase text-2xl">{user.role} DASHBOARD</div>
      <div className="">
        <LogoutButton />
      </div>
    </div>
  );
}

export default Navbar;
