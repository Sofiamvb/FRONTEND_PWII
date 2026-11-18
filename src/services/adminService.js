import api from './apiClient';

// Peticiones del panel de administrador

// Usuarios y verificaciones
export const obtenerTodasVerificaciones = () => api.get('/admin/mostrarTodasVerificaciones');

export const obtenerVerificacionesPendientes = () => api.get('/admin/mostrarVerificaciones');

export const cambiarEstadoVerificacion = (idVerificacion, estado) =>
    api.patch(`/admin/verificacionEstatus/${idVerificacion}`, { estado });

export const suspenderUsuario = (idUsuario) => api.put(`/admin/usuarios/${idUsuario}/suspender`);

// Productos
export const obtenerProductosAdmin = () => api.get('/admin/productos');

export const aprobarProducto = (idProducto) => api.put(`/admin/productos/${idProducto}/aprobar`);

export const rechazarProducto = (idProducto) => api.put(`/admin/productos/${idProducto}/rechazar`);

// Reportes
export const obtenerReportes = () => api.get('/admin/reportes');

export const obtenerReporte = (idReporte) => api.get(`/admin/reportes/${idReporte}`);

// El endpoint se llama /rechazar pero deja el reporte como 'cerrado'
export const cerrarReporte = (idReporte) => api.put(`/admin/reportes/${idReporte}/rechazar`);

// Transacciones
export const obtenerTransacciones = () => api.get('/admin/transacciones');
