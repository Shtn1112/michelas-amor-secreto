
import React from "react";
import { RomanticHeader } from "@/components/RomanticHeader";
import { ImageGallery } from "@/components/ImageGallery";
import { RomanticQuote } from "@/components/RomanticQuote";
import { RomanticFooter } from "@/components/RomanticFooter";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const romanticQuotes = [
  {
    quote: "Amar é encontrar a própria felicidade na felicidade do outro.",
    author: "Gottfried Leibniz"
  },
  {
    quote: "O amor não se vê com os olhos mas com o coração.",
    author: "William Shakespeare"
  },
  {
    quote: "Quando te vi, apaixonei. E tu sorriste porque sabias.",
    author: "Arrigo Boito"
  },
  {
    quote: "Em seus olhos, encontro o caminho para o paraíso do meu coração.",
    author: "Poema de Amor"
  },
  {
    quote: "Para sempre é o tempo que passarei te amando.",
    author: "Anônimo"
  }
];

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f8f9fa] to-romantic-light overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb')] bg-cover bg-center opacity-10 z-0"></div>
      <AnimatedBackground />
      
      <div className="container max-w-5xl mx-auto px-4 py-12 relative z-10">
        <RomanticHeader 
          title="Michela Tembe" 
          subtitle="Um amor para toda vida" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="md:order-2">
            <ImageGallery mainImage="/lovable-uploads/a19e1adf-5acd-4417-9280-786cb5047a04.png" />
          </div>
          
          <div className="flex flex-col justify-center space-y-6 md:order-1">
            <h2 className="text-3xl font-dancing text-romantic-dark mb-2">
              Meu Amor Eterno
            </h2>
            <p className="font-montserrat text-gray-700">
              Cada momento ao seu lado é um presente que guardo com carinho no meu coração. Seu sorriso ilumina meus dias, e seu amor transforma minha vida.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-block h-1 w-20 bg-romantic rounded"></span>
              <span className="inline-block h-1 w-10 bg-romantic-dark rounded"></span>
            </div>
            <p className="font-montserrat text-gray-700">
              Você é a razão do meu sorriso e a inspiração para todos os meus sonhos. Juntos, construímos memórias que durarão para sempre.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-dancing text-center text-romantic-dark mb-8">
            Palavras de Amor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {romanticQuotes.map((quote, index) => (
              <RomanticQuote 
                key={index} 
                quote={quote.quote} 
                author={quote.author}
                className={index === 0 ? "md:col-span-2" : ""} 
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mb-16 font-playfair max-w-2xl mx-auto">
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
    </div>
  );
};

export default Index;
