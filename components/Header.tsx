
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-blue-100">
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-blue-900 font-caveat-brush">
            Dr. Thiago Ramos
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/transformacao" className="text-blue-800 hover:text-green-600 transition-colors whitespace-nowrap">
              A Ciência da Transformação
            </Link>
            <Link href="/jornada" className="text-blue-800 hover:text-green-600 transition-colors whitespace-nowrap">
              Sua Nova Biografia
            </Link>
            <Link href="/historias" className="text-blue-800 hover:text-green-600 transition-colors whitespace-nowrap">
              Histórias de Coragem
            </Link>
            <Link href="/doutor" className="text-blue-800 hover:text-green-600 transition-colors whitespace-nowrap">
              Conexão Humana
            </Link>
            <Link 
              href="/consulta" 
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            >
              Agende sua Consulta
            </Link>
          </div>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-2xl text-blue-900"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-blue-100">
            <div className="flex flex-col space-y-4 mt-4">
              <Link href="/transformacao" className="text-blue-800 hover:text-green-600 transition-colors">
                A Ciência da Transformação
              </Link>
              <Link href="/jornada" className="text-blue-800 hover:text-green-600 transition-colors">
                Sua Nova Biografia
              </Link>
              <Link href="/historias" className="text-blue-800 hover:text-green-600 transition-colors">
                Histórias de Coragem
              </Link>
              <Link href="/doutor" className="text-blue-800 hover:text-green-600 transition-colors">
                Conexão Humana
              </Link>
              <Link 
                href="/consulta" 
                className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 text-center"
              >
                Agende sua Consulta
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
