import React from "react";
import WidgetCard from "../components/WidgetCard";
import { motion } from "framer-motion";

const Dashboard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 md:ml-64">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-900 dark:text-white">
          {/* Welcome Widget */}
          <WidgetCard title="Welcome to DevBoard 👋">
            Start customizing your dashboard widgets.
          </WidgetCard>

          {/* Code Goals Widget */}
          <WidgetCard title="Code Goals 🎯">No goals yet.</WidgetCard>

          {/* GitHub Commits Widget */}
          <WidgetCard title="GitHub Commits ✔️">
            Activity widget coming soon.
          </WidgetCard>

          {/* Pomodoro Timer Widget */}
          <WidgetCard title="Pomodoro Timer ⌛">
            Focus timer will appear here.
          </WidgetCard>

          {/* Daily Coding Streak Widget */}
          <WidgetCard title="Daily Coding Streak 🔥">No Streak yet.</WidgetCard>

          {/* Recenty Activity Widget */}
          <WidgetCard title="Recent Activity 🏆">
            No Recent Activity yet.
          </WidgetCard>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
