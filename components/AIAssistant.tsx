
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    id: 'weight',
    question: 'Qual é seu peso atual?',
    type: 'input',
    placeholder: 'Ex: 120 kg'
  },
  {
    id: 'height',
    question: 'Qual é sua altura?',
    type: 'input',
    placeholder: 'Ex: 1,65 m'
  },
  {
    id: 'age',
    question: 'Qual é sua idade?',
    type: 'input',
    placeholder: 'Ex: 35 anos'
  },
  {
    id: 'attempts',
    question: 'Já tentou perder peso antes?',
    type: 'choice',
    options: ['Sim, várias vezes', 'Algumas tentativas', 'Primeira vez']
  },
  {
    id: 'health',
    question: 'Tem algum problema de saúde relacionado ao peso?',
    type: 'choice',
    options: ['Diabetes', 'Pressão alta', 'Problemas articulares', 'Apneia do sono', 'Nenhum']
  }
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const currentQ = questions[currentQuestion] as any;

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: answer };
    setAnswers(newAnswers);
    setInputValue('');

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    } else {
      setTimeout(() => {
        setIsCompleted(true);
      }, 500);
    }
  };

  const handleInputSubmit = () => {
    if (inputValue.trim()) {
      handleAnswer(inputValue);
    }
  };

  const resetChat = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsCompleted(false);
    setInputValue('');
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full shadow-xl flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.i 
          className={`text-2xl ${isOpen ? 'ri-close-line' : 'ri-robot-line'}`}
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-96 bg-white rounded-2xl shadow-2xl z-40 border border-gray-200"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-4 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="ri-robot-line text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Sofia - Assistente Virtual</h3>
                  <p className="text-xs opacity-90">Especialista em cirurgia bariátrica</p>
                </div>
              </div>
            </div>

            {/* Chat Content */}
            <div className="h-80 overflow-y-auto p-4">
              {!isCompleted ? (
                <div className="space-y-4">
                  {/* Welcome Message */}
                  {currentQuestion === 0 && Object.keys(answers).length === 0 && (
                    <motion.div
                      className="bg-gray-100 p-3 rounded-2xl rounded-bl-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <p className="text-sm text-gray-800">
                        Olá! Sou a Sofia, assistente do Dr. Thiago. Vou fazer algumas perguntas para te ajudar melhor. 😊
                      </p>
                    </motion.div>
                  )}

                  {/* Previous Questions */}
                  {Object.entries(answers).map(([questionId, answer]) => {
                    const q = questions.find(item => item.id === questionId);
                    if (!q) return null;
                    return (
                      <div key={questionId} className="space-y-2">
                        <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-sm">
                          <p className="text-sm text-gray-800">{q.question}</p>
                        </div>
                        <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-br-sm ml-8">
                          <p className="text-sm">{answer}</p>
                        </div>
                      </div>
                    );
                  })}

                  {/* Current Question */}
                  {currentQ && (
                    <motion.div
                      className="bg-gray-100 p-3 rounded-2xl rounded-bl-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <p className="text-sm text-gray-800">{currentQ?.question}</p>
                    </motion.div>
                  )}

                  {/* Answer Options */}
                  {currentQ && (
                    <div className="space-y-2">
                      {currentQ?.type === 'choice' ? (
                        (currentQ?.options ?? []).map((option: string, index: number) => (
                          <motion.button
                            key={index}
                            className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-xl text-sm text-blue-800 transition-colors"
                            onClick={() => handleAnswer(option)}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            {option}
                          </motion.button>
                        ))
                      ) : (
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder={currentQ?.placeholder}
                            className="flex-1 p-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none text-sm"
                            onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
                          />
                          <button
                            onClick={handleInputSubmit}
                            className="px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                          >
                            <i className="ri-send-plane-line"></i>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <motion.div
                  className="text-center space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <i className="ri-check-line text-3xl text-green-600"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Obrigada pelas informações!
                  </h3>
                  <div className="bg-green-50 p-4 rounded-xl text-left">
                    <h4 className="font-semibold text-green-800 mb-2">Recomendação Inicial:</h4>
                    <p className="text-sm text-green-700 mb-3">
                      Com base no seu perfil, você pode ser um bom candidato para cirurgia bariátrica. 
                      Recomendo uma avaliação presencial com Dr. Thiago.
                    </p>
                    <div className="text-xs text-green-600">
                      <i className="ri-information-line mr-1"></i>
                      Esta é apenas uma avaliação inicial. O diagnóstico final é sempre médico.
                    </div>
                  </div>
                  <div className="space-y-2">
                    <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors whitespace-nowrap">
                      Agendar Consulta Agora
                    </button>
                    <button 
                      onClick={resetChat}
                      className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl hover:bg-gray-50 transition-colors whitespace-nowrap"
                    >
                      Refazer Avaliação
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Progress Bar */}
            {!isCompleted && (
              <div className="p-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span>Progresso</span>
                  <span>{Object.keys(answers).length}/{questions.length}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-600 to-green-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
