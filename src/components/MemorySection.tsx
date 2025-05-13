
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Heart, Calendar, Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';

export const MemorySection: React.FC = () => {
  const isMobile = useIsMobile();
  
  const memories = [
    {
      title: "O Nosso Primeiro Encontro",
      date: "17 de agosto, 2024",
      description: "O dia em que nossas vidas mudaram para sempre. Foi quando nos conhecemos e o mundo parecia mais colorido."
    },
    {
      title: "Primeiro Mês Juntos",
      date: "17 de setembro, 2024",
      description: "Celebramos um mês de amor e carinho, descobrindo cada dia mais razões para amar um ao outro."
    },
    {
      title: "Nosso Primeiro Natal",
      date: "25 de dezembro, 2024",
      description: "Um tempo mágico onde compartilhamos momentos especiais e criamos memórias que durarão para sempre."
    },
    {
      title: "Aniversário Especial",
      date: "Fevereiro, 2025",
      description: "Uma celebração cheia de surpresas e amor, mostrando o quanto você é especial na minha vida."
    },
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-dancing text-romantic-dark mb-3 animate-fade-in">Nossos Momentos Especiais</h2>
        <p className="font-montserrat text-gray-700 max-w-xl mx-auto animate-fade-in">
          Cada momento contigo é um tesouro guardado no coração. Aqui estão algumas das nossas memórias mais preciosas.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {memories.map((memory, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden border-romantic/20 hover:border-romantic transition-colors duration-300 hover:shadow-md">
                  <div className="relative">
                    <AspectRatio ratio={16 / 9}>
                      <div className="w-full h-full bg-gradient-to-br from-romantic/20 to-romantic-dark/20 flex items-center justify-center">
                        <Heart className="text-romantic animate-heart-beat" size={isMobile ? 32 : 48} fill="#D946EF" />
                      </div>
                    </AspectRatio>
                    <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-xs font-medium text-romantic-dark">
                      <Calendar className="h-3 w-3 mr-1" />
                      {memory.date}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-dancing text-romantic-dark mb-2 flex items-center">
                      {memory.title} 
                      <Star className="h-4 w-4 ml-1 text-romantic inline" fill="#D946EF" />
                    </h3>
                    <p className="text-sm font-montserrat text-gray-700">{memory.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};
