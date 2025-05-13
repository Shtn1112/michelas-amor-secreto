
import React from "react";
import { Heart } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-dancing text-romantic-dark mb-6 leading-tight">
          Michela & Eu
        </h1>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-romantic"></div>
          <Heart className="text-romantic animate-heart-beat" fill="#D946EF" size={32} />
          <div className="w-20 h-px bg-gradient-to-l from-transparent via-romantic"></div>
        </div>
      </div>
      
      <p className="text-xl md:text-2xl font-playfair italic text-romantic-dark/80 max-w-xl mx-auto mb-12 animate-fade-in">
        Uma história de amor que começou em 17 de agosto de 2024
      </p>
      
      <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-md mx-auto animate-fade-in">
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-dancing text-romantic font-bold">{8}</span>
          <span className="text-sm md:text-base font-montserrat text-romantic-dark/70">Meses</span>
        </div>
        <div className="flex flex-col items-center">
          <Heart className="text-romantic animate-heart-beat mb-1" fill="#D946EF" size={36} />
          <span className="text-sm md:text-base font-montserrat text-romantic-dark/70">Amor</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-dancing text-romantic font-bold">∞</span>
          <span className="text-sm md:text-base font-montserrat text-romantic-dark/70">Para sempre</span>
        </div>
      </div>
    </div>
  );
};
