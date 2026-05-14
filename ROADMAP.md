🏛️ ROADMAP DE EVOLUÇÃO — Fofocas Gregas

## 📊 Status Atual (Maio 2026)

✅ **PRONTO PARA PRODUÇÃO**

- Menu centralizado e dinâmico (`assets/js/menu-links.js`)
- Configuração central (`assets/data/config.json`)
- Documentação técnica completa (ARCHITECTURE.md, CONVENTIONS.md, MAINTENANCE.md)
- Estrutura de pastas profissional (`assets/css/`, `assets/js/`, `assets/data/`)
- 7 páginas funcionais com mapas interativos
- **CSS externo** — 6 arquivos em `assets/css/` (por tema), zero CSS inline
- **Mobile-first** — media queries em todos os CSS (480px, 768px, 700px)

❌ **NÃO IMPLEMENTADO AINDA**

- Dados de mapas em JSON (atualmente em HTML)
- Sistema de build (webpack/vite)
- Testes automatizados
- PWA/offline support

---

## 🎯 PRIORIDADES DE DESENVOLVIMENTO

### ✅ P0 — CONCLUÍDO

#### ~~Extrair CSS para `assets/css/`~~ ✅ FEITO

- ✅ `assets/css/index.css` — Portal principal
- ✅ `assets/css/catalogo-geral.css` — Catálogo de obras
- ✅ `assets/css/mapa-crimson.css` — Atridas + Ciclo Troiano (tema compartilhado)
- ✅ `assets/css/mapa-gold.css` — Deuses
- ✅ `assets/css/mapa-purple.css` — Família de Édipo
- ✅ `assets/css/mapa-bronze.css` — Heróis
- ✅ `<style>` inline removido de todos os 7 HTMLs
- ✅ `<link rel="stylesheet">` adicionado em cada HTML

#### ~~Otimizar para mobile~~ ✅ FEITO

- ✅ Breakpoints `@media (max-width: 768px)` e `@media (max-width: 480px)` em todos os CSS
- ✅ Info panel dos mapas desliza do fundo em mobile
- ✅ `.site-nav` com scroll horizontal em telas pequenas
- ✅ Tabelas com `overflow-x: auto` + colunas adaptadas
- ✅ Topnav do catálogo com scroll horizontal

---

### 🔴 P0 — CRÍTICO (Próximo sprint)

#### 📋 Migrar dados de mapas para JSON

**Por quê?** Dados no HTML = edições tocam código de renderização.

- [ ] Criar `assets/data/maps/atridas-nodes.json` + `atridas-edges.json`
- [ ] Reescrever cada mapa para carregar JSON dinamicamente
- [ ] Testar renderização idêntica à versão atual

**Tempo estimado:** 4 h por mapa × 5 mapas = 20 h

---

### 🟠 P1 — IMPORTANTE

Melhora drasticamente manutenibilidade e funcionalidades.

#### 🔍 Implementar busca por personagem

**Feature:** Campo de busca em todos os mapas simultaneamente.

**Escopo:**

- [ ] Campo `<input>` no header (global)
- [ ] JavaScript que filtra nós visíveis
- [ ] Destaca correspondências
- [ ] Mostra detalhes ao encontrar

**Tempo estimado:** 4 horas

**Ganho:** Usuários encontram heróis rápido

---

#### 🎨 Sistema de temas (claro/escuro)

**Feature:** Toggle button que muda cores sem reload.

**Escopo:**

- [ ] `assets/css/theme-light.css` e `theme-dark.css`
- [ ] JavaScript que alterna `<link>` e salva preferência em localStorage
- [ ] Detecta preferência do SO (prefers-color-scheme)

**Tempo estimado:** 3 horas

**Ganho:** Melhor UX, reduz strain em leitura noturna

---

#### ~~📱 Otimizar para mobile~~ ✅ CONCLUÍDO

- ✅ Media queries em todos os 6 CSS (`@media max-width: 768px` e `480px`)
- ✅ Info panel desliza do fundo em mobile
- ✅ Nav e topnav com scroll horizontal
- ✅ Tabelas scrolláveis; chips e colunas adaptados

---

### 🟡 P2 — DESEJÁVEL (Mês 2)

Nice-to-have que aumenta polish/features.

#### 🔗 Exportar dados em formato aberto

**Feature:** JSON/CSV de todos os personagens para researchers.

**Escopo:**

- [ ] Download button em catalogo-geral.html
- [ ] Formatos: JSON, CSV, TSV
- [ ] Inclui toda informação de caractere

**Tempo estimado:** 3 horas

---

#### 📚 Tradução para English/Español

**Feature:** Seletor de idioma na navegação.

**Escopo:**

- [ ] Extrair textos para `assets/data/i18n/{pt,en,es}.json`
- [ ] Sistema de tradução em JavaScript
- [ ] Persistir idioma em localStorage

**Tempo estimado:** 8-10 horas

---

### 🔵 P3 — FUTURO (Mês 3+)

Escalabilidade e profissionalização.

#### ⚙️ Sistema de build (Webpack/Vite)

**Por quê?** Minificar, bundle assets, otimizar.

```bash
npm install -D vite
npm run build  # Gera dist/ otimizado
```

**Ganho:** Reduz payload em 40-60%

---

#### ✅ Testes automatizados (Vitest/Cypress)

**Exemplo:**

```javascript
test("menu mostra item ativo corretamente", () => {
    window.location.pathname = "/atridas-mapa.html";
    expect(
        document
            .querySelector('a[href="atridas-mapa.html"]')
            .classList.contains("active"),
    ).toBe(true);
});
```

---

#### 📦 PWA (Progressive Web App)

**Feature:** Funciona offline, instalável em home screen.

Arquivos necessários:

- `manifest.json` — Metadata da app
- `service-worker.js` — Caching offline
- Ícones 192×192, 512×512

---

#### 🚀 Deployment automático

**GitHub Actions workflow:**

```yaml
on: [push]
jobs:
    test:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v2
            - run: npm test
    deploy:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v2
            - uses: actions/upload-artifact@v2
              with:
                  path: dist/
```

---

## 📈 TIMELINE PROPOSTA

```
Semana 1-2    │ P0: CSS extraction
              │ P0: Dados JSON para mapas
              │
Semana 3-4    │ P1: Busca por personagem
              │ P1: Tema claro/escuro
              │ P1: Mobile optimization
              │
Mês 2         │ P2: Exportar dados
              │ P2: Internacionalização
              │
Mês 3+        │ P3: Build system
              │ P3: Testes
              │ P3: PWA
              │ P3: CI/CD
```

---

## 🎯 MÉTRICAS DE SUCESSO

| Métrica               | Baseline | Meta   |
| --------------------- | -------- | ------ |
| Lighthouse Score      | 85       | 95+    |
| Tempo de carregamento | 2.5s     | <1.5s  |
| Acessibilidade (a11y) | 87%      | 100%   |
| Cobertura de testes   | 0%       | 80%+   |
| CSS duplicado         | ~30%     | 0%     |
| Tamanho total         | 450KB    | <200KB |

---

## 🔧 COMO COMEÇAR

### Opção A: Fazer você mesmo (Recomendado)

1. Leia [MAINTENANCE.md](MAINTENANCE.md)
2. Escolha 1 item de P0
3. Abra PR com suas mudanças
4. Faça code review

### Opção B: Solicitar ao Copilot

Diga:

> "Extraia o CSS inline para assets/css/"  
> "Migre dados do mapa de Atridas para JSON"

Copilot fará automaticamente com commit.

### Opção C: Ignorar por enquanto

O projeto **já funciona perfeitamente**. Não é urgente refatorar se não há planos de crescimento.

---

## 🚀 GANHO TOTAL ESPERADO

**Após completar P0 + P1:**

- ✅ Código 40% mais mantível
- ✅ Performance 2× melhor
- ✅ UX mobile-friendly
- ✅ Pronto para escalar
- ✅ Documentação completa

---

**Próxima ação recomendada:** Extrair CSS (P0) — maior ROI de tempo.

Questão? Consulte [ARCHITECTURE.md](ARCHITECTURE.md) ou [CONVENTIONS.md](CONVENTIONS.md).
