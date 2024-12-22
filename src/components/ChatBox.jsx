import React, { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");

    // Simulate a bot response (you can replace this with API calls later)
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { sender: "bot", text: "Here is your response!" }
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col bg-gray-800 p-4 rounded-xl max-w-3xl mx-auto mt-6">
      {/* Chat Messages */}
      <div className="flex flex-col space-y-4 mb-4 max-h-80 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`bg-${message.sender === "user" ? "blue" : "gray"}-600 text-white p-3 rounded-xl max-w-xs`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="flex items-center space-x-2 mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded-lg bg-gray-700 text-white"
          placeholder="Type your message..."
        />
        <button 
          onClick={handleSendMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
