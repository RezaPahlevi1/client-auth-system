import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { fetchAllUsers } from "../api/auth";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function AdminTable() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Hitung total halaman
  const totalPages = Math.ceil(users.length / itemsPerPage);

  // Hitung indeks data untuk halaman saat ini
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  // Hitung baris kosong yang dibutuhkan untuk mempertahankan tinggi tabel
  const emptyRows = itemsPerPage - currentUsers.length;

  // Fungsi untuk pindah halaman
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Generate nomor halaman untuk ditampilkan sesuai dengan gambar
  const getPageNumbers = () => {
    const pages = [];

    // Jika total halaman <= 7, tampilkan semua
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // Selalu tampilkan halaman pertama
    pages.push(1);

    // Hitung range untuk halaman di sekitar current page
    let startRange = Math.max(2, currentPage - 2);
    let endRange = Math.min(totalPages - 1, currentPage + 2);

    // Jika current page dekat dengan awal, tampilkan lebih banyak halaman di awal
    if (currentPage <= 4) {
      endRange = Math.min(6, totalPages - 1);
    }

    // Jika current page dekat dengan akhir, tampilkan lebih banyak halaman di akhir
    if (currentPage >= totalPages - 3) {
      startRange = Math.max(2, totalPages - 5);
    }

    // Tambahkan "..." setelah halaman 1 jika ada gap
    if (startRange > 2) {
      pages.push("...");
    }

    // Tambahkan halaman di sekitar current page
    for (let i = startRange; i <= endRange; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    // Tambahkan "..." sebelum halaman terakhir jika ada gap
    if (endRange < totalPages - 1) {
      pages.push("...");
    }

    // Selalu tampilkan halaman terakhir (jika bukan halaman 1)
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

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

  return (
    <div className="min-w-full max-w-6xl mx-auto">
      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full border table-fixed border-gray-200 divide-y divide-gray-200">
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
            {/* Render user data untuk halaman saat ini */}
            {currentUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
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
                        ? "bg-[#3b82f6] text-white"
                        : "bg-[#f4a261] text-white"
                    }`}
                  >
                    {user.role}
                  </div>
                </td>
                <td className="px-6 py-4 h-16">
                  <div
                    className={`p-2 w-20 text-center rounded-full text-xs font-semibold ${
                      user.status.toLowerCase() === "active"
                        ? "bg-[#06D6A0] text-white"
                        : "bg-[#e63946] text-white"
                    }`}
                  >
                    {user.status}
                  </div>
                </td>
                <td className="px-6 py-4 h-16 flex gap-2 justify-center">
                  <button className="p-2 bg-yellow-200 cursor-pointer hover:bg-yellow-400 rounded transition-colors">
                    <MdOutlineEdit />
                  </button>
                  <button className="p-2 bg-red-400 cursor-pointer hover:bg-red-600 text-white rounded transition-colors">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}

            {/* Render baris kosong jika kurang dari 5 */}
            {[...Array(emptyRows)].map((_, i) => (
              <tr key={`empty-${i}`} className="hover:bg-gray-50">
                <td className="px-6 py-4 h-16"></td>
                <td className="px-6 py-4 h-16"></td>
                <td className="px-6 py-4 h-16"></td>
                <td className="px-6 py-4 h-16"></td>
                <td className="px-6 py-4 h-16"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center px-4 py-3 bg-gray-100 border-t border-gray-200">
        <nav
          className="relative z-0 inline-flex items-center space-x-2"
          aria-label="Pagination"
        >
          {/* Previous button */}
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="p-2 text-gray-600 hover:text-black disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            <MdChevronLeft className="h-5 w-5" />
          </button>

          {/* Page numbers */}
          {getPageNumbers().map((page, index) => (
            <React.Fragment key={index}>
              {page === "..." ? (
                <span className="px-2 text-gray-500">...</span>
              ) : (
                <button
                  onClick={() => goToPage(page)}
                  className={`px-2 text-sm font-medium ${
                    currentPage === page
                      ? "text-black font-bold"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}

          {/* Next button */}
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="p-2 text-gray-600 hover:text-black disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            <MdChevronRight className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </div>
  );
}

export default AdminTable;
