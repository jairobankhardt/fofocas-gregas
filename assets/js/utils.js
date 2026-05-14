/* =============================================================
   utils.js — Funções utilitárias compartilhadas entre os mapas
   Usado por: atridas-mapa, ciclo-troiano-mapa, deuses-mapa,
              familia-edipo-mapa, herois-mapa
   ============================================================= */

const MapUtils = (() => {
    /**
     * Cria um elemento SVG com o namespace correto e aplica atributos.
     * @param {string} tag
     * @param {Object} [attrs={}]
     * @returns {SVGElement}
     */
    function ns(tag, attrs = {}) {
        const el = document.createElementNS(
            "http://www.w3.org/2000/svg",
            tag,
        );
        for (const [k, v] of Object.entries(attrs))
            el.setAttribute(k, v);
        return el;
    }

    /**
     * Calcula o bounding box de uma lista de nós.
     * @param {Array<{x: number, y: number}>} nodes
     * @returns {{ minX: number, maxX: number, minY: number, maxY: number }}
     */
    function computeBoundingBox(nodes) {
        return nodes.reduce(
            (a, n) => ({
                minX: Math.min(a.minX, n.x),
                maxX: Math.max(a.maxX, n.x),
                minY: Math.min(a.minY, n.y),
                maxY: Math.max(a.maxY, n.y),
            }),
            { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity },
        );
    }

    /**
     * Destaca as arestas conectadas ao nó `id` e esmaece as demais.
     * @param {Array}  edges        - lista de arestas do mapa
     * @param {Object} edgeEls      - mapa { "s-t": { path, lbl } }
     * @param {*}      id           - ID do nó selecionado
     * @param {number} op           - opacidade das arestas conectadas (0–1)
     * @param {number} [dimOp=0.05] - opacidade das arestas não-conectadas
     */
    function highlightEdges(edges, edgeEls, id, op, dimOp = 0.05) {
        edges.forEach((e) => {
            const k = `${e.s}-${e.t}`;
            if (!edgeEls[k]) return;
            if (e.s === id || e.t === id) {
                edgeEls[k].path.setAttribute("opacity", op);
                edgeEls[k].lbl.setAttribute("opacity", op * 0.9);
            } else {
                edgeEls[k].path.setAttribute("opacity", dimOp);
            }
        });
    }

    /**
     * Restaura a opacidade padrão de todas as arestas.
     * @param {Array}  edges           - lista de arestas do mapa
     * @param {Object} edgeEls         - mapa { "s-t": { path, lbl } }
     * @param {number} [baseOp=0.35]   - opacidade padrão das arestas
     */
    function resetEdges(edges, edgeEls, baseOp = 0.35) {
        edges.forEach((e) => {
            const k = `${e.s}-${e.t}`;
            if (!edgeEls[k]) return;
            edgeEls[k].path.setAttribute("opacity", baseOp);
            edgeEls[k].lbl.setAttribute("opacity", 0);
        });
    }

    /**
     * Aplica visibilidade nos rótulos de texto dos nós.
     * Deve ser chamada após inverter showLabels no escopo local.
     * @param {Object} nodeEls          - mapa { id: { label, role } }
     * @param {boolean} showLabels      - estado atual (já invertido)
     * @param {number}  [roleOp=0.55]   - opacidade do texto de papel quando visível
     */
    function toggleLabels(nodeEls, showLabels, roleOp = 0.55) {
        Object.values(nodeEls).forEach(({ label, role }) => {
            label.setAttribute("opacity", showLabels ? 0.9 : 0);
            role.setAttribute("opacity", showLabels ? roleOp : 0);
        });
    }

    return { ns, computeBoundingBox, highlightEdges, resetEdges, toggleLabels };
})();
