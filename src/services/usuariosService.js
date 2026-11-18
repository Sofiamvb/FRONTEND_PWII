import api from './apiClient';

// Peticiones de la cuenta del usuario: sesion, perfil y verificacion

export const login = (usuario) => api.post('/users/login', usuario);

export const registrarUsuario = (usuario) => api.post('/users', usuario);

export const obtenerUsuario = (idUsuario) => api.get(`/useresInfo/${idUsuario}`);

export const actualizarUsuario = (idUsuario, usuario) => api.put(`/users/${idUsuario}`, usuario);

export const cambiarPassword = (idUsuario, usuario) => api.put(`/users/password/${idUsuario}`, usuario);

// formData lleva el campo 'imagen'. Axios detecta el FormData y manda multipart solo
export const actualizarFotoPerfil = (idUsuario, formData) => api.put(`/users/imagen/${idUsuario}`, formData);

// formData lleva los documentos de la verificacion
export const enviarVerificacion = (idUsuario, formData) => api.post(`/users/verificacion/${idUsuario}`, formData);

export const buscarUsuarios = (buscar) => api.get('/users/buscar', { buscar });
