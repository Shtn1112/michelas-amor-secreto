
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export const LoveMessage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [heartBeat, setHeartBeat] = useState(false);

  useEffect(() => {
    // Animação de entrada
    const timer = setTimeout(() => setIsVisible(true), 300);
    
    // Animação de pulsação do coração a cada 3 segundos
    const heartBeatInterval = setInterval(() => {
      setHeartBeat(true);
      setTimeout(() => setHeartBeat(false), 1000);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(heartBeatInterval);
    };
  }, []);

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
    <div className={`love bg-white rounded-2xl p-8 max-w-md mx-auto shadow-lg transform transition-all duration-1000 hover:scale-105 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="block relative">
        {/* Padrão de corações formando um coração grande */}
        <div className={`heart-pattern mb-6 flex flex-col items-center gap-1 transition-transform duration-500 ${
          heartBeat ? 'scale-110' : 'scale-100'
        }`}>
          {heartRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-1">
              {row.map((cell, cellIndex) => (
                <div key={cellIndex} className="w-4 h-4 flex items-center justify-center">
                  {cell === 1 && (
                    <Heart 
                      size={14} 
                      fill="#e91e63" 
                      color="#e91e63"
                      className="animate-heart-beat hover:scale-125 transition-transform duration-200"
                      style={{
                        animationDelay: `${(rowIndex + cellIndex) * 0.1}s`
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Personagem simples e texto */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="character flex flex-col items-center animate-float">
            {/* Cabeça */}
            <div className="w-8 h-8 bg-gray-800 rounded-full mb-1 relative hover:bg-gray-700 transition-colors duration-300">
              <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-white rounded-full"></div>
            </div>
            {/* Corpo */}
            <div className="w-6 h-8 bg-gray-800 rounded-t-full hover:bg-gray-700 transition-colors duration-300"></div>
            {/* Braços */}
            <div className="relative -mt-6">
              <div className="absolute -left-3 top-2 w-4 h-1 bg-gray-800 rounded transform rotate-45 hover:rotate-90 transition-transform duration-300"></div>
              <div className="absolute -right-3 top-2 w-4 h-1 bg-gray-800 rounded transform -rotate-45 hover:-rotate-90 transition-transform duration-300"></div>
            </div>
            {/* Pernas */}
            <div className="flex gap-1">
              <div className="w-1 h-4 bg-gray-800 rounded hover:bg-gray-700 transition-colors duration-300"></div>
              <div className="w-1 h-4 bg-gray-800 rounded hover:bg-gray-700 transition-colors duration-300"></div>
            </div>
          </div>

          {/* Balão de fala */}
          <div className="speech-bubble relative bg-pink-100 px-3 py-1 rounded-lg hover:bg-pink-200 transition-all duration-300 transform hover:scale-110 animate-pulse">
            <span className="text-pink-600 text-sm font-medium">❤️ I ❤️ U</span>
            <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-r-4 border-r-pink-100 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
          </div>
        </div>

        {/* Texto principal */}
        <div className="text-center">
          <strong className="text-2xl font-playfair text-pink-600 block hover:text-pink-700 transition-colors duration-300 animate-fade-in cursor-default">
            I Love You
          </strong>
        </div>
      </div>
    </div>
  );
};
