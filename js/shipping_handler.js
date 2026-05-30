
/**
 * Filtra y devuelve los lockers disponibles para un departamento y municipio específicos.
 * @param {string} departamento - Departamento seleccionado en el dropdown
 * @param {string} municipio - Municipio seleccionado en el dropdown
 * @returns {Array} Lista de objetos locker que coinciden
 */
/**
 * Calcula el costo de envío basado en el tipo de entrega y la dirección del usuario.
 * @param {Object} address - Objeto de dirección que contiene departamento y municipio
 * @param {string} metodoEntrega - Tipo de entrega ('domicilio' o 'locker')
 * @returns {number} Costo final de envío en dólares
 */
export function shippingcost(address, metodoEntrega = "domicilio") {
    // --- LÓGICA TRADICIONAL A DOMICILIO ---
    if (!address || !address.departamento || !address.municipio) {
        return 5.00; // Tarifa base por defecto si faltan datos
    }

    const depto = address.departamento.trim();
    const muni = address.municipio.trim();

    // Regla especial de tarifa económica a domicilio ($2.00)
    if (
        (depto === "San Salvador" && muni === "San Salvador") ||
        (depto === "La Libertad" && muni === "Antiguo Cuscatlán")
    ) {
        return 2.00;
    }

    // Resto del país a domicilio
    return 5.00;
} 