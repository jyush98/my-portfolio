import React from "react";

const symbols = ["*", "/", "\\", "#"];

const getRandomSymbol = () => {
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const HeroDecorations: React.FC = () => {
  return (
    <div className="hero-decorations">
      {Array.from({ length: 20 }).map((_, index) => (
        <span
          key={index}
          style={{
            gridColumn: Math.ceil(Math.random() * 3),
            gridRow: Math.ceil(Math.random() * 10),
          }}
        >
          {getRandomSymbol()}
        </span>
      ))}
    </div>
  );
};

export default HeroDecorations;
