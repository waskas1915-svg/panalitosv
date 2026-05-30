// app.js
import { showLandingPage } from "./ui.js"; 
import { updateCartUI, addToCart } from "./cart.js";
import { initHeader } from "./header.js";
import { initDrawer, openDrawer } from "./drawer.js";

// Lista global de productos
export let allProducts = [];

/**
 * Carga los productos desde el archivo JSON local
 */
async function loadProducts() {
    try {
        const response = await fetch('./products.json');
        if (!response.ok) throw new Error("No se pudo cargar el archivo JSON");
        allProducts = await response.json();
        window.allProducts = allProducts;
        
        // Lanzamos la landing page una vez cargados los productos
        showLandingPage(allProducts, handleAddToCart);
    } catch (err) {
        console.error("Error al cargar productos locales:", err);
    }
}

/**
 * Inicialización de componentes (sin auth)
 */
function init() {
    initHeader();
    initDrawer();
    updateCartUI();
    loadProducts(); // Iniciamos la carga de productos aquí
}

/**
 * Lógica para añadir productos
 */
function handleAddToCart(id, name, size, price, image, ml) {
    addToCart(id, name, size, price, image, ml, () => {
        openDrawer('cart'); 
    });
}

// Ejecutar init cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", init);

export function resetToHome() {
    if (window.allProducts) {
        showLandingPage(window.allProducts, handleAddToCart);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

window.resetToHome = resetToHome;