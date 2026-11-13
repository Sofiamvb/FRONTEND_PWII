import React, { useEffect, useState } from 'react';
import clienteAxios from '../../config/axios';
import { Link } from "react-router-dom"
import EditProduct from "../../componentes/EditProduct"

export default function Publications() {

    const [productosPublicados, guardarProductosPublicados] = useState([]);

    const consultarAPI = async () => {
        const productosConsulta = await clienteAxios.get('/productos/home');
        guardarProductosPublicados(productosConsulta.data);
    }

    useEffect(() => {
        consultarAPI();
    }, []);

    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] pb-8 pt-24 px-8 md:pb-12 md:pt-32 md:pr-12 md:pl-32 lg:pl-64 font-sans">

                <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    {/* TÍTULO */}
                    <div>
                        <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                            Mis Publicaciones
                        </h1>
                    </div>

                    {/* FILTRO + NUEVA PUBLICACIÓN */}
                    <div className="flex flex-wrap items-center gap-5">

                        {/* CATEGORÍA */}
                        <div className="flex items-center gap-3">

                            <label className="text-sm font-bold text-[#1f1f22]">
                                Categoría
                            </label>

                            <div className="relative">

                                <select
                                    defaultValue=""
                                    className="
                                        min-w-[165px]
                                        appearance-none
                                        rounded-full
                                        border
                                        border-gray-100
                                        bg-white
                                        py-2.5
                                        pl-5
                                        pr-11
                                        text-sm
                                        text-gray-500
                                        shadow-[0_3px_7px_rgba(0,0,0,0.15)]
                                        outline-none
                                    "
                                >
                                    <option value="" disabled>
                                        Seleccionar
                                    </option>

                                    <option>Electrónica</option>
                                    <option>Tecnología</option>
                                    <option>Escolar</option>
                                    <option>Accesorios</option>
                                </select>

                                {/* FLECHA */}
                                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">

                                    <svg
                                        width="18"
                                        height="18"
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

                        {/* NUEVA PUBLICACIÓN */}
                        <Link
                            to="/home/publications/new"
                            className="
                                flex
                                h-[42px]
                                items-center
                                justify-center
                                rounded-full
                                bg-[#FAE568]
                                px-7
                                text-sm
                                font-extrabold
                                text-[#252429]
                                shadow-[0_3px_6px_rgba(0,0,0,0.22)]
                                transition
                                hover:brightness-95
                            "
                        >
                            Nueva Publicación
                        </Link>

                    </div>

                </div>

                {/* GRID DE PUBLICACIONES: un solo grid, una tarjeta por elemento */}
                <div className="
                        mt-6
                        grid
                        grid-cols-1
                        justify-items-start
                        gap-x-6
                        gap-y-10
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4
                        2xl:grid-cols-5
                    ">

                    {productosPublicados.map(publicacion => (
                        <EditProduct
                            key={publicacion._id}
                            publicacion={publicacion}
                        />
                    ))}

                </div>

            </div>
        </>
    )
}
