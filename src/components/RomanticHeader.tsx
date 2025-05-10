
import React from "react";
import { Heart } from "lucide-react";

interface RomanticHeaderProps {
  title: string;
  subtitle?: string;
}

export const RomanticHeader: React.FC<RomanticHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8 relative">
      <div className="flex items-center justify-center gap-3 mb-2">
        <Heart className="animate-heart-beat text-romantic" fill="#D946EF" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-dancing text-romantic-dark">
          {title}
        </h1>
        <Heart className="animate-heart-beat text-romantic" fill="#D946EF" />
      </div>
      {subtitle && (
        <p className="text-xl md:text-2xl font-playfair text-romantic-dark/80 italic">
          {subtitle}
        </p>
      )}
    </div>
  );
};
