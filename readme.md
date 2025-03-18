# AI Chat Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/Node-%3E=14-green.svg)](https://nodejs.org/)

An **AI-powered chat application** built with Express.js on the backend and React (Next.js) on the frontend. It uses Groq's AI models to generate intelligent, real-time responses based on user input.

## Features

- **Real-Time Chat:** Seamlessly interact with an AI assistant.
- **Groq AI Integration:** Leverages Groq's `llama3-8b-8192` model for generating responses.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Modern Stack:** Built using Express.js (backend) and Next.js with React (frontend).

## Prerequisites

- **Node.js (v14 or above)**
- **npm** (or yarn)
- **Groq API Key:** Required for accessing Groq's AI models.

## Installation

### Backend Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/amanraj8848/ai-chat-app.git
   cd ai-chat-app
   ```

2. **Navigate to the Backend Directory**

   ```bash
   cd backend
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Configure Environment Variables**

   Create a `.env` file in the backend directory and add:

   ```env
   GROQ_API_KEY=your_groq_api_key_here
   PORT=5000
   ```

5. **Start the Backend Server**

   ```bash
   npm start
   ```

   The backend server will be running at http://localhost:5000.

### Frontend Setup

1. **Navigate to the Frontend Directory**

   ```bash
   cd ../frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the frontend directory with the following:

   ```env
   VITE_APP_API_URL=http://localhost:5000
   ```

4. **Start the Frontend Development Server**

   ```bash
   npm run dev
   ```

   The frontend will be available at http://localhost:3000.

## Usage

1. **Open the Application:**
   Navigate to http://localhost:3000 in your browser.

2. **Chat Interface:**
   - Type your message in the input field.
   - Press Enter or click the Send button.
   - The AI assistant will process your message and display a response.

3. **Interactive Features:**
   - Enjoy a smooth user experience with real-time message updates and a modern UI.
   - If no messages exist, a welcome screen will guide you to start the conversation.

## Project Structure

```
ai-chat-app/
├── .qodo
├── backend/
│   ├── models/
│   ├── node_modules/
│   ├── src/
│   │   ├── models/
│   │   └── routes/
│   │       ├── chat.ts         # Express route for handling chat messages
│   │       └── index.ts        # Main entry point for the backend server
│   ├── .env                    # Environment variables for backend
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json            # Backend dependencies and scripts
│   └── tsconfig.json           # TypeScript configuration for the backend
└── frontend/
    ├── .bolt
    ├── .qodo
    ├── node_modules/
    ├── src/
    │   ├── components/
    │   │   ├── ChatInput.tsx   # Component for the message input area
    │   │   ├── ChatMessage.tsx # Component for rendering individual chat messages
    │   │   ├── Footer.tsx      # Footer component
    │   │   ├── ThemeToggle.tsx # Component to toggle UI themes (dark/light)
    │   │   └── WelcomeScreen.tsx # Welcome screen component for first-time users
    │   ├── lib/
    │   │   └── api.ts          # API client for backend communication
    │   ├── App.tsx             # Main application component
    │   ├── index.css           # Global CSS styles
    │   ├── main.tsx            # Entry point for the React application
    │   └── vite-env.d.ts       # TypeScript declarations for Vite
    ├── .env                    # Environment variables for frontend
    ├── .gitignore
    ├── .eslint.config.js       # ESLint configuration
    └── index.html              # HTML entry point
```

## Contributing

Contributions are welcome! Follow these steps:

1. **Fork the Repository**

2. **Create a New Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add your feature description"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request** on GitHub.

## License

This project is licensed under the MIT License.

## Acknowledgements

- **Groq:** For providing the AI models.
- **React.js and Next.js:** For the modern frontend framework.
- **Express.js:** For the robust backend framework.
- **Framer Motion:** For interactive animations.
- **Lucide Icons:** For beautiful iconography.

Special thanks to the open source community for the tools and libraries that made this project possible.
