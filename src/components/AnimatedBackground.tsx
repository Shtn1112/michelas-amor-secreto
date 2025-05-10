
import React, { useEffect, useState } from "react";
import { FloatingHeart } from "./FloatingHeart";

export const AnimatedBackground: React.FC = () => {
  const [hearts, setHearts] = useState<React.ReactNode[]>([]);
  
  useEffect(() => {
    const colors = ["#D946EF", "#FFDEE2", "#7E69AB", "#ea384c"];
    const interval = setInterval(() => {
      if (hearts.length > 30) {
        setHearts((prev) => prev.slice(1));
      }
      
      setHearts((prev) => [
        ...prev,
        <FloatingHeart
          key={Date.now()}
          delay={0}
          size={Math.floor(Math.random() * 24) + 16}
          left={`${Math.random() * 100}%`}
          color={colors[Math.floor(Math.random() * colors.length)]}
        />
      ]);
    }, 500);

    return () => clearInterval(interval);
  }, [hearts]);

  return <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">{hearts}</div>;
};
