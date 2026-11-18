import { useState, useEffect } from 'react';
import * as adminService from '../../services/adminService';
import Swal from 'sweetalert2';
import ReporteAdmin from '../../componentes/reporteAdmin';

export default function AdminReportes() {

    const [reportes, guardarReportes] = useState([]);

    const consultarAPI = async () => {
        try {
            const respuesta = await adminService.obtenerReportes();

            // Los cerrados ya no se muestran: la lista es de lo que falta revisar
            guardarReportes(respuesta.filter(reporte => reporte.estadoReporte !== 'cerrado'));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        consultarAPI();
    }, []);

    // Mensaje del backend, o uno generico si no vino ninguno
    const mensajeDeError = error => {
        return error.response && error.response.data
            ? error.response.data.mensaje
            : 'Vuelve a intentar';
    }

    // Cerrar el reporte: lo deja en 'cerrado' y por eso sale de la lista
    const cerrarReporte = async reporte => {

        const confirmacion = await Swal.fire({
            title: '¿Cerrar este reporte?',
            text: 'Se marcará como cerrado y saldrá de la lista',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, cerrar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#FF797C',
            cancelButtonColor: '#D7D8DD'
        });

        if (!confirmacion.isConfirmed) {
            return;
        }

        try {
            const res = await adminService.cerrarReporte(reporte._id);

            Swal.fire({ icon: 'success', title: 'Listo', text: res.mensaje });

            consultarAPI();

        } catch (error) {
            console.log(error);
            Swal.fire({ icon: 'error', title: 'No se pudo cerrar', text: mensajeDeError(error) });
        }
    }

    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] px-8 pb-12 pt-8 md:px-12 font-sans">

                {/* TÍTULO GENERAL */}
                <div className="mb-9">
                    <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                        Administración de UniMarket
                    </h1>
                </div>


                {/* =====================================================
                    CONTENEDOR DE REPORTES
                ====================================================== */}
                <div
                    className="
                        w-full
                        bg-[#FFFDF8]
                        shadow-[0_3px_6px_rgba(0,0,0,0.15)]
                    "
                >

                    {/* =================================================
                        ENCABEZADO
                    ================================================== */}
                    <div
                        className="
                            flex
                            min-h-[68px]
                            flex-col
                            gap-4
                            border-b
                            border-[#D9D9D3]
                            bg-white
                            px-8
                            py-3
                            md:flex-row
                            md:items-center
                            md:justify-between
                        "
                    >

                        <h2 className="text-[27px] font-extrabold text-[#252429]">
                            Reportes
                        </h2>


                        {/* FILTRO */}
                        <div className="relative w-full md:w-[290px]">

                            <select
                                defaultValue=""
                                className="
                                    h-[43px]
                                    w-full
                                    appearance-none
                                    rounded-full
                                    border
                                    border-gray-100
                                    bg-white
                                    px-5
                                    pr-12
                                    text-[13px]
                                    text-[#777777]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                    outline-none
                                "
                            >
                                <option value="" disabled>
                                    FILTRO
                                </option>

                                <option>Todos</option>
                                <option>Publicaciones</option>
                                <option>Fraudes</option>
                                <option>Comentarios</option>
                            </select>


                            {/* FLECHA */}
                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    right-5
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


                    {/* =================================================
                        LISTA DE REPORTES
                    ================================================== */}
                    <div className="px-4 py-4 md:px-5">


                        {
                            reportes.map(reporte => (
                                <ReporteAdmin
                                    key={reporte._id}
                                    reporte={reporte}
                                    onCerrar={cerrarReporte}
                                />
                            ))
                        }

                        {
                            reportes.length === 0 && (
                                <p className="py-6 text-center text-sm font-medium text-gray-500">
                                    No hay reportes pendientes por revisar.
                                </p>
                            )
                        }

                    </div>

                </div>

            </div>
        </>
    )
}