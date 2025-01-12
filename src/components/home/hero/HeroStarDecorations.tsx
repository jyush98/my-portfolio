import React from "react";
import "../../../styles/hero-star-decorations.css";


const symbols = ["*", "+", "x", "#"]; // Optional: Use different "star-like" symbols

const HeroStarDecorations: React.FC = () => {
  const stars = Array.from({ length: 9 }); // Create 9 stars (one per cell in 3x3 grid)

  return (
    <div className="hero-star-decorations">
      {stars.map((_, index) => (
        <div
          key={index}
          className="star"
          style={{
            fontSize: `${Math.random() * 20 + 10}px`, // Random size between 10px and 30px
            animationDelay: `${Math.random() * 5}s`, // Staggered start times
          }}
        >
          {symbols[Math.floor(Math.random() * symbols.length)]}
        </div>
      ))}
    </div>
  );
};

export default HeroStarDecorations;

