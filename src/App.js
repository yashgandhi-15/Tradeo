import React from 'react';
import Header from './components/Header';
import ChatBox from './components/ChatBox';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <ChatBox />
    </div>
  );
};

export default App;
