// estado_pago del pedido -> texto que ve el usuario en Mis compras / Mis ventas.
// Liberado = el pago ya se le dio al vendedor (se entrego); Reembolsado = se cancelo.
const textos = {
    Pendiente: 'Pendiente',
    Retenido: 'En proceso',
    Liberado: 'Entregado',
    Reembolsado: 'Cancelado'
};

export const textoEstadoPedido = (estado_pago) => textos[estado_pago] || estado_pago || 'Pendiente';
