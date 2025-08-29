
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-6 font-caveat-brush">Dr. Thiago Ramos</h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Transformando vidas através da cirurgia bariátrica com técnica, ciência e muito cuidado humano.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <i className="ri-facebook-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <i className="ri-youtube-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <i className="ri-whatsapp-line text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/transformacao" className="text-blue-200 hover:text-white transition-colors">
                  A Ciência da Transformação
                </Link>
              </li>
              <li>
                <Link href="/jornada" className="text-blue-200 hover:text-white transition-colors">
                  Sua Nova Biografia
                </Link>
              </li>
              <li>
                <Link href="/historias" className="text-blue-200 hover:text-white transition-colors">
                  Histórias de Coragem
                </Link>
              </li>
              <li>
                <Link href="/doutor" className="text-blue-200 hover:text-white transition-colors">
                  Conexão Humana
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3 text-blue-200">
              <li>Bypass Gástrico</li>
              <li>Sleeve (Manga Gástrica)</li>
              <li>Banda Gástrica</li>
              <li>Revisões de Cirurgias</li>
              <li>Acompanhamento Pós-Op</li>
              <li>Suporte Nutricional</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4 text-blue-200">
              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-green-400 mt-1"></i>
                <div>
                  <p>Rua das Palmeiras, 123</p>
                  <p>Barra da Tijuca - Rio de Janeiro/RJ</p>
                  <p>CEP: 22640-000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-phone-line text-green-400"></i>
                <p>(21) 3456-7890</p>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-whatsapp-line text-green-400"></i>
                <p>(21) 99999-8888</p>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-mail-line text-green-400"></i>
                <p>contato@drtthiagoramos.com.br</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-300 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 Dr. Thiago Ramos. Todos os direitos reservados.</p>
              <p className="mt-1">CRM-RJ: 123456 | RQE: 78910</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacidade" className="text-blue-200 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-blue-200 hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-950 py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-blue-300 text-sm">
            <i className="ri-heart-line text-red-400 mx-1"></i>
            Feito com carinho para transformar vidas
            <i className="ri-heart-line text-red-400 mx-1"></i>
          </p>
        </div>
      </div>
    </footer>
  );
}
