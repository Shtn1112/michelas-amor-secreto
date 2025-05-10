
import React from "react";
import { cn } from "@/lib/utils";

interface RomanticQuoteProps {
  quote: string;
  author?: string;
  className?: string;
}

export const RomanticQuote: React.FC<RomanticQuoteProps> = ({ 
  quote, 
  author, 
  className 
}) => {
  return (
    <div className={cn("p-6 relative overflow-hidden rounded-lg shadow-md backdrop-blur-sm bg-white/20", className)}>
      <div className="relative z-10">
        <p className="text-xl md:text-2xl font-dancing text-romantic-dark mb-3 italic">"{quote}"</p>
        {author && (
          <p className="text-right text-sm font-montserrat text-romantic-dark font-medium">— {author}</p>
        )}
      </div>
      <div className="absolute -right-4 -bottom-4 text-romantic opacity-10 transform rotate-12">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </div>
  );
};
