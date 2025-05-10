// SettingsPage.jsx
import React from "react";
import profile from "../assets/profile.jpg"; // Adjust the path as necessary
import { Lock, Bell, Shield, Camera } from "lucide-react";

const SettingPage = () => {
  return (
    <div className="flex flex-col space-y-3 px-4 sm:px-6 md:px-8">
      {/* First Card - Profile Information */}
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
        <div className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Profile picture with camera icon */}
            <div className="relative">
              <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={profile}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1">
                <Camera size={16} className="text-white" />
              </div>
            </div>

            {/* User info and buttons */}
            <div className="flex flex-col gap-2 flex-1 items-center sm:items-start mt-4 sm:mt-0">
              <h3 className="font-bold text-lg">John Doe</h3>
              <p className="text-sm text-gray-500">Member since April 2025</p>

              {/* Buttons in a horizontal flex layout */}
              <div className="flex flex-col sm:flex-row gap-2 mt-2">
                <button className="w-full sm:w-36 rounded-2xl bg-[#D1FAE5] hover:bg-[#A8F0D3] text-[#047857] px-3 sm:px-4 py-1 text-sm sm:text-base">
                  Verify
                </button>
                <button className="w-full sm:w-36 rounded-2xl bg-[#DBEAFE] hover:bg-[#A8F0D3] text-[#1D4ED8] px-3 sm:px-4 py-1 text-sm sm:text-base">
                  Get Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Card - Personal Information */}
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Personal Information
        </h2>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Left Column */}
          <div className="flex flex-col space-y-4 flex-1">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="john.doe@example.com"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="+1 (555) 123-4567"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-4 flex-1 mt-4 md:mt-0">
            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                defaultValue="123 Main Street, Apt 4B, New York, NY 10001"
              ></textarea>
            </div>

            {/* Time Zone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time Zone
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                <option>(GMT-06:00) Central Time (US & Canada)</option>
                <option>(GMT-07:00) Mountain Time (US & Canada)</option>
                <option>(GMT-08:00) Pacific Time (US & Canada)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Third Card - Security Settings */}
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Security Settings
        </h2>

        <div className="flex flex-col space-y-6">
          {/* Password */}
          <div className="border-b pb-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-4 gap-2 sm:gap-0">
              <div>
                <h3 className="text-lg font-medium text-gray-800">Password</h3>
                <p className="text-gray-500 text-sm">
                  Last changed 3 months ago
                </p>
              </div>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors mt-2 sm:mt-0">
                Change Password
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Ensure your account is using a strong password. We recommend using
              a unique password that you don't use for other websites.
            </p>
          </div>

          {/* Two-Factor Authentication */}
          <div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-4 gap-2 sm:gap-0">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-gray-700 mr-2" />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    Two-Factor Authentication
                  </h3>
                  <p className="text-green-600 text-sm">Enabled</p>
                </div>
              </div>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors mt-2 sm:mt-0">
                Configure
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Add an extra layer of security to your account by requiring both
              your password and a verification code from your mobile device.
            </p>
          </div>
        </div>
      </div>

      {/* Fourth Card - Notification Settings */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center mb-4">
          <Bell className="h-5 w-5 text-gray-700 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">
            Notification Settings
          </h2>
        </div>

        <div className="flex flex-col space-y-4">
          {/* Email Notifications */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b gap-2 sm:gap-0">
            <div>
              <h3 className="font-medium text-gray-800">Email Notifications</h3>
              <p className="text-sm text-gray-500">
                Receive emails about your account activity
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer self-start sm:self-center">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {/* Push Notifications */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b gap-2 sm:gap-0">
            <div>
              <h3 className="font-medium text-gray-800">Push Notifications</h3>
              <p className="text-sm text-gray-500">
                Receive push notifications on your devices
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer self-start sm:self-center">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {/* Marketing Emails */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-3 gap-2 sm:gap-0">
            <div>
              <h3 className="font-medium text-gray-800">Marketing Emails</h3>
              <p className="text-sm text-gray-500">
                Receive emails about new features and offers
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer self-start sm:self-center">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
