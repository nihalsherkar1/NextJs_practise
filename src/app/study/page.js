"use client";
import { useState } from "react";

export default function Study() {
  const [color, setColor] = useState({ color: "red" });
  return (
    <div>
      <h1 style={color}>Study</h1>

      <button onClick={() => setColor({ color: "blue" })}>Change Color</button>
    </div>
  );
}
