import api from './apiClient';

// Categorias. Las consultan todos (home, publicar...) y el admin las administra

export const obtenerCategorias = () => api.get('/admin/categorias/mostrar');

export const crearCategoria = (categoria) => api.post('/admin/categorias', categoria);

export const actualizarCategoria = (idCategoria, nombre_categoria) =>
    api.put(`/admin/categorias/${idCategoria}`, { nombre_categoria });

export const eliminarCategoria = (idCategoria) => api.delete(`/admin/categorias/${idCategoria}`);
