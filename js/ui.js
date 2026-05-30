// ui.js
import { renderLandingPage } from './landingPage.js';

/**
 * Renderiza la grilla principal de productos
 */
export function showLandingPage(products, addToCart) {
    renderLandingPage(() => {
        showProducts(products, addToCart);
    });
}

/**
 * Renderiza la grilla principal de productos
 */
export function showProducts(products, addToCart) {
    const container = document.getElementById('products');
    if (!container) return;

    container.innerHTML = `<div id="productGrid" class="product-grid"></div>`;
    const grid = document.getElementById('productGrid');

        products.forEach(product => {
        const div = document.createElement('div');
        div.classList.add("product-card");

        div.innerHTML = `
            <div class="product-img-container">
                <img src="${product.image}" class="product-img" loading="lazy">
            </div>
            <h3>${product.name}</h3>
            <p class="size-label">${product.size}</p>
            <p class="price">$${product.price}</p>
            <div class="card-bottom">
                <button class="primary-btn gold-btn add-to-cart-btn">
                    AÑADIR A LA BOLSA
                </button>
            </div>
        `;

        // Ahora accedemos directamente a product.size y product.price
        div.querySelector('.add-to-cart-btn').onclick = () => {
            addToCart(
                product.id, 
                product.name, 
                product.size, 
                product.price, 
                product.image
            );
        };

        grid.appendChild(div); 
    });
}

/**
 * Renderiza la vista detallada de un producto
 */
export function viewProduct(productId, products, addToCart) {
    const product = products.find(p => String(p.id) === String(productId));
    if (!product) return;

    const container = document.getElementById('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // (Tu HTML de vista detallada se mantiene igual, 
    // solo asegúrate de simplificar la lógica de variantes a continuación)
    
    // ... tu template HTML ...

    const vGrid = document.getElementById('variantGrid');
    const pBox = document.getElementById('purchaseBox');

    product.variants.forEach(variant => {
        const card = document.createElement('div');
        card.className = 'size-option';
        
        card.innerHTML = `
            <img src="${variant.image || product.image}" class="variant-thumb-img">
            <div class="variant-card-inner">
                <p class="v-size"><strong>${variant.size}</strong></p>
                <p class="price">$${variant.price}</p>
            </div>
        `;

        card.onclick = () => {
            document.querySelectorAll('.size-option').forEach(el => el.classList.remove('selected'));
            card.classList.add('selected');
            
            pBox.innerHTML = `<button id="addBtn" class="primary-btn gold-btn large-btn">AÑADIR A LA BOLSA</button>`;
            document.getElementById('addBtn').onclick = () => {
                addToCart(product.id, product.name, variant.size, variant.price, product.image, parseInt(variant.size));
            };
        };
        vGrid.appendChild(card);
    });

    const backBtn = document.createElement('button');
    backBtn.className = 'back-to-shop-link';
    backBtn.innerHTML = "← Volver a la colección";
    backBtn.onclick = () => showProducts(products, addToCart); 
    document.getElementById('backContainer').appendChild(backBtn);
}

window.viewProduct = viewProduct;