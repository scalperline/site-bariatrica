
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function WeightLossCalculator() {
  const [currentWeight, setCurrentWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const calculateResults = () => {
    const weight = parseFloat(currentWeight);
    const heightInM = parseFloat(height) / 100;
    const ageNum = parseInt(age);

    if (!weight || !heightInM || !ageNum) return;

    const currentBMI = weight / (heightInM * heightInM);
    const idealWeight = 25 * (heightInM * heightInM);
    const weightToLose = Math.max(0, weight - idealWeight);
    const expectedLoss = Math.min(weightToLose * 0.7, weight * 0.4); // 70% do excesso ou 40% do peso total
    const finalWeight = weight - expectedLoss;
    const finalBMI = finalWeight / (heightInM * heightInM);
    const timeframe = Math.ceil(expectedLoss / 4); // ~4kg por mês

    const healthBenefits = [];
    if (currentBMI > 35) {
      healthBenefits.push('Redução do risco de diabetes');
      healthBenefits.push('Melhora da pressão arterial');
      healthBenefits.push('Alívio de dores articulares');
    }
    if (expectedLoss > 20) {
      healthBenefits.push('Melhora do sono e redução da apneia');
      healthBenefits.push('Maior energia e disposição');
    }
    if (currentBMI > 40) {
      healthBenefits.push('Redução do risco cardiovascular');
      healthBenefits.push('Melhora da fertilidade');
    }

    setResults({
      currentBMI: currentBMI.toFixed(1),
      finalBMI: finalBMI.toFixed(1),
      expectedLoss: expectedLoss.toFixed(1),
      finalWeight: finalWeight.toFixed(1),
      timeframe,
      healthBenefits
    });
    setShowResults(true);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Descubra Seu Potencial de Transformação
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Nossa calculadora inteligente estima seus resultados personalizados com base em dados científicos reais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="bg-white rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Calculadora de Transformação
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Peso Atual (kg)
                </label>
                <input
                  type="number"
                  value={currentWeight}
                  onChange={(e) => setCurrentWeight(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none text-lg"
                  placeholder="Ex: 120"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Altura (cm)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none text-lg"
                  placeholder="Ex: 165"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Idade
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none text-lg"
                  placeholder="Ex: 35"
                />
              </div>
              
              <button
                onClick={calculateResults}
                className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap"
              >
                Calcular Minha Transformação
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {!showResults ? (
              <div className="bg-gray-50 rounded-3xl p-8 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-calculator-line text-4xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Seus Resultados Aparecerão Aqui
                </h3>
                <p className="text-gray-600">
                  Preencha os dados ao lado para descobrir seu potencial de transformação personalizado.
                </p>
              </div>
            ) : (
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4">Seus Resultados Personalizados</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">{results.expectedLoss}kg</div>
                      <div className="text-sm opacity-90">Perda Esperada</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">{results.timeframe}</div>
                      <div className="text-sm opacity-90">Meses para Meta</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4">Transformação do IMC</h4>
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-500">{results.currentBMI}</div>
                      <div className="text-sm text-gray-600">IMC Atual</div>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className="ri-arrow-right-line text-2xl text-blue-600"></i>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-500">{results.finalBMI}</div>
                      <div className="text-sm text-gray-600">IMC Final</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
                    <i className="ri-heart-pulse-line"></i>
                    Benefícios para Sua Saúde
                  </h4>
                  <ul className="space-y-2">
                    {results.healthBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-blue-800">
                        <i className="ri-check-line text-green-500"></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 whitespace-nowrap">
                  Quero Começar Minha Jornada
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
