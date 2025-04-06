import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BarChart2, FileText, Users, Settings } from "lucide-react";

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
      {
          name: "Dashboard",
          path: "/",
          icon: <Home className="h-5 w-5 mr-3" />
      },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <BarChart2 className="h-5 w-5 mr-3" />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FileText className="h-5 w-5 mr-3" />,
    },
      {
          name: "Medical History",
          path: "/medicalhistory",
          icon: <Users className="h-5 w-5 mr-3" />
      },
    {
      name: "Settings",
      path: "/setting",
      icon: <Settings className="h-5 w-5 mr-3" />,
      },
      
    
  ];

  return (
    <aside
      className={`bg-white w-64 shadow-md flex-shrink-0 transition-all duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive =
              currentPath === item.path ||
              (currentPath === "/dashboard" && item.path === "/");

            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-2 rounded-md ${
                    isActive
                      ? "bg-[#EFF6FF] text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
