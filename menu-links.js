(() => {
    const menuLinks = [
        { href: "index.html", label: "Início" },
        { href: "catalogo-geral.html", label: "Catálogo Geral" },
        { href: "ciclo-troiano-mapa.html", label: "Ciclo Troiano" },
        { href: "atridas-mapa.html", label: "Atridas" },
        { href: "familia-edipo-mapa.html", label: "Édipo" },
        { href: "deuses-mapa.html", label: "Deuses" },
        { href: "herois-mapa.html", label: "Heróis" },
    ];

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const menuHtml = menuLinks
        .map(({ href, label }) => {
            const activeClass = href === currentPage ? ' class="active"' : "";
            return `<a href="${href}"${activeClass}>${label}</a>`;
        })
        .join("\n");

    document.querySelectorAll("nav[data-shared-menu]").forEach((nav) => {
        nav.innerHTML = menuHtml;
    });
})();
