import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Widgets will go here soon */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Welcome to DevBoard 👋
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Start customizing your dashboard widgets.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
