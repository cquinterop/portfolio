import React from 'react';
import ChatComponent from '../components/ChatComponent';

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-full mx-auto p-4 bg-white rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Chat with Cristian Quintero AI</h1>
      <ChatComponent />
    </div>
  );
};

export default HomePage;
