import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 p-6 shadow-lg">
      <div className="flex items-center space-x-4">
        <img 
          src="/logo.jpg"  // Update to the correct logo path
          alt="ChatBox Logo" 
          className="w-16 h-16 rounded-full shadow-md"
        />
        <h1 className="text-white text-3xl font-bold">Welcome to ChatBox</h1>
      </div>
    </header>
  );
};

export default Header;
