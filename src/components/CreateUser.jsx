import React from "react";
import { FaCheck } from "react-icons/fa6";
import { RxReset } from "react-icons/rx";

const CreateUser = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose(); // close modal kalau klik luar
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={handleOutsideClick}
    >
      {/* stopPropagation agar klik dalam modal tidak menutup */}
      <div
        className="bg-white p-6 rounded-2xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-2.5 w-[635px] h-[500px] text-center text-xl font-bold">
          CREATE USER
          <div className="p-2 text-left grid items-center gap-2">
            Username
            <input
              placeholder="Enter Username..."
              type="text"
              className="bg-white p-3 font-extralight inset-shadow-sm/40 rounded-4xl w-full"
            />
          </div>
          <div className="p-2 text-left grid items-center gap-2">
            Email
            <input
              placeholder="Enter Email..."
              type="email"
              className="bg-white p-3 inset-shadow-sm/40 rounded-4xl w-full font-extralight"
            />
          </div>
        </div>
        <div className="flex gap-2 pl-4">
          <button
            type="button"
            className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#ff4a4a] hover:bg-[#ff4a4a]/80 text-white shadow-md rounded"
          >
            <RxReset /> Reset
          </button>
          <button
            type="button"
            className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-[#06D6A0] text-white hover:bg-[#06D6A0]/80 shadow-md rounded"
          >
            <FaCheck /> Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
