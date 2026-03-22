"use client";
import { useState } from "react";

export default function Generator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const generate = () => {
    setResult(`✨ AI Design: ${input} nails with a unique twist 💅`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-pink-500 mb-4">Nail Generator</h1>

      <input
        placeholder="Describe your nails..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <button onClick={generate} className="bg-pink-500 text-white px-4 py-2 rounded">
        Generate
      </button>

      {result && <p className="mt-4">{result}</p>}
    </div>
  );
}
