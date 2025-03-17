"use client";
import { useState } from "react";

export default function Chat (){

  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-3xl font-bold mb-4">AI Chat App</h1>
      <div className="flex gap-2">
        <input className="border p-2 rounded w-80" type="text" value={input} placeholder="Enter your query here..." onChange={(e)=>setInput(e.target.value) } />
        <button className="bg-blue-500 text-white p-2 rounded" onClick={() => console.log("Message Sent:", input)} >
          Send
        </button>
       </div>

    </div>
  )
}