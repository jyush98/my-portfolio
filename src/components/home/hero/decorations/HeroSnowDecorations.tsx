import React from "react";
import "./HeroSnowDecorations.css";

const HeroSnowDecorations: React.FC = () => {
    const snowflakes = Array.from({ length: 30 }); // Create 15 snowflakes

    return (
      <div className="hero-snow-decorations">
        {snowflakes.map((_, index) => {
          const isLeft = Math.random() > 0.5; // Randomly decide left or right
          const position = isLeft
            ? Math.random() * 25 // For left columns
            : 75 + Math.random() * 25; // For right columns

          return (
            <div
              key={index}
              className={`snowflake ${isLeft ? "snowflake-left" : "snowflake-right"}`}
              style={{
                left: `${position}vw`, // Dynamically set left position
                animationDelay: `${Math.random() * 3}s`, // Staggered starts
                fontSize: `${Math.random() * 20 + 10}px`, // Random size between 10px and 30px
              }}
            >
              *
            </div>
          );
        })}
      </div>
    );
  };

  export default HeroSnowDecorations;
