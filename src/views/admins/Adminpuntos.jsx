import React, { useState, useEffect } from 'react';
import * as puntosService from "../../services/puntosService";
import Swal from 'sweetalert2';
import Puntos from '../../componentes/puntosEncuentro';

export default function AdminPuntos() {
    const [punto, guardarPunto] = useState({
        lugar: '',
        zona: '',
        descripcionZona: '',
        horario: '',
        url_ubicacion: '',
    });

    // Lista de puntos que vienen del backend (es un arreglo)
    const [puntos, guardarPuntos] = useState([]);

    // Leer datos del formulario
    const actualizarState = e => {
        guardarPunto({
            ...punto,
            [e.target.name]: e.target.value
        });
    };

    // Añadir una categoría nueva
    const agregarPunto = async e => {
        e.preventDefault();
        try {

            const res = await puntosService.crearPunto(punto);

            console.log(res);

            Swal.fire({
                title: "¡Se ha registrado!",
                text: res.mensaje,
                icon: "success"
            });

            // Recargar la lista para que aparezca el punto nuevo
            consultarAPI();

        } catch (error) {

            console.log(error);

            Swal.fire({
                icon: 'error',
                title: "Hubo un error",
                text: 'Intente de nuevo'
            });

        }
    };

    const consultarAPI = async () => {
        try {
            const puntosConsulta = await puntosService.obtenerPuntos();
            console.log(puntosConsulta);
            guardarPuntos(puntosConsulta);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        consultarAPI();
    }, [])

    // Desactivar un punto: recibe el id del punto al que se le dio clic
    const desactivarPunto = async id => {
        try {

            const res = await puntosService.desactivarPunto(id);

            Swal.fire({
                title: "¡Desactivado!",
                text: res.mensaje,
                icon: "success"
            });

            consultarAPI();   // recargar la lista

            return true;   // avisa al componente que sí se desactivó

        } catch (error) {

            console.log(error);

            Swal.fire({
                icon: 'error',
                title: "Hubo un error",
                text: 'Intente de nuevo'
            });

            return false;  // el botón se queda como estaba

        }
    };

    // Activar un punto: recibe el id del punto al que se le dio clic
    const activarPunto = async id => {
        try {

            const res = await puntosService.activarPunto(id);

            Swal.fire({
                title: "¡Activado!",
                text: res.mensaje,
                icon: "success"
            });

            consultarAPI();   // recargar la lista

            return true;   // avisa al componente que sí se activó

        } catch (error) {

            console.log(error);

            Swal.fire({
                icon: 'error',
                title: "Hubo un error",
                text: 'Intente de nuevo'
            });

            return false;  // el botón se queda como estaba

        }
    };


    const eliminarPunto = async id => {

        const confirmacion = await Swal.fire({
            title: "¿Eliminar punto de encuentro?",
            text: "Esta acción no se puede deshacer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar"
        });

        if (!confirmacion.isConfirmed) return;

        try {

            const res = await puntosService.eliminarPunto(id);

            Swal.fire({
                title: "¡Eliminado!",
                text: res.mensaje,
                icon: "success"
            });

            consultarAPI();

        } catch (error) {

            console.log(error);

            // Si alguna publicacion lo usa, el backend explica que mejor se desactive
            Swal.fire({
                icon: 'error',
                title: "No se pudo eliminar",
                text: error.response?.data?.mensaje || 'Intente de nuevo'
            });

        }

    };

    return (
        <div className="min-h-screen w-full bg-[#FCFBF0] px-6 py-8 md:px-12 font-sans text-[#4A4A4A]">
            {/* La barra de pestañas que estaba aqui era de la maqueta: repetia el menu
                de LayoutAdmin y sus botones no hacian nada */}

            {/* TÍTULO GENERAL */}
            <div className="mb-8">
                <h1 className="text-3xl font-black text-[#2A2A2A] md:text-4xl">
                    Administración de UniMarket
                </h1>
            </div>

            {/* CONTENIDO PRINCIPAL */}
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
                {/* PANEL IZQUIERDO: FORMULARIO */}
                <div className="overflow-hidden rounded-[32px] bg-[#FFFDF9] shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                    {/* ENCABEZADO DEL FORMULARIO */}
                    <div className="flex h-[72px] items-center justify-center bg-[#FAF0B9] px-6">
                        <h2 className="text-center text-xl font-bold text-[#434035]">
                            Agrega un punto de encuentro
                        </h2>
                    </div>

                    {/* FORMULARIO DE REGISTRO */}
                    <form onSubmit={agregarPunto}>
                        <div className="flex flex-col gap-4 p-8">
                            <input
                                id='idLugar'
                                name='lugar'
                                type="text"
                                placeholder="Lugar ej.(Entrada principal FCFM)"
                                className="h-[46px] w-full rounded-full border border-gray-100 bg-white px-6 text-[14px] 
                                text-gray-700 shadow-[0_2px_6px_rgba(0,0,0,0.04)] outline-none placeholder:text-gray-400 focus:border-yellow-300"
                                onChange={actualizarState}
                            />

                            <input
                                id='idZona'
                                name='zona'
                                type="text"
                                placeholder="Zona ej.(Ciudad universitaria)"
                                className="h-[46px] w-full rounded-full border border-gray-100 bg-white px-6 text-[14px] 
                                text-gray-700 shadow-[0_2px_6px_rgba(0,0,0,0.04)] outline-none placeholder:text-gray-400 focus:border-yellow-300"
                                onChange={actualizarState}
                            />

                            <input
                                id='idDescripcion'
                                name='descripcionZona'
                                type="text"
                                placeholder="Descripción de la zona ej.(En las letras grandes de FCFM)"
                                className="h-[46px] w-full rounded-full border border-gray-100 bg-white px-6 text-[14px] 
                                text-gray-700 shadow-[0_2px_6px_rgba(0,0,0,0.04)] outline-none placeholder:text-gray-400 focus:border-yellow-300"
                                onChange={actualizarState}
                            />

                            {/* CAMPO DESPLEGABLE HORARIO */}
                            <div className="relative w-full">

                                <input
                                    id='idHorario'
                                    name='horario'
                                    type="text"
                                    placeholder='Horario ej.(8:00 pm- 9:00 pm)'
                                    className="h-[46px] w-full rounded-full border border-gray-100 bg-white px-6 text-[14px] 
                                text-gray-700 shadow-[0_2px_6px_rgba(0,0,0,0.04)] outline-none placeholder:text-gray-400 focus:border-yellow-300"
                                    onChange={actualizarState}
                                />

                            </div>

                            <input
                                id='idURL'
                                name='url_ubicacion'
                                type="text"
                                placeholder="URL de la locación"
                                className="h-[46px] w-full rounded-full border border-gray-100 bg-white px-6 text-[14px] 
                                text-gray-700 shadow-[0_2px_6px_rgba(0,0,0,0.04)] outline-none placeholder:text-gray-400 focus:border-yellow-300"
                                onChange={actualizarState}
                            />

                            {/* BOTÓN REGISTRAR */}
                            <div className="mt-4 flex justify-center">
                                <button
                                    type="submit"
                                    className="h-[46px] w-full max-w-[280px] rounded-full bg-[#FCE570] text-[15px] font-bold text-[#434035] shadow-[0_2px_6px_rgba(0,0,0,0.08)] transition hover:brightness-95 active:scale-[0.99]"
                                >
                                    Registrar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* PANEL DERECHO: PUNTOS YA CREADOS */}
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl font-bold text-[#4A4A4A]">
                        Puntos ya creados
                    </h2>
                        <div className="flex flex-col gap-4">
                            {puntos.map((p) => (
                                <Puntos
                                    key={p._id}
                                    punto={p}
                                    desactivarPunto={desactivarPunto}
                                    activarPunto={activarPunto}
                                    eliminarPunto={eliminarPunto}
                                />
                            ))}
                        </div>
                </div>
            </div>
        </div>
    );
}