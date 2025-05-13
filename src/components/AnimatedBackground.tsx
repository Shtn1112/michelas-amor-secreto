
import React, { useEffect, useState } from "react";
import { FloatingHeart } from "./FloatingHeart";
import { Heart } from "lucide-react";

export const AnimatedBackground: React.FC = () => {
  const [hearts, setHearts] = useState<React.ReactNode[]>([]);
  const [roseHearts, setRoseHearts] = useState<React.ReactNode[]>([]);
  
  useEffect(() => {
    const colors = ["#D946EF", "#FFDEE2", "#7E69AB", "#ea384c"];
    
    // Floating hearts animation
    const interval = setInterval(() => {
      if (hearts.length > 15) {
        setHearts((prev) => prev.slice(1));
      }
      
      setHearts((prev) => [
        ...prev,
        <FloatingHeart
          key={`heart-${Date.now()}`}
          delay={0}
          size={Math.floor(Math.random() * 16) + 8}
          left={`${Math.random() * 100}%`}
          color={colors[Math.floor(Math.random() * colors.length)]}
        />
      ]);
    }, 1500);

    // Rose petals / special hearts animation
    const specialInterval = setInterval(() => {
      if (roseHearts.length > 5) {
        setRoseHearts((prev) => prev.slice(1));
      }
      
      const size = Math.floor(Math.random() * 14) + 16;
      const left = `${Math.random() * 100}%`;
      const rotation = Math.random() * 360;
      const delay = Math.random() * 2;
      const duration = 4 + Math.random() * 4;
      
      setRoseHearts((prev) => [
        ...prev,
        <div 
          key={`rose-${Date.now()}`}
          className="rose-petal"
          style={{
            left,
            bottom: "5%",
            transform: `rotate(${rotation}deg)`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        >
          <Heart 
            size={size} 
            fill={colors[Math.floor(Math.random() * colors.length)]} 
            className="opacity-60"
          />
        </div>
      ]);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(specialInterval);
    };
  }, [hearts, roseHearts]);

  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      {hearts}
      {roseHearts}
      <div className="absolute -bottom-10 -left-10 text-romantic/5 animate-rotate hidden md:block" style={{ width: '20rem', height: '20rem' }}>
        <Heart size={320} />
      </div>
      <div className="absolute -top-10 -right-10 text-romantic-dark/5 animate-rotate" style={{ width: '10rem', height: '10rem', animationDirection: 'reverse' }}>
        <Heart size={160} />
      </div>
    </div>
  );
};
