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
├── assets/                       # Recursos compartilhados
│   ├── css/                      # Estilos (futuros)
│   │   └── (CSS será extraído aqui)
│   ├── 📁 js/                       # Scripts reutilizáveis
│   │   └── menu-links.js         # ✅ Menu compartilhado dinâmico (centralizado)
│   └── 📁 data/                     # Dados estruturados
│       └── config.json           # ✅ Configuração central do projeto
│
├── pages/                        # Arquivos de layout/componentes (reservado para expansão)
│
├── ARCHITECTURE.md               # Este arquivo
├── README.md                     # Documentação geral
└── .git/                         # Controle de versão
```

## Princípios de Design

### 1. **Separação de Responsabilidades**

- **HTML**: Estrutura semântica e conteúdo
- **CSS**: Estilos (inline por página, consolidáveis em `assets/css/`)
- **JavaScript**: Comportamento dinâmico e interatividade
- **JSON**: Dados estruturados e configuração

### 2. **Reutilização de Componentes**

- Menu compartilhado via `assets/js/menu-links.js`
- Configuração centralizada em `assets/data/config.json`
- CSS consistente com variáveis de cor (`:root`)

### 3. **Manutenibilidade**

- Um único ponto de edição para o menu (menu-links.js)
- Dados do projeto em JSON facilitam atualizações
- Nomes de arquivo descritivos e autoexplicativos

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

- [ ] Extrair CSS para `assets/css/` (separar por tema: base.css, maps.css, cards.css)
- [ ] Criar `assets/css/variables.css` para cores e tipografia reutilizáveis
- [ ] Adicionar manifest.json para PWA (se necessário)

### Médio Prazo

- [ ] Extrair dados de mapas (nodes/edges) para JSON em `assets/data/maps/`
- [ ] Criar `assets/js/utils.js` para funções compartilhadas
- [ ] Sistema de build (webpack/vite) para minificação e otimização

### Longo Prazo

- [ ] Framework frontend (React/Vue) para renderização dinâmica
- [ ] API backend para servir dados
- [ ] Testes automatizados (Jest para JS, Cypress para E2E)
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Documentation site gerado automaticamente

## Boas Práticas Atuais

✅ Menu centralizado e dinâmico
✅ Configuração em JSON (fácil de editar)
✅ Nomeação consistente de classes CSS
✅ Estrutura HTML semântica
✅ Responsividade implementada

## Próximos Passos Recomendados

1. **Extrair CSS global** para `assets/css/global.css`
2. **Migrar dados de cards** (index.html) para `assets/data/cards.json`
3. **Criar `assets/js/init.js`** para inicializar componentes
4. **Documentar convenções CSS** (naming, variáveis, media queries)

---

**Última atualização**: Maio 2026  
**Responsável**: Arquitetura modular reutilizável
