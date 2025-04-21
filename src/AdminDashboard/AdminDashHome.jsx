import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function AdminDashHome() {
  // Sample data for charts
  const revenueData = [
    { name: "Jan", revenue: 18500 },
    { name: "Feb", revenue: 21200 },
    { name: "Mar", revenue: 19800 },
    { name: "Apr", revenue: 24500 },
    { name: "May", revenue: 26300 },
    { name: "Jun", revenue: 24583 },
  ];

  const usersData = [
    { name: "Jan", users: 850 },
    { name: "Feb", users: 920 },
    { name: "Mar", users: 1050 },
    { name: "Apr", users: 980 },
    { name: "May", users: 1200 },
    { name: "Jun", users: 1100 },
  ];

  // Sample data for activity table
  const activities = [
    {
      id: 1,
      username: "johndoe",
      action: "Placed an order #12345",
      time: "12 min ago",
      status: "Completed",
    },
    {
      id: 2,
      username: "sarahsmith",
      action: "Requested refund #67890",
      time: "37 min ago",
      status: "Pending",
    },
    {
      id: 3,
      username: "mikebrown",
      action: "Updated profile",
      time: "2 hours ago",
      status: "Completed",
    },
  ];

  // Status badge color configuration
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Cancelled":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Total Users</span>
              <span className="text-2xl font-bold mt-1">5,248</span>
              <span className="text-sm text-green-500 mt-1">+12.5%</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl">
              👥
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">New Orders</span>
              <span className="text-2xl font-bold mt-1">1,427</span>
              <span className="text-sm text-green-500 mt-1">+8.2%</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-xl">
              📦
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Revenue</span>
              <span className="text-2xl font-bold mt-1">$24,583</span>
              <span className="text-sm text-green-500 mt-1">+5.7%</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl">
              💰
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Growth</span>
              <span className="text-2xl font-bold mt-1">32.5%</span>
              <span className="text-sm text-red-500 mt-1">-2.4%</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white text-xl">
              📈
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* Revenue Chart */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-base font-medium text-gray-800 mb-2">
              Revenue Overview
            </h3>
            <div style={{ width: "100%", height: 200 }}>
              <ResponsiveContainer>
                <LineChart
                  data={revenueData}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#4b7bec"
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Users Chart */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-base font-medium text-gray-800 mb-2">
              User Statistics
            </h3>
            <div style={{ width: "100%", height: 200 }}>
              <ResponsiveContainer>
                <BarChart
                  data={usersData}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="users" fill="#20bf6b" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 flex justify-between items-center">
            <h3 className="text-base font-medium text-gray-800">
              Recent Activity
            </h3>
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
              View All
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Username
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activities.map((activity) => (
                  <tr key={activity.id}>
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                      {activity.username}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                      {activity.action}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                      {activity.time}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          activity.status
                        )}`}
                      >
                        {activity.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashHome;
