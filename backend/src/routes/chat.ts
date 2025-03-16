import express from "express";
// import { HfInference } from '@huggingface/inference';
import dotenv from "dotenv";
import Groq from 'groq-sdk';

dotenv.config();

// const hf = new HfInference(process.env.HUGGINGFACE_API_KEY as string);
const groqClient = new Groq({
    apiKey: process.env.GROQ_API_KEY, // Ensure this is set in your .env file
  });

const router = express.Router();
const repo_id = "meta-llama/Llama-Guard-3-8B"

router.post('/', async (req, res) => {
    const { message } = req.body;
    
    if (!message) {
    res.status(400).json({ error: 'Message is required' });
      return; 
    }
  
    try {
    //   const response = await hf.textGeneration({
    //     model: repo_id, // A faster and better model for text generation
    //     inputs: message,
    //   });
    const groqResponse = await groqClient.chat.completions.create({
        messages: [{ role: 'user', content: message }],
        model: 'llama3-8b-8192', // Replace with your desired model
      });
  
      res.json({  groq_response: groqResponse.choices[0].message.content });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to generate text' });
    }
  });
  
  export default router;