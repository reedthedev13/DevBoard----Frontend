import React from "react";
import Navbar from "../components/NavBar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="flex-1 p-6 sm:p-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;
