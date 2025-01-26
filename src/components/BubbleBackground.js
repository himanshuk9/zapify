import React, { useEffect } from "react";

const BubbleBackground = () => {
  useEffect(() => {
    createBubbles();
  }, []);

  const createBubbles = () => {
    const container = document.querySelector(".bubbles");
    for (let i = 0; i < 50; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      
      // Randomize bubble position and size
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.width = bubble.style.height = `${Math.random() * 50 + 10}px`;

      // Randomize animation timing
      bubble.style.animationDuration = `${Math.random() * 5 + 5}s`; // Between 5-10 seconds
      bubble.style.animationDelay = `${Math.random() * 3}s`; // Up to 3 seconds delay

      container.appendChild(bubble);
    }
  };

  return <div className="bubbles"></div>;
};

export default BubbleBackground;
