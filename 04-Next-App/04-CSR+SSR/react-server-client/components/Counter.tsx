"use client";
import React from "react";
import { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-4xl font-bold flex flex-col">Home Page</h1>
      <h3>Counter 0</h3>
      <h3 className="text-xl mb-4">Counter: {count}</h3>
      <button className="bg-blue-600 text-white p-4 rounded-lg mr-2" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="bg-slate-600 text-white p-4 rounded-lg">Dummy</button>
    </div>
  );
};

export default Counter;