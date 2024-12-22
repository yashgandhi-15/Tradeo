import React from "react";

const Navbar = () => {
  return (
    <div className="p-4 flex items-center justify-between bg-indigo-600 text-white">
      <h1 className="text-xl font-bold">Tradeo</h1>
      <button className="bg-indigo-800 px-4 py-2 rounded hover:bg-indigo-700">
        Share Page
      </button>
    </div>
  );
};

export default Navbar;
