import React from "react";

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className="text-center">
      <button
        onClick={toggleTheme}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
      >
        {theme === "light" ? "Switch to Dark" : "Switch to Light"}
      </button>
    </div>
  );
};

export default ThemeToggle;
