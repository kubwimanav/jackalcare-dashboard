import { useState } from "react";
import {
  Calendar,
  LineChart,
  BarChart,
  PieChart,
  FileText,
  Download,
  ArrowUp,
  ArrowDown,
  User,
  ChevronDown,
} from "lucide-react";
import {
  LineChart as ReLineChart,
  Line,
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ReportAnalytics() {
  // State for date range, report type and dropdowns
  const [dateRange, setDateRange] = useState({
    start: "Apr 01, 2025",
    end: "Apr 25, 2025",
  });
  const [reportType, setReportType] = useState("Performance Report");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showReportTypes, setShowReportTypes] = useState(false);

  // Report types with icons
  const reportTypes = [
    { name: "Performance Report", icon: <LineChart size={16} /> },
    { name: "Revenue Analysis", icon: <BarChart size={16} /> },
    { name: "Patient Demographics", icon: <PieChart size={16} /> },
  ];

  // Sample dates for the date picker
  const availableDates = [
    "Apr 01, 2025",
    "Apr 05, 2025",
    "Apr 10, 2025",
    "Apr 15, 2025",
    "Apr 20, 2025",
    "Apr 25, 2025",
  ];

  // Sample data for charts
  const chartData = [
    { name: "Apr 1", appointments: 42, revenue: 2800 },
    { name: "Apr 5", appointments: 53, revenue: 3500 },
    { name: "Apr 10", appointments: 48, revenue: 3200 },
    { name: "Apr 15", appointments: 62, revenue: 4100 },
    { name: "Apr 20", appointments: 55, revenue: 3800 },
    { name: "Apr 25", appointments: 58, revenue: 4200 },
  ];

  // Sample data for stats
  const stats = [
    {
      title: "Total Appointments",
      value: "1,248",
      change: 12.5,
      icon: <Calendar size={20} />,
      color: "bg-blue-600",
    },
    {
      title: "Total Revenue",
      value: "$84,254",
      change: 8.2,
      icon: <LineChart size={20} />,
      color: "bg-green-500",
    },
    {
      title: "New Patients",
      value: "354",
      change: 5.1,
      icon: <User size={20} />,
      color: "bg-orange-500",
    },
    {
      title: "Cancellation Rate",
      value: "3.2%",
      change: 0.8,
      isNegative: true,
      icon: <Calendar size={20} />,
      color: "bg-red-500",
    },
  ];

  // Sample data for doctors and services
  const doctors = [
    { name: "Dr. Sarah Johnson", count: 126 },
    { name: "Dr. Michael Chen", count: 112 },
    { name: "Dr. Emily Rodriguez", count: 98 },
    { name: "Dr. James Wilson", count: 87 },
  ];

  const services = [
    { name: "General Checkup", count: 324, color: "bg-blue-600" },
    { name: "Dental Care", count: 256, color: "bg-green-500" },
    { name: "Dermatology", count: 187, color: "bg-orange-500" },
    { name: "Pediatrics", count: 143, color: "bg-red-500" },
  ];

  // Handler for date selection
  const handleDateSelect = (date, type) => {
    setDateRange((prev) => ({
      ...prev,
      [type]: date,
    }));
    setShowDatePicker(false);
  };

  // Handler for report type selection
  const handleReportTypeSelect = (type) => {
    setReportType(type);
    setShowReportTypes(false);
  };

  // Handler for closing all dropdowns when clicking outside
  const closeDropdowns = () => {
    setShowDatePicker(false);
    setShowReportTypes(false);
  };

  return (
    <div
      className="bg-gray-100 min-h-screen p-2 sm:p-4 md:p-6"
      onClick={closeDropdowns}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Date Range, Report Type, and Export Buttons */}
        <div className="bg-white rounded-lg shadow p-3 sm:p-4 md:p-6 mb-4 sm:mb-6">
          {/* Header title */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-lg sm:text-xl">
              Analytics Dashboard
            </h2>
            <div className="hidden sm:flex space-x-2">
              <button className="flex items-center bg-blue-600 text-white px-3 py-2 rounded text-sm">
                <Download size={16} className="mr-2" />
                Export CSV
              </button>
              <button className="flex items-center bg-blue-600 text-white px-3 py-2 rounded text-sm">
                <FileText size={16} className="mr-2" />
                Export PDF
              </button>
            </div>
          </div>

          {/* Filter options - Stacked on mobile, horizontal on desktop */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-col space-y-2 relative">
              <h3 className="text-sm font-medium text-gray-500">Date Range</h3>
              <div className="flex flex-wrap gap-2 items-center">
                <button
                  className="flex items-center bg-gray-100 px-3 py-2 rounded text-sm flex-grow sm:flex-grow-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDatePicker(!showDatePicker);
                    setShowReportTypes(false);
                  }}
                >
                  <Calendar size={14} className="mr-2" />
                  {dateRange.start}
                  <ChevronDown size={14} className="ml-2" />
                </button>
                <span className="mx-1">to</span>
                <button
                  className="flex items-center bg-gray-100 px-3 py-2 rounded text-sm flex-grow sm:flex-grow-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDatePicker(!showDatePicker);
                    setShowReportTypes(false);
                  }}
                >
                  <Calendar size={14} className="mr-2" />
                  {dateRange.end}
                  <ChevronDown size={14} className="ml-2" />
                </button>

                {/* Date picker dropdown */}
                {showDatePicker && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md border border-gray-200 z-10 p-2 w-full sm:w-64"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <p className="text-sm font-medium mb-2">Start Date</p>
                        {availableDates.map((date) => (
                          <button
                            key={`start-${date}`}
                            className={`block w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100 ${
                              dateRange.start === date
                                ? "bg-blue-50 text-blue-600"
                                : ""
                            }`}
                            onClick={() => handleDateSelect(date, "start")}
                          >
                            {date}
                          </button>
                        ))}
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">End Date</p>
                        {availableDates.map((date) => (
                          <button
                            key={`end-${date}`}
                            className={`block w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100 ${
                              dateRange.end === date
                                ? "bg-blue-50 text-blue-600"
                                : ""
                            }`}
                            onClick={() => handleDateSelect(date, "end")}
                          >
                            {date}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col space-y-2 relative">
              <h3 className="text-sm font-medium text-gray-500">Report Type</h3>
              <button
                className="flex items-center bg-gray-100 px-3 py-2 rounded text-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowReportTypes(!showReportTypes);
                  setShowDatePicker(false);
                }}
              >
                {reportTypes.find((r) => r.name === reportType)?.icon || (
                  <LineChart size={16} />
                )}
                <span className="mx-2">{reportType}</span>
                <ChevronDown size={14} />
              </button>

              {/* Report type dropdown */}
              {showReportTypes && (
                <div
                  className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md border border-gray-200 z-10 w-full sm:w-64"
                  onClick={(e) => e.stopPropagation()}
                >
                  {reportTypes.map((type) => (
                    <button
                      key={type.name}
                      className={`flex items-center w-full px-4 py-3 text-sm hover:bg-gray-100 ${
                        reportType === type.name
                          ? "bg-blue-50 text-blue-600"
                          : ""
                      }`}
                      onClick={() => handleReportTypeSelect(type.name)}
                    >
                      {type.icon}
                      <span className="ml-3">{type.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Export Buttons */}
            <div className="flex sm:hidden space-x-2 w-full mt-2">
              <button className="flex items-center justify-center bg-blue-600 text-white px-3 py-2 rounded text-sm flex-1">
                <Download size={16} className="mr-2" />
                Export CSV
              </button>
              <button className="flex items-center justify-center bg-blue-600 text-white px-3 py-2 rounded text-sm flex-1">
                <FileText size={16} className="mr-2" />
                Export PDF
              </button>
            </div>
          </div>
        </div>

        {/* 4 Stat Cards - Improved for Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 flex justify-between items-start"
            >
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                <p className="text-base font-semibold mb-1">{stat.value}</p>
                <div
                  className={`flex items-center text-xs ${
                    stat.isNegative ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {stat.isNegative ? (
                    <ArrowDown size={14} className="mr-1" />
                  ) : (
                    <ArrowUp size={14} className="mr-1" />
                  )}
                  <span>{stat.change}% from last month</span>
                </div>
              </div>
              <div className={`${stat.color} text-white p-2 rounded-lg flex`}>
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section - Better Mobile Sizing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Appointments Chart */}
          <div className="bg-white rounded-lg shadow p-3 sm:p-4 md:p-6">
            <h3 className="text-base font-medium text-gray-800 mb-2 sm:mb-4">
              Appointments Over Time
            </h3>
            <div className="h-56 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <ReLineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="appointments"
                    stroke="#4a6cf7"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                </ReLineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Revenue Chart */}
          <div className="bg-white rounded-lg shadow p-3 sm:p-4 md:p-6">
            <h3 className="text-base font-medium text-gray-800 mb-2 sm:mb-4">
              Revenue Trend
            </h3>
            <div className="h-56 md:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <ReBarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#4caf50" radius={[4, 4, 0, 0]} />
                </ReBarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Doctors Section - Improved for Mobile */}
          <div className="bg-white rounded-lg shadow p-3 sm:p-4">
            <h3 className="text-base font-medium text-gray-800 mb-3">
              Most Active Doctors
            </h3>
            <div className="space-y-3">
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center">
                    <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                      <User size={16} className="text-gray-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{doctor.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      {doctor.count} appointments
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section - Improved for Mobile */}
          <div className="bg-white rounded-lg shadow p-3 sm:p-4">
            <h3 className="text-base font-medium text-gray-800 mb-3">
              Most Active Services
            </h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center">
                    <div className={`${service.color} rounded w-8 h-8`}></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{service.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      {service.count} bookings
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
