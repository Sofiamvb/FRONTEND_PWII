import React, { useEffect, useState } from 'react';
import clienteAxios from '../../config/axios';
import { Link, useParams } from "react-router-dom"
import DisponibilidadProducto from '../../componentes/disponibilidadProducto';
import Carrusel from '../../componentes/Carrusel';
export default function ProductDetail() {

    const { idProducto, nombre } = useParams();

    const [producto, guardarProducto] = useState({
        nombre_produ: '',
        descripcion: '',
        precio: '',
        categoria: '',
        punto_encuentro: '',
        condicion: '',
        stock: '',
        disponibilidad: ''

    });

    console.log(producto)



    const consultarAPI = async () => {
        const productoConsulta = await clienteAxios.get(`/productos/${idProducto}`);
        guardarProducto(productoConsulta.data);
    }

    useEffect(() => {
        consultarAPI();
    }, []);

    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] pb-8 pt-24 px-8 md:pb-12 md:pt-28 md:pr-12 md:pl-32 lg:pl-64 font-sans">

                <div className="mb-8">
                    <Link
                        to="/home"
                        className="
                            inline-flex
                            items-center
                            gap-3
                            text-[15px]
                            font-medium
                            text-[#8B8B8B]
                            transition
                            hover:text-[#252429]
                        "
                    >
                        <svg
                            width="32"
                            height="20"
                            viewBox="0 0 32 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 3L3 10L10 17"
                                stroke="#252429"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            <path
                                d="M4 10H29"
                                stroke="#252429"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>

                        Volver
                    </Link>
                </div>

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-8
                        xl:grid-cols-[0.95fr_1fr]
                    "
                >

                    <div className="flex flex-col gap-7">

                        {/* IMAGEN DEL PRODUCTO */}
                        <div
                            className="
                                flex
                                min-h-[430px]
                                w-full
                                items-center
                                justify-center
                                rounded-[25px]
                                bg-[#FAE568]
                                px-10
                                py-10
                            "
                        >
                            {/* Carrusel con todas las imágenes, empieza en la principal */}
                            <Carrusel
                                imagenes={producto.imagenes}
                                alt={producto.nombre_produ}
                            />
                        </div>

                        {/* INFORMACIÓN DEL PRODUCTO */}
                        <div
                            className="
                                w-full
                                rounded-[25px]
                                bg-white
                                px-8
                                py-7
                                shadow-[0_4px_7px_rgba(0,0,0,0.22)]
                            "
                        >

                            {/* DESCRIPCIÓN */}
                            <div className="mb-6">

                                <h2 className="text-[17px] font-extrabold text-[#252429]">
                                    Descripción
                                </h2>

                                <p className="mt-2 text-[14px] font-medium text-[#9A9898]">
                                    {producto.descripcion}
                                </p>

                            </div>

                            {/* CATEGORÍA Y ESTADO */}
                            <div className="mb-6 grid grid-cols-2 gap-8">

                                <div>

                                    <h2 className="text-[17px] font-extrabold text-[#252429]">
                                        Categoría
                                    </h2>

                                    <p className="mt-2 text-[14px] font-medium text-[#9A9898]">
                                        {producto.categoria.nombre_categoria}
                                    </p>

                                </div>

                                <div>

                                    <h2 className="text-[17px] font-extrabold text-[#252429]">
                                        Estado
                                    </h2>

                                    <p className="mt-2 text-[14px] font-medium text-[#9A9898]">
                                        {producto.condicion}
                                    </p>

                                </div>

                            </div>

                            {/* UBICACIÓN Y DISPONIBILIDAD */}
                            <div className="grid grid-cols-2 gap-8">

                                <div>

                                    <h2 className="text-[17px] font-extrabold text-[#252429]">
                                        Ubicación
                                    </h2>

                                    <p className="mt-2 text-[14px] font-medium text-[#9A9898]">
                                        {`${producto.punto_encuentro.lugar}|${producto.punto_encuentro.zona}`}
                                    </p>

                                </div>

                                <div>

                                    <h2 className="text-[17px] font-extrabold text-[#252429]">
                                        Disponibilidad
                                    </h2>

                                    <div
                                        className="
                                            mt-2
                                            flex
                                            h-[28px]
                                            w-[105px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#DDF3E8]
                                            text-[11px]
                                            font-semibold
                                            text-[#488669]
                                            shadow-[0_2px_5px_rgba(0,0,0,0.15)]
                                        "
                                    >
                                        <DisponibilidadProducto
                                            disponibilidad = {producto.disponibilidad}
                                        />
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="flex flex-col gap-6">

                        <div
                            className="
                                w-full
                                rounded-[25px]
                                bg-white
                                px-8
                                py-8
                                shadow-[0_4px_7px_rgba(0,0,0,0.22)]
                            "
                        >

                            <h1
                                className="
                                    text-[37px]
                                    font-extrabold
                                    leading-[1.05]
                                    text-[#252429]
                                "
                            >
                                {producto.nombre_produ}
                            </h1>

                            <p
                                className="
                                    mt-1
                                    text-[43px]
                                    font-extrabold
                                    leading-none
                                    text-[#252429]
                                "
                            >
                                {`$${producto.precio}`}
                            </p>


                            {/* COMPRAR */}
                            <Link
                                to={`/home/checkout/${idProducto}`}
                                className="
                                    mt-7
                                    flex
                                    h-[57px]
                                    w-full
                                    items-center
                                    justify-center
                                    rounded-[50px]
                                    bg-[#FAE568]
                                    text-[21px]
                                    font-extrabold
                                    text-[#252429]
                                    shadow-[0_4px_6px_rgba(0,0,0,0.25)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Comprar
                            </Link>

                        </div>

                        <div
                            className="
                                w-full
                                rounded-[25px]
                                bg-white
                                px-7
                                py-5
                                shadow-[0_4px_7px_rgba(0,0,0,0.22)]
                            "
                        >

                            <h2 className="mb-4 text-[17px] font-extrabold text-[#252429]">
                                Calificación:
                            </h2>

                            {/* USUARIO */}
                            <div
                                className="
                                    flex
                                    min-h-[75px]
                                    items-center
                                    justify-between
                                    gap-5
                                    rounded-[22px]
                                    bg-[#F6F6F6]
                                    px-5
                                    py-3
                                "
                            >
                                <div className="flex items-center gap-4">

                                    {/* ICONO USUARIO */}
                                    <div
                                        className="
                                            flex
                                            h-[42px]
                                            w-[42px]
                                            shrink-0
                                            items-center
                                            justify-center
                                            overflow-hidden
                                            rounded-full
                                            bg-black
                                        "
                                    >
                                        <svg
                                            width="31"
                                            height="31"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="12"
                                                cy="8"
                                                r="4"
                                                fill="white"
                                            />

                                            <path
                                                d="M4.5 20C5.2 15.9 8 14 12 14C16 14 18.8 15.9 19.5 20"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>

                                    <div>

                                        <p className="text-[13px] font-extrabold text-[#252429]">
                                            Maria Lopez
                                        </p>

                                        <p className="mt-1 text-[10px] font-medium text-[#8E8E8E]">
                                            UANL - FIME
                                        </p>

                                    </div>

                                </div>

                                {/* CALIFICACIÓN */}
                                <div className="flex items-center gap-3">

                                    {/* ESTRELLA */}
                                    <svg
                                        width="38"
                                        height="38"
                                        viewBox="0 0 24 24"
                                        fill="black"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                        />
                                    </svg>


                                    <span className="text-[25px] font-extrabold text-[#252429]">
                                        4.5
                                    </span>

                                </div>

                            </div>

                        </div>

                        <Link
                            to={`/home/reports?tipo=producto&id=${idProducto}`}
                            className="
                                flex
                                min-h-[75px]
                                w-full
                                items-center
                                justify-center
                                rounded-[50px]
                                bg-[#E99597]
                                text-[21px]
                                font-extrabold
                                text-[#252429]
                                shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                transition
                                hover:brightness-95
                            "
                        >
                            Reportar problema
                        </Link>

                    </div>

                </div>

            </div>
        </>
    )
}