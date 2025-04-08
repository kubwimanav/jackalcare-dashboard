import React from "react";
import {
  Users,
  UserPlus,
  CreditCard,
  RefreshCw,
  Headphones,
  Timer,
  Heart,
  FilePlus,
  FileText,
} from "lucide-react";
import { SiToptal } from "react-icons/si";

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
              <p className="text-2xs font-bold text-red-500">Good</p>
              <p className="text-sm text-gray-500 mt-1">
                Last check: 2 days ago
              </p>
            </div>
            <div className="bg-gray-50 p-2 rounded-full">
              <Heart size={24} className="text-red-500" />
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
          <div className="bg-gray-50 rounded-md p-4 hover:bg-gray-100 transition-colors border border-gray-100">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <UserPlus className="text-blue-500" size={18} />
                <h3 className="font-medium text-gray-800">
                  New User Registration
                </h3>
              </div>
              <span className="text-xs text-gray-500">2 hours ago</span>
            </div>
            <p className="text-sm text-gray-600 mt-2 ml-8">
              John Doe completed registration and verified email address.
            </p>
          </div>

          {/* Second Activity Item */}
          <div className="bg-gray-50 rounded-md p-4 hover:bg-gray-100 transition-colors border border-gray-100">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <CreditCard className="text-green-500" size={18} />
                <h3 className="font-medium text-gray-800">Payment Processed</h3>
              </div>
              <span className="text-xs text-gray-500">5 hours ago</span>
            </div>
            <p className="text-sm text-gray-600 mt-2 ml-8">
              Payment of $299 was successfully processed for order #45782.
            </p>
          </div>

          {/* Third Activity Item */}
          <div className="bg-gray-50 rounded-md p-4 hover:bg-gray-100 transition-colors border border-gray-100">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <RefreshCw className="text-purple-500" size={18} />
                <h3 className="font-medium text-gray-800">System Update</h3>
              </div>
              <span className="text-xs text-gray-500">Yesterday</span>
            </div>
            <p className="text-sm text-gray-600 mt-2 ml-8">
              The system was updated to version 2.3.0 with new features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
