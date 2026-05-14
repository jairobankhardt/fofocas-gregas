/\*\*

- CSS Architecture Guide
- Guia de estilização compartilhada para Fofocas Gregas
-
- Este arquivo documenta as convenções CSS usadas no projeto
- e facilita a migração futura para SCSS/menos inline
  \*/

/_ ========================================
CORES — Variáveis CSS Principais
======================================== _/

:root {
/_ Tema Antigo Grego _/
--gold: #d4a574;
--dark: #0a0e27;
--parchment: #f5e6d3;
--wine: #722f37;
--blue: #1a3a52;
--olive: #556b2f;

/_ Cores de Herança _/
--accent-warm: #ff6b6b;
--accent-cool: #4ecdc4;
--light: #fafafa;
--border: #e0e0e0;

/_ Tipografia _/
--font-serif: "Georgia", "Times New Roman", serif;
--font-sans: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
--font-mono: "Courier New", monospace;
}

/_ ========================================
LAYOUT — Estrutura Global
======================================== _/

/\*
Grid principal em index.html:
.cards-featured { grid-template-columns: 1fr 1fr; }
.cards-grid { grid-template-columns: 1fr 1fr; }

Alternativa responsiva:
@media (max-width: 700px) {
.cards-featured, .cards-grid { grid-template-columns: 1fr; }
}
\*/

/_ ========================================
COMPONENTES — Padrões Reutilizáveis
======================================== _/

/_ Cards — Usados em index.html e catalogo-geral.html _/
.card {
background: var(--parchment);
border: 2px solid var(--gold);
border-radius: 8px;
padding: 20px;
transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
transform: scale(1.02);
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

/_ Tags de Personagem — Usadas em catalogo-geral.html _/
.char-tag {
display: inline-block;
background: var(--gold);
color: var(--dark);
padding: 4px 8px;
border-radius: 4px;
margin: 2px;
font-size: 0.9em;
}

/_ Navegação Compartilhada _/
.site-nav {
background: var(--dark);
padding: 12px 20px;
display: flex;
gap: 20px;
border-bottom: 2px solid var(--gold);
}

.site-nav a {
color: var(--parchment);
text-decoration: none;
transition: color 0.3s;
}

.site-nav a:hover,
.site-nav a.active {
color: var(--gold);
font-weight: bold;
}

/_ ========================================
MAPAS INTERATIVOS — SVG Styling
======================================== _/

/_ Nós de personagem _/
.node {
cursor: pointer;
transition: filter 0.2s;
}

.node:hover {
filter: brightness(1.2);
}

.node-label {
font-size: 12px;
pointer-events: none;
font-family: var(--font-serif);
}

/_ Conexões entre nós _/
.edge {
stroke: var(--border);
stroke-width: 1.5;
fill: none;
}

/_ Especificações por tipo de relação _/
.edge.amor { stroke: var(--wine); }
.edge.familia { stroke: var(--blue); }
.edge.conflito { stroke: var(--accent-warm); stroke-dasharray: 5,5; }
.edge.alianca { stroke: var(--gold); stroke-width: 2; }

/_ ========================================
ANIMAÇÕES
======================================== _/

@keyframes fadeUp {
from {
opacity: 0;
transform: translateY(20px);
}
to {
opacity: 1;
transform: translateY(0);
}
}

@keyframes parallax {
from { transform: translateZ(0) scale(1); }
to { transform: translateZ(20px) scale(1.02); }
}

@keyframes pulse {
0%, 100% { opacity: 1; }
50% { opacity: 0.7; }
}

/_ ========================================
TABELAS — Catálogo Geral
======================================== _/

table {
width: 100%;
border-collapse: collapse;
margin: 20px 0;
background: var(--parchment);
}

thead {
background: var(--dark);
color: var(--gold);
}

th, td {
padding: 12px;
text-align: left;
border-bottom: 1px solid var(--gold);
}

tbody tr:hover {
background: rgba(212, 165, 116, 0.1); /_ --gold com transparência _/
}

/_ ========================================
RESPONSIVIDADE
======================================== _/

/_ Mobile (< 700px) _/
@media (max-width: 700px) {
.site-nav {
flex-direction: column;
gap: 10px;
}

.cards-featured,
.cards-grid {
grid-template-columns: 1fr;
}

table {
font-size: 0.9em;
}

th, td {
padding: 8px 4px;
}
}

/_ Tablet (700px - 1024px) _/
@media (min-width: 700px) and (max-width: 1024px) {
.site-nav {
flex-wrap: wrap;
}
}

/_ ========================================
UTILITÁRIOS
======================================== _/

.hidden { display: none !important; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.mt-20 { margin-top: 20px; }
.mb-20 { margin-bottom: 20px; }
.p-20 { padding: 20px; }

/_ ========================================
MANUTENÇÃO
======================================== _/

/\*
TODO (Migração futura):

- [ ] Extrair CSS inline de index.html → assets/css/index.css
- [ ] Extrair CSS inline de catalogo-geral.html → assets/css/catalog.css
- [ ] Extrair CSS inline de \*-mapa.html → assets/css/maps.css
- [ ] Consolidar em variables.css, base.css, components.css
- [ ] Considerar SCSS para nesting e variáveis avançadas
- [ ] Adicionar PostCSS para vendor prefixes
      \*/
