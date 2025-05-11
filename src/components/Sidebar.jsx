import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, BarChart2, FileText, Users, Settings } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const menuItems = [
    {
      name: "Dashboard",
      path: "/patient",
      icon: <Home className="h-5 w-5 mr-3" />,
    },
    {
      name: "Profile",
      path: "Profile",
      icon: <BarChart2 className="h-5 w-5 mr-3" />,
    },
    {
      name: "Appointment",
      path: "appointment",
      icon: <FileText className="h-5 w-5 mr-3" />,
    },
    {
      name: "Medical History",
      path: "medicalhistory",
      icon: <Users className="h-5 w-5 mr-3" />,
    },
    {
      name: "Settings",
      path: "setting",
      icon: <Settings className="h-5 w-5 mr-3" />,
    },
  ];

  // Handle click for mobile view
  const handleNavClick = (path) => {
    navigate(path);

    // Close sidebar on mobile after clicking a link
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <aside
      className={`bg-white w-64 shadow-md flex-shrink-0 transition-all duration-300 ease-in-out fixed md:relative h-full z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <nav className="p-4 h-full overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive =
              currentPath === item.path ||
              (currentPath === "/dashboard" && item.path === "/");

            return (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center px-4 py-2 rounded-md w-full text-left ${
                    isActive
                      ? "bg-[#EFF6FF] text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
