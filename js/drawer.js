// drawer.js
import { renderCart } from "./cart.js";
import { checkout } from "./checkout.js";

const drawer = document.getElementById('unifiedDrawer');
const overlay = document.getElementById('drawerOverlay');

export function openDrawer() {
    if (!drawer || !overlay) return;
    drawer.classList.add('show');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
    renderCartView();
}

export function closeDrawer() {
    drawer.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
}

function renderCartView() {
    renderCart({ 
        closeCart: closeDrawer, 
        refreshCart: renderCartView,
        onCheckout: () => checkout({ closeCart: closeDrawer, onBack: renderCartView })
    });
}

export function initDrawer() {
    const closeBtn = document.getElementById('closeDrawerBtn');
    if (closeBtn) closeBtn.onclick = closeDrawer;
    if (overlay) overlay.onclick = closeDrawer;
}

window.openDrawer = openDrawer;