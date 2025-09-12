import React from "react";
import { FaCheck } from "react-icons/fa6";
import { RxReset } from "react-icons/rx";

const CreateAdmin = ({ isOpen, onClose }) => {
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
      onClick={handleOutsideClick}>
      {/* stopPropagation agar klik dalam modal tidak menutup */}
      <div
        className="bg-white p-6 rounded-2xl shadow-lg"
        onClick={(e) => e.stopPropagation()}>
        <div className="p-2.5 w-[635px] h-[500px] text-center text-xl font-bold">
          CREATE ADMIN
          <div className="p-2 text-left grid items-center gap-2">
            Username
            <input
              type="text"
              className="border-2 px-2 py-1"
            />
          </div>
          <div className="p-2 text-left grid items-center gap-2">
            Email
            <input
              type="email"
              className="border-2 px-2 py-1"
            />
          </div>
        </div>
        <div className="flex gap-2 pl-4">
          <button
            type="button"
            className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-red-300 hover:bg-red-400 rounded">
            <RxReset /> Reset
          </button>
          <button
            type="button"
            className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-yellow-300 hover:bg-yellow-400 rounded">
            <FaCheck /> Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAdmin;
