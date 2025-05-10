
import React, { useState, useEffect } from "react";
import { Clock, Timer } from "lucide-react";

interface RelationshipTimerProps {
  startDate: Date;
  nextMilestone: Date;
  currentMonths: number;
  nextMonthNumber: number;
}

export const RelationshipTimer: React.FC<RelationshipTimerProps> = ({
  startDate,
  nextMilestone,
  currentMonths,
  nextMonthNumber
}) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const [elapsedTime, setElapsedTime] = useState<{
    years: number;
    months: number;
    days: number;
  }>({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    // Calculate elapsed time
    const calculateElapsedTime = () => {
      const now = new Date();
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      
      if (months < 0) {
        years--;
        months += 12;
      }
      
      let days = now.getDate() - startDate.getDate();
      if (days < 0) {
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        months--;
        days += lastMonth.getDate();
        
        if (months < 0) {
          years--;
          months += 12;
        }
      }
      
      setElapsedTime({ years, months, days });
    };

    // Calculate countdown
    const calculateTimeLeft = () => {
      const difference = nextMilestone.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateElapsedTime();
    calculateTimeLeft();
    const timer = setInterval(() => {
      calculateTimeLeft();
      calculateElapsedTime();
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate, nextMilestone]);

  // Format the date as DD/MM/YYYY
  const formatDate = (date: Date) => {
    return `${date.getDate().toString().padStart(2, '0')}/${
      (date.getMonth() + 1).toString().padStart(2, '0')
    }/${date.getFullYear()}`;
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-8 p-4 bg-white/30 backdrop-blur-sm rounded-lg shadow-lg border border-romantic/30 animate-fade-in">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Clock className="text-romantic mr-2" />
          <div className="text-center md:text-left">
            <p className="text-romantic-dark font-playfair">
              <span className="font-bold">Nosso Amor:</span> 
              {elapsedTime.years > 0 && <span> {elapsedTime.years} {elapsedTime.years === 1 ? 'ano' : 'anos'}</span>}
              {elapsedTime.months > 0 && <span> {elapsedTime.months} {elapsedTime.months === 1 ? 'mês' : 'meses'}</span>}
              {elapsedTime.days > 0 && <span> {elapsedTime.days} {elapsedTime.days === 1 ? 'dia' : 'dias'}</span>}
              <span className="block text-sm mt-1">desde {formatDate(startDate)}</span>
            </p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Timer className="text-romantic mr-2" />
          <div className="text-center md:text-left">
            <p className="text-romantic-dark font-playfair mb-1">
              <span className="font-bold">{nextMonthNumber} meses em:</span> {formatDate(nextMilestone)}
            </p>
            <div className="flex space-x-2 justify-center md:justify-start">
              <div className="bg-romantic/20 px-2 py-1 rounded">
                <span className="font-bold">{timeLeft.days}</span>
                <span className="text-sm"> dias</span>
              </div>
              <div className="bg-romantic/20 px-2 py-1 rounded">
                <span className="font-bold">{timeLeft.hours}</span>
                <span className="text-sm"> hrs</span>
              </div>
              <div className="bg-romantic/20 px-2 py-1 rounded">
                <span className="font-bold">{timeLeft.minutes}</span>
                <span className="text-sm"> min</span>
              </div>
              <div className="bg-romantic/20 px-2 py-1 rounded">
                <span className="font-bold">{timeLeft.seconds}</span>
                <span className="text-sm"> seg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
