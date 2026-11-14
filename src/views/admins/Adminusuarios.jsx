import React, { useState, useEffect } from 'react';
import clienteAxios from "../../config/axios";
import Swal from 'sweetalert2';
import UsuariosVerificaciones from '../../componentes/consultaUsuariosVerificados';

export default function UsuariosAdmin() {

    const [usuariosVerificados, guardarUsuariosVerificados] = useState([]);

    const consultarAPI = async () => {
        try {
            const usuariosVerificadosConsulta = await clienteAxios.get('/admin/mostrarTodasVerificaciones');
            console.log(usuariosVerificadosConsulta.data);
            guardarUsuariosVerificados(usuariosVerificadosConsulta.data);
        } catch (error) {
            console.log(error);
        }
    }

    // Suspender un usuario: solo se manda el id en la URL, no hace falta body
    const actualizarUsuarioStatus = async (id) => {
        try {

            const res = await clienteAxios.put(`/admin/usuarios/${id}/suspender`);

            Swal.fire({
                title: "¡Suspendido!",
                text: res.data.mensaje,
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
            <div className="min-h-screen w-full bg-[#FFFFED] px-8 pb-12 pt-8 md:px-12">

                {/* TÍTULO */}
                <div className="mb-9">
                    <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                        Administración de UniMarket
                    </h1>
                </div>

                <div className="w-full overflow-x-auto">

                    <div className="min-w-[1000px] w-full">

                        {/* ENCABEZADO */}
                        <div
                            className="
                                grid
                                min-h-[64px]
                                grid-cols-[1.35fr_1fr_1.2fr_0.85fr_0.8fr]
                                items-center
                                bg-[#F9E67D]
                                px-6
                                text-[#252429]
                            "
                        >
                            <span className="text-[18px] font-extrabold">
                                Usuarios
                            </span>

                            <span className="text-[18px] font-extrabold">
                                Rol
                            </span>

                            <span className="text-[18px] font-extrabold">
                                Verificación
                            </span>

                            <span className="text-[18px] font-extrabold">
                                Cuenta
                            </span>

                            <span></span>
                        </div>

                        {/* FILAS DE USUARIOS (dentro del mismo contenedor que el encabezado
                            para que las columnas queden alineadas) */}
                        {
                            usuariosVerificados.map(verificado => (

                                <UsuariosVerificaciones
                                    key={verificado._id}
                                    verificado={verificado}
                                    actualizarUsuarioStatus={actualizarUsuarioStatus}
                                />

                            ))
                        }

                    </div>

                </div>

            </div>
        </>
    )
}