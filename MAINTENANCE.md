#!/usr/bin/env sh

# GUIA DE MANUTENÇÃO — Fofocas Gregas

# Instruções práticas para manter e evoluir o projeto

## ========================================

## TAREFAS COMUNS

## ========================================

### 1️⃣ ADICIONAR UM NOVO LINK AO MENU

# Edite APENAS: assets/js/menu-links.js

#

# Antes:

# { href: "deuses-mapa.html", label: "Deuses" },

# { href: "herois-mapa.html", label: "Heróis" },

#

# Depois:

# { href: "deuses-mapa.html", label: "Deuses" },

# { href: "herois-mapa.html", label: "Heróis" },

# { href: "novo-mapa.html", label: "Novo Mapa" }, ← ADICIONAR AQUI

#

# ✅ Menu atualiza automaticamente em TODAS as páginas

### 2️⃣ ATUALIZAR INFORMAÇÕES DO PROJETO

# Edite: assets/data/config.json

#

# Exemplo: Adicionar nova obra ao catálogo

# {

# "dramatists": {

# "tragic": {

# "Ésquilo": 7,

# "Sófocles": 7,

# "Eurípides": 20 ← Aumentar de 19 para 20

# }

# }

# }

### 3️⃣ EDITAR PÁGINA EXISTENTE

# Arquivo: [página].html

#

# Estrutura esperada:

# <nav class="site-nav" data-shared-menu></nav> ← Menu injetado aqui

# <main><!-- conteúdo --></main>

# <script src="assets/js/menu-links.js"></script> ← Script no final

#

# Não remova data-shared-menu, o menu deixará de aparecer!

### 4️⃣ CRIAR NOVA PÁGINA COM MENU AUTOMÁTICO

# Template HTML mínimo:

#

# <!DOCTYPE html>

# <html lang="pt-BR">

# <head>

# <meta charset="UTF-8">

# <title>Nova Página — Fofocas Gregas</title>

# <style>

# :root {

# --gold: #d4a574;

# --dark: #0a0e27;

# --parchment: #f5e6d3;

# }

# body { background: var(--parchment); color: var(--dark); }

# nav { background: var(--dark); }

# </style>

# </head>

# <body>

# <nav class="site-nav" data-shared-menu></nav>

# <main><!-- seu conteúdo aqui --></main>

# <script src="assets/js/menu-links.js"></script>

# </body>

# </html>

#

# Então adicione ao menu em assets/js/menu-links.js:

# { href: "nova-pagina.html", label: "Nova Página" },

### 5️⃣ ADICIONAR NOVA IMAGEM/RECURSO

# Estrutura recomendada (futura):

# assets/

# ├── images/

# │ ├── maps/

# │ └── thumbnails/

# └── fonts/

#

# Atualmente: todas as imagens são SVG inline (embed no HTML)

## ========================================

## FLUXO DE TRABALHO

## ========================================

### Desenvolvimento Local

# 1. Editar arquivo HTML/CSS/JS

# 2. Abrir no navegador (arquivo local ou localhost)

# 3. Testar em múltiplos tamanhos:

# - Mobile: 375px (iPhone SE)

# - Tablet: 768px (iPad)

# - Desktop: 1440px+

# 4. Verificar links internos funcionam

# 5. Validar HTML: https://validator.w3.org/

### Versionamento (Git)

# git add .

# git commit -m "Tipo: Descrição breve"

#

# Tipos de commit:

# feat: Nova funcionalidade

# fix: Correção de bug

# docs: Atualização de documentação

# style: Formatação de código

# refactor: Reorganização sem mudança de lógica

#

# Exemplos:

# git commit -m "feat: adicionar novo mapa de heróis"

# git commit -m "fix: menu ativo não destacava corretamente"

# git commit -m "docs: atualizar ARCHITECTURE.md"

## ========================================

## TROUBLESHOOTING

## ========================================

### Menu não aparece em uma página

✗ Problema: <nav></nav> vazia
✓ Solução: Verificar se <nav data-shared-menu></nav> existe
✓ Solução: Verificar se <script src="assets/js/menu-links.js"> carrega

### Cores incorretas

✗ Problema: Cores hardcoded no HTML
✓ Solução: Usar variáveis CSS: color: var(--gold)
✓ Arquivo: assets/data/config.json listaria cores (futura)

### CSS não aplica

✗ Problema: Style inline mais específico que classe CSS
✓ Solução: Use !important ou aumentar especificidade
✓ Melhor: Extrair styles inline para assets/css/

### Página lenta

✗ Problema: JavaScript renderizando muitos nós SVG
✓ Solução: Limite máximo de nós (CONST MAX_NODES = 50)
✓ Solução: Lazy-load de detalhes ao clicar

### Links internos quebrados

✗ Problema: href="deuses-mapa.html" quando arquivo é "deuses.html"
✓ Solução: Verificar EXATO nome de arquivo
✓ Solução: Não usar pastas (manter tudo na raiz)

## ========================================

## ROTEIRO DE MANUTENÇÃO

## ========================================

### 📅 Semanal

- [ ] Validar links internos não quebraram
- [ ] Testar menu em pelo menos 2 navegadores
- [ ] Revisar console (F12) para erros JavaScript

### 📅 Mensal

- [ ] Atualizar README.md com mudanças
- [ ] Revisar ARCHITECTURE.md
- [ ] Backup de dados importantes

### 📅 Trimestral

- [ ] Considerar refatoração de CSS (extrair para assets/css/)
- [ ] Revisar performance (PageSpeed Insights)
- [ ] Atualizar CONVENTIONS.md se necessário

## ========================================

## ROADMAP (FUTURO)

## ========================================

### Q2 2026 (Próximo Sprint)

- [ ] Extrair CSS para assets/css/ (modular)
- [ ] Criar sistema de temas (claro/escuro)
- [ ] Adicionar busca por personagem

### Q3 2026 (Médio Prazo)

- [ ] Migrar dados SVG para JSON em assets/data/
- [ ] Adicionar filtros por tipo de relação
- [ ] Suporte a múltiplos idiomas (pt-BR, en, es)

### Q4 2026+ (Longo Prazo)

- [ ] Converter para framework frontend (React/Vue)
- [ ] API backend Node.js/Python para servir dados
- [ ] Editor visual para novos mapas
- [ ] CI/CD automatizado

## ========================================

## RECURSOS ÚTEIS

## ========================================

📚 W3C HTML Validator: https://validator.w3.org/
🎨 CSS Validator: https://jigsaw.w3.org/css-validator/
🔍 Lighthouse: https://developers.google.com/web/tools/lighthouse
📱 ResponsiveDesign.is: https://responsivedesignchecker.com/
🐙 GitHub: Tutorial de commits: https://github.com/

## ========================================

## CONTATO E SUPORTE

## ========================================

Este projeto é um guia educativo sobre teatro grego antigo.
Para dúvidas de manutenção, consulte:

- ARCHITECTURE.md — Organização do projeto
- CONVENTIONS.md — Padrões de código
- README.md — Documentação geral

Última atualização: Maio 2026
