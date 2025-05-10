
import React from "react";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  mainImage: string;
  className?: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ mainImage, className }) => {
  return (
    <div className={cn("relative rounded-lg overflow-hidden animate-fade-in", className)}>
      <div className="absolute inset-0 bg-purple-gradient opacity-30 rounded-lg"></div>
      <img
        src={mainImage}
        alt="Michela Tembe"
        className="w-full h-full object-cover rounded-lg shadow-xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
      
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-romantic shadow-lg animate-float">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff" stroke="none">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </span>
      </div>
    </div>
  );
};
