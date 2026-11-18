import React, { useState, useEffect } from 'react';
import * as adminService from "../../services/adminService";
import Swal from 'sweetalert2';
import Transacciones from '../../componentes/transacciones';

export default function AdminTransacciones() {

    const [transacciones, guardarTransacciones] = useState([]);

    const consultarAPI = async () => {
        try {
            const transaccionesConsulta = await adminService.obtenerTransacciones();
            console.log(transaccionesConsulta);
            guardarTransacciones(transaccionesConsulta);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        consultarAPI();
    }, [])

    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] px-8 pb-12 pt-8 md:px-12 font-sans">

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
                            min-h-[64px]
                            items-center
                            border-b
                            border-[#D9D9D3]
                            bg-white
                            px-8
                        "
                    >
                        <h2 className="text-[27px] font-extrabold text-[#252429]">
                            Transacciones Realizadas
                        </h2>
                    </div>

                    <div className="w-full overflow-x-auto">

                        <div className="min-w-[1050px] w-full">

                            <div
                                className="
                                    grid
                                    min-h-[54px]
                                    grid-cols-[1.15fr_1.2fr_1.05fr_1.2fr_0.8fr_1fr]
                                    items-center
                                    bg-[#FFF0A3]
                                    px-5
                                    text-[#252429]
                                "
                            >
                                <span className="text-[13px] font-extrabold">
                                    ID
                                </span>

                                <span className="text-[13px] font-extrabold">
                                    Producto
                                </span>

                                <span className="text-[13px] font-extrabold">
                                    Comprador
                                </span>

                                <span className="text-[13px] font-extrabold">
                                    Vendedor
                                </span>

                                <span className="text-[13px] font-extrabold">
                                    Pago
                                </span>

                                <span className="text-[13px] font-extrabold">
                                    Estado
                                </span>
                            </div>

                            {
                                transacciones.map(pedido => (

                                    <Transacciones
                                        key={pedido._id}
                                        pedido={pedido}
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