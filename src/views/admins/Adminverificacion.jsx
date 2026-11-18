import React, { useState, useEffect } from 'react';
import * as adminService from "../../services/adminService";
import Swal from 'sweetalert2';
import Verificaciones from '../../componentes/consultaVerificaciones';

export default function VerificationAdmin() {

    const [verificaciones, guardarVerificaciones] = useState([]);

    const consultarAPI = async () => {
        try {
            const verificacionConsulta = await adminService.obtenerVerificacionesPendientes();
            console.log(verificacionConsulta);
            guardarVerificaciones(verificacionConsulta);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        consultarAPI();
    }, [])

    // Cambiar el estado de la verificación de un usuario
    // id:     el _id del usuario
    // estado: 'aprobado' o 'rechazado'
    const cambiarEstadoVerificacion = async (id, estado) => {
        try {

            const res = await adminService.cambiarEstadoVerificacion(id, estado);

            Swal.fire({
                title: "¡Listo!",
                text: res.mensaje,
                icon: "success"
            });

            // Recargar la lista: el usuario ya no está "pendiente", así que desaparece
            consultarAPI();

        } catch (error) {

            console.log(error);

            Swal.fire({
                icon: 'error',
                title: "Hubo un error",
                // Si el backend manda un mensaje (ej. "Se debe completar la verificacion"), lo mostramos
                text: error.response?.data?.mensaje || 'Intente de nuevo'
            });

        }
    };

    return (
        <>

            <div
                className="
                    w-full
                    pb-12
                    font-sans"
            >

                <div className="mb-8 px-5">

                    <h1
                        className="
                            text-3xl
                            font-extrabold
                            text-[#1f1f22]"
                    >
                        Administración de UniMarket
                    </h1>

                </div>

                <div
                    className="
                        mx-4
                        min-h-[430px]
                        bg-[#FFFDF8]
                        px-7
                        py-7"
                >

                    <div
                        className="
                            mb-8
                            flex
                            items-center
                            justify-between"
                    >

                        <h2
                            className="
                                text-2xl
                                font-extrabold
                                text-[#252429]"
                        >
                            Verificaciones pendientes
                        </h2>


                        <div className="relative">

                            <select
                                className="
                                    appearance-none
                                    w-[220px]
                                    rounded-full
                                    border
                                    border-gray-100
                                    bg-white
                                    py-2.5
                                    pl-5
                                    pr-10
                                    text-sm
                                    text-gray-400
                                    shadow-[0_2px_5px_rgba(0,0,0,0.20)]
                                    outline-none
                                    focus:border-gray-300"
                            >

                                <option>FILTRO</option>
                                <option>Más reciente</option>
                                <option>Más antiguo</option>
                                <option>Universidad</option>

                            </select>


                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    right-4
                                    top-1/2
                                    -translate-y-1/2"
                            >

                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >

                                    <path
                                        d="
                                            M10.3087 13.196
                                            L15.6668 7.67064
                                            C16.0011 7.32586 15.7984 6.66675 15.3581 6.66675
                                            H4.64194
                                            C4.2016 6.66675 3.99893 7.32586 4.33327 7.67064
                                            L9.69135 13.196
                                            C9.86894 13.3792 10.1311 13.3792 10.3087 13.196
                                            Z"
                                        fill="#252429"
                                    />

                                </svg>

                            </div>

                        </div>

                    </div>

                    {
                        verificaciones.map(usuario => (

                            <Verificaciones
                                key={usuario._id}
                                usuario={usuario}
                                cambiarEstadoVerificacion={cambiarEstadoVerificacion}
                            />

                        ))
                    }

                </div>

            </div>

        </>
    )
}