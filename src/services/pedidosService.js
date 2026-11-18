import api from './apiClient';

// Peticiones de compras y ventas

export const obtenerCompras = (idUsuario) => api.get(`/pedidos/compras/${idUsuario}`);

export const obtenerVentas = (idUsuario) => api.get(`/pedidos/ventas/${idUsuario}`);

export const obtenerPedido = (idPedido) => api.get(`/pedidos/${idPedido}`);

export const comprarProducto = (idProducto, idComprador, datos) =>
    api.post(`/pedidos/comprar/${idProducto}/${idComprador}`, datos);

export const calificarPedido = (idPedido, puntuacion) =>
    api.post(`/pedidos/${idPedido}/calificar`, { puntuacion });

export const cancelarPedido = (idPedido, datos) => api.put(`/pedidos/${idPedido}/cancelar`, datos);
