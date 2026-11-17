import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import clienteAxios from "../../config/axios";
import Swal from 'sweetalert2';

export default function Reports() {

     //usuario = state, guaradarUsuario = funcion para guaradar el state
    const [reportes, guardarReporte] = useState({
        tipo_de_reporte: '',
        usuario_reportado: '',
        motivo: '',
        descripcionReporte: '',
        estadoReporte: ''
    });

    //Leer datos del formulario
    const actualizarState = e => {
        //Almacenar lo que escribe el uauario en el state
        guardarReporte({
            //crear una copia de el state actaul
            ...reportes,
            [e.target.name]: e.target.value
        })
    }

    //Añadir un cliente nuevo
    const agregarReporte = e => {

        e.preventDefault();
        // enviar peticion
        clienteAxios.post('/users', usuario)
            .then(res => {
                console.log(res)

                Swal.fire({
                    title: "Se ha registrado!",
                    text: res.data.mensaje,
                    icon: "success"
                });

                navigate('/auth');

            })
            .catch(error => {
                console.log('Error interno al guardar en la base de datos')
                Swal.fire({
                    icon: 'error',
                    title: "Hubo un error",
                    text: 'Error al registrarse'

                });
            })

    }

    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] pb-8 pt-24 px-8 md:pb-12 md:pt-28 md:pr-12 md:pl-32 lg:pl-64 font-sans">

                <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 xl:grid-cols-2">

                    <div>

                        <h1 className="mb-7 text-[34px] font-extrabold leading-tight text-[#1f1f22]">
                            Reportar un Problema
                        </h1>

                        {/* TARJETA DEL FORMULARIO */}
                        <div
                            className="
                                flex
                                min-h-[480px]
                                w-full
                                flex-col
                                rounded-[22px]
                                bg-white
                                px-7
                                py-7
                                shadow-[0_4px_12px_rgba(0,0,0,0.13)]
                            "
                        >
                            {/* TIPO */}
                            <div className="mb-5">

                                <label
                                    htmlFor="tipoReporte"
                                    className="
                                        mb-2
                                        block
                                        text-[13px]
                                        font-extrabold
                                        text-[#252429]
                                    "
                                >
                                    Tipo:
                                </label>

                                <div className="relative">

                                    <select
                                        id="tipoReporte"
                                        defaultValue=""
                                        className="
                                            h-[42px]
                                            w-full
                                            appearance-none
                                            rounded-[14px]
                                            bg-[#FBFBFB]
                                            px-4
                                            pr-11
                                            text-[13px]
                                            text-[#858585]
                                            shadow-[0_2px_5px_rgba(0,0,0,0.13)]
                                            outline-none
                                        "
                                    >
                                        <option value="" disabled>
                                            Seleccionar
                                        </option>

                                        <option>Publicación</option>
                                        <option>Usuario</option>
                                        <option>Compra</option>
                                        <option>Venta</option>
                                    </select>

                                    {/* FLECHA */}
                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            right-4
                                            top-1/2
                                            -translate-y-1/2
                                        "
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.3087 13.196L15.6668 7.67064C16.0011 7.32586 15.7984 6.66675 15.3581 6.66675H4.64194C4.2016 6.66675 3.99893 7.32586 4.33327 7.67064L9.69135 13.196C9.86894 13.3792 10.1311 13.3792 10.3087 13.196Z"
                                                fill="#252429"
                                            />
                                        </svg>
                                    </div>

                                </div>

                            </div>

                            {/* USUARIO REPORTADO */}
                            <div className="mb-5">

                                <label
                                    htmlFor="usuarioReportado"
                                    className="
                                        mb-2
                                        block
                                        text-[13px]
                                        font-extrabold
                                        text-[#252429]
                                    "
                                >
                                    Estas por reportar a @Usuario
                                </label>

                                <input
                                    id="usuarioReportado"
                                    type="text"
                                    className="
                                        h-[42px]
                                        w-full
                                        rounded-[14px]
                                        bg-[#FBFBFB]
                                        px-4
                                        text-[13px]
                                        text-[#252429]
                                        shadow-[0_2px_5px_rgba(0,0,0,0.13)]
                                        outline-none
                                    "
                                />

                            </div>

                            {/* MOTIVO */}
                            <div className="mb-5">

                                <label
                                    htmlFor="motivoReporte"
                                    className="
                                        mb-2
                                        block
                                        text-[13px]
                                        font-extrabold
                                        text-[#252429]
                                    "
                                >
                                    Motivo:
                                </label>

                                <div className="relative">

                                    <select
                                        id="motivoReporte"
                                        defaultValue=""
                                        className="
                                            h-[42px]
                                            w-full
                                            appearance-none
                                            rounded-[14px]
                                            bg-[#FBFBFB]
                                            px-4
                                            pr-11
                                            text-[13px]
                                            text-[#858585]
                                            shadow-[0_2px_5px_rgba(0,0,0,0.13)]
                                            outline-none
                                        "
                                    >
                                        <option value="" disabled>
                                            Seleccionar
                                        </option>

                                        <option>Contenido inapropiado</option>
                                        <option>Posible fraude</option>
                                        <option>Información falsa</option>
                                        <option>Comportamiento inadecuado</option>
                                    </select>

                                    {/* FLECHA */}
                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            right-4
                                            top-1/2
                                            -translate-y-1/2
                                        "
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.3087 13.196L15.6668 7.67064C16.0011 7.32586 15.7984 6.66675 15.3581 6.66675H4.64194C4.2016 6.66675 3.99893 7.32586 4.33327 7.67064L9.69135 13.196C9.86894 13.3792 10.1311 13.3792 10.3087 13.196Z"
                                                fill="#252429"
                                            />
                                        </svg>
                                    </div>

                                </div>

                            </div>

                            {/* DESCRIPCIÓN */}
                            <div className="mb-6">

                                <label
                                    htmlFor="descripcionReporte"
                                    className="
                                        mb-2
                                        block
                                        text-[13px]
                                        font-extrabold
                                        text-[#252429]
                                    "
                                >
                                    Descripción:
                                </label>

                                <textarea
                                    id="descripcionReporte"
                                    rows="6"
                                    className="
                                        min-h-[120px]
                                        w-full
                                        resize-none
                                        rounded-[14px]
                                        bg-[#F8F8F8]
                                        p-4
                                        text-[13px]
                                        text-[#252429]
                                        shadow-[0_2px_5px_rgba(0,0,0,0.10)]
                                        outline-none
                                    "
                                />

                            </div>

                            <button
                                type="button"
                                className="
                                    mt-auto
                                    flex
                                    h-[46px]
                                    w-full
                                    items-center
                                    justify-center
                                    rounded-[50px]
                                    bg-[#E99597]
                                    text-[16px]
                                    font-extrabold
                                    text-[#252429]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.18)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Enviar
                            </button>

                        </div>

                    </div>

                    <div>

                        <h1 className="mb-7 text-[34px] font-extrabold leading-tight text-[#1f1f22]">
                            Mis Reportes
                        </h1>

                        {/* TARJETA DE REPORTES */}
                        <div
                            className="
                                flex
                                min-h-[480px]
                                w-full
                                flex-col
                                gap-3
                                rounded-[22px]
                                bg-white
                                px-4
                                py-4
                                shadow-[0_4px_12px_rgba(0,0,0,0.13)]
                            "
                        >

                            {/* REPORTE */}
                            <div
                                className="
                                    flex
                                    min-h-[62px]
                                    w-full
                                    items-center
                                    justify-between
                                    gap-4
                                    rounded-[16px]
                                    bg-[#FFFDF8]
                                    px-5
                                    py-3
                                    shadow-[0_2px_6px_rgba(0,0,0,0.13)]
                                "
                            >

                                {/* INFORMACIÓN */}
                                <div>

                                    <h2
                                        className="
                                            text-[13px]
                                            font-extrabold
                                            text-[#252429]
                                        "
                                    >
                                        Publicación Inapropiada
                                    </h2>

                                    <p
                                        className="
                                            mt-1
                                            max-w-[185px]
                                            text-[11px]
                                            font-medium
                                            leading-[14px]
                                            text-[#9A9A9A]
                                        "
                                    >
                                        Una publicacion fuera de lugar en la pagina
                                    </p>

                                </div>

                                {/* ESTADO */}
                                <span
                                    className="
                                        flex
                                        h-[25px]
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FFF0AD]
                                        px-4
                                        text-[11px]
                                        font-medium
                                        text-[#252429]
                                        shadow-[0_2px_4px_rgba(0,0,0,0.14)]
                                    "
                                >
                                    Pendiente
                                </span>

                            </div>

                            {/* REPORTE */}
                            <div
                                className="
                                    flex
                                    min-h-[62px]
                                    w-full
                                    items-center
                                    justify-between
                                    gap-4
                                    rounded-[16px]
                                    bg-[#FFFDF8]
                                    px-5
                                    py-3
                                    shadow-[0_2px_6px_rgba(0,0,0,0.13)]
                                "
                            >

                                {/* INFORMACIÓN */}
                                <div>

                                    <h2
                                        className="
                                            text-[13px]
                                            font-extrabold
                                            text-[#252429]
                                        "
                                    >
                                        Posible Fraude
                                    </h2>

                                    <p
                                        className="
                                            mt-1
                                            max-w-[185px]
                                            text-[11px]
                                            font-medium
                                            leading-[14px]
                                            text-[#9A9A9A]
                                        "
                                    >
                                        Publicacion engañosa para los usuarios
                                    </p>

                                </div>

                                {/* ESTADO */}
                                <span
                                    className="
                                        flex
                                        h-[25px]
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FFF0AD]
                                        px-4
                                        text-[11px]
                                        font-medium
                                        text-[#252429]
                                        shadow-[0_2px_4px_rgba(0,0,0,0.14)]
                                    "
                                >
                                    Pendiente
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
