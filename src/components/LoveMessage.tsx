
import React from 'react';
import { Heart } from 'lucide-react';

export const LoveMessage: React.FC = () => {
  // Array para criar o padrão de corações em formato de coração grande
  const heartRows = [
    [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  ];

  return (
    <div className="love bg-white rounded-2xl p-8 max-w-md mx-auto shadow-lg">
      <div className="block relative">
        {/* Padrão de corações formando um coração grande */}
        <div className="heart-pattern mb-6 flex flex-col items-center gap-1">
          {heartRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-1">
              {row.map((cell, cellIndex) => (
                <div key={cellIndex} className="w-4 h-4 flex items-center justify-center">
                  {cell === 1 && (
                    <Heart 
                      size={14} 
                      fill="#e91e63" 
                      color="#e91e63"
                      className="animate-heart-beat"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Personagem simples e texto */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="character flex flex-col items-center">
            {/* Cabeça */}
            <div className="w-8 h-8 bg-gray-800 rounded-full mb-1 relative">
              <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-white rounded-full"></div>
            </div>
            {/* Corpo */}
            <div className="w-6 h-8 bg-gray-800 rounded-t-full"></div>
            {/* Braços */}
            <div className="relative -mt-6">
              <div className="absolute -left-3 top-2 w-4 h-1 bg-gray-800 rounded transform rotate-45"></div>
              <div className="absolute -right-3 top-2 w-4 h-1 bg-gray-800 rounded transform -rotate-45"></div>
            </div>
            {/* Pernas */}
            <div className="flex gap-1">
              <div className="w-1 h-4 bg-gray-800 rounded"></div>
              <div className="w-1 h-4 bg-gray-800 rounded"></div>
            </div>
          </div>

          {/* Balão de fala */}
          <div className="speech-bubble relative bg-pink-100 px-3 py-1 rounded-lg">
            <span className="text-pink-600 text-sm font-medium">❤️ I ❤️ U</span>
            <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-r-4 border-r-pink-100 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
          </div>
        </div>

        {/* Texto principal */}
        <div className="text-center">
          <strong className="text-2xl font-playfair text-pink-600 block">
            I Love You
          </strong>
        </div>
      </div>
    </div>
  );
};
