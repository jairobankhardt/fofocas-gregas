# Arquitetura — Fofocas Gregas

## Estrutura de Pastas

```
fofocas-gregas/
├── index.html                    # Página inicial (portal)
├── catalogo-geral.html           # Catálogo com tabelas de obras
├── ciclo-troiano-mapa.html       # Mapa interativo — Ciclo Troiano
├── atridas-mapa.html             # Mapa interativo — Os Atridas
├── familia-edipo-mapa.html       # Mapa interativo — Casa de Édipo
├── deuses-mapa.html              # Mapa interativo — Deuses Olimpo
├── herois-mapa.html              # Mapa interativo — Os Heróis
│
├── assets/
│   ├── css/
│   │   ├── variables.css         # ✅ Tokens globais de cor e tipografia
│   │   ├── index.css             # ✅ Estilos da página inicial
│   │   ├── catalogo-geral.css    # ✅ Estilos do catálogo
│   │   ├── mapa-crimson.css      # ✅ Tema crimson (Atridas + Ciclo Troiano)
│   │   ├── mapa-gold.css         # ✅ Tema dourado (Deuses)
│   │   ├── mapa-purple.css       # ✅ Tema púrpura (Família de Édipo)
│   │   ├── mapa-bronze.css       # ✅ Tema bronze (Os Heróis)
│   │   └── STYLES.md             # Guia de estilização
│   ├── js/
│   │   ├── menu-links.js         # ✅ Menu compartilhado dinâmico
│   │   └── utils.js              # ✅ Funções utilitárias compartilhadas entre mapas
│   └── data/
│       ├── config.json           # ✅ Configuração central do projeto
│       └── maps/
│           ├── atridas.json          # ✅ Dados de nós/arestas — Os Atridas
│           ├── ciclo-troiano.json    # ✅ Dados de nós/arestas — Ciclo Troiano
│           ├── deuses.json           # ✅ Dados de nós/arestas — Deuses
│           ├── familia-edipo.json    # ✅ Dados de nós/arestas — Família de Édipo
│           └── herois.json           # ✅ Dados de nós/arestas — Os Heróis
│
├── ARCHITECTURE.md               # Este arquivo
├── README.md                     # Documentação geral
├── CONVENTIONS.md                # Padrões de código
├── MAINTENANCE.md                # Guia de manutenção
├── ROADMAP.md                    # Evolução do projeto
└── .git/
```

## Princípios de Design

### 1. **Separação de Responsabilidades**

- **HTML**: Estrutura semântica e conteúdo
- **CSS**: Estilos externos em `assets/css/` (um arquivo por tema)
- **JavaScript**: Comportamento dinâmico e interatividade
- **JSON**: Dados estruturados e configuração

### 2. **Reutilização de Componentes**

- Menu compartilhado via `assets/js/menu-links.js`
- Utilitários de mapa via `assets/js/utils.js` (`MapUtils` — `ns`, `computeBoundingBox`, `highlightEdges`, `resetEdges`, `toggleLabels`)
- Configuração centralizada em `assets/data/config.json`
- Dados de mapas em `assets/data/maps/*.json` (carregados via `fetch` por cada página)
- Tokens globais de cor e tipografia em `assets/css/variables.css` (importado por todos os temas)
- CSS com variáveis de cor (`:root`) por tema
- `mapa-crimson.css` compartilhado entre Atridas e Ciclo Troiano (CSS idêntico)

### 3. **Responsividade**

- Dois breakpoints em todos os arquivos CSS:
    - `@media (max-width: 768px)` — tablet / landscape mobile
    - `@media (max-width: 480px)` — mobile portrait
- Mapas: info panel desliza do fundo em mobile; nav com scroll horizontal
- Catálogo: tabela com `overflow-x: auto`; nav scrollável
- Portal: cards em coluna única abaixo de 700px

## Fluxo de Dados

```
config.json (configuração do projeto)
    ↓
menu-links.js (lê e renderiza menu)
    ↓
nav[data-shared-menu] (placeholder em cada página)
    ↓
Menu atualizado dinamicamente (com classe "active" inteligente)

maps/*.json (nodes + edges do mapa)
    ↓
fetch() em cada *-mapa.html
    ↓
MapUtils.* (utils.js) + lógica local de renderização SVG
    ↓
Canvas SVG interativo
```

## Futuras Melhorias Arquiteturais

### Curto Prazo

- [ ] Adicionar `manifest.json` + service worker para suporte offline (PWA)

### Médio Prazo

- [ ] Sistema de build (vite) para minificação e bundling

### Longo Prazo

- [ ] Testes automatizados (Cypress para E2E)
- [ ] CI/CD pipeline (GitHub Actions)

## Boas Práticas Atuais

✅ Menu centralizado e dinâmico
✅ CSS externo por tema (6 arquivos em `assets/css/`)
✅ Tokens globais de cor/tipografia (`variables.css`, importado por todos os temas)
✅ Responsividade implementada (mobile/tablet/desktop)
✅ Configuração em JSON (fácil de editar)
✅ Dados de mapas em JSON externo (`assets/data/maps/*.json`, carregados via `fetch`)
✅ Utilitários JS compartilhados (`utils.js` com `MapUtils`)
✅ Nomeação consistente de classes CSS
✅ Estrutura HTML semântica

---

**Última atualização**: Maio 2026  
**Responsável**: Arquitetura modular reutilizável
