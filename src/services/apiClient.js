import clienteAxios from '../config/axios';

// Cliente generico para hablar con el backend.
// Todas las peticiones de la app pasan por aqui, asi que las vistas nunca
// usan axios directamente: llaman a una funcion de algun servicio
// (usuariosService, productosService, ...) y esa funcion usa este cliente.
//
// Cada metodo recibe la ruta y, si hace falta, el body, y regresa
// directamente lo que respondio el backend (ya no hay que poner .data).
//
// Si la peticion falla se lanza el mismo error de axios, asi que en los
// catch se sigue leyendo el mensaje con error.response.data.mensaje.

const peticion = async (metodo, ruta, body, opciones = {}) => {

    const respuesta = await clienteAxios.request({
        method: metodo,
        url: ruta,
        data: body,
        ...opciones
    });

    return respuesta.data;
};

const api = {

    // params son los query params: api.get('/productos/home', { buscar: 'libro' })
    get: (ruta, params) => peticion('get', ruta, undefined, { params }),

    post: (ruta, body) => peticion('post', ruta, body),

    put: (ruta, body) => peticion('put', ruta, body),

    patch: (ruta, body) => peticion('patch', ruta, body),

    delete: (ruta) => peticion('delete', ruta)

};

export default api;
