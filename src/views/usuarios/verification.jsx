import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import clienteAxios from "../../config/axios";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom"

export default function Verification() {

    const navigate = useNavigate();

    const idUsuario = sessionStorage.getItem('id');

    const [seleccionUsuario, guardarSeleccion] = useState({
        tipoDocumento: ''

    });

    //archivo = state, guardarArchivo = setState
    const [archivo, guardarArchivo] = useState('');

    const leerInformacionUsuario = e => {

        guardarSeleccion({
            //Obtiene una copia del state
            ...seleccionUsuario,
            [e.target.name]: e.target.value
        })
        console.log(seleccionUsuario)
        console.log(archivo)
    }

    const leerArchivo = e => {
        guardarArchivo(e.target.files);
    }

    //Añadir un producto nuevo
    const cargarArchivo = async e => {

        e.preventDefault();

        //crear un formData
        const formData = new FormData();

        formData.append('documento', seleccionUsuario.tipoDocumento)
          for (let i = 0; i < archivo.length; i++) {
            formData.append('archivo', archivo[i]);
        }

        //Guardar en la base de  datos
        try {
            //Enviar peticion 
            const res = await clienteAxios.post(`/users/verificacion/${idUsuario}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            Swal.fire({
                title: "Se ha enviado ha revision!",
                text: "Espere su verificación",
                icon: "success"
            });

            navigate('/home');

            console.log(res);

        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: "Hubo un error",
                text: 'Vuelve a intentar'

            });
        }

    }

    return (
        <>

            <div className="flex min-h-screen w-1/2 flex-col justify-center px-16 lg:px-24">
                <div className="max-w-lg text-white">
                    <h1 className="mb-6 text-6xl font-extrabold leading-[1.1] lg:text-7xl">
                        Verifica que <br /> eres <br /> estudiante
                    </h1>
                    <p className="max-w-sm text-sm text-gray-300">
                        Verifícate ahora, para saber que eres un estudiante apto para comprar y vender.
                    </p>
                </div>
            </div>

            <div className="flex min-h-screen w-1/2 flex-col items-center justify-center px-8">

                <div className="w-full max-w-md">
                    <h1 className="mb-4 text-center text-5xl font-bold text-[#1f1f22]">
                        Verificación
                    </h1>
                    <p className="mb-10 text-center text-xs text-gray-500">
                        Verifica que eres un estudiante en curso, carga tu documentación para que <br /> sea aprobada y comienza a navegar.
                    </p>

                    <form onSubmit={cargarArchivo} className="flex flex-col space-y-6">


                        <div className="relative">
                            <select
                                name="tipoDocumento"
                                id="opciones"
                                defaultValue=""
                                className="w-full appearance-none rounded-full border border-gray-100 bg-white px-6 py-4 
                                text-gray-500 shadow-[0_4px_20px_rgba(0,0,0,0.04)] outline-none transition-all 
                                focus:border-gray-300 focus:shadow-md"
                                onChange={leerInformacionUsuario}

                            >
                                <option value="" disabled hidden>Seleccionar</option>
                                <option value="credencial">Credencial vigente</option>
                                <option value="constancia">Constancia de estudios</option>
                                <option value="otro">Otro</option>
                            </select>


                            <div className="pointer-events-none absolute right-6 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center opacity-60">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.463 19.7939L23.5001 11.5058C24.0016 10.9887 23.6976 10 23.0371 10H6.96288C6.30236 10 5.99836 10.9887 6.49988 11.5058L14.537 19.7939C14.8034 20.0687 15.1966 20.0686 15.463 19.7939Z" fill="#252429" />
                                </svg>

                            </div>
                        </div>


                        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-transparent py-8 transition-colors hover:bg-gray-50">
                            <label htmlFor="comprobante" className="mb-3 text-sm font-bold text-[#1f1f22]">
                                Sube un comprobante
                            </label>
                            <input
                                type="file"
                                id="comprobante"
                                name="documento"
                                className="w-full max-w-[250px] text-xs text-gray-500 file:mr-2 file:cursor-pointer 
                                file:rounded file:border file:border-gray-300 file:bg-gray-100 file:px-3 file:py-1 
                                file:text-xs file:font-semibold file:text-gray-700 hover:file:bg-gray-200"
                                onChange={leerArchivo}
                            />
                            <span className="mt-2 text-[10px] text-gray-400">
                                No se ha seleccionado archivo
                            </span>
                        </div>


                        <button
                            type="submit"
                            className="mt-4 w-full rounded-full bg-[#fae568] py-4 font-bold text-[#1f1f22]
                             shadow-[0_4px_15px_rgba(250,229,104,0.3)]
                             transition-colors hover:bg-[#f0dc59]"
                        >
                            Enviar a revisión
                        </button>

                    </form>
                </div>
            </div>


        </>
    )
}