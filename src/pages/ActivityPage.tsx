import React from "react";
import WidgetCard from "../components/WidgetCard";
import { motion } from "framer-motion";

const ActivityPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 md:ml-64">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Activity
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-900 dark:text-white">
          <WidgetCard title="GitHub Commits">No data yet</WidgetCard>
          <WidgetCard title="Pomodoro Timer">00:00</WidgetCard>
          <WidgetCard title="Code Goals">No goals yet</WidgetCard>
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityPage;
