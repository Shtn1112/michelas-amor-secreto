
import React, { useState, useEffect } from "react";
import { Clock, Timer, Heart } from "lucide-react";

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
    hours: number;
    minutes: number;
    seconds: number;
  }>({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Calculate elapsed time
    const calculateElapsedTime = () => {
      const now = new Date();
      const diffMs = now.getTime() - startDate.getTime();
      
      // Calcular tempo total decorrido
      const totalSeconds = Math.floor(diffMs / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      
      // Calcular anos e meses
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
      
      // Calcular horas, minutos e segundos do dia atual
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      
      setElapsedTime({ years, months, days, hours, minutes, seconds });
    };

    // Calculate countdown
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = nextMilestone.getTime() - now.getTime();
      
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

    // Calcular imediatamente
    calculateElapsedTime();
    calculateTimeLeft();
    
    // Atualizar a cada segundo
    const timer = setInterval(() => {
      calculateTimeLeft();
      calculateElapsedTime();
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate, nextMilestone]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 px-4">
          <div className="flex items-center mb-1 sm:mb-0">
            <Heart className="text-romantic mr-2 h-4 w-4 animate-pulse" fill="#D946EF" />
            <p className="text-romantic-dark font-montserrat text-sm">
              <span className="font-medium">Nosso Amor:</span> 
              {elapsedTime.years > 0 && <span> {elapsedTime.years} {elapsedTime.years === 1 ? 'ano' : 'anos'}</span>}
              {elapsedTime.months > 0 && <span> {elapsedTime.months} {elapsedTime.months === 1 ? 'mês' : 'meses'}</span>}
              {elapsedTime.days > 0 && <span> {elapsedTime.days} {elapsedTime.days === 1 ? 'dia' : 'dias'}</span>}
              <span className="text-romantic ml-1">
                {String(elapsedTime.hours).padStart(2, '0')}:
                {String(elapsedTime.minutes).padStart(2, '0')}:
                {String(elapsedTime.seconds).padStart(2, '0')}
              </span>
            </p>
          </div>
          
          <div className="flex items-center">
            <Timer className="text-romantic mr-2 h-4 w-4 animate-spin" style={{ animationDuration: '3s' }} />
            <div>
              <p className="text-romantic-dark font-montserrat text-sm">
                <span className="font-medium">{nextMonthNumber} meses:</span> 
                <span className="tabular-nums">
                  {timeLeft.days}d {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m {String(timeLeft.seconds).padStart(2, '0')}s
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
