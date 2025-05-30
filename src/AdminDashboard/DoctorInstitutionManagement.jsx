import React, { useState } from "react";
import { Search, Calendar, Eye } from "lucide-react";
import { FaArrowsRotate, FaPowerOff } from "react-icons/fa6";
import hospitalImage from "../assets/hospital.jpg";
import doctor from "../assets/doctor.jpg";
import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";
export default function DoctorInstitutionManagement() {
  const [activeTab, setActiveTab] = useState("pending");

  const pendingDoctors = [
    { id: 1, name: "Dr. Sarah Johnson", type: "Doctor", image: doctor },
  ];

  const pendingInstitutions = [
    {
      id: 1,
      name: "City General Hospital",
      type: "Hospital",
      image: hospitalImage,
    },
  ];

  const verifiedAccounts = [
    {
      id: 1,
      name: "Dr. Emily Wilson",
      type: "Doctor",
      status: "Active",
      verifiedDate: "15 Apr 2025",
      image: doctor1,
    },
    {
      id: 2,
      name: "Dr. James Miller",
      type: "Doctor",
      status: "Active",
      verifiedDate: "12 Apr 2025",
      image: doctor2,
    },
  ];

  return (
    <div className="p-2 sm:p-4 md:p-6 max-w-6xl mx-auto bg-white">
      <h1 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
        Doctor & Institution Management
      </h1>

      {/* First Section: Search and Filters */}
      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="relative flex-grow max-w-md w-full">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search doctors, institutions..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full text-sm"
          />
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
          <select className="border rounded-lg px-2 sm:px-3 py-2 bg-white text-sm w-full sm:w-auto">
            <option>All Types</option>
            <option>Doctors</option>
            <option>Hospitals</option>
            <option>Clinics</option>
          </select>

          <select className="border rounded-lg px-2 sm:px-3 py-2 bg-white text-sm w-full sm:w-auto">
            <option>All Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Suspended</option>
          </select>

          <button className="flex items-center justify-center gap-2 border rounded-lg px-2 sm:px-3 py-2 bg-white text-sm w-full sm:w-auto">
            <Calendar size={16} />
            <span>Date Range</span>
          </button>
        </div>
      </div>

      {/* Second Section: Status Tabs as Buttons */}
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        <button
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg ${
            activeTab === "pending"
              ? "bg-[#EFF6FF] text-[#2563EB]"
              : " text-gray-700"
          }`}
          onClick={() => setActiveTab("pending")}
        >
          Pending
        </button>
        <button
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg ${
            activeTab === "approved"
              ? "bg-[#EFF6FF] text-[#2563EB]"
              : " text-gray-700"
          }`}
          onClick={() => setActiveTab("approved")}
        >
          Approved
        </button>
        <button
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg ${
            activeTab === "suspended"
              ? "bg-[#EFF6FF] text-[#2563EB]"
              : " text-gray-700"
          }`}
          onClick={() => setActiveTab("suspended")}
        >
          Suspended
        </button>
      </div>

      {/* Third Section: Pending Approval */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">
          Pending Approval
        </h2>

        {/* Doctors pending approval */}
        <div className="space-y-2 sm:space-y-3">
          {pendingDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="border border-gray-200 rounded-lg p-2 sm:p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">{doctor.name}</p>
                  <p className="text-xs text-gray-500">Doctor</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
                <button className="text-blue-600 hover:underline text-xs">
                  <span>View Documents</span>
                </button>
                <button className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-lg hover:bg-green-200 text-xs">
                  Accept
                </button>
                <button className="bg-red-100 text-red-700 px-2 sm:px-3 py-1 rounded-lg hover:bg-red-200 text-xs">
                  Reject
                </button>
              </div>
            </div>
          ))}

          {/* Institutions pending approval */}
          {pendingInstitutions.map((institution) => (
            <div
              key={institution.id}
              className="border border-gray-200 rounded-lg p-2 sm:p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src={institution.image}
                  alt={institution.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">{institution.name}</p>
                  <p className="text-xs text-gray-500">{institution.type}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
                <button className="text-blue-600 hover:underline text-xs">
                  <span>View Documents</span>
                </button>
                <button className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-lg hover:bg-green-200 text-xs">
                  Accept
                </button>
                <button className="bg-red-100 text-red-700 px-2 sm:px-3 py-1 rounded-lg hover:bg-red-200 text-xs">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fourth Section: Verified Accounts */}
      <div>
        <h2 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">
          Verified Accounts
        </h2>
        <div className="overflow-x-auto -mx-2 sm:mx-0">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  Type
                </th>
                <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Verified Date
                </th>
                <th className="px-2 sm:px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {verifiedAccounts.map((account) => (
                <tr key={account.id}>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <img
                        src={account.image}
                        alt={account.name}
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                      />
                      <div>
                        <p className="text-xs sm:text-sm font-medium">
                          {account.name}
                        </p>
                        <p className="text-xs text-gray-500 sm:hidden">
                          {account.type}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap text-sm hidden sm:table-cell">
                    {account.type}
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        account.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : account.status === "Suspended"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {account.status}
                    </span>
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap text-xs sm:text-sm hidden md:table-cell">
                    {account.verifiedDate}
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 whitespace-nowrap text-right">
                    <div className="flex gap-1 sm:gap-2 justify-end">
                      <button className="text-xs text-gray-500 hover:text-blue-600">
                        <Eye size={16} />
                      </button>
                      <button className="text-xs text-gray-500 hover:text-green-600">
                        <FaPowerOff size={14} />
                      </button>
                      <button className="text-xs text-gray-500 hover:text-red-600">
                        <FaArrowsRotate size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
