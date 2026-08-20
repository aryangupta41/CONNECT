import React, { useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';

const ChatPanel = ({ messages, currentUser, partner, messageInput, setMessageInput, sendMessage, onClose }) => {
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-4 flex items-center justify-between">
        <div>
          <p className="font-semibold">Chat with Aryan 💕</p>
          <p className="text-xs opacity-90">{partner.online ? 'Online ✨' : 'Offline'}</p>
        </div>
        <button onClick={onClose}><X className="w-6 h-6" /></button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.sender === currentUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs px-4 py-2 rounded-2xl ${
              msg.sender === currentUser
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}>
              <p>{msg.text}</p>
              <p className="text-xs opacity-70 mt-1">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="border-t border-gray-200 p-4 flex gap-2">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-pink-400"
        />
        <button
          onClick={sendMessage}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full p-3 hover:shadow-lg transition"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;
