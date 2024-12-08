"use client";
import React, { useState, useEffect } from "react";

const TypeWriterText = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayedText([]);
    setIndex(0);
  }, [text]); 

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => [...prev, text[index]]);
        setIndex((prevIndex) => prevIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return (
    <div>
      {displayedText.map((char, i) => (
        <span
          key={i}
          style={{
            opacity: 0,
            animation: `fadeIn 0.5s ease forwards`,
            animationDelay: `${i * speed}ms`,
          }}
        >
          {char}
        </span>
      ))}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default TypeWriterText;
