"use client";
import { useState } from "react";

export default function RsvpPanel() {
  const [count, setCount] = useState(0);
  return (
    <section>
      <p>Students going: {count}</p>
      <button onClick={() => setCount(count + 1)}>I am going</button>
    </section>
  );
}
