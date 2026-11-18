import api from './apiClient';

// Reportes que hacen los usuarios (los del admin estan en adminService)

export const obtenerMisReportes = (idUsuario) => api.get(`/productos/reportes/usuario/${idUsuario}`);

export const reportarUsuario = (datos) => api.post('/reportes', datos);

export const reportarProducto = (idProducto, datos) => api.post(`/productos/${idProducto}/reportar`, datos);

export const reportarCompra = (idPedido, datos) => api.post(`/reportes/compra/${idPedido}`, datos);
