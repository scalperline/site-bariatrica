
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import { motion } from 'framer-motion';

const procedures = [
  {
    name: 'Bypass Gástrico',
    description: 'Técnica gold standard que reduz o estômago e modifica a absorção intestinal.',
    image: 'https://readdy.ai/api/search-image?query=Medical%20illustration%20of%20gastric%20bypass%20surgery%20procedure%2C%20anatomical%20diagram%20showing%20stomach%20reduction%20and%20intestinal%20rerouting%2C%20professional%20medical%20visualization%2C%20educational%20healthcare%20diagram&width=400&height=300&seq=bypass-procedure&orientation=landscape',
    benefits: ['Perda de 70-80% do excesso de peso', 'Melhora significativa do diabetes', 'Redução do colesterol'],
    duration: '2-3 horas',
    recovery: '2-3 semanas'
  },
  {
    name: 'Sleeve (Manga Gástrica)',
    description: 'Remoção de parte do estômago, mantendo o formato de manga ou tubo.',
    image: 'https://readdy.ai/api/search-image?query=Medical%20illustration%20of%20sleeve%20gastrectomy%20surgery%2C%20stomach%20sleeve%20procedure%20diagram%2C%20vertical%20sleeve%20anatomy%2C%20professional%20medical%20visualization%20for%20patient%20education&width=400&height=300&seq=sleeve-procedure&orientation=landscape',
    benefits: ['Perda de 60-70% do excesso de peso', 'Procedimento mais simples', 'Menor tempo cirúrgico'],
    duration: '1-2 horas',
    recovery: '1-2 semanas'
  },
  {
    name: 'Banda Gástrica',
    description: 'Colocação de anel ajustável para reduzir a capacidade do estômago.',
    image: 'https://readdy.ai/api/search-image?query=Medical%20illustration%20of%20gastric%20band%20surgery%2C%20adjustable%20gastric%20band%20procedure%20diagram%2C%20laparoscopic%20band%20placement%2C%20professional%20medical%20educational%20visualization&width=400&height=300&seq=band-procedure&orientation=landscape',
    benefits: ['Procedimento reversível', 'Menor invasão cirúrgica', 'Ajustes personalizados'],
    duration: '45-60 minutos',
    recovery: '1 semana'
  }
];

export default function TransformacaoPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20medical%20science%20laboratory%20with%20DNA%20strands%2C%20molecular%20structures%2C%20advanced%20medical%20technology%2C%20scientific%20research%20environment%2C%20medical%20innovation%20concept%2C%20blue%20and%20green%20lighting&width=1920&height=1080&seq=science-bg&orientation=landscape')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-8">
                A Ciência da <span className="text-green-400">Transformação</span>
              </h1>
              <p className="text-xl lg:text-2xl leading-relaxed opacity-90 mb-12">
                Entenda como a cirurgia bariátrica funciona e por que ela é considerada o tratamento mais eficaz para obesidade mórbida.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
                  <div className="text-lg opacity-80">Taxa de Sucesso</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">70%</div>
                  <div className="text-lg opacity-80">Perda do Excesso</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
                  <div className="text-lg opacity-80">Melhora do Diabetes</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                Como Funciona a Transformação
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                A cirurgia bariátrica atua em múltiplos mecanismos para promover perda de peso sustentável.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-12">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-scissors-line text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Restrição</h3>
                <p className="text-gray-700 leading-relaxed">
                  Redução do tamanho do estômago limita a quantidade de alimento que pode ser consumida de uma só vez.
                </p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-route-line text-3xl text-green-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Má-absorção</h3>
                <p className="text-gray-700 leading-relaxed">
                  Alteração do caminho intestinal reduz a absorção de calorias e nutrientes específicos.
                </p>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-brain-line text-3xl text-purple-600"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hormonal</h3>
                <p className="text-gray-700 leading-relaxed">
                  Mudanças hormonais reduzem a fome e aumentam a sensação de saciedade naturalmente.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Procedures */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                Tipos de Cirurgia
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Cada procedimento é único e escolhido de acordo com o perfil específico de cada paciente.
              </p>
            </motion.div>

            <div className="space-y-12">
              {procedures.map((procedure, index) => (
                <motion.div 
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="bg-white rounded-3xl p-8 shadow-xl">
                      <h3 className="text-3xl font-bold text-blue-900 mb-4">
                        {procedure.name}
                      </h3>
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {procedure.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-blue-50 p-4 rounded-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <i className="ri-time-line text-blue-600"></i>
                            <span className="font-semibold text-blue-900">Duração</span>
                          </div>
                          <p className="text-blue-800">{procedure.duration}</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <i className="ri-heart-pulse-line text-green-600"></i>
                            <span className="font-semibold text-green-900">Recuperação</span>
                          </div>
                          <p className="text-green-800">{procedure.recovery}</p>
                        </div>
                      </div>

                      <h4 className="font-semibold text-gray-900 mb-3">Principais Benefícios:</h4>
                      <ul className="space-y-2">
                        {procedure.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <i className="ri-check-line text-green-500"></i>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={procedure.image}
                        alt={procedure.name}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h4 className="text-2xl font-bold text-white mb-2">{procedure.name}</h4>
                        <p className="text-white/90">Procedimento minimamente invasivo</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Qual Cirurgia é Ideal para Você?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Cada pessoa é única, assim como sua jornada de transformação. 
                Vamos descobrir juntos qual é o melhor caminho para você.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 whitespace-nowrap">
                  Quero uma Avaliação Personalizada
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap">
                  Tirar Dúvidas pelo WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}
