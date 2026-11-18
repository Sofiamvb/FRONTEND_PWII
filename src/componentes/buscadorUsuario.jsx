import { useState, useEffect } from 'react';
import clienteAxios from '../config/axios';

const estiloInput = `
    h-[42px]
    w-full
    rounded-[14px]
    bg-[#FBFBFB]
    px-4
    text-[13px]
    text-[#252429]
    shadow-[0_2px_5px_rgba(0,0,0,0.13)]
    outline-none
`;

// Buscador de usuarios: el usuario escribe, se consulta /users/buscar
// y al elegir un resultado se le avisa al padre con onSeleccionar(id)
export default function BuscadorUsuario({ id, onSeleccionar }) {

    // Lo que se escribe en el input
    const [busqueda, setBusqueda] = useState('');

    // Resultados que regresa el backend
    const [resultados, setResultados] = useState([]);

    // Usuario que ya se eligió (null = todavía no se elige nadie)
    const [seleccionado, setSeleccionado] = useState(null);

    // Cada vez que cambia lo que se escribe, esperamos 300 ms y buscamos
    // (así no se manda una petición por cada letra)
    useEffect(() => {

        if (seleccionado) {
            return;
        }

        if (busqueda.trim() === '') {
            setResultados([]);
            return;
        }

        const temporizador = setTimeout(async () => {
            try {
                const res = await clienteAxios.get('/users/buscar', {
                    params: { buscar: busqueda }
                });
                setResultados(res.data);
            } catch (error) {
                console.log(error);
            }
        }, 300);

        // Si se escribe otra letra antes de los 300 ms, se cancela la búsqueda anterior
        return () => clearTimeout(temporizador);

    }, [busqueda, seleccionado]);

    // Escribir en el input
    const handleChange = e => {
        setBusqueda(e.target.value);
    };

    // Elegir un usuario de la lista
    const elegirUsuario = usuario => {
        setSeleccionado(usuario);
        setResultados([]);
        onSeleccionar(usuario._id);
    };

    // Quitar el usuario elegido para buscar otro
    const quitarUsuario = () => {
        setSeleccionado(null);
        setBusqueda('');
        onSeleccionar('');
    };


    // ===== DISEÑO 2: YA SE ELIGIÓ UN USUARIO =====
    if (seleccionado) {
        return (
            <div className={`${estiloInput} flex items-center justify-between`}>

                <span className="font-bold">
                    {seleccionado.name} {seleccionado.apellidoP}
                    <span className="ml-2 font-medium text-[#9A9A9A]">
                        @{seleccionado.usuario}
                    </span>
                </span>

                <button
                    type="button"
                    onClick={quitarUsuario}
                    className="text-[12px] font-extrabold text-[#B4474A] hover:underline"
                >
                    Cambiar
                </button>

            </div>
        );
    }


    // ===== DISEÑO 1: BUSCANDO =====
    return (
        <div className="relative">

            <input
                id={id}
                type="text"
                placeholder="Busca por @usuario o nombre"
                value={busqueda}
                onChange={handleChange}
                autoComplete="off"
                className={estiloInput}
            />

            {/* LISTA DE RESULTADOS */}
            {resultados.length > 0 && (
                <ul className="absolute z-10 mt-2 max-h-[220px] w-full overflow-y-auto rounded-[14px] bg-white py-2 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">

                    {resultados.map(usuario => (
                        <li key={usuario._id}>
                            <button
                                type="button"
                                onClick={() => elegirUsuario(usuario)}
                                className="w-full px-4 py-2 text-left text-[13px] text-[#252429] hover:bg-[#FFF8D6]"
                            >
                                <span className="font-bold">
                                    {usuario.name} {usuario.apellidoP}
                                </span>
                                <span className="ml-2 text-[#9A9A9A]">
                                    @{usuario.usuario}
                                </span>
                            </button>
                        </li>
                    ))}

                </ul>
            )}

        </div>
    );
}
