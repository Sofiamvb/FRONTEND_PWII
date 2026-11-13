import React, { useState } from 'react';
import clienteAxios from "../../config/axios";
import Swal from 'sweetalert2';

export default function AdminPuntos() {
    const tabs = [
        "Verificaciones",
        "Usuarios",
        "Categorías",
        "Productos",
        "Puntos de Compra",
        "Transacciones",
        "Reportes",
        "Valoraciones",
    ];

    const puntosGuardados = [
        {
            id: 1,
            titulo: "Entrada Principal FCFM",
            subtitulo: "Ciudad Universitaria | 8:00 - 21:00",
        },
        {
            id: 2,
            titulo: "Arriba de la estación",
            subtitulo: "Estacion Universidad | 8:00 - 21:00",
        },
        {
            id: 3,
            titulo: "Cafeteria Quimicás",
            subtitulo: "Ciudad Universitaria | 8:00 - 21:00",
        },
    ];



    const [punto, guardarPunto] = useState({
        lugar: '',
        zona: '',
        descripcionZona: '',
        horario: '',
        url_ubicacion: '',


    });

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

            const res = await clienteAxios.post('/admin/puntos', punto);

            console.log(res);

            Swal.fire({
                title: "¡Se ha registrado!",
                text: res.data.mensaje,
                icon: "success"
            });


        } catch (error) {

            console.log(error);

            Swal.fire({
                icon: 'error',
                title: "Hubo un error",
                text: 'Intente de nuevo'
            });

        }
    };


    return (
        <div className="min-h-screen w-full bg-[#FCFBF0] px-6 py-8 md:px-12 font-sans text-[#4A4A4A]">
            {/* BARRA DE NAVEGACIÓN SUPERIOR (TABS) */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                {tabs.map((tab, idx) => (
                    <button
                        key={idx}
                        type="button"
                        className="rounded-full bg-white px-5 py-2 text-[13px] font-bold text-[#333333] shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition hover:bg-gray-50"
                    >
                        {tab}
                    </button>
                ))}
            </div>

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
                        {puntosGuardados.map((punto) => (
                            <div
                                key={punto.id}
                                className="flex flex-col justify-between gap-4 rounded-[28px] bg-white px-7 py-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] sm:flex-row sm:items-center"
                            >
                                <div>
                                    <h3 className="text-[15px] font-bold text-[#333333]">
                                        {punto.titulo}
                                    </h3>
                                    <p className="mt-0.5 text-[12px] font-medium text-gray-400">
                                        {punto.subtitulo}
                                    </p>
                                </div>

                                <div className="flex shrink-0 items-center gap-2">
                                    <button
                                        type="button"
                                        className="h-[34px] rounded-full bg-[#FCE570] px-5 text-[12px] font-bold text-[#434035] shadow-[0_2px_4px_rgba(0,0,0,0.06)] transition hover:brightness-95"
                                    >
                                        Desactivar
                                    </button>

                                    <button
                                        type="button"
                                        className="h-[34px] rounded-full bg-[#FF8083] px-5 text-[12px] font-bold text-white shadow-[0_2px_4px_rgba(0,0,0,0.06)] transition hover:brightness-95"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}