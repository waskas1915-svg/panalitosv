import { openDrawer } from "./drawer.js";

export function initHeader() {
    const isLegalPage = window.location.pathname.includes('legal.html') || window.location.pathname.includes('t&c_legal.html');
    const header = document.querySelector('header');
    if (!header) return;

    header.className = 'main-navbar';

    header.innerHTML = `
    <div class="header-content">
        <div class="nav-spacer"></div>
        <div class="logo-wrapper" id="logoLink">
            <img src="images/logo.png" alt="Logo" id="logo">
        </div>
        ${!isLegalPage ? `
            <div class="header-right">
                <button id="cartBtn" class="cart-button">
                    <div class="svg-container">
                        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" fill="none" stroke-width="1.5">
                            <path d="M6 9h12l1 10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2l1-10z"></path>
                            <path d="M9 9V6a3 3 0 0 1 6 0v3"></path>
                        </svg>
                        <span id="cart-count">0</span>
                    </div>
                </button>
            </div>
        ` : '<div class="nav-spacer"></div>'}
    </div>
`;

    header.addEventListener('click', (e) => {
        const cartBtn = e.target.closest('#cartBtn');
        if (cartBtn) {
            e.preventDefault();
            openDrawer(); // Llamada simplificada
            return;
        }

        const logo = e.target.closest('#logoLink');
        if (logo) {
            window.location.href = 'index.html';
        }
    });
}