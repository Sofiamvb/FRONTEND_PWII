import axios from 'axios';

const clienteAxios = axios.create({

    baseURL: import.meta.env.VITE_BACKEND_URL

});

// Antes de cada peticion se le pega el token, asi ninguna vista tiene que acordarse
clienteAxios.interceptors.request.use(config => {

    const token = sessionStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

// Si el backend responde que la sesion ya no sirve (token vencido o invalido),
// se limpia y se manda al login en lugar de dejar la pantalla a medias
clienteAxios.interceptors.response.use(
    respuesta => respuesta,
    error => {

        const sinSesion = error.response && error.response.status === 401;
        const estabaLogueado = sessionStorage.getItem('token');

        if (sinSesion && estabaLogueado) {
            sessionStorage.clear();
            window.location.href = '/auth';
        }

        return Promise.reject(error);
    }
);

export default clienteAxios;
