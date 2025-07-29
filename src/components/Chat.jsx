const sampleMessages = [
  {
    from: "Obi‑Wan",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    time: "2h ago",
    text: "You were the Chosen One!",
    status: "Seen",
  },
  {
    from: "You",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    time: "1h ago",
    text: "I loved you.",
    status: "Delivered",
  },
];

import React, { useEffect, useState } from "react";
import { createSocketConnection } from "../utils/socket";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Chat = ({ onSend }) => {
  const { toUserId } = useParams();
  const [input, setInput] = useState("");
  const user = useSelector((store) => store.user);
  const userId = user?._id;

  const send = () => {
    if (input.trim()) {
      onSend(input.trim());
      setInput("");
    }
  };

  useEffect(() => {
    if (!toUserId || !userId) return;
    const socket = createSocketConnection();
    socket.emit("joinChat", { userId, toUserId });

    return () => {
      socket.disconnect();
    };
  }, [userId, toUserId]);

  return (
    <div className="flex flex-col w-full max-w-md mx-auto h-[80vh] border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between bg-primary px-4 py-3">
        <div className="flex items-center space-x-2">
          <img
            src={sampleMessages[0].avatar}
            alt="Chat Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-base-content font-semibold">Obi‑Wan Kenobi</div>
        </div>
        <time className="text-xs text-base-content/70">2 hrs ago</time>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-base-200">
        {sampleMessages.map((msg, i) => (
          <div key={i} className={`chat ${msg.from === "you" ? "chat-end" : "chat-start"}`}>
            <div className="chat-header text-base-content">
              {msg.from}
              <time className="ml-2 text-xs text-base-content/50">{msg.time}</time>
            </div>
            <div className="chat-bubble">{msg.text}</div>
            <div className="chat-footer text-base-content/50">{msg.status}</div>
          </div>
        ))}
      </div>

      {/* Input with send button */}
      <div className="flex items-center border-t px-4 py-3 bg-base-100">
        <input
          type="text"
          placeholder="Type a message..."
          className="input input-bordered flex-grow mr-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button onClick={send} className="btn btn-primary" disabled={!input.trim()}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
