import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import SidebarAdmin from "./SidebarAdmin";

const AdminDashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // Auto-close sidebar on mobile screens
      if (mobile) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    // Check on initial load
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header
        toggleSidebar={toggleSidebar}
        isMobile={isMobile}
        sidebarOpen={sidebarOpen}
      />

      <div className="flex flex-1 overflow-hidden">
        {isMobile && sidebarOpen && (
          <div
            className="fixed inset-0 bg-opacity-50 z-20"
            onClick={toggleSidebar}
          />
        )}

        <div
          className={`
          ${isMobile ? "fixed left-0 top-14 h-full z-30" : "relative"} 
          ${sidebarOpen ? "" : "transform -translate-x-full"}
          transition-transform duration-300 ease-in-out
        `}
        >
          <SidebarAdmin isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </div>

        <main
          className={`
          flex-1 overflow-auto p-4 md:p-6
          ${isMobile && sidebarOpen ? "blur-sm" : ""}
          transition-all duration-300
        `}
        >
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
