/\*\*

- ESTRUTURA DE PROJETO
-
- Convenções de nomeação e organização de código
- em Fofocas Gregas
  \*/

// ============================================
// PADRÕES DE NOMEAÇÃO
// ============================================

// Classes CSS
.component-name // Componente principal
.component-name\_\_element // Elemento dentro do componente (BEM)
.component-name--modifier // Variação do componente

// Exemplos reais do projeto:
.cards-featured // Contêiner dos cards em destaque
.card-atridas // Card específico dos Atridas
.char-tag // Tag de personagem
.site-nav // Navegação compartilhada
.node // Nó em um mapa SVG
.edge // Aresta/conexão em um mapa

// IDs (usar com moderação)
#header // Cabeçalho
#nav // Navegação
#main-content // Conteúdo principal

// Atributos de dados (preferir para comportamento)
data-shared-menu // Menu dinamicamente preenchido
data-card-id // Identificador de card
data-character-id // Identificador de personagem

// ============================================
// ESTRUTURA DE PASTAS RECOMENDADA
// ============================================

/_
assets/
├── css/
│ ├── base.css # Reset, tipografia, body
│ ├── variables.css # :root com cores, fontes, espaçamento
│ ├── layout.css # Grid, flexbox, estrutura geral
│ ├── components.css # Cards, buttons, tags
│ ├── navigation.css # Menu compartilhado
│ ├── maps.css # SVG styling para mapas
│ ├── animations.css # Keyframes e transições
│ └── responsive.css # Media queries consolidadas
│
├── js/
│ ├── menu-links.js # [EXISTENTE] Menu dinâmico
│ ├── utils.js # Funções auxiliares (futura)
│ ├── init.js # Inicialização de componentes (futura)
│ └── maps/
│ ├── atridas.js # Lógica do mapa (extração futura)
│ ├── ciclo-troiano.js # Lógica do mapa
│ └── ...
│
└── data/
├── config.json # [NOVO] Configuração central
└── maps/
├── atridas.json # Dados de nós e arestas (futura)
├── ciclo-troiano.json
└── ...
_/

// ============================================
// CONVENÇÕES DE CÓDIGO
// ============================================

// JAVASCRIPT

// 1. Módulos IIFE para evitar poluição de escopo global
(function() {
'use strict';
// Código aqui é isolado
})();

// 2. Seletores DOM com prefixo data-
const navElement = document.querySelector('nav[data-shared-menu]');
const cards = document.querySelectorAll('[data-card-id]');

// 3. Nomes descritivos de variáveis
const currentPage = window.location.pathname.split("/").pop();
const menuLinks = [/* ... */]; // Plural para arrays
const isActive = true; // Booleanos com prefixo is/has

// 4. Constantes em MAIÚSCULAS
const ANIMATION_DURATION = 300; // ms
const MAX_NODES = 50;
const COLOR_GOLD = '#d4a574';

// ============================================
// CONVENÇÕES DE HTML
// ============================================

// 1. Classes semânticas e descritivas

<nav class="site-nav" data-shared-menu></nav>
<div class="cards-featured"></div>
<a href="atridas-mapa.html" class="card card-atridas"></a>

// 2. Sempre use atributos data-\* para dados

<div data-character-id="oedipus" data-role="tragic-hero"></div>

// 3. IDs apenas para estilos únicos ou targets de hash

<h1 id="main-title"></h1>
<section id="maps"></section>

// ============================================
// CONVENÇÕES DE CSS
// ============================================

// 1. Agrupe propriedades por tipo
.selector {
/_ Layout _/
display: flex;
flex-direction: column;

/_ Box Model _/
padding: 20px;
margin: 10px;

/_ Tipografia _/
font-size: 16px;
color: var(--gold);

/_ Visual _/
background: var(--dark);
border: 1px solid var(--border);
border-radius: 4px;

/_ Animação _/
transition: all 0.3s ease;
}

// 2. Use variáveis CSS (:root) para cores, tamanhos, fontes
:root {
--color-primary: #d4a574;
--color-dark: #0a0e27;
--spacing-unit: 8px;
--font-serif: "Georgia", serif;
}

// 3. Mobile-first responsive (min-width)
.card { width: 100%; }
@media (min-width: 768px) { .card { width: 48%; } }

// ============================================
// CHECKLIST ANTES DE COMMITAR
// ============================================

/_
[ ] Nomes de classe descritivos e sem abreviações
[ ] Sem cores hardcoded (usar variáveis --color-_)
[ ] Sem espaçamentos hardcoded (usar variáveis --spacing-_)
[ ] Índentação consistente (2 ou 4 espaços)
[ ] Sem console.log() ou debugger em produção
[ ] Sem funcionalidades browser-specific sem fallback
[ ] Sem propriedades CSS deprecated
[ ] Teste responsividade em 3 breakpoints (mobile, tablet, desktop)
[ ] Valide HTML com W3C validator
[ ] Teste links internos
[ ] Commits com mensagens claras em git
_/
