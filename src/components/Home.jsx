import React from "react";
import "./Home.css";

export default function Home({ home }) {
  return (
    <div className="main">
      <div className="text-section">
        <h1 className="typing">I am {home.name} the CEO of</h1>
        <h2>{home.title}</h2>
        <p>{home.tagline}</p>
      </div>

      <div className="photo">
        <img
          src="src/photo/WhatsApp Image 2025-10-27 at 16.11.11.jpeg"
          alt="CEO of MBCA"
        />
      </div>
    </div>
  );
}
