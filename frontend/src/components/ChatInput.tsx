import React, { useState } from 'react';
import { Send, Mic, PaperclipIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-400 transition-colors"
        >
          <PaperclipIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
        <div className="relative flex-1">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full px-4 py-3 pr-24 rounded-xl border border-gray-200 dark:border-dark-300 
              bg-gray-50 dark:bg-dark-200 text-gray-900 dark:text-gray-100
              placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600
              transition-all duration-200"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button
              type="button"
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-400 transition-colors"
            >
              <Mic className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="p-2 rounded-lg bg-primary-500 dark:bg-primary-600 text-white
                disabled:opacity-50 disabled:cursor-not-allowed
                transition-colors duration-200"
              disabled={!message.trim()}
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </form>
  );
};