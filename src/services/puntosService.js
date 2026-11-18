import api from './apiClient';

// Puntos de encuentro. Se usan al publicar y el admin los administra

export const obtenerPuntos = () => api.get('/admin/puntos');

export const crearPunto = (punto) => api.post('/admin/puntos', punto);

export const activarPunto = (idPunto) => api.put(`/admin/puntos/${idPunto}/activar`);

export const desactivarPunto = (idPunto) => api.put(`/admin/puntos/${idPunto}/desactivar`);

export const eliminarPunto = (idPunto) => api.delete(`/admin/puntos/${idPunto}`);
