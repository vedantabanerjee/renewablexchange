/* 
THIS IS THE CHAT PAGE
FEATURES:
  - Take the input prompt from the input box and then sent it to some llm's completions end-point and retrive the JSON output and stringyfy it to std::out
  - The llm should be trained and focused on two things:
    - The corpus of data dealing with the microgrids and macrogrids and their enerygy production
    - general data about sustainablity and green energy to help customers figure out what's right for them
*/

"use client";
import React, { useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Gotta change the flow, treat this as a starting point/boilerplate code - v

  // Function to send message to LLM
  const sendMessage = async () => {
    if (!inputMessage.trim()) return; // to avoid sending empty messages

    setIsLoading(true);

    try {
      // Replace with the actual completions endpoint of the llm after deciding
      const response = await axios.post("/api/sendMessage", {
        message: inputMessage,
      });
      const { data } = response.data;

      setMessages([...messages, { text: inputMessage, fromUser: true }]);
      setMessages([...messages, { text: data, fromUser: false }]);
      setInputMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-10 text-lg">
        <h1>
          <b>Welcome to renewxB0t!</b>
        </h1>
      </div>
      <div className="mx-auto max-w-lg my-8 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col h-80 bg-gray-100 overflow-y-auto p-4">
          Ask me about microgrids in India, their power production, excess
          energy availability, and more!
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 ${
                msg.fromUser ? "self-end" : "self-start"
              } max-w-xs break-words ${
                msg.fromUser
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } p-2 rounded-lg shadow-md`}
            >
              {msg.text}
            </div>
            //no idea about the squiggly lines but works
          ))}
        </div>
        <div className="p-4 bg-gray-200">
          <div className="flex items-center space-x-2">
            {/* input box code */}
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 bg-white rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-500"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
