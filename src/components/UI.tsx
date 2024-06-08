"use client";
import { useChat } from 'ai/react';


export const UI = (props) => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: 'api/chat',
  });

  if (props.hidden) {
    return null;
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-between p-4 flex-col pointer-events-none">
        <div className="self-start backdrop-blur-md bg-white bg-opacity-50 p-4 rounded-lg">
          <h1 className="font-black text-xl">Portfolio</h1>
          <p>Chatbot</p>
        </div>
        <div className="overflow-scroll border-0 h-40 flex flex-col items-center gap-2 pointer-events-auto w-10/12 w-full mx-auto">
            <div className="h-full flex flex-col-reverse overflow-y-auto border border-gray-300 rounded p-4 custom-box">
                {messages.flatMap((message, index) => {
                    if(message.role === 'user'){
                        return []
                    }
                    return (
                        <div key={index} className="mb-2">
                            <span>{message.content}</span>
                        </div>
                    )

                })}
            </div>
            <form onSubmit={handleSubmit} className="mt-4 flex items-center">
                <input
                    name="prompt"
                    className="w-full placeholder:text-gray-800 placeholder:italic p-4 rounded-md bg-opacity-50 bg-white backdrop-blur-md"
                    placeholder="Type a message..."
                    value={input}
                    id="input"
                    onChange={handleInputChange}
                />
                <button
                    disabled={isLoading}
                    type="submit"
                    className={`bg-blue-500 hover:bg-blue-600 text-white p-4 px-10 font-semibold uppercase rounded-md ${
                    isLoading ? "cursor-not-allowed opacity-30" : ""
                    }`}
                >
                    Send
                </button>
            </form>
        </div>
      </div>
    </>
  );
};