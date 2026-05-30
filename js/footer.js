export function initFooter() {
    if (document.querySelector('.main-footer')) return;

    const footer = document.createElement('footer');
    footer.className = 'main-footer';

    footer.innerHTML = `
    <div class="footer-content">
        <div class="footer-brand-text">
            <p>Miel Pura Panalito</p>
        </div>
        <p>&copy; 2026. Cosecha artesanal de Suchitoto.</p>
        <div class="footer-links">
            <a href="t&c_legal.html?page=terminos">Términos y Condiciones</a>
            <span>|</span>
            <a href="t&c_legal.html?page=privacidad">Política de Privacidad</a>
        </div>
    </div>
`;

    document.body.appendChild(footer);
}