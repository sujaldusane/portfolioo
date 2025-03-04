import React, { useState } from "react";
import "./Terminal.css"; // Import terminal styles

const Terminal = () => {
  const [output, setOutput] = useState(["Welcome to Sujal's Terminal! Type 'help' to begin. 💻"]);
  const [input, setInput] = useState("");

  const commands = {
    help: [
        "Available commands:",
        "👉 skills - Show my technical skills",
        "👉 projects - Show my latest projects",
        "👉 contact - Get my contact details",
        "👉 clear - Clear the terminal",
      ],
      skills: [
        "🔹 JavaScript | React.js | Node.js",
        "🔹 UI/UX Design | Figma | Adobe XD",
        "🔹 Full-Stack Development | MongoDB | Express.js",
      ],
      projects: [
        "1️⃣ Portfolio Website - React-based personal website.",
        "2️⃣ U-Haul Redesign - UI/UX enhancement for U-Haul.",
        "3️⃣ Temu Redesign - Improved user experience for Temu App.",
      ],
      contact: [
        "📧 Email: dusane.s@northeastern.edu",
        "🔗 LinkedIn: https://www.linkedin.com/in/sujal-dusane/",
      ],
    clear: [],
  };

  const handleCommand = (event) => {
    if (event.key === "Enter") {
      const command = input.toLowerCase().trim();
      setInput("");

      if (commands[command]) {
        setOutput([...output, `> ${command}`, ...commands[command]]);
      } else if (command === "clear") {
        setOutput([]);
      } else {
        setOutput([...output, `> ${command}`, "⚠️ Unknown command. Type 'help'."]);
      }
    }
  };

  return (
    <div className="terminal">
      <div className="terminal-body">
        {output.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className="terminal-input">
        <span className="terminal-prompt">sujal@portfolio:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
