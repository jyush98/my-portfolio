import React, { useEffect, useRef } from "react";
import "./CursorGlow.css";

const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.top = `${e.clientY}px`;
        glowRef.current.style.left = `${e.clientX}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow"></div>;
};

export default CursorGlow;
