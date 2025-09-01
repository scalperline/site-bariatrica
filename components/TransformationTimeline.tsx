
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const timelineData = [
  {
    month: 'Pré-Cirurgia',
    weight: '120kg',
    milestone: 'Avaliação e Preparação',
    description: 'Maria inicia sua jornada com 120kg, determinada a mudar sua vida.',
    image: 'https://readdy.ai/api/search-image?query=Brazilian%20woman%20before%20bariatric%20surgery%2C%20determined%20expression%2C%20medical%20consultation%20preparation%2C%20hope%20in%20eyes%2C%20professional%20medical%20setting%2C%20before%20transformation%20journey%20begins&width=300&height=200&seq=timeline-pre&orientation=landscape',
    color: 'blue'
  },
  {
    month: '1º Mês',
    weight: '110kg',
    milestone: 'Primeiros Resultados',
    description: 'Recuperação rápida e os primeiros 10kg perdidos com segurança.',
    image: 'https://readdy.ai/api/search-image?query=Brazilian%20woman%20one%20month%20after%20surgery%2C%20early%20recovery%2C%20slight%20weight%20loss%20visible%2C%20medical%20follow-up%20appointment%2C%20positive%20mood%2C%20healing%20process&width=300&height=200&seq=timeline-1m&orientation=landscape',
    color: 'indigo'
  },
  {
    month: '3º Mês',
    weight: '95kg',
    milestone: 'Nova Rotina',
    description: 'Adaptação completa aos novos hábitos alimentares e de vida.',
    image: 'https://readdy.ai/api/search-image?query=Brazilian%20woman%20three%20months%20post%20surgery%2C%20noticeable%20weight%20loss%2C%20healthy%20eating%20habits%2C%20cooking%20nutritious%20meals%2C%20positive%20lifestyle%20changes&width=300&height=200&seq=timeline-3m&orientation=landscape',
    color: 'purple'
  },
  {
    month: '6º Mês',
    weight: '85kg',
    milestone: 'Meio Caminho',
    description: 'Confiança renovada e energia para atividades antes impossíveis.',
    image: 'https://readdy.ai/api/search-image?query=Brazilian%20woman%20six%20months%20after%20surgery%2C%20significant%20weight%20loss%2C%20exercising%20outdoors%2C%20confident%20and%20energetic%2C%20active%20lifestyle%2C%20transformation%20visible&width=300&height=200&seq=timeline-6m&orientation=landscape',
    color: 'pink'
  },
  {
    month: '12º Mês',
    weight: '75kg',
    milestone: 'Transformação Completa',
    description: 'Meta alcançada! Uma nova Maria, saudável e realizada.',
    image: 'https://readdy.ai/api/search-image?query=Brazilian%20woman%20one%20year%20after%20bariatric%20surgery%2C%20complete%20transformation%2C%20healthy%20weight%20achieved%2C%20radiant%20smile%2C%20celebrating%20success%2C%20new%20confident%20lifestyle&width=300&height=200&seq=timeline-12m&orientation=landscape',
    color: 'green'
  }
];

export default function TransformationTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  
  // Mapear classes Tailwind para evitar interpolação dinâmica (compatível com build estático)
  const COLOR_CLASSES: Record<string, { bg: string; text: string; ring: string; border: string }> = {
    blue:   { bg: 'bg-blue-500',   text: 'text-blue-600',   ring: 'ring-blue-300',   border: 'border-blue-500' },
    indigo: { bg: 'bg-indigo-500', text: 'text-indigo-600', ring: 'ring-indigo-300', border: 'border-indigo-500' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-600', ring: 'ring-purple-300', border: 'border-purple-500' },
    pink:   { bg: 'bg-pink-500',   text: 'text-pink-600',   ring: 'ring-pink-300',   border: 'border-pink-500' },
    green:  { bg: 'bg-green-500',  text: 'text-green-600',  ring: 'ring-green-300',  border: 'border-green-500' },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            A Jornada de Transformação
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Acompanhe a história real da Maria e veja como cada mês traz novas conquistas e uma vida mais plena.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-green-500 hidden lg:block"></div>

          {/* Timeline items */}
          <div className="space-y-16 lg:space-y-24">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                onViewportEnter={() => setActiveStep(index)}
              >
                {/* Content */}
                  <div className="flex-1 lg:w-1/2">
                    <div className={`bg-white rounded-2xl p-8 shadow-xl border-l-4 ${COLOR_CLASSES[item.color]?.border ?? ''} relative`}>
                    <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 ${COLOR_CLASSES[item.color]?.bg ?? ''} text-white rounded-full flex items-center justify-center font-bold text-lg`}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{item.milestone}</h3>
                        <p className="text-gray-600">{item.month}</p>
                      </div>
                    </div>
                      <div className={`text-3xl font-bold ${COLOR_CLASSES[item.color]?.text ?? ''} mb-4`}>
                      {item.weight}
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block relative z-10">
                  <motion.div
                    className={`w-6 h-6 ${COLOR_CLASSES[item.color]?.bg ?? ''} rounded-full border-4 border-white shadow-lg`}
                    animate={{
                      scale: activeStep === index ? 1.5 : 1,
                      boxShadow: activeStep === index ? '0 0 20px rgba(59, 130, 246, 0.5)' : '0 0 0px rgba(59, 130, 246, 0)'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Image */}
                <div className="flex-1 lg:w-1/2">
                  <motion.div 
                    className="relative rounded-2xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.milestone}
                      width={400}
                      height={256}
                      className="w-full h-64 object-cover object-top"
                    />
                    <div className={`absolute top-4 right-4 ${COLOR_CLASSES[item.color]?.bg ?? ''} text-white px-4 py-2 rounded-full font-semibold`}>
                      {item.month}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Pronta para Escrever Sua História?</h3>
            <p className="text-lg mb-6 opacity-90">
              Assim como a Maria, você também pode transformar sua vida. O primeiro passo é uma conversa.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap">
              Agende sua Consulta de Possibilidades
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
