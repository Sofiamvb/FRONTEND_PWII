import React, { useEffect, useState } from 'react';
import clienteAxios from '../../config/axios';
import Swal from 'sweetalert2';
import { Link, useParams, useNavigate } from "react-router-dom"
import MisCompras from '../../componentes/misCompras';

export default function Purchases() {

    const idUsuario = sessionStorage.getItem('id')

    const [misCompras, guardarMisCompras] = useState([]);

    const consultarAPI = async () => {
        const comprasConsulta = await clienteAxios.get(`/pedidos/compras/${idUsuario}`);
        console.log(comprasConsulta)
        guardarMisCompras(comprasConsulta.data.compras);
    }

    useEffect(() => {
        consultarAPI();
    }, []);

    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] pb-8 pt-24 px-8 md:pb-12 md:pt-32 md:pr-12 md:pl-32 lg:pl-64 font-sans">

                {/* TÍTULO */}
                <div className="mb-10">
                    <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                        Mis Compras
                    </h1>
                </div>


                {/* TABLA */}
                <div className="row mt-5">

                    <div className="w-full overflow-x-auto">

                        <div className="min-w-[1000px] w-full overflow-hidden bg-[#FFFDF8] shadow-[0_3px_6px_rgba(0,0,0,0.20)]">

                            {/* ENCABEZADO */}
                            <div
                                className="
                                    grid
                                    grid-cols-[2.3fr_1.25fr_0.8fr_1fr_1.55fr_0.65fr]
                                    items-center
                                    min-h-[68px]
                                    bg-[#F9E67D]
                                    px-8
                                    text-[17px]
                                    font-extrabold
                                    text-[#252429]
                                "
                            >
                                <span>Producto</span>
                                <span>Vendedor</span>
                                <span>Precio</span>
                                <span>Estado</span>
                                <span>Ver</span>
                                <span></span>
                            </div>

                            {
                                misCompras.map(compra => (

                                    <MisCompras
                                    key={compra._id}
                                    compra = { compra }
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