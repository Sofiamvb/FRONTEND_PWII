import React, { useEffect, useState } from 'react';
import * as pedidosService from '../../services/pedidosService';
import { Link, useParams } from "react-router-dom"
import { obtenerRutaArchivo } from '../../helpers/imagenes';
import Estrellas from '../../componentes/Estrellas';
import Swal from 'sweetalert2';

export default function PurchaseDetail() {

    const { idPedido } = useParams();

    const [datosPedido, guardarPedido] = useState(null);

    // Calificacion que ya tiene la compra (null si todavia no la han calificado)
    const [calificacion, guardarCalificacion] = useState(null);

    // Estrellas que el comprador va eligiendo antes de enviar
    const [estrellasElegidas, guardarEstrellasElegidas] = useState(0);

    console.log('Info:', datosPedido)

    const consultarAPI = async () => {
        const pedidoConsulta = await pedidosService.obtenerPedido(idPedido);
        guardarPedido(pedidoConsulta);
        guardarCalificacion(pedidoConsulta.calificacion);
    }

    const enviarCalificacion = async e => {

        e.preventDefault();

        if (estrellasElegidas === 0) {
            Swal.fire({
                icon: 'info',
                title: 'Elige una calificación',
                text: 'Toca las estrellas para calificar tu compra'
            });
            return;
        }

        try {

            const res = await pedidosService.calificarPedido(idPedido, estrellasElegidas);

            guardarCalificacion(res.calificacion);

            Swal.fire({
                icon: 'success',
                title: '¡Gracias!',
                text: res.mensaje
            });

        } catch (error) {
            console.log(error);

            const mensaje = error.response && error.response.data
                ? error.response.data.mensaje
                : 'Vuelve a intentar';

            Swal.fire({
                icon: 'error',
                title: 'No se pudo calificar',
                text: mensaje
            });
        }
    }

    // Antes solo hacia console.log: no preguntaba, no avisaba y la pantalla seguia igual
    const actualizarPedido = async e => {
        e.preventDefault();

        const confirmacion = await Swal.fire({
            title: '¿Cancelar esta compra?',
            text: 'Se te reembolsará el pago',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, cancelar',
            cancelButtonText: 'No',
            confirmButtonColor: '#E99597',
            cancelButtonColor: '#D7D8DD'
        });

        if (!confirmacion.isConfirmed) {
            return;
        }

        try {
            const res = await pedidosService.cancelarPedido(idPedido, datosPedido);
            Swal.fire({ icon: 'success', title: 'Compra cancelada', text: res.mensaje });

            // Recargar para que se vea el estado nuevo (Reembolsado)
            consultarAPI();
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'No se pudo cancelar',
                text: error.response?.data?.mensaje || 'Vuelve a intentar'
            });
        }
    }

    useEffect(() => {
        consultarAPI();
    }, [idPedido]);

    if (!datosPedido || datosPedido === null || datosPedido === undefined) {

        return <p>cargando...</p>

    }

    // Imagen principal guardada en el snapshot al momento de la compra
    const rutaImagen = obtenerRutaArchivo(datosPedido.pedido.snapshot.imagen);

    return (

        <>
            <div className="min-h-screen w-full bg-[#F9F8F2] pb-8 pt-24 px-8 md:pb-12 md:pt-28 md:pr-12 md:pl-32 lg:pl-64 font-sans">

                {/* Columna central: título y tarjetas comparten el mismo ancho */}
                <div className="mx-auto w-full max-w-[478px]">

                    {/* TÍTULO */}
                    <div className="mb-10">
                        <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                            {datosPedido.pedido.snapshot.nombre_producto}
                        </h1>
                    </div>


                    <div className="flex flex-col gap-5">


                        <div
                            className="
                                w-full
                                rounded-[28px]
                                bg-white
                                px-5
                                pb-5
                                pt-4
                                shadow-[0_4px_8px_rgba(0,0,0,0.22)]
                            "
                        >

                            {/* PRODUCTO */}
                            <div className="flex items-center gap-4">

                                <div
                                    className="
                                        flex
                                        h-[68px]
                                        w-[68px]
                                        shrink-0
                                        items-center
                                        justify-center
                                        overflow-hidden
                                        rounded-full
                                        bg-[#83CBFC]
                                    "
                                >
                                    {/* Solo se dibuja la imagen si la compra tiene una */}
                                    {rutaImagen && (
                                        <img
                                            src={rutaImagen}
                                            alt={datosPedido.pedido.snapshot.nombre_producto}
                                            className="h-[58px] w-[58px] object-contain"
                                        />
                                    )}
                                </div>


                                <div>

                                    <p className="text-[16px] font-extrabold text-[#252429]">
                                        {datosPedido.pedido.snapshot.nombre_producto}
                                    </p>

                                    <p className="mt-1 text-[13px] font-medium text-[#9A9898]">
                                        ${datosPedido.pedido.total_sin_comision}
                                    </p>

                                </div>

                            </div>


                            {/* DATOS */}
                            <div className="mt-3 space-y-[14px] pl-[13px] pr-6">

                                <div className="flex items-center justify-between gap-4">

                                    <p className="text-[15px] font-medium text-[#252429]">
                                        Vendedor
                                    </p>

                                    <p className="text-[13px] font-medium text-[#9A9898]">
                                        {datosPedido.pedido.vendedor.name}
                                    </p>

                                </div>


                                <div className="flex items-center justify-between gap-4">

                                    <p className="text-[15px] font-medium text-[#252429]">
                                        Total a pagar
                                    </p>

                                    <p className="text-[13px] font-medium text-[#9A9898]">
                                        ${datosPedido.pedido.total_sin_comision}
                                    </p>

                                </div>


                                <div className="flex items-center justify-between gap-4">

                                    <p className="text-[15px] font-medium text-[#252429]">
                                        Estado pago
                                    </p>

                                    <span
                                        className="
                                            flex
                                            h-[31px]
                                            min-w-[133px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#DDF3E8]
                                            px-4
                                            text-[13px]
                                            font-medium
                                            text-[#488669]
                                            shadow-[0_2px_5px_rgba(0,0,0,0.15)]
                                        "
                                    >
                                        {datosPedido.pedido.estado_pago}
                                    </span>

                                </div>

                            </div>

                        </div>


                        <div
                            className="
                                flex
                                min-h-[137px]
                                w-full
                                items-center
                                justify-between
                                gap-4
                                rounded-[28px]
                                bg-[#FAE568]
                                px-8
                                py-5
                            "
                        >

                            <div className="min-w-0">

                                <h2 className="text-[20px] font-extrabold text-[#252429]">
                                    Punto de Encuentro
                                </h2>

                                <p className="mt-2 text-[14px] font-extrabold text-[#252429]">
                                    {datosPedido.pedido.snapshot.lugar}
                                </p>

                                <p className="mt-[10px] text-[13px] font-bold text-[#8B845F]">
                                    {datosPedido.pedido.snapshot.zona}
                                </p>

                            </div>


                            {/* ICONO UBICACIÓN */}
                            <div className="shrink-0">

                                <svg
                                    width="88"
                                    height="80"
                                    viewBox="0 0 100 90"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M50 7C35 7 24 19 24 34C24 54 50 72 50 72C50 72 76 54 76 34C76 19 65 7 50 7Z"
                                        fill="#1f1f22"
                                    />

                                    <circle
                                        cx="50"
                                        cy="34"
                                        r="9"
                                        fill="#FAE568"
                                    />

                                    <path
                                        d="M18 62C9 66 7 72 11 77C18 84 36 85 49 85"
                                        stroke="#1f1f22"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                    />

                                    <path
                                        d="M82 62C91 66 93 72 89 77C82 84 64 85 51 85"
                                        stroke="#1f1f22"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                    />

                                    <path
                                        d="M43 79L51 85L44 91"
                                        stroke="#1f1f22"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                            </div>

                        </div>



                        <div
                            className="
                                w-full
                                rounded-[28px]
                                bg-white
                                px-6
                                pb-4
                                pt-[14px]
                                shadow-[0_4px_8px_rgba(0,0,0,0.22)]
                            "
                        >

                            <h2 className="mb-[15px] pl-4 text-[16px] font-extrabold text-[#252429]">
                                Calificación:
                            </h2>


                            <div
                                className="
                                    flex
                                    min-h-[74px]
                                    items-center
                                    justify-between
                                    gap-3
                                    rounded-full
                                    bg-[#F3F3F3]
                                    py-3
                                    pl-3
                                    pr-7
                                "
                            >

                                {/* USUARIO */}
                                <div className="flex min-w-0 items-center gap-3">

                                    <div
                                        className="
                                            flex
                                            h-[40px]
                                            w-[40px]
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-black
                                        "
                                    >

                                        <svg
                                            width="28"
                                            height="28"
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


                                    <div className="min-w-0">

                                        <p className="text-[14px] font-extrabold text-[#252429]">
                                            {datosPedido.pedido.vendedor.name}
                                        </p>

                                        <p className="mt-[2px] text-[11px] font-medium text-[#8E8E8E]">
                                            {`${datosPedido.pedido.vendedor.institucion} - ${datosPedido.pedido.vendedor.carrera}`}
                                        </p>

                                    </div>

                                </div>


                                {/* CALIFICACION: si ya calificó se muestra, si no se puede calificar */}
                                <div className="flex shrink-0 items-center gap-3">

                                    {
                                        calificacion ? (
                                            <>
                                                <Estrellas valor={calificacion.puntuacion} />

                                                <span className="text-[15px] font-extrabold text-[#252429]">
                                                    {calificacion.puntuacion.toFixed(1)}
                                                </span>
                                            </>
                                        ) : (
                                            <Estrellas
                                                valor={estrellasElegidas}
                                                onElegir={guardarEstrellasElegidas}
                                            />
                                        )
                                    }

                                </div>

                            </div>

                            {/* Formulario para calificar, solo mientras no esté calificada */}
                            {
                                !calificacion && (
                                    <form onSubmit={enviarCalificacion} className="mt-4 flex flex-col gap-3">

                                        <button
                                            type="submit"
                                            className="self-start rounded-full bg-[#fae568] px-6 py-2.5 text-[14px] font-bold text-[#1f1f22] transition-colors hover:bg-[#f0dc59]">
                                            Enviar calificación
                                        </button>

                                    </form>
                                )
                            }

                        </div>


                        <button
                            type="button"
                            className="
                                flex
                                min-h-[50px]
                                w-full
                                items-center
                                justify-center
                                rounded-full
                                bg-[#E99597]
                                text-[16px]
                                font-extrabold
                                text-[#252429]
                                shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                transition
                                hover:brightness-95"
                                onClick={actualizarPedido}
                        >
                            Cancelar compra
                        </button>


                        <Link
                            to={`/home/reports?tipo=compra&id=${idPedido}`}
                            className="
                                flex
                                min-h-[50px]
                                w-full
                                items-center
                                justify-center
                                rounded-full
                                bg-[#E99597]
                                text-[16px]
                                font-extrabold
                                text-[#252429]
                                shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                transition
                                hover:brightness-95
                            "
                        >
                            Reportar
                        </Link>

                    </div>

                </div>

            </div>
        </>
    )
}
