import React from "react";

const DashboardHome = () => {
  return (
    <div className="flex flex-col space-y-6">
      {/* Three cards in a row (flex) */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-2">
            Total Users
          </h2>
          <p className="text-3xl font-bold text-blue-600">2,543</p>
          <p className="text-sm text-gray-500 mt-2">+12% from last month</p>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-2">Revenue</h2>
          <p className="text-3xl font-bold text-green-600">$42,980</p>
          <p className="text-sm text-gray-500 mt-2">+8% from last month</p>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-2">Conversion</h2>
          <p className="text-3xl font-bold text-purple-600">3.6%</p>
          <p className="text-sm text-gray-500 mt-2">+2% from last month</p>
        </div>
      </div>

      {/* Three buttons in a row (flex) */}
      <div className="flex flex-wrap gap-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Generate Report
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
          Export Data
        </button>
        <button className="px-4 py-2 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-100 transition-colors">
          Settings
        </button>
      </div>

      {/* One large card containing three cards in column */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Activities
        </h2>

        <div className="flex flex-col space-y-4">
          {/* First inner card */}
          <div className="border rounded-md p-4 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">New User Registration</h3>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              John Doe completed registration and verified email address.
            </p>
          </div>

          {/* Second inner card */}
          <div className="border rounded-md p-4 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Payment Processed</h3>
              <span className="text-sm text-gray-500">5 hours ago</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Payment of $299 was successfully processed for order #45782.
            </p>
          </div>

          {/* Third inner card */}
          <div className="border rounded-md p-4 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">System Update</h3>
              <span className="text-sm text-gray-500">Yesterday</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              The system was updated to version 2.3.0 with new features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
