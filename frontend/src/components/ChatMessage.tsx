import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User, Copy, Check } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ChatMessageProps {
  message: string;
  isAi: boolean;
  timestamp: string;
  isTyping?: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isAi, timestamp, isTyping }) => {
  const [copied, setCopied] = React.useState(false);

  // Function to detect if the message contains code
  const detectCodeBlock = (text: string) => {
    // Simple detection: check if the message starts with common programming keywords
    const codeKeywords = ['function', 'const', 'let', 'var', 'class', 'import', 'export', 'interface', 'type'];
    const firstWord = text.trim().split(' ')[0];
    return codeKeywords.includes(firstWord) || text.includes('```');
  };

  // Function to extract code and language from message
  const extractCode = (text: string) => {
    if (text.includes('```')) {
      const matches = text.match(/```(\w+)?\n([\s\S]+?)```/);
      if (matches) {
        return {
          language: matches[1] || 'javascript',
          code: matches[2].trim()
        };
      }
    }
    return {
      language: 'javascript',
      code: text
    };
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderMessage = () => {
    if (isTyping) {
      return (
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      );
    }

    if (isAi && detectCodeBlock(message)) {
      const { language, code } = extractCode(message);
      return (
        <div className="relative group">
          <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => handleCopyCode(code)}
              className="p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <SyntaxHighlighter
            language={language}
            style={atomDark}
            customStyle={{
              margin: 0,
              borderRadius: '0.5rem',
              padding: '1rem',
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      );
    }

    return <p className="text-sm md:text-base">{message}</p>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex ${isAi ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div className={`flex ${isAi ? 'flex-row' : 'flex-row-reverse'} max-w-[80%] items-start gap-3`}>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center
            ${isAi ? 'bg-gradient-to-br from-primary-400 to-primary-600' : 'bg-gray-100 dark:bg-dark-300'}`}
        >
          {isAi ? (
            <Bot className="w-5 h-5 text-white" />
          ) : (
            <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          )}
        </motion.div>
        <div className={`flex flex-col ${isAi ? 'items-start' : 'items-end'}`}>
          <div className={`px-4 py-2 rounded-2xl ${
            isAi 
              ? 'bg-white dark:bg-dark-200 text-gray-800 dark:text-gray-200 shadow-sm' 
              : 'bg-primary-500 dark:bg-primary-600 text-white'
          }`}>
            {renderMessage()}
          </div>
          {timestamp && (
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{timestamp}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};