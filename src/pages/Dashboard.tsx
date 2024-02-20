import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import Alert from "../components/Alert";

import moment from "moment";

interface UserResponse {
  id: number;
  name: string;
  email: string;
  profile_picture_file?: string;
  password: string;
  role?: string;
}

interface CarResponse {
  id: number;
  car_name: string;
  car_rentperday: number;
  car_size: string;
  car_img?: string;
  created_by: UserResponse;
  updated_by: UserResponse;
  deleted_by: UserResponse;
  create_at?: Date;
  update_at?: Date;
  delete_at?: Date;
}

const cars_api_base_url =
  "https://binar-car-rental-be-production.up.railway.app";

export default function Dashboard() {
  const [cars, setCars] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [carToDelete, setCarToDelete] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5); // Sesuaikan dengan kebutuhan Anda
  const [totalItems, setTotalItems] = useState(0);
  const totalPages = Math.ceil(totalItems / pageSize);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const logoutHandler = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("email");

    setIsLoggedIn(false);
  };
  return (
    <div className="flex  min-h-fit">
      <Sidenav />

      <div className={`flex flex-col w-full  ${isSidebarOpen}`}>
        <Navbar
          onSidebarToggle={toggleSidebar}
          isLoggedIn={isLoggedIn}
          onLogout={logoutHandler}
        />

        <div className="main-content flex h-full  ">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="content grid w-full  bg-gray-100 px-6 pt-9 ">
            <div className="shadow overflow-hidden h-fit border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 ">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      CreateAt
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      UpdateAt
                    </th>
                    <th
                      scope="col"
                      className="relative px-6 py-3 text-xs text-end font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Edit
                    </th>
                    <th
                      scope="col"
                      className="relative px-6 py-3 text-xs text-end font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {cars.map((car: CarResponse, index: number) => (
                    <tr key={car.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-left">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {index + 1 + (currentPage - 1) * pageSize}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-left">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {car.car_name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-left">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {car.car_size}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-left">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {car.car_rentperday}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-left">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {moment(car.create_at).format(
                                "DD/MM/YYYY HH:mm:ss a"
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-left">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {moment(car.update_at).format(
                                "DD/MM/YYYY HH:mm:ss a"
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <button className="text-green-500 hover:text-green-700">
                          <Link
                            to={`/update-car/${car.id}`}
                            className="inline-flex font-bold justify-center"
                          >
                            Edit
                          </Link>
                        </button>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <button className="ml-2 text-red-500 font-bold  hover:text-red-700">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pagination flex items-center justify-center  px-4 py-3  ">
                <div className=" flex  justify-start gap-x-2">
                  <button
                    className="pagination-button relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Prev
                  </button>

                  {/* Tampilkan daftar angka halaman */}
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      className={`pagination-button relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    className="pagination-button relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={cars.length < pageSize}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
