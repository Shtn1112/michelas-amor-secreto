
import React, { useEffect } from "react";
import { RomanticHeader } from "@/components/RomanticHeader";
import { ImageGallery } from "@/components/ImageGallery";
import { RomanticQuote } from "@/components/RomanticQuote";
import { RomanticFooter } from "@/components/RomanticFooter";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { RelationshipTimer } from "@/components/RelationshipTimer";
import { Hero } from "@/components/Hero";
import { MemorySection } from "@/components/MemorySection";
import { ArrowDown } from "lucide-react";

// Calculate relationship data - from 17 August 2024 to current date (10 May 2025)
const startDate = new Date(2024, 7, 17); // August 17, 2024
const currentDate = new Date(2025, 4, 10, 20, 35); // May 10, 2025, 20:35
const currentMonths = Math.floor(
  (currentDate.getFullYear() - startDate.getFullYear()) * 12 + 
  currentDate.getMonth() - startDate.getMonth() + 
  (currentDate.getDate() >= startDate.getDate() ? 0 : -1)
);
const nextMonthNumber = currentMonths + 1;

// Calculate next milestone date (next month anniversary)
const nextMonth = new Date(startDate);
nextMonth.setMonth(startDate.getMonth() + nextMonthNumber);
const nextMilestoneDate = nextMonth;

const romanticQuotes = [
  {
    quote: "17 de agosto será sempre o dia em que tudo mudou na minha vida. Foi o dia em que conheci o amor da minha vida.",
    author: ""
  },
  {
    quote: "A tua felicidade é a minha prioridade. Amo-te hoje amanhã e sempre minha pequena",
    author: ""
  },
  {
    quote: "Dizem que há dias que ficam marcados para sempre... e para mim, esse dia é 17 de agosto. Foi ali que a nossa história começou e desde então só tenho motivos para agradecer.",
    author: ""
  },
  {
    quote: "És o meu porto seguro, a minha paz e o meu maior motivo para sorrir.",
    author: ""
  },
  {
    quote: "Não importa onde estou, o meu pensamento está sempre em ti.",
    author: ""
  }
];

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb')] bg-cover bg-center opacity-10 z-0"></div>
        <div className="container max-w-5xl mx-auto px-4 py-12 relative z-10">
          <RelationshipTimer 
            startDate={startDate}
            nextMilestone={nextMilestoneDate}
            currentMonths={currentMonths}
            nextMonthNumber={nextMonthNumber}
          />
          
          <Hero />
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="flex flex-col items-center justify-center text-romantic-dark hover:text-romantic transition-colors">
              <span className="text-sm mb-2 font-montserrat">Descobre mais</span>
              <ArrowDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 relative bg-gradient-to-br from-white to-romantic-light">
        <div className="container max-w-5xl mx-auto px-4">
          <RomanticHeader 
            title="Michela Tembe" 
            subtitle="Um amor para toda vida" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="md:order-2">
              <ImageGallery mainImage="/lovable-uploads/a19e1adf-5acd-4417-9280-786cb5047a04.png" />
            </div>
            
            <div className="flex flex-col justify-center space-y-6 md:order-1">
              <h2 className="text-3xl font-dancing text-romantic-dark mb-2 animate-fade-in">
                Meu Amor Eterno
              </h2>
              <p className="font-montserrat text-gray-700 animate-fade-in">
                Cada momento ao seu lado é um presente que guardo com carinho no meu coração. Seu sorriso ilumina meus dias, e seu amor transforma minha vida.
              </p>
              <div className="flex items-center gap-2 animate-fade-in">
                <span className="inline-block h-1 w-20 bg-romantic rounded"></span>
                <span className="inline-block h-1 w-10 bg-romantic-dark rounded"></span>
              </div>
              <p className="font-montserrat text-gray-700 animate-fade-in">
                Você é a razão do meu sorriso e a inspiração para todos os meus sonhos. Juntos, construímos memórias que durarão para sempre.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Memories Section */}
      <section id="memories" className="py-20 relative bg-gradient-to-br from-romantic-light to-white">
        <div className="container max-w-5xl mx-auto px-4">
          <MemorySection />
        </div>
      </section>
      
      {/* Quotes Section */}
      <section id="quotes" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-romantic-light/30 to-white"></div>
        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-dancing text-center text-romantic-dark mb-8 animate-fade-in">
            Palavras de Amor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {romanticQuotes.map((quote, index) => (
              <RomanticQuote 
                key={index} 
                quote={quote.quote} 
                author={quote.author}
                className={index === 0 ? "md:col-span-2 animate-fade-in" : "animate-fade-in"} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Final Message */}
      <section id="message" className="py-20 relative">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16 font-playfair max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-dancing text-romantic-dark mb-4">
              Nosso Amor
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Um amor como o nosso é raro e precioso. Você é tudo o que sempre sonhei, e cada dia ao seu lado é uma nova aventura.
            </p>
            <p className="text-lg text-gray-700">
              Michela, você é a mais bela flor do meu jardim, o sol dos meus dias, a lua das minhas noites. Meu coração pertence a você, hoje e sempre.
            </p>
          </div>
          
          <RomanticFooter />
        </div>
      </section>
    </div>
  );
};

export default Index;
