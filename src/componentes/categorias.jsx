import { useState, useEffect } from 'react';

const estiloBoton = `
    flex
    h-[38px]
    w-[125px]
    items-center
    justify-center
    rounded-full
    text-[13px]
    font-extrabold
    text-[#252429]
    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
    transition
    hover:brightness-95
`;

export default function Categroias({ categoria, actualizarCategoria, eliminarCategoria }) {

    const { _id, nombre_categoria } = categoria;

    // BANDERA: false = muestra nombre + Editar/Eliminar
    // true  = muestra input + Confirmar/Cancelar edición
    const [editando, setEditando] = useState(false);

    // Lo que el usuario escribe en el input
    const [nombre, setNombre] = useState(nombre_categoria);

    // Cada vez que cambia la bandera (o llega un nombre nuevo del backend),
    // el input se llena con el nombre actual de la categoría
    useEffect(() => {
        setNombre(nombre_categoria);
    }, [editando, nombre_categoria]);

    // Editar: activa la bandera para mostrar el modo edición
    const activarEdicion = () => {
        setEditando(true);
    };

    // Cancelar edición: regresa al diseño normal sin guardar
    const cancelarEdicion = () => {
        setEditando(false);
    };

    // Eliminar: llama a la función del padre (Admincategorias)
    const handleEliminar = () => {
        eliminarCategoria(_id);
    };

    // Confirmar: hace la actualización y solo regresa al diseño normal si salió bien
    const handleSubmit = async e => {
        e.preventDefault();

        // Si no cambió nada, solo salimos del modo edición
        if (nombre.trim() === nombre_categoria) {
            setEditando(false);
            return;
        }

        const exito = await actualizarCategoria(_id, nombre.trim());

        if (exito) {
            setEditando(false);
        }
    };

    if (editando) {
        return (
            <form onSubmit={handleSubmit}>
                <div className="mb-6 grid grid-cols-[1fr_auto_auto] items-center gap-4">

                    <input
                        type="text"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        required
                        autoFocus
                        className="
                        h-[38px]
                        w-full
                        rounded-full
                        border
                        border-gray-100
                        bg-white
                        px-5
                        text-[14px]
                        text-[#252429]
                        shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                        outline-none"
                    />

                    <button type="submit" className={`${estiloBoton} bg-[#FAE568]`}>
                        Confirmar
                    </button>

                    <button type="button" onClick={cancelarEdicion} className={`${estiloBoton} bg-[#FF797C]`}>
                        Cancelar edición
                    </button>

                </div>
            </form>
        );
    }

    return (
        <div className="mb-6 grid grid-cols-[1fr_auto_auto] items-center gap-4">

            <p className="text-[18px] font-extrabold text-[#252429]">
                {nombre_categoria}
            </p>

            <button type="button" onClick={activarEdicion} className={`${estiloBoton} bg-[#FAE568]`}>
                Editar
            </button>

            <button type="button" onClick={handleEliminar} className={`${estiloBoton} bg-[#FF797C]`}>
                Eliminar
            </button>

        </div>
    );
}
