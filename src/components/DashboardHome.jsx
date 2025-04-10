import React from "react";
import { ImLab } from "react-icons/im";
import { FaAnchorCircleCheck } from "react-icons/fa6";

import {
  Headphones,
  Timer,
  FilePlus,
  FileText,
  Stethoscope,
} from "lucide-react";
import { BsFillHeartPulseFill } from "react-icons/bs";


const DashboardHome = () => {
  return (
    <div className="flex flex-col space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Card - Minimized Icon */}
        <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-base font-medium text-gray-700 mb-2">
                Total Appointments
              </h2>
              <p className="text-2xs font-bold text-blue-600">24</p>
              <p className="text-sm text-gray-500 mt-1">
                8 upcoming this month
              </p>
            </div>
            <div className="bg-gray-50 p-2 rounded-full">
              <FilePlus size={24} className="text-blue-500" />
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-base font-medium text-gray-700 mb-2">
                Next Appointment
              </h2>
              <p className="text-2xs font-bold text-[#111827]">
                Dr. Sarah Wilson
              </p>
              <p className="text-sm text-gray-500 mt-1">Tomorrow, 10:00 AM</p>
            </div>
            <div className="bg-gray-50 p-2 rounded-full">
              <Timer size={24} className="text-green-500" />
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-base font-medium text-gray-700 mb-2">
                Health Status
              </h2>
              <p className="text-2xs font-bold text-[#10B981]">Good</p>
              <p className="text-sm text-gray-500 mt-1">
                Last check: 2 days ago
              </p>
            </div>
            <div className="bg-gray-50 p-2 rounded-full">
              <BsFillHeartPulseFill size={24} className="text-red-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Generate Report Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm py-3 px-4 transition-colors flex items-center justify-center gap-2 font-medium">
          <FilePlus size={18} />
          <span>Generate Report</span>
        </button>

        {/* View Reports Button */}
        <button className="bg-gray-800 hover:bg-gray-900 text-white rounded-lg shadow-sm py-3 px-4 transition-colors flex items-center justify-center gap-2 font-medium">
          <FileText size={18} />
          <span>View Reports</span>
        </button>

        {/* Contact Support Button */}
        <button className="bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-sm py-3 px-4 transition-colors flex items-center justify-center gap-2 font-medium">
          <Headphones size={18} />
          <span>Contact Support</span>
        </button>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-5">
          Recent Activities
        </h2>

        <div className="flex flex-col space-y-4">
          {/* First Activity Item */}
          <div className="bg-gray-50 rounded-md p-2 hover:bg-gray-100 transition-colors border border-gray-100">
            <div className="flex items-center gap-3">
              <FaAnchorCircleCheck className="text-blue-500" size={18} />
              <h3 className="font-medium text-gray-800">
                Prescription Renewed
              </h3>
            </div>
            <p className="text-sm text-gray-600 mt-2 ml-8">
              Dr. Michael Brown - 2 days ago
            </p>
          </div>

          {/* Second Activity Item */}
          <div className="bg-gray-50 rounded-md p-2 hover:bg-gray-100 transition-colors border border-gray-100">
            <div className="flex items-center gap-3">
              <Stethoscope className="text-green-500" size={18} />
              <h3 className="font-medium text-gray-800">Check-up Completed</h3>
            </div>

            <p className="text-sm text-gray-600 mt-2 ml-8">
              Dr. Sarah Wilson - 5 days ago
            </p>
          </div>

          {/* Third Activity Item */}
          <div className="bg-gray-50 rounded-md p-2 hover:bg-gray-100 transition-colors border border-gray-100">
            <div className="flex items-center gap-3">
              <ImLab className="text-purple-500" size={18} />
              <h3 className="font-medium text-gray-800">
                Lab Results Available
              </h3>
            </div>

            <p className="text-sm text-gray-600 mt-2 ml-8">
              Central Lab - 1 week ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
