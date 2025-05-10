
import React from "react";
import { Heart } from "lucide-react";

interface FloatingHeartProps {
  delay?: number;
  size?: number;
  left?: string;
  color?: string;
}

export const FloatingHeart: React.FC<FloatingHeartProps> = ({ 
  delay = 0, 
  size = 24, 
  left = "50%", 
  color = "#D946EF"
}) => {
  const style: React.CSSProperties = {
    left,
    bottom: "0",
    color,
    animationDelay: `${delay}s`,
    position: "absolute",
  };

  return (
    <div className="heart-animation" style={style}>
      <Heart size={size} fill={color} />
    </div>
  );
};
