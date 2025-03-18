import axios from "axios";
// Create an Axios instance with default settings
const apiClient = axios.create({
  // baseURL: "http://localhost:7000", // Replace with your actual backend URL
  baseURL: import.meta.env.VITE_APP_API_URL, // Replace with your actual backend URL
  headers: { "Content-Type": "application/json" },
});

// Function to send a message to the backend
export const sendMessage = async (message: string) => {
  try {
    const response = await apiClient.post("/chat", { message });
    return response.data; // Axios automatically parses JSON
  } catch (error) {
    console.error("Error fetching AI response:", error);
    throw new Error("Failed to fetch response");
  }
};
