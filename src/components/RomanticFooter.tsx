
import React from "react";
import { Heart } from "lucide-react";

export const RomanticFooter: React.FC = () => {
  return (
    <footer className="mt-16 py-8 text-center relative overflow-hidden">
      <div className="relative z-10">
        <p className="font-dancing text-xl text-romantic-dark mb-2">
          Forever yours
        </p>
        <div className="flex items-center justify-center gap-2">
          <Heart className="h-5 w-5 text-romantic" fill="#D946EF" />
          <p className="text-sm font-montserrat text-romantic-dark/70">
            Created with love for Michela Tembe
          </p>
          <Heart className="h-5 w-5 text-romantic" fill="#D946EF" />
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-romantic/30 to-transparent"></div>
      <div className="absolute -bottom-8 -left-8 text-romantic/10 animate-rotate opacity-30">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </footer>
  );
};
