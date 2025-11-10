import React from "react";
import { motion } from "framer-motion";

interface WidgetCardProps {
  title: string;
  children?: React.ReactNode;
}

const WidgetCard: React.FC<WidgetCardProps> = ({ title, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
          {title}
        </h3>
        <div>{children}</div>
      </div>
    </motion.div>
  );
};

export default WidgetCard;
