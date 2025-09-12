import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { fetchAllUsers } from "../api/auth";

function AdminTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchAllUsers();
        setUsers(data);
      } catch (error) {
        console.error("Gagal ambil data users", error);
      }
    };

    loadUsers();
  }, []);

  // Hitung sisa baris kosong
  const emptyRows = Math.max(0, 5 - users.length);

  return (
    <table className="min-w-full border table-fixed border-gray-200 divide-y divide-gray-200 bg-white shadow rounded-lg">
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
          <th className="px-6 py-3 text-center text-sm font-bold text-black"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {/* Render user data */}
        {users.map((user) => (
          <tr
            key={user.id}
            className="hover:bg-gray-50">
            <td className="px-6 py-4 h-16 text-sm font-medium text-gray-900">
              {user.username}
            </td>
            <td className="px-6 py-4 h-16 text-sm text-gray-600">
              {user.email}
            </td>
            <td className="px-6 py-4">
              <div
                className={`p-2 w-20 text-center rounded-full text-xs font-semibold ${
                  user.role.toLowerCase() === "admin"
                    ? "bg-[#3B82F6] text-white"
                    : "bg-[#F4A261] text-white"
                }`}>
                {user.role}
              </div>
            </td>
            <td className="px-6 py-4 h-16">
              <div
                className={`p-2 w-20 text-center rounded-full text-xs font-semibold ${
                  user.status.toLowerCase() === "active"
                    ? "bg-[#06D6A0] text-white"
                    : "bg-[#E63946] text-white"
                }`}>
                {user.status}
              </div>
            </td>
            <td className="px-6 py-4 h-16 flex gap-2 justify-center">
              <button className="p-2 bg-[#F5FB87] cursor-pointer hover:bg-yellow-400 rounded">
                <MdOutlineEdit />
              </button>
              <button className="p-2 bg-[#FF4A4A] cursor-pointer hover:bg-red-600 text-black rounded">
                <FaTrashAlt />
              </button>
            </td>
          </tr>
        ))}

        {/* Render baris kosong jika kurang dari 5 */}
        {[...Array(emptyRows)].map((_, i) => (
          <tr
            key={`empty-${i}`}
            className="hover:bg-gray-50">
            <td className="px-6 py-4 h-16 text-xl text-black font-extrabold "></td>
            <td className="px-6 py-4 h-16 text-xl text-black font-extrabold"></td>
            <td className="px-6 py-4 h-16 text-xl text-black font-extrabold"></td>
            <td className="px-6 py-4 h-16 text-xl text-black font-extrabold"></td>
            <td className="px-6 py-4 h-16 text-xl text-black font-extrabold text-center"></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AdminTable;
