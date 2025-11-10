import React, { type ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/NavBar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Navbar at top */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 transition-colors">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
