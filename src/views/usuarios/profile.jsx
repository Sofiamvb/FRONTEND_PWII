import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import clienteAxios from "../../config/axios";
import Swal from 'sweetalert2';

export default function Profile(props) {

    const navigate = useNavigate();

    //usuario = state, guaradarUsuario = funcion para guaradar el state
    const [usuario, datosUsuario] = useState({
        name: '',
        apellidoP: '',
        apellidoM: '',
        usuario: '',
        email: '',
        institucion: '',
        carrera: '',
        password: ''
    });

    const idUsuario = sessionStorage.getItem('id');

    const consultarAPI = async () => {
        const usuarioConsulta = await clienteAxios.get(`/useresInfo/${idUsuario}`);
        datosUsuario(usuarioConsulta.data);
    }

    useEffect(() => {
        consultarAPI();

    }, [])

    //Leer datos del formulario
    const actualizarState = e => {
        //Almacenar lo que escribe el uauario en el state
        datosUsuario({

            //crear una copia de el state actaul
            ...usuario,
            [e.target.name]: e.target.value
        })
        console.log(usuario)
    }

    //Enviar peticion para actualizar el cliente
    const actualizarUsuario = e => {
        e.preventDefault();
        clienteAxios.put(`/users/${idUsuario}`, usuario)
            .then(res => {
                console.log(res);
            })

    }

    const actualizarPassword = e => {
        e.preventDefault();
        clienteAxios.put(`/users/password/${idUsuario}`, usuario)
            .then(res => {
                console.log(res);
            })

    }

    return (
        <>

            <div className="min-h-screen w-full  pb-12 pt-24 px-8 md:pt-32 md:pr-12 md:pl-32 lg:pl-64 font-sans">

                <div className="mx-auto max-w-5xl">


                    <div className="relative mb-24 h-56 w-full rounded-[2rem] bg-[#fae568] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">


                        <div className="absolute right-6 bottom-4 sm:right-6 sm:bottom-6">
                            <div className="rounded-full bg-[#83cbfc]/40 px-5 py-2 text-xs font-bold text-[#3a81a6] backdrop-blur-sm shadow-sm">
                                Verificación en proceso
                            </div>
                        </div>

                        <div className="absolute -bottom-12 left-8 sm:left-12 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-8 border-[#FBFAF5] bg-[#FBFAF5] shadow-sm">
                            <div className="h-full w-full bg-[#FBFAF5] flex items-center justify-center">


                                <img
                                    src="/public/img/profile.png"
                                    alt="Foto de perfil"
                                    className="h-full w-full object-cover"
                                />

                            </div>
                        </div>


                        <div className="absolute bottom-6 left-48 sm:left-52 flex flex-col">


                            <div className="flex items-center gap-2">

                                <div className="flex text-lg text-[#83cbfc]">

                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_5421_440)">
                                            <path d="M11.5432 14.0625C11.4445 14.0628 11.3483 14.0321 11.2681 13.9746L7.50023 11.2429L3.73236 13.9746C3.65186 14.033 3.55488 14.0642 3.45544 14.0639C3.356 14.0635 3.25925 14.0315 3.17918 13.9726C3.09911 13.9136 3.03986 13.8307 3.01001 13.7358C2.98016 13.641 2.98125 13.5391 3.01312 13.4449L4.48265 9.09224L0.674061 6.48043C0.591564 6.42392 0.529301 6.34251 0.496367 6.24809C0.463434 6.15367 0.461557 6.0512 0.49101 5.95564C0.520463 5.86008 0.579703 5.77644 0.660075 5.71695C0.740447 5.65745 0.837738 5.62522 0.937733 5.62496H5.63637L7.05433 1.26119C7.08488 1.16698 7.14448 1.08486 7.22459 1.02662C7.3047 0.968382 7.40119 0.937012 7.50023 0.937012C7.59927 0.937012 7.69577 0.968382 7.77588 1.02662C7.85598 1.08486 7.91559 1.16698 7.94613 1.26119L9.3641 5.62642H14.0627C14.1629 5.62637 14.2604 5.65838 14.341 5.71776C14.4216 5.77714 14.4811 5.86077 14.5107 5.95641C14.5403 6.05204 14.5386 6.15465 14.5057 6.24921C14.4728 6.34377 14.4105 6.42531 14.3279 6.48189L10.5178 9.09224L11.9865 13.4437C12.0103 13.5142 12.017 13.5893 12.006 13.6628C11.995 13.7364 11.9667 13.8062 11.9234 13.8667C11.8801 13.9271 11.823 13.9764 11.7569 14.0105C11.6908 14.0445 11.6176 14.0623 11.5432 14.0625Z" fill="#86CDF9" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_5421_440">
                                                <rect width="15" height="15" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>


                                </div>
                                <span className="text-xs font-medium text-gray-700">2 valoraciones</span>
                            </div>
                        </div>
                    </div>

                    <div className="-mt-22 mb-20 pl-48 sm:pl-52">
                        <h1 className="text-3xl font-extrabold text-[#1f1f22]">Usuario</h1>
                        <p className="mt-1 text-sm font-medium text-gray-500">FCFM/UANL</p>
                    </div>
                    <form onSubmit={actualizarUsuario} className="flex flex-col gap-6">


                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <input type="text"
                                id="nombreEdit"
                                name="name"
                                placeholder="Nombre"
                                className="w-full rounded-full border border-gray-100 bg-white px-6 
                                py-4 text-sm text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.04)] 
                                outline-none transition-all focus:border-gray-300 focus:shadow-md"
                                onChange={actualizarState}
                                value={usuario.name} />
                            <input type="text"
                                id="apellidopEdit"
                                name="apellidoP"
                                placeholder="Apellido paterno"
                                className="w-full rounded-full border border-gray-100 bg-white px-6 py-4 text-sm 
                                text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.04)] 
                                outline-none transition-all focus:border-gray-300 focus:shadow-md"
                                onChange={actualizarState}
                                value={usuario.apellidoP} />
                            <input type="text"
                                id="apellidomEdit"
                                name="apellidoM"
                                placeholder="Apellido materno"
                                className="w-full rounded-full border border-gray-100 bg-white px-6 py-4 text-sm 
                                text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.04)] 
                                outline-none transition-all focus:border-gray-300 focus:shadow-md"
                                onChange={actualizarState}
                                value={usuario.apellidoM} />
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text"
                                id="emailEdit"
                                name="email"
                                placeholder="Correo electrónico"
                                className="w-full rounded-full border border-gray-100 bg-white px-6 py-4 text-sm 
                                text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.04)] 
                                outline-none transition-all focus:border-gray-300 focus:shadow-md"
                                onChange={actualizarState}
                                value={usuario.email} />
                            <input type="text"
                                id="usuarioEdit"
                                name="usuario"
                                placeholder="Usuario"
                                className="w-full rounded-full border border-gray-100 bg-white px-6 py-4 text-sm 
                                text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.04)] 
                                outline-none transition-all focus:border-gray-300 focus:shadow-md"
                                onChange={actualizarState}
                                value={usuario.usuario} />
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text"
                                id="institucionEdit"
                                name="institucion"
                                placeholder="Institución universitaria"
                                className="w-full rounded-full border border-gray-100 bg-white px-6 py-4 text-sm 
                                text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.04)] 
                                outline-none transition-all focus:border-gray-300 focus:shadow-md"
                                onChange={actualizarState}
                                value={usuario.institucion} />
                            <input type="text"
                                id="carreraEdit"
                                name="carrera"
                                placeholder="Carrera universitaria"
                                className="w-full rounded-full border border-gray-100 bg-white px-6 py-4 text-sm 
                                text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.04)] 
                                outline-none transition-all focus:border-gray-300 focus:shadow-md"
                                onChange={actualizarState}
                                value={usuario.carrera} />
                        </div>


                        <div className="mt-6 flex justify-center">
                            <button type="submit"
                                className="w-full max-w-[300px] rounded-full bg-[#fae568] py-4 font-bold text-[#1f1f22] 
                                shadow-[0_4px_15px_rgba(250,229,104,0.3)] transition-colors hover:bg-[#f0dc59]">
                                Guardar cambios
                            </button>
                        </div>
                    </form>

                    <div className="mt-20 mb-8">
                        <h1 className="text-2xl font-extrabold text-[#1f1f22]">Actualiza tu contraseña</h1>
                        <p className="mt-2 text-sm text-gray-500">Crea una nueva contraseña y asegúrate de que esta no se repita.</p>
                    </div>


                    <form onSubmit={actualizarPassword} className="flex flex-col gap-6">


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input 
                                id="contraseñaActual"
                                name="passwordActual"
                                placeholder="Contraseña Actual"
                                className="w-full rounded-full border border-gray-100 bg-white px-6 py-4 
                                text-sm text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.04)] 
                                outline-none transition-all focus:border-gray-300 focus:shadow-md"
                                onChange={actualizarState} />
                            <input 
                                id="nuevaContraseña"
                                name="password"
                                placeholder="Nueva contraseña"
                                className="w-full rounded-full border border-gray-100 bg-white px-6 py-4
                                 text-sm text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.04)] 
                                 outline-none transition-all focus:border-gray-300 focus:shadow-md"
                                  onChange={actualizarState}/>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input 
                                id="confirmarContraseñaE"
                                name="passwordRepetida"
                                placeholder="Confirmar contraseña"
                                className="w-full rounded-full border border-gray-100 bg-white px-6 py-4
                                text-sm text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.04)] 
                                outline-none transition-all focus:border-gray-300 focus:shadow-md"
                                onChange={actualizarState} />

                            <button type="submit"
                                className="w-full rounded-full bg-[#fae568] py-4 font-bold text-[#1f1f22] 
                                shadow-[0_4px_15px_rgba(250,229,104,0.3)] transition-colors hover:bg-[#f0dc59]">
                                Actualizar
                            </button>
                        </div>

                    </form>

                </div>
            </div>


        </>
    )
}