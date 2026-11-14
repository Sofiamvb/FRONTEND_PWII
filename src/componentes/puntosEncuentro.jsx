import { useState, useEffect } from 'react';

// Clases que comparten los botones (para no repetirlas)
const estiloBoton = `
    h-[34px]
    rounded-full
    px-5
    text-[12px]
    font-bold
    shadow-[0_2px_4px_rgba(0,0,0,0.06)]
    transition
    hover:brightness-95
`;

export default function Puntos({ punto, desactivarPunto, activarPunto, eliminarPunto }) {

    const { _id, lugar, zona, horario, estado } = punto;

    // BANDERA: true  = el punto está activo   → muestra botón "Desactivar"
    //          false = el punto está inactivo → muestra botón "Activar"
    // (estado !== false: si un punto viejo no tiene estado, se toma como activo)
    const [activo, setActivo] = useState(estado !== false);

    useEffect(() => {
        setActivo(estado !== false);
    }, [estado]);

    const handleDesactivar = async () => {
        const exito = await desactivarPunto(_id);

        if (exito) {
            setActivo(false);
        }
    };

    const handleActivar = async () => {
        const exito = await activarPunto(_id);

        if (exito) {
            setActivo(true);
        }
    };

    const handleEliminar = () => {
        eliminarPunto(_id);
    };

    if (!activo) {
        return (
            <div className="flex flex-col justify-between gap-4 rounded-[28px] bg-white px-7 py-5 opacity-60 shadow-[0_4px_16px_rgba(0,0,0,0.04)] sm:flex-row sm:items-center">

                <div>
                    <h3 className="text-[15px] font-bold text-[#333333]">
                        {lugar}
                    </h3>
                    <p className="mt-0.5 text-[12px] font-medium text-gray-400">
                        {zona} | {horario}
                    </p>
                </div>

                <div className="flex shrink-0 items-center gap-2">

                    <button type="button" onClick={handleActivar} className={`${estiloBoton} bg-[#9EE09E] text-[#434035]`}>
                        Activar
                    </button>

                    <button type="button" onClick={handleEliminar} className={`${estiloBoton} bg-[#FF8083] text-white`}>
                        Eliminar
                    </button>

                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-between gap-4 rounded-[28px] bg-white px-7 py-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] sm:flex-row sm:items-center">

            <div>
                <h3 className="text-[15px] font-bold text-[#333333]">
                    {lugar}
                </h3>
                <p className="mt-0.5 text-[12px] font-medium text-gray-400">
                    {zona} | {horario}
                </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">

                <button type="button" onClick={handleDesactivar} className={`${estiloBoton} bg-[#FCE570] text-[#434035]`}>
                    Desactivar
                </button>

                <button type="button" onClick={handleEliminar} className={`${estiloBoton} bg-[#FF8083] text-white`}>
                    Eliminar
                </button>

            </div>
        </div>
    );
}
