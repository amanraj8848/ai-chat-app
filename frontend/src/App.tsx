import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Sparkles, Command, Settings } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { WelcomeScreen } from './components/WelcomeScreen';
import { Footer } from './components/Footer';
import { sendMessage } from './lib/api';

interface Message {
  id: string;
  text: string;
  isAi: boolean;
  timestamp: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (text: string) => {
    // Add user's message to the chat
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isAi: false,
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(true);

    try {
      // Send message to the backend and get the AI response
      const aiResponse = await sendMessage(text);
      console.log('AI Response:', aiResponse);  // Check what is returned from your backend

      // Assuming the backend returns a response with a property "groq_response" as mentioned in your working code.
      if (!aiResponse || !aiResponse.groq_response) {
        throw new Error('Invalid AI response');
      }

      // Add the AI response message to the chat
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse.groq_response,  // Extract the AI message
        isAi: true,
        timestamp: new Date().toLocaleTimeString()
      };

      // Update the messages state with the AI response
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);

      // Handle error by displaying an error message in the chat
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          text: "Sorry, there was an error processing your request.",
          isAi: true,
          timestamp: new Date().toLocaleTimeString()
        }
      ]);
    } finally {
      // Reset typing state after the response
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-100 dark:to-dark-200 transition-colors duration-200 flex flex-col">
      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-dark-200 rounded-2xl shadow-lg overflow-hidden backdrop-blur-lg backdrop-filter"
          >
            {/* Header */}
            <div className="px-6 py-4 bg-white dark:bg-dark-300 border-b border-gray-200 dark:border-dark-400 backdrop-blur-lg backdrop-filter">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold text-gray-900 dark:text-white">AI Assistant</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Always here to help</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-400 transition-colors">
                    <Settings className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                  <ThemeToggle />
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[calc(100vh-16rem)] overflow-y-auto px-6 py-4">
              <AnimatePresence mode="wait">
                {messages.length === 0 ? (
                  <WelcomeScreen onStartChat={handleSendMessage} />
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {messages.map((message) => (
                      <ChatMessage
                        key={message.id}
                        message={message.text}
                        isAi={message.isAi}
                        timestamp={message.timestamp}
                      />
                    ))}
                    {isTyping && (
                      <ChatMessage
                        message="..."
                        isAi={true}
                        timestamp=""
                        isTyping={true}
                      />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input Area */}
            <div className="px-6 py-4 bg-white dark:bg-dark-300 border-t border-gray-200 dark:border-dark-400">
              <ChatInput onSendMessage={handleSendMessage} />
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
