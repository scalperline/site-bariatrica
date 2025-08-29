"use client";

import { motion } from "framer-motion";
import type { Servico } from "@/types/content";
import servicos from "@/content/servicos.json";

export default function ServicesSection() {
  const items = servicos as Servico[];

  return (
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
            Serviços
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conheça nossas principais frentes de atuação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <i className={`${item.icone} text-2xl text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.titulo}</h3>
              <p className="text-gray-700">{item.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



