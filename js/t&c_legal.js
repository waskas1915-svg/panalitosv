export function loadLegalContent() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page'); 
    const container = document.getElementById('legal-content-root');
    const cssLink = document.getElementById('dynamic-css');

    if (page === 'terminos') {
        cssLink.href = './css/legal.css';
        container.innerHTML = `
            <div class="legal-wrapper">
                <header class="legal-header">
                    <h1>Términos y Condiciones</h1>
                    <span class="last-update">Última actualización: Mayo 2026</span>
                </header>

                <section>
                    <h2>1. Introducción</h2>
                    <p>Bienvenido a <strong>Miel Pura Panalito</strong>. Al acceder a nuestro sitio y realizar una compra, usted acepta los términos y condiciones aquí descritos. Estos regulan la venta de miel artesanal y productos derivados de la colmena en El Salvador.</p>
                </section>

                <section>
                    <h2>2. Naturaleza del Producto</h2>
                    <p>Nuestra miel es un producto 100% natural, cosechado artesanalmente en Suchitoto. Al ser un producto natural, el cliente reconoce que pueden existir variaciones sutiles en el color, textura y cristalización, las cuales son indicativos de pureza y no defectos del producto. La <strong>cristalización</strong> es un proceso natural y no afecta la calidad ni las propiedades nutritivas de la miel.</p>
                </section>

                <section>
                    <h2>3. Precios y Pagos</h2>
                    <p>Los precios están en USD. Aceptamos transferencias bancarias locales y pagos contra entrega. Nos reservamos el derecho de ajustar precios según la temporada de cosecha.</p>
                </section>

                <section>
                    <h2>4. Envíos y Entregas</h2>
                    <p>Realizamos envíos a nivel nacional. Los tiempos estimados de entrega son de 24 a 72 horas hábiles tras la confirmación de la orden. Es responsabilidad del cliente proporcionar una dirección de entrega exacta y completa. Miel Pura Panalito no se hace responsable por demoras causadas por las empresas de mensajería aliadas.</p>
                </section>

                <section>
                    <h2>5. Devoluciones y Garantía</h2>
                    <p>Debido a la naturaleza alimenticia del producto, por razones de higiene y seguridad, <strong>no se aceptan cambios ni devoluciones</strong> una vez que el sello de seguridad ha sido manipulado o el producto ha sido entregado.</p>
                    <p>Si recibe un producto con el envase dañado o con fuga evidente durante el transporte, dispone de un plazo de <strong>12 horas</strong> para reportarlo adjuntando pruebas fotográficas a nuestros canales de atención.</p>
                </section>

                <section>
                    <h2>6. Propiedad Intelectual</h2>
                    <p>Todo el contenido, imágenes y textos publicados en este sitio son propiedad exclusiva de Miel Pura Panalito. Queda prohibida su reproducción sin autorización previa.</p>
                </section>
            </div>
        `;
    } else if (page === 'privacidad') {
        cssLink.href = './css/legal.css';
        container.innerHTML = `
            <div class="legal-wrapper">
                <header class="legal-header">
                    <h1>Política de Privacidad</h1>
                    <p class="last-update">Protegemos la dulzura de tu confianza</p>
                </header>

                <section>
                    <h2>1. Recolección de Datos</h2>
                    <p>Para procesar sus pedidos, recopilamos información básica: nombre, dirección de envío, número de teléfono y correo electrónico. Estos datos son estrictamente para fines logísticos y de atención al cliente.</p>
                </section>

                <section>
                    <h2>2. Confidencialidad</h2>
                    <p>En Miel Pura Panalito valoramos su privacidad. <strong>No compartimos, vendemos ni alquilamos su información personal</strong> a terceros con fines publicitarios. Sus datos son utilizados únicamente para llevar la miel desde nuestras colmenas hasta su mesa.</p>
                </section>

                <section>
                    <h2>3. Seguridad</h2>
                    <p>Implementamos medidas de seguridad para proteger su información en nuestra base de datos. Usted tiene el derecho de solicitar la eliminación de sus datos personales de nuestro registro en cualquier momento, contactándonos directamente.</p>
                </section>
            </div>
        `;
    }
}