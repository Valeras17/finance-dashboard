import React from "react";

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="border px-3 py-1 rounded text-sm dark:text-white"
    >
      {darkMode ? "🌙 Dark" : "🌞 Light"}
    </button>
  );
}

export default ThemeToggle;
