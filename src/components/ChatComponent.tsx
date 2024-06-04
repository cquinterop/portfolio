'use client';

import { useChat } from 'ai/react';

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: 'api/chat',
  });

  return (
    <div className="w-full h-full mx-auto p-4 bg-gray-100 rounded shadow">
  <div className="h-full overflow-y-auto border border-gray-300 rounded p-4">
    {messages.map((message, index) => (
      <div key={index} className="mb-2">
        <span className={message.role === 'user' ? 'text-blue-600 font-bold' : 'text-green-600 font-bold'}>
          {message.role === 'user' ? 'User: ' : 'AI: '}
        </span>
        <span>{message.content}</span>
      </div>
    ))}
  </div>
  <form onSubmit={handleSubmit} className="mt-4 flex items-center">
    <input
      name="prompt"
      value={input}
      onChange={handleInputChange}
      id="input"
      className="w-full p-2 border border-gray-300 rounded-l"
      placeholder="Type your message here"
    />
    <button
      type="submit"
      className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      Submit
    </button>
  </form>
</div>

  );
}