import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiActivity, FiSettings } from "react-icons/fi";

const Sidebar: React.FC = () => {
  const links = [
    { name: "Dashboard", path: "/", icon: <FiHome /> },
    { name: "Activity", path: "/activity", icon: <FiActivity /> },
    { name: "Settings", path: "/settings", icon: <FiSettings /> },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-screen fixed">
      <div className="p-6 font-bold text-xl text-gray-900 dark:text-white">
        DevBoard
      </div>
      <nav className="mt-10">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 my-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition ${
                isActive ? "bg-gray-200 dark:bg-gray-700 font-semibold" : ""
              }`
            }
          >
            <span className="mr-3">{link.icon}</span>
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
