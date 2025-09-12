import React from "react";
import { MdOutlinePerson } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

function AdminTable() {
  const users = [
    {
      id: 1,
      name: "Raja Rafii",
      email: "raja@mail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Afdhal R",
      email: "Afdhal@mail.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Raja Rafii",
      email: "raja@mail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 4,
      name: "Afdhal R",
      email: "Afdhal@mail.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 5,
      name: "Afdhal R",
      email: "Afdhal@mail.com",
      role: "User",
      status: "Inactive",
    },
  ];
  return (
    <table className="min-w-full border border-gray-200 divide-y divide-gray-200 bg-white shadow rounded-lg">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-bold text-black">
            Username
          </th>
          <th className="px-6 py-3 text-left text-sm font-bold text-black">
            Email
          </th>
          <th className="px-6 py-3 text-left text-sm font-bold text-black">
            Role
          </th>
          <th className="px-6 py-3 text-left text-sm font-bold text-black">
            Status
          </th>
          <th className="px-6 py-3 text-center text-sm font-bold text-black">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-gray-50">
            <td className="px-6 py-4 text-sm font-medium text-gray-900">
              {user.name}
            </td>
            <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
            <td className="px-6 py-4">
              <div
                className={`p-2 w-20 text-center rounded-full text-xs font-semibold ${
                  user.role === "Admin"
                    ? "bg-[#3B82F6] text-white"
                    : "bg-[#F4A261] text-white"
                }`}
              >
                {user.role}
              </div>
            </td>
            <td className="px-6 py-4">
              <div
                className={`p-2 w-20 text-center rounded-full text-xs font-semibold ${
                  user.status === "Active"
                    ? "bg-[#06D6A0] text-white"
                    : "bg-[#E63946] text-white"
                }`}
              >
                {user.status}
              </div>
            </td>
            <td className="px-6 py-4 flex gap-2 justify-center">
              <button className="p-2 bg-[#F5FB87] cursor-pointer hover:bg-yellow-400 rounded">
                ✏️
              </button>
              <button className="p-2 bg-[#FF4A4A] cursor-pointer hover:bg-red-600 text-white rounded">
                🗑️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AdminTable;
