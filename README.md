<div align="center">
  <img src="https://nano.net.br/assets/programacao-DzAvORjU.png" width="50" alt="Logo NANO" />
  
  # NANO
  
  ### TECNOLOGIA SOB MEDIDA
</div>

---

## Visão Geral

O **Amazon English** é uma plataforma institucional e landing page premium desenvolvida para promover o curso de inglês ministrado pelo professor José Regis Junior. O projeto tem como objetivo principal atrair, informar e converter alunos (jovens profissionais, universitários e viajantes) que buscam fluência e confiança no idioma inglês através de uma metodologia prática e interativa de 10 meses.

A aplicação foi projetada com um design *dark premium*, utilizando efeitos de *glassmorphism*, animações fluidas e uma interface altamente responsiva para proporcionar uma experiência de usuário excepcional e transmitir a qualidade e o profissionalismo do curso.

---

## Funcionalidades Principais

> Apresentação Institucional Exclusiva com design *dark premium* focado em alta conversão.
> Seção detalhada sobre a trajetória e experiência internacional do Professor.
> Visão Geral do Curso demonstrando vantagens, metodologia, e estrutura de 10 meses.
> Animações Suaves e interações modernas utilizando Framer Motion e efeitos de *glassmorphism*.
> Design Totalmente Responsivo (Mobile-First) garantindo usabilidade em qualquer dispositivo.
> Suporte nativo para Domínio Próprio otimizado para SEO e performance.

---

## Stack Técnica

| Categoria | Tecnologia |
|---|---|
| Frontend | React 19, TypeScript |
| UI & Estilização | Tailwind CSS v4, Glassmorphism UI |
| Animações | Framer Motion (motion/react) |
| Ícones | Lucide React |
| Build Tool | Vite 6 |
| CI/CD & Deploy | GitHub Actions, GitHub Pages, gh-pages |

---

## Arquitetura do Projeto

A aplicação adota uma arquitetura baseada em componentes funcionais do React (SPA - Single Page Application), priorizando a modularidade, o encapsulamento de estado e a reutilização de código. 

A organização segue padrões modernos do ecossistema React/Vite:
- **Componentização:** A interface principal (`App.tsx`) atua como orquestrador de componentes de seção independentes (Navbar, Hero, Professor, CourseOverview, Methodology, Footer).
- **Separação de Responsabilidades:** O design e o comportamento visual estão isolados dentro dos componentes, utilizando utilitários do Tailwind e hooks de animação do Framer Motion, garantindo que o código se mantenha previsível e simples de manter.
- **Integração Fluida de Assets:** Estrutura otimizada via Vite para tratamento rápido de compilação de Tipagens, CSS e Assets otimizados do Frontend.

---

## Instalação e Execução

### Pré-requisitos
- Node.js (v20 ou superior recomendado)
- NPM, Yarn, pnpm ou bun

### Passo a passo para ambiente local

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:3000` (ou na porta configurada pelo Vite).

3. Para gerar a build de produção localmente:
```bash
npm run build
```

---

## Scripts Disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento local em ambiente de desenvolvimento. |
| `npm run build` | Compila o projeto (Vite build) e empacota para produção no diretório `/dist`. |
| `npm run preview` | Inicia um servidor local para testar a build de produção gerada em `/dist`. |
| `npm run clean` | Limpa o diretório local de compilação `/dist`. |
| `npm run lint` | Executa o Type Check de TypeScript (`tsc --noEmit`) assegurando integridade e qualidade. |
| `npm run predeploy` | Gatilho automático do NPM que executa a geração da build antes do deploy via CLI do gh-pages. |
| `npm run deploy` | Publica o diretório `/dist` diretamente na branch `gh-pages` de maneira isolada pelo terminal. |

---

## Estrutura de Pastas

```text
├── .github
│   └── workflows
│       └── deploy.yml        # Configuração do CI/CD no GitHub Actions
├── public
│   └── CNAME                 # Configuração do Domínio Customizado (amazonenglish.com.br)
├── src
│   ├── components            # Componentes principais padronizados
│   │   ├── CourseOverview.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Methodology.tsx
│   │   ├── Navbar.tsx
│   │   └── Professor.tsx
│   ├── App.tsx               # Componente central da aplicação (Orquestrador)
│   ├── index.css             # Entry point de estilos e vars (Tailwind V4)
│   └── main.tsx              # Ponto de inicialização da Aplicação
├── index.html                # Entry point da base HTML
├── package.json              # Metadados, dependências e scripts do projeto
├── tsconfig.json             # Regras rígidas e configurações globais de TypeScript
└── vite.config.ts            # Condições de compilador Vite e plugins (React, Tailwind)
```

---

## Deploy

O projeto conta com duas metodologias disponíveis para Deploy no **GitHub Pages**:

- **CI/CD Integrado (GitHub Actions):** O arquivo contido em `.github/workflows/deploy.yml` analisa a branch `main`, instalando as dependências, executando o validador `npm run lint` na fase de Type Check e, por fim, empacotando e enviando uma release de deploy baseada em Artifacts e ambientes de deploy em Cloud diretamente para o GitHub Pages.
- **Custom Domain (Domínio Próprio):** Já conta de fábrica com a integração otimizada usando arquivo de registro estático `public/CNAME`. A configuração `base` no `vite.config.ts` encontra-se adequadamente direcionada como `/`, resolvendo o mapeamento de paths e rotas no domínio sem subdiretórios redundantes.

---

## Considerações Técnicas

- **Performance & Splitting:** Os assets são servidos sob demanda e transpilados graças à configuração madura de bundle oferecida nativamente pelo compilador ultra-rápido SWC e Ecossistema do ViteJS.
- **Escalabilidade da UI:** A arquitetura baseada em Componentes Semânticos permite estender, sem maiores impasses, qualquer bloco contextual e transformar blocos em páginas plenas através do uso de roteadores como React Router de forma progressiva.
- **Padronização Visual Sistêmica:** Forte aderência ao estilo UI com "Dark Glassmorphism", empregando propriedades como `backdrop-blur`, gradientes suaves e bordas iluminadas nativamente com Tailwind v4, dispensando planilhas dispersivas em PostCSS ou arquivos pesados de SASS.
- **Acessibilidade & Responsividade:** O controle de UI foi engenhado assumindo uma postura "Mobile-First", através dos break-points de Tailwind de container fluidos até Monitores Ultra-Wide, promovendo coesão irretocável em variados devices.

---

## 🚀 Desenvolvido por

> **Sandro Peixoto**  
> https://www.sandropeixoto.com.br
>
> **NANO**  
> https://nano.net.br
