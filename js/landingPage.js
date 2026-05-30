export function renderLandingPage(onCatalogClick) {
    const container = document.getElementById('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 1. Inyectamos el Hero por separado usando su propio contenedor o manipulación DOM
    // Si quieres mantenerlo en 'products', debemos sacarlo del flujo de padding
    container.innerHTML = `
        <header class="hero-section-wrapper">
            <div class="hero-section">
                <video autoplay muted loop playsinline class="hero-video">
                    <source src="media/media3.mp4" type="video/mp4">
                </video>
                <div class="hero-overlay"></div>
                <div class="hero-content">
                    <span class="tagline animate-fade-entry">Miel Pura de Abeja: Tesoro de Suchitoto</span>
                    <h1 class="animate-fade-entry">La esencia de los paisajes salvadoreños, <span class="gold-text">100% natural</span>.</h1>
                    <p class="animate-fade-entry">Cada gota captura la biodiversidad de nuestra tierra. Apoyamos la apicultura local y la preservación de nuestras abejas.</p>
                    <button id="btn-discover" class="btn-primary animate-fade-entry">Descubrir Beneficios</button>
                </div>
            </div>
        </header>

        <section id="proposito" class="features-section">
            <div class="features-divider-line"></div>
            <h2 class="playfair section-title">¿Por qué elegir nuestra miel?</h2>
            <div class="features-divider-line"></div>
            
            <div class="features-grid">
                <div class="feature-card reveal-up">
                    <div class="icon-wrapper">
                        <svg class="feature-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                            <path d="M20.5 8c0-1.66-1.34-3-3-3h-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H18c.28 0 .5.22.5.5s-.22.5-.5.5h-1c-1.1 0-2 .9-2 2s.9 2 2 2h1c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-1.1 0-2 .9-2 2s.9 2 2 2h1.5c1.66 0 3-1.34 3-3V8z"/>
                        </svg>
                    </div>
                    <h3>100% Natural</h3>
                    <p>Sin procesos industriales. Directo del panal a tu mesa.</p>
                </div>

                <div class="feature-card reveal-up">
                    <div class="icon-wrapper">
                        <svg class="feature-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                    </div>
                    <h3>Origen Auténtico</h3>
                    <p>Cosechada responsablemente en las colmenas de Suchitoto.</p>
                </div>

                <div class="feature-card reveal-up">
                    <div class="icon-wrapper">
                        <svg class="feature-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </div>
                    <h3>Salud Natural</h3>
                    <p>Rica en propiedades que fortalecen tus defensas.</p>
                </div>
            </div>
        </section>

        <section class="cta-closure-section">
            <div class="cta-closure-overlay"></div>
            <div class="cta-closure-content">
                <span class="cta-tagline">Calidad Garantizada</span>
                <h2 class="playfair">Del panal a tus manos</h2>
                <p class="cta-description">
                    La cristalización es la firma de la miel pura. Es un proceso natural que garantiza que no ha sido procesada con calor excesivo.
                </p>
                <button id="btn-explore-final" class="btn-primary final-cta-btn">
                    Ir a comprar miel
                </button>
            </div>
        </section>
    `;

    // Eventos (Se mantienen iguales)
    document.getElementById('btn-discover').addEventListener('click', () => {
        document.getElementById('proposito').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('btn-explore-final').addEventListener('click', onCatalogClick);

    initScrollAnimations();
}