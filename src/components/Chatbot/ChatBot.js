import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { config } from "./chatbotConfig";
import { MessageParser } from "./MessageParser";
import { ActionProvider } from "./ActionProvider";
import { FaRobot } from "react-icons/fa"; // Chatbot Icon

export const ChatBot = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div>
      {/* Chatbot Toggle Button */}
      <button className="chatbot-btn" onClick={() => setShowChat(!showChat)}>
        <FaRobot />
      </button>

      {/* Chatbot Window */}
      {showChat && (
        <div className="chatbot-container">
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>
      )}
    </div>
  );
};
