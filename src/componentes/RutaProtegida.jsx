import { Navigate } from 'react-router-dom';

/*
 * Envuelve un layout para que solo entre quien debe:
 *   - sin sesion            -> al login
 *   - con un rol distinto   -> a la zona que si le toca
 *
 * El admin y el estudiante quedan separados: cada quien ve solo sus paginas.
 * Esto es nada mas para la navegacion; quien de verdad cuida los datos es el
 * middleware del backend, porque aqui cualquiera podria editar el sessionStorage.
 */
export default function RutaProtegida({ rol, children }) {

    const token = sessionStorage.getItem('token');
    const rolUsuario = sessionStorage.getItem('rol');

    if (!token) {
        return <Navigate to="/auth" replace />;
    }

    if (rol && rolUsuario !== rol) {

        const suZona = rolUsuario === 'admin' ? '/admin' : '/home';

        return <Navigate to={suZona} replace />;
    }

    return children;
}
