import React, { useState, useEffect } from 'react';
import * as adminService from "../../services/adminService";
import Swal from 'sweetalert2';
import AdminProductosConsulta from '../../componentes/adminProductos';

export default function AdminProductos() {

    const [adminProductos, guardarAdminProductos] = useState([]);

    const consultarAPI = async () => {
        try {
            const adminProductosConsulta = await adminService.obtenerProductosAdmin();
            console.log(adminProductosConsulta);
            guardarAdminProductos(adminProductosConsulta);
        } catch (error) {
            console.log(error);
        }
    }

     const actualizarAprobacionProducto= async (id) => {
        try {

            const res = await adminService.aprobarProducto(id);

            Swal.fire({
                title: "Aporbado!",
                text: res.mensaje,
                icon: "success"
            });

            consultarAPI();   // recargar la lista para ver el nuevo status

        } catch (error) {

            console.log(error);

            Swal.fire({
                icon: 'error',
                title: "Hubo un error",
                // Si el backend manda un mensaje (ej. "El usuario ya esta suspendido"), lo mostramos
                text: error.response?.data?.mensaje || 'Intente de nuevo'
            });

        }
    };

     const actualizarRechazarProducto= async (id) => {
        try {

            const res = await adminService.rechazarProducto(id);

            Swal.fire({
                title: "¡Rechazado!",
                text: res.mensaje,
                icon: "success"
            });

            consultarAPI();   // recargar la lista para ver el nuevo status

        } catch (error) {

            console.log(error);

            Swal.fire({
                icon: 'error',
                title: "Hubo un error",
                // Si el backend manda un mensaje (ej. "El usuario ya esta suspendido"), lo mostramos
                text: error.response?.data?.mensaje || 'Intente de nuevo'
            });

        }
    };


    useEffect(() => {
        consultarAPI();
    }, [])

    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] px-8 pb-12 pt-8 md:px-12 font-sans">

                {/* TÍTULO GENERAL */}
                <div className="mb-9">
                    <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                        Administración de UniMarket
                    </h1>
                </div>

                <div
                    className="
                        w-full
                        overflow-hidden
                        bg-[#FFFDF8]
                        shadow-[0_3px_6px_rgba(0,0,0,0.15)]
                    "
                >
                    <div
                        className="
                            flex
                            min-h-[70px]
                            flex-col
                            gap-5
                            border-b
                            border-[#D7D7D0]
                            px-8
                            py-4
                            md:flex-row
                            md:items-center
                            md:justify-between
                        "
                    >
                        <h2 className="text-[27px] font-extrabold text-[#252429]">
                            Productos Registrados
                        </h2>

                        {/* FILTRO */}
                        <div className="w-full md:w-[300px]">

                            <input
                                type="text"
                                placeholder="FILTRO"
                                className="
                                    h-[44px]
                                    w-full
                                    rounded-full
                                    border
                                    border-gray-100
                                    bg-white
                                    px-6
                                    text-[13px]
                                    text-[#252429]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                    outline-none
                                    placeholder:text-[#A5A5A5]
                                "
                            />

                        </div>

                    </div>

                    <div className="w-full overflow-x-auto">

                        <div className="min-w-[1100px] w-full">

                            {/* ENCABEZADO TABLA */}
                            <div
                                className="
                                    grid
                                    min-h-[55px]
                                    grid-cols-[2.1fr_1.1fr_0.8fr_1.3fr_1.35fr_1.8fr]
                                    items-center
                                    bg-[#FFF0A3]
                                    px-7
                                    text-[#252429]
                                "
                            >
                                <span className="text-[14px] font-extrabold">
                                    Producto
                                </span>

                                <span className="text-[14px] font-extrabold">
                                    Estudiante
                                </span>

                                <span className="text-[14px] font-extrabold">
                                    Precio
                                </span>

                                <span className="text-[14px] font-extrabold">
                                    Aprobación
                                </span>

                                <span className="text-[14px] font-extrabold">
                                    Disponibilidad
                                </span>

                                <span className="text-[14px] font-extrabold">
                                    Acciones
                                </span>
                            </div>

                            {/* FILAS DE PRODUCTOS (dentro del mismo contenedor que el encabezado
                                para que las columnas queden alineadas) */}
                            {
                                adminProductos.map(producto => (

                                    <AdminProductosConsulta
                                        key={producto._id}
                                        producto={producto}
                                        actualizarAprobacionProducto={actualizarAprobacionProducto}
                                        actualizarRechazarProducto={actualizarRechazarProducto}
                                    />

                                ))
                            }

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}