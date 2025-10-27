import React from "react";
import "./Home.css";
import ceoPhoto from "../photo/ceo.jpeg"

export default function Home({ home, img}) {
  return (
    <div className="main">
      <div className="text-section">
        <h1 className="typing">I am {home.name} the CEO of</h1>
        <h2>{home.title}</h2>
        <p>{home.tagline}</p>
      </div>

      <div className="photo">
        <img
          src={ceoPhoto}
          alt="CEO of MBCA"
        />
      </div>
    </div>
  );
}
