import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Shield, Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onStartChat: (message: string) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartChat }) => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-primary-500" />,
      title: 'Smart Conversations',
      description: 'Experience natural, intelligent dialogue with our AI assistant'
    },
    {
      icon: <Zap className="w-6 h-6 text-primary-500" />,
      title: 'Instant Responses',
      description: 'Get quick, accurate answers to your questions'
    },
    {
      icon: <Shield className="w-6 h-6 text-primary-500" />,
      title: 'Secure & Private',
      description: 'Your conversations are protected and confidential'
    }
  ];

  const quickPrompts = [
    "What can you help me with?",
    "Tell me about your capabilities",
    "How do you work?"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center h-full text-center px-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mb-6"
      >
        <MessageSquare className="w-10 h-10 text-white" />
      </motion.div>

      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Welcome to AI Assistant
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        I'm here to help you with anything you need. Start a conversation by selecting a prompt or typing your own message.
      </p>

      <div className="grid md:grid-cols-3 gap-4 w-full max-w-2xl mb-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="p-4 rounded-xl bg-gray-50 dark:bg-dark-300"
          >
            <div className="mb-3">{feature.icon}</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {quickPrompts.map((prompt, index) => (
          <motion.button
            key={prompt}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.6 }}
            onClick={() => onStartChat(prompt)}
            className="px-4 py-2 rounded-lg bg-white dark:bg-dark-300 border border-gray-200 dark:border-dark-400 
              hover:bg-gray-50 dark:hover:bg-dark-400 transition-colors
              text-gray-700 dark:text-gray-300"
          >
            {prompt}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};