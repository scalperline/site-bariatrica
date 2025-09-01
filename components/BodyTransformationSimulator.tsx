
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function BodyTransformationSimulator() {
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  // Removido estado não utilizado para evitar warnings de lint

  const steps = [
    { weight: 120, months: 0, description: 'Seu peso atual', color: 'red' },
    { weight: 110, months: 2, description: 'Primeiros resultados', color: 'orange' },
    { weight: 95, months: 6, description: 'Transformação visível', color: 'yellow' },
    { weight: 80, months: 12, description: 'Meta alcançada', color: 'green' },
  ];

  // Mapear classes Tailwind para evitar interpolação dinâmica (compatível com build estático)
  const COLOR_CLASSES: Record<string, { bg: string; text: string; ring: string }> = {
    red:    { bg: 'bg-red-500',    text: 'text-red-500',    ring: 'ring-red-300' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-500', ring: 'ring-orange-300' },
    yellow: { bg: 'bg-yellow-500', text: 'text-yellow-500', ring: 'ring-yellow-300' },
    green:  { bg: 'bg-green-500',  text: 'text-green-500',  ring: 'ring-green-300' },
  };

  const startSimulation = () => {
    setIsSimulating(true);
    setCurrentStep(0);
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  const resetSimulation = () => {
    setIsSimulating(false);
    setCurrentStep(0);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Visualize Sua Transformação
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Nossa simulação 3D permite que você veja como seu corpo pode mudar ao longo dos meses de tratamento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="relative h-96 bg-gradient-to-b from-blue-50 to-green-50 rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  {isSimulating ? (
                    <motion.div
                      key="simulation"
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="text-center space-y-6">
                        <motion.div
                          className="relative mx-auto"
                          animate={{
                            scale: [1, 0.7][Math.min(currentStep, 1)],
                          }}
                          transition={{ duration: 1.5 }}
                        >
                          <Image
                            src={`https://readdy.ai/api/search-image?query=3D%20body%20silhouette%20transformation%20simulation%2C%20weight%20loss%20progression%20visualization%2C%20medical%20illustration%20showing%20$%7Bsteps%5BcurrentStep%5D.weight%7Dkg%20body%20shape%2C%20clean%20white%20background%2C%20professional%20medical%20diagram&width=200&height=300&seq=body-sim-${currentStep}&orientation=portrait`}
                            alt="Simulação Corporal"
                            width={200}
                            height={300}
                            className="w-48 h-72 object-contain"
                          />
                        </motion.div>
                        
                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className={`text-4xl font-bold ${COLOR_CLASSES[steps[currentStep].color]?.text ?? ''}`}>
                            {steps[currentStep].weight}kg
                          </div>
                          <div className="text-lg text-gray-700">
                            {steps[currentStep].description}
                          </div>
                          <div className="text-sm text-gray-500">
                            {steps[currentStep].months === 0 ? 'Hoje' : `${steps[currentStep].months} meses`}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="placeholder"
                      className="absolute inset-0 flex flex-col items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <i className="ri-user-line text-6xl text-blue-600"></i>
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        Simulador de Transformação
                      </h3>
                      <p className="text-gray-600 text-center mb-8">
                        Clique no botão abaixo para ver sua transformação simulada ao longo do tempo.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="mt-6 flex gap-4">
                <button
                  onClick={startSimulation}
                  disabled={isSimulating}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
                >
                  {isSimulating ? 'Simulando...' : 'Iniciar Simulação'}
                </button>
                <button
                  onClick={resetSimulation}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-300 whitespace-nowrap"
                >
                  Reiniciar
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-eye-line text-blue-600"></i>
                Como Funciona a Simulação
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-green-500 mt-1"></i>
                  <span>Baseada em dados reais de pacientes</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-green-500 mt-1"></i>
                  <span>Considera seu perfil específico</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-green-500 mt-1"></i>
                  <span>Mostra progresso mês a mês</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-green-500 mt-1"></i>
                  <span>100% privada e confidencial</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Tecnologia Avançada</h3>
              <p className="mb-4 opacity-90">
                Utilizamos inteligência artificial e modelagem 3D para criar uma simulação realista da sua transformação.
              </p>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <i className="ri-shield-check-line"></i>
                <span>Seus dados são protegidos e nunca compartilhados</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
