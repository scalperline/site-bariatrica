
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vídeo de fundo */}
      <div className="absolute inset-0">
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
            onError={handleVideoError}
          >
            <source src="/fundo-sit.webm" type="video/webm" />
          </video>
        ) : (
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-green-600/80"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Dark%20medical%20facility%20interior%20with%20moody%20lighting%2C%20professional%20healthcare%20environment%20with%20deep%20shadows%2C%20modern%20surgical%20equipment%20silhouettes%2C%20dramatic%20dark%20blue%20and%20black%20color%20scheme%2C%20minimalist%20medical%20center%20atmosphere%2C%20low-key%20lighting%20creating%20strong%20contrast%2C%20sophisticated%20medical%20technology%20background&width=1920&height=1080&seq=hero-bg-dark&orientation=landscape')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
        )}
        
        {/* Overlay gradiente para garantir legibilidade */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-green-600/60"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-100px)]">
          <motion.div 
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Pop-up Elegante */}
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-green-500 backdrop-blur-sm border border-gold/60 rounded-full px-6 py-3 shadow-xl relative overflow-hidden">
                {/* Efeito de brilho interno automático */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                  animate={{
                    x: ["-100%", "200%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="flex items-center space-x-3 relative z-10">
                  <i className="ri-award-fill text-white text-lg drop-shadow-lg"></i>
                  <span className="text-white font-semibold text-sm drop-shadow-lg">
                    Especialista em Cirurgia Bariátrica
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Sua Nova Vida
              <span className="block text-green-400">Começa Aqui</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl leading-relaxed opacity-90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Mais de 15 anos transformando vidas através da cirurgia bariátrica. 
              Descubra como a ciência e o cuidado humano podem criar sua nova história.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap">
                Agendar Consulta
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap">
                Descubra sua Nova Versão
              </button>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">2000+</div>
                <div className="text-sm opacity-80">Vidas Transformadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">15+</div>
                <div className="text-sm opacity-80">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">98%</div>
                <div className="text-sm opacity-80">Taxa de Sucesso</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/dr-fulano.png"
                alt="Dr. Fulano - Consulta Médica"
                fill
                className="object-cover object-top"
              />
              <div className="absolute bottom-6 left-6 bg-blue-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                Dr. Thiago Ramos
              </div>
            </div>
            
            <motion.div 
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">15 anos +</div>
                <div className="text-sm text-gray-600">Experiência</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <i className="ri-arrow-down-line text-2xl text-white"></i>
        </div>
      </motion.div>
    </section>
  );
}
