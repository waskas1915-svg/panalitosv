// checkout.js
import { getCart, clearCart } from "./cart.js";
import { showToast } from "./toast.js";

export async function checkout({ closeCart, onBack }) {
    const cart = getCart();
    const container = document.getElementById("products"); // Asegúrate que este ID exista en tu HTML principal
    
    if (!container) {
        console.error("No se encontró el contenedor #products");
        return;
    }

    // Calculo de totales
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const shipping = subtotal >= 50 ? 0 : 5.00;
    const total = subtotal + shipping;

    // Renderizado del HTML del Checkout
    container.innerHTML = `
    <div class="checkout-wrapper">
        <div class="checkout-left">
            <button id="backBtn" class="back-link-btn">← Volver a la bolsa</button>
            <h2>Datos de Envío</h2>
            <div class="checkout-form">
                <input id="custName" placeholder="Nombre completo" required>
                <input id="custPhone" placeholder="Teléfono" required>
                <textarea id="custAddress" placeholder="Dirección exacta"></textarea>
                <button id="submitOrderBtn">ENVIAR PEDIDO POR WHATSAPP</button>
            </div>
        </div>
        <div class="checkout-right">
            <h3>Resumen de Orden</h3>
            <div class="checkout-items-list">
                ${cart.map(item => `
                    <div class="checkout-item">
                        <img src="${item.image}" class="checkout-item-img">
                        <div>
                            <p><strong>${item.name}</strong></p>
                            <p>${item.size} x${item.qty} - $${(item.price * item.qty).toFixed(2)}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            <hr>
            <p>Total: $${total.toFixed(2)}</p>
        </div>
    </div>`;

    // Asignación de eventos manual
    document.getElementById("backBtn").onclick = () => {
        // Aquí debes volver a renderizar tu tienda original
        location.reload(); // La forma más rápida de limpiar todo y volver al inicio
    };

    document.getElementById("submitOrderBtn").onclick = () => {
        const name = document.getElementById("custName").value;
        const phone = document.getElementById("custPhone").value;
        const address = document.getElementById("custAddress").value;

        if (!name || !phone || !address) return showToast("Completa los datos", "error");

        let msg = `*Pedido Panalito de suchitot*\nCliente: ${name}\nTel: ${phone}\nDir: ${address}\nTotal: $${total.toFixed(2)}`;
        window.open(`https://wa.me/50370911272?text=${encodeURIComponent(msg)}`, '_blank');
        clearCart();
    };
}