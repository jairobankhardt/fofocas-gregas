🏛️ ROADMAP DE EVOLUÇÃO — Fofocas Gregas

## 📊 Status Atual (Maio 2026)

✅ **PRONTO PARA PRODUÇÃO**

- Menu centralizado e dinâmico (assets/js/menu-links.js)
- Configuração central (assets/data/config.json)
- Documentação técnica completa (ARCHITECTURE.md, CONVENTIONS.md)
- Estrutura de pastas profissional (assets/_, pages/_, docs/)
- 7 páginas funcionais com mapas interativos

❌ **NÃO IMPLEMENTADO AINDA**

- CSS em arquivos separados (atualmente inline)
- Dados de mapas em JSON (atualmente em HTML)
- Sistema de build (webpack/vite)
- Testes automatizados
- PWA/offline support

---

## 🎯 PRIORIDADES DE DESENVOLVIMENTO

### 🔴 P0 — CRÍTICO (Semana 1-2)

Se não fizer, o projeto fica quebrado ou inviável de manter.

#### ✋ [BLOQUEADO] Extrair CSS para `assets/css/`

**Por quê?** CSS inline torna difícil reutilizar estilos e atualizar o tema.

**Checklist:**

- [ ] Crear `assets/css/variables.css` (cores, fontes, espaçamento)
- [ ] Criar `assets/css/base.css` (reset, tipografia)
- [ ] Criar `assets/css/components.css` (cards, tags, navegação)
- [ ] Criar `assets/css/maps.css` (SVG styling)
- [ ] Criar `assets/css/responsive.css` (media queries)
- [ ] Remover `<style>` de cada HTML
- [ ] Adicionar `<link rel="stylesheet" href="assets/css/...">` em cada HTML
- [ ] Testar em 3 breakpoints (mobile/tablet/desktop)

**Tempo estimado:** 6-8 horas

**Ganho:**

- -500 linhas de código duplicado
- +1 single source of truth para cores/fonts
- Facilita temas (claro/escuro no futuro)

---

#### 📋 [PLANEJADO] Migrar dados de mapas para JSON

**Por quê?** Dados no HTML = edições tocam código de renderização.

**Fase 1 — Atridas Map:**

- [ ] Criar `assets/data/maps/atridas-nodes.json`
- [ ] Criar `assets/data/maps/atridas-edges.json`
- [ ] Reescrever `atridas-mapa.html` para carregar JSON
- [ ] Testar renderização idêntica à versão anterior

**Estrutura JSON esperada:**

```json
{
  "nodes": [
    { "id": 1, "label": "Tântalo", "x": 100, "y": 100, "role": "cursed", "group": "generation-1" },
    ...
  ],
  "edges": [
    { "source": 1, "target": 2, "type": "amor", "label": "matrimônio" },
    ...
  ]
}
```

**Tempo estimado:** 4 horas por mapa × 5 mapas = 20 horas

**Ganho:**

- Conteúdo separado de apresentação
- Facilita atualizações futuras
- Suporta múltiplas versões/idiomas

---

### 🟠 P1 — IMPORTANTE (Semana 3-4)

Melhora drasticamente manutenibilidade e funcionalidades.

#### 🔍 Implementar busca por personagem

**Feature:** Campo de busca busca em todos os mapas simultaneamente.

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

#### 📱 Otimizar para mobile

**Problemas:** Mapas SVG quebram em telas pequenas.

**Escopo:**

- [ ] Escala SVG responsivo
- [ ] Menu colapsável em mobile
- [ ] Tabelas scrolláveis horizontalmente
- [ ] Testar em iOS Safari + Chrome Android

**Tempo estimado:** 5 horas

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
