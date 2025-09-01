
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DoctorSection() {
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
            Conexão Humana
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Mais que um médico, um parceiro na sua jornada de transformação.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://readdy.ai/api/search-image?query=Professional%20Brazilian%20bariatric%20surgeon%20Dr.%20Thiago%20Ramos%20in%20medical%20coat%2C%20warm%20smile%2C%20confident%20posture%2C%20modern%20medical%20office%20background%2C%20compassionate%20doctor%2C%20trustworthy%20medical%20professional%2C%20Brazilian%20healthcare%20specialist&width=500&height=600&seq=dr-thiago&orientation=portrait"
                alt="Dr. Thiago Ramos"
                width={500}
                height={600}
                className="w-full h-[600px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">2000+</div>
                <div className="text-sm text-gray-600">Cirurgias</div>
                <div className="text-sm text-gray-600">Realizadas</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6 font-caveat-brush">
                Dr. Thiago Ramos
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Há mais de 15 anos dedicando sua vida a transformar outras vidas. Dr. Thiago não é apenas um cirurgião bariátrico de excelência - é alguém que entende profundamente o impacto emocional da obesidade e a coragem necessária para superá-la.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sua abordagem vai além da técnica cirúrgica: cada paciente recebe cuidado personalizado, suporte emocional e acompanhamento contínuo para garantir não apenas a perda de peso, mas uma transformação completa de vida.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-award-line text-2xl text-blue-600"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Especialização</h4>
                <p className="text-gray-700 text-sm">Cirurgia Bariátrica e Metabólica pela SBCBM</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-heart-pulse-line text-2xl text-green-600"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Missão</h4>
                <p className="text-gray-700 text-sm">Transformar vidas através da medicina humanizada</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl">
              <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                <i className="ri-star-line"></i>
                Diferenciais do Dr. Thiago
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-blue-800">
                  <i className="ri-check-line text-green-500"></i>
                  <span>Acompanhamento 24h pós-operatório</span>
                </li>
                <li className="flex items-center gap-3 text-blue-800">
                  <i className="ri-check-line text-green-500"></i>
                  <span>Equipe multidisciplinar completa</span>
                </li>
                <li className="flex items-center gap-3 text-blue-800">
                  <i className="ri-check-line text-green-500"></i>
                  <span>Técnicas minimamente invasivas</span>
                </li>
                <li className="flex items-center gap-3 text-blue-800">
                  <i className="ri-check-line text-green-500"></i>
                  <span>Suporte nutricional e psicológico</span>
                </li>
              </ul>
            </div>

            <blockquote className="border-l-4 border-green-500 pl-6 italic text-xl text-gray-800">
              Cada paciente é único, cada história merece ser escrita com cuidado, técnica e muito carinho. Minha missão é ser o parceiro que você precisa nesta jornada de renascimento.
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex-1 whitespace-nowrap">
                Conhecer o Dr. Thiago
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex-1 whitespace-nowrap">
                Ver Credenciais
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-20 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-user-heart-line text-3xl text-blue-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cuidado Humanizado</h3>
            <p className="text-gray-700">
              Cada consulta é um encontro entre duas pessoas que se importam: você com sua vida, eu com sua transformação.
            </p>
          </div>

          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-3xl text-green-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Segurança Total</h3>
            <p className="text-gray-700">
              Protocolos rigorosos de segurança e hospital de excelência para garantir sua tranquilidade em cada etapa.
            </p>
          </div>

          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-infinite-line text-3xl text-purple-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Acompanhamento Vitalício</h3>
            <p className="text-gray-700">
              Sua jornada não termina na cirurgia. Estarei ao seu lado em cada conquista da sua nova vida.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
