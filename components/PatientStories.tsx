
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const stories = [
  {
    name: 'Maria Silva',
    age: 42,
    weightLoss: '45kg',
    timeframe: '14 meses',
    before: 'https://readdy.ai/api/search-image?query=Brazilian%20woman%20before%20bariatric%20surgery%2C%20overweight%2C%20sad%20expression%2C%20health%20struggles%20visible%2C%20hope%20in%20eyes%2C%20medical%20consultation%20setting%2C%20before%20transformation%20photo&width=300&height=400&seq=maria-before&orientation=portrait',
    after: 'https://readdy.ai/api/search-image?query=Brazilian%20woman%20after%20successful%20bariatric%20surgery%2C%20significant%20weight%20loss%2C%20confident%20smile%2C%20healthy%20appearance%2C%20vibrant%20lifestyle%2C%20celebrating%20transformation%20success&width=300&height=400&seq=maria-after&orientation=portrait',
    quote: 'Hoje eu me sinto livre para viver. Dr. Thiago não apenas mudou meu corpo, mudou minha alma.',
    story: 'Após anos lutando contra a obesidade e diabetes, encontrei no Dr. Thiago não apenas um cirurgião, mas um verdadeiro parceiro na minha transformação. Hoje, 45kg mais leve, redescobri a alegria de viver.'
  },
  {
    name: 'João Santos',
    age: 38,
    weightLoss: '52kg',
    timeframe: '18 meses',
    before: 'https://readdy.ai/api/search-image?query=Brazilian%20man%20before%20weight%20loss%20surgery%2C%20overweight%2C%20health%20issues%2C%20tired%20appearance%2C%20medical%20consultation%2C%20determination%20in%20eyes%2C%20before%20transformation&width=300&height=400&seq=joao-before&orientation=portrait',
    after: 'https://readdy.ai/api/search-image?query=Brazilian%20man%20after%20bariatric%20surgery%20success%2C%20dramatic%20weight%20loss%2C%20athletic%20build%2C%20confident%20posture%2C%20healthy%20lifestyle%2C%20transformation%20celebration&width=300&height=400&seq=joao-after&orientation=portrait',
    quote: 'Voltei a jogar futebol com meus filhos. Isso não tem preço.',
    story: 'Pesava 140kg e mal conseguia subir escadas. A cirurgia bariátrica me devolveu não só a saúde, mas a capacidade de ser o pai presente que meus filhos merecem. Hoje corro maratonas!'
  },
  {
    name: 'Ana Oliveira',
    age: 29,
    weightLoss: '38kg',
    timeframe: '12 meses',
    before: 'https://readdy.ai/api/search-image?query=Young%20Brazilian%20woman%20before%20surgery%2C%20overweight%2C%20self-esteem%20issues%2C%20medical%20consultation%2C%20hope%20for%20change%2C%20before%20weight%20loss%20journey%20begins&width=300&height=400&seq=ana-before&orientation=portrait',
    after: 'https://readdy.ai/api/search-image?query=Young%20Brazilian%20woman%20after%20weight%20loss%20surgery%2C%20beautiful%20transformation%2C%20confident%20smile%2C%20fashionable%20clothes%2C%20self-assured%20posture%2C%20celebrating%20new%20life&width=300&height=400&seq=ana-after&orientation=portrait',
    quote: 'Finalmente me reconheço no espelho. Sou eu, mas a melhor versão de mim.',
    story: 'Aos 29 anos, decidi que merecia uma chance de ser feliz. O Dr. Thiago me guiou com tanto carinho que hoje me sinto renascida. Casei no ano passado e estou planejando ser mãe!'
  }
];

export default function PatientStories() {
  const [activeStory, setActiveStory] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Histórias de Coragem
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Cada transformação é única, mas todas compartilham algo em comum: a coragem de recomeçar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className={`cursor-pointer transition-all duration-300 ${
                activeStory === index ? 'transform scale-105' : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => setActiveStory(index)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: activeStory === index ? 1 : 0.7, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-green-200">
                <div className="text-center">
                  <Image
                    src={story.after}
                    alt={story.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover object-top mx-auto mb-4 border-4 border-green-200"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                  <div className="text-green-600 font-semibold mb-2">-{story.weightLoss}</div>
                  <div className="text-gray-600 text-sm">{story.timeframe}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          key={activeStory}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative">
              <div className="relative h-96 lg:h-full overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={showBefore ? stories[activeStory].before : stories[activeStory].after}
                    alt={`${stories[activeStory].name} - ${showBefore ? 'Antes' : 'Depois'}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="font-semibold text-gray-900">
                        {showBefore ? 'Antes' : 'Depois'}
                      </span>
                    </div>
                    <button
                      onClick={() => setShowBefore(!showBefore)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors whitespace-nowrap"
                    >
                      Ver {showBefore ? 'Depois' : 'Antes'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stories[activeStory].name}
                </h3>
                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <span>{stories[activeStory].age} anos</span>
                  <span>•</span>
                  <span className="text-green-600 font-semibold">
                    -{stories[activeStory].weightLoss} em {stories[activeStory].timeframe}
                  </span>
                </div>
              </div>

              <blockquote className="text-2xl text-blue-900 font-medium italic mb-6">
                {stories[activeStory].quote}
              </blockquote>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {stories[activeStory].story}
              </p>

              <div className="bg-green-50 p-6 rounded-2xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      {stories[activeStory].weightLoss}
                    </div>
                    <div className="text-sm text-gray-600">Perdidos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      {stories[activeStory].timeframe}
                    </div>
                    <div className="text-sm text-gray-600">Transformação</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-gray-600">Felicidade</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Sua História Pode Ser a Próxima</h3>
            <p className="text-lg mb-6 opacity-90">
              Cada jornada de transformação começa com uma decisão corajosa. Qual será a sua?
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap">
              Quero Escrever Minha História
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
