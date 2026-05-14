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
│   │   └── menu-links.js         # ✅ Menu compartilhado dinâmico
│   └── data/
│       └── config.json           # ✅ Configuração central do projeto
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
- Configuração centralizada em `assets/data/config.json`
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
config.json (dados centralizados)
    ↓
menu-links.js (lê e renderiza menu)
    ↓
nav[data-shared-menu] (placeholder em cada página)
    ↓
Menu atualizado dinamicamente (com classe "active" inteligente)
```

## Futuras Melhorias Arquiteturais

### Curto Prazo

- [ ] Extrair dados de mapas (nodes/edges) para JSON em `assets/data/maps/`
- [ ] Adicionar `manifest.json` + service worker para suporte offline (PWA)

### Médio Prazo

- [ ] Criar `assets/js/utils.js` para funções compartilhadas entre mapas
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
✅ Nomeação consistente de classes CSS
✅ Estrutura HTML semântica

---


**Última atualização**: Maio 2026  
**Responsável**: Arquitetura modular reutilizável
