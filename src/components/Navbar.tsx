import { useDarkMode } from "../hooks/useDarkmode";
import { Moon, Sun } from "lucide-react";

export default function NavBar() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        DevBoard
      </h1>

      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-gray-800" />
        )}
      </button>
    </nav>
  );
}
