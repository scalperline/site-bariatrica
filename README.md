# Site Bariátrica Readdy

Este é um projeto [Next.js](https://nextjs.org) desenvolvido para o site da clínica bariátrica Readdy.

## Sobre o Projeto

Site institucional da clínica bariátrica Readdy, desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## Funcionalidades

- Landing page responsiva
- Simulador de transformação corporal
- Calculadora de perda de peso
- Seção de depoimentos de pacientes
- Timeline de transformação
- Assistente de IA integrado

## Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **React** - Biblioteca de interface

## Como Executar

Primeiro, instale as dependências:

```bash
npm install
# ou
yarn install
```

Em seguida, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

```
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── transformacao/     # Página de transformação
├── components/            # Componentes React
│   ├── AIAssistant.tsx
│   ├── BodyTransformationSimulator.tsx
│   ├── DoctorSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── PatientStories.tsx
│   ├── Readdy/
│   ├── TransformationTimeline.tsx
│   └── WeightLossCalculator.tsx
├── content/              # Conteúdo estático
├── lib/                  # Utilitários
├── public/               # Arquivos públicos
└── types/                # Definições de tipos
```

## Scripts Disponíveis

- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run start` - Executa a aplicação em produção
- `npm run lint` - Executa o linter

## Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto é privado e pertence à clínica Readdy.
