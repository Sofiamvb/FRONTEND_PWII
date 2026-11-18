import api from './apiClient';

// Peticiones de productos (publicaciones)

// filtros: { buscar, categoria, precio_final }
export const obtenerProductosHome = (filtros) => api.get('/productos/home', filtros);

export const obtenerProducto = (idProducto) => api.get(`/productos/${idProducto}`);

// Las publicaciones del usuario, filtradas por el ID de la categoria
export const obtenerProductosUsuario = (idUsuario, categoria) =>
    api.get(`/productos/usuario/${idUsuario}`, { categoria });

// formData lleva los datos del producto y sus 'imagenes'
export const crearProducto = (formData) => api.post('/productos', formData);

export const actualizarProducto = (idProducto, formData) => api.put(`/productos/${idProducto}`, formData);

export const eliminarProducto = (idProducto) => api.delete(`/productos/${idProducto}`);
