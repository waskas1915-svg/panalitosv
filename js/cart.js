// cart.js
import { showToast } from "./toast.js";

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(id, name, size, price, image) {
    const productId = String(id);
    const existing = cart.find(item => String(item.id) === productId && item.size === size);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: productId, name, size, price: parseFloat(price), image, qty: 1 });
    }
    saveCart();
    updateCartUI();
    showToast("Añadido a la bolsa 🍯", "success");
}

export function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const btn = document.getElementById("cart-count");
    if (btn) btn.innerText = totalItems;
}

export function renderCart({ closeCart, refreshCart, onCheckout }) {
    const contentContainer = document.getElementById("drawerContent");
    if (!contentContainer) return;

    if (cart.length === 0) {
        contentContainer.innerHTML = `
            <div class="cart-empty-container">
                <p>Tu bolsa está vacía.</p>
                <button id="continueShoppingBtn" class="link-btn">Seguir explorando</button>
            </div>`;
        document.getElementById("continueShoppingBtn").onclick = closeCart;
        return;
    }

    let total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    let html = `
    <div class="cart-drawer-view">
        <div class="cart-items">
            ${cart.map((item, index) => `
                <div class="cart-item">
                    <img src="${item.image}" class="cart-item-img">
                    <div class="cart-item-info">
                        <p class="cart-name">${item.name}</p>
                        <p class="cart-size">${item.size}</p>
                        <div class="cart-row">
                            <p class="cart-price">$${item.price}</p>
                            <div class="qty-controls">
                                <button class="qty-btn js-change-qty" data-index="${index}" data-amount="-1">−</button>
                                <span>${item.qty}</span>
                                <button class="qty-btn js-change-qty" data-index="${index}" data-amount="1">+</button>
                            </div>
                        </div>
                        <button class="remove-btn js-remove" data-index="${index}">Eliminar</button>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="cart-footer">
            <div class="cart-total">
                <span>Subtotal</span>
                <span>$${total.toFixed(2)}</span>
            </div>
            <label class="terms-label">
                <input type="checkbox" id="cartTermsCheckbox"> Acepto los términos y condiciones.
            </label>
            <button id="checkoutBtn" class="checkout-btn-main" disabled>FINALIZAR COMPRA</button>
        </div>
    </div>`;

    contentContainer.innerHTML = html;

    // --- DELEGACIÓN DE EVENTOS (Aquí está el arreglo) ---
    contentContainer.querySelectorAll('.js-change-qty').forEach(btn => {
        btn.onclick = () => {
            const index = btn.dataset.index;
            const amount = parseInt(btn.dataset.amount);
            cart[index].qty += amount;
            if (cart[index].qty <= 0) cart.splice(index, 1);
            saveCart();
            updateCartUI();
            refreshCart();
        };
    });

    contentContainer.querySelectorAll('.js-remove').forEach(btn => {
        btn.onclick = () => {
            cart.splice(btn.dataset.index, 1);
            saveCart();
            updateCartUI();
            refreshCart();
        };
    });

    const chk = document.getElementById("cartTermsCheckbox");
    const btn = document.getElementById("checkoutBtn");
    chk.onchange = () => { btn.disabled = !chk.checked; btn.classList.toggle("disabled-btn", !chk.checked); };
    btn.onclick = () => chk.checked && onCheckout();
}

export function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

export function clearCart() {
    localStorage.setItem("cart", JSON.stringify([]));
    updateCartUI(); // Para resetear el contador del header
}