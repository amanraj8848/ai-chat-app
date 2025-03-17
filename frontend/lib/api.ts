import axios from "axios";

const API_BASE_URL = "http://localhost:6000"; // Update this if your backend runs on a different port

export const sendMessage = async (message: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/chat`, { message });
    return response.data; // Returns the chatbot response
  } catch (error) {
    console.error("Error sending message:", error);
    throw new Error("Failed to fetch response from server");
  }
};
