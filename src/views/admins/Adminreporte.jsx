import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import * as adminService from '../../services/adminService';
import { obtenerImagenPrincipal } from '../../helpers/imagenes';

/*
 * Detalle de un reporte. Se llega desde el botón "Ver" de la lista.
 * El backend manda los usuarios y el producto/pedido ya poblados.
 */

// Una línea de "etiqueta: valor"
function Dato({ etiqueta, children }) {

    return (
        <div className="border-b border-[#EFEFEF] py-3 last:border-0">

            <p className="text-[11px] font-bold uppercase tracking-wide text-[#A5A5A5]">
                {etiqueta}
            </p>

            <p className="mt-1 text-[14px] font-semibold text-[#252429]">
                {children}
            </p>

        </div>
    );
}

// Nombre completo de un usuario poblado
function nombreDe(usuario) {

    if (!usuario) {
        return 'No disponible';
    }

    return `${usuario.name} ${usuario.apellidoP} (@${usuario.usuario})`;
}

export default function Adminreporte() {

    const { idReporte } = useParams();

    const [reporte, guardarReporte] = useState(null);
    const [error, guardarError] = useState('');

    useEffect(() => {

        const consultarAPI = async () => {
            try {
                const respuesta = await adminService.obtenerReporte(idReporte);
                guardarReporte(respuesta);
            } catch (error) {
                console.log(error);
                guardarError(
                    error.response && error.response.data
                        ? error.response.data.mensaje
                        : 'No se pudo cargar el reporte'
                );
            }
        }

        consultarAPI();

    }, [idReporte]);

    const volver = (
        <Link
            to="/admin/Adminreportes"
            className="rounded-full bg-[#FFFDF8] px-6 py-2 text-xs font-bold shadow-[0_2px_4px_rgba(0,0,0,0.25)] transition-transform hover:scale-105">
            Volver
        </Link>
    );

    if (error !== '') {
        return (
            <div className="mx-auto w-full max-w-[900px]">
                <p className="mb-6 text-sm font-semibold text-[#A85A5C]">{error}</p>
                {volver}
            </div>
        );
    }

    if (!reporte) {
        return (
            <div className="mx-auto w-full max-w-[900px]">
                <p className="text-sm font-medium text-[#8E8E8E]">Cargando reporte...</p>
            </div>
        );
    }

    const imagenProducto = reporte.producto
        ? obtenerImagenPrincipal(reporte.producto.imagenes)
        : null;

    return (
        <div className="mx-auto w-full max-w-[900px]">

            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">

                <div>
                    <h1 className="text-2xl font-extrabold capitalize text-[#252429]">
                        {reporte.tipo_de_reporte}
                    </h1>

                    <p className="mt-1 text-sm font-medium capitalize text-[#8E8E8E]">
                        Estado: {reporte.estadoReporte}
                    </p>
                </div>

                {volver}

            </div>

            <div className="rounded-2xl bg-white px-6 py-2 shadow-[0_3px_8px_rgba(0,0,0,0.20)]">

                <Dato etiqueta="Motivo">{reporte.motivo}</Dato>

                <Dato etiqueta="Descripción">{reporte.descripcionReporte}</Dato>

                <Dato etiqueta="Lo reportó">{nombreDe(reporte.usuario_reporte)}</Dato>

                <Dato etiqueta="Usuario reportado">
                    {nombreDe(reporte.usuario_reportado)}
                    {reporte.usuario_reportado
                        ? ` · ${reporte.usuario_reportado.status}`
                        : ''}
                </Dato>

                {/* Un reporte puede ser de un producto, de una compra o de nadie mas */}
                {
                    reporte.producto && (
                        <Dato etiqueta="Producto reportado">
                            <span className="flex items-center gap-3">

                                {imagenProducto && (
                                    <img
                                        src={imagenProducto}
                                        alt={reporte.producto.nombre_produ}
                                        className="h-12 w-12 rounded-lg bg-[#FFE96B] object-contain"
                                    />
                                )}

                                {reporte.producto.nombre_produ} · ${reporte.producto.precio}
                            </span>
                        </Dato>
                    )
                }

                {
                    reporte.pedido && (
                        <Dato etiqueta="Compra reportada">
                            ${reporte.pedido.total_con_comision} · {reporte.pedido.estado_pago}
                        </Dato>
                    )
                }

            </div>

        </div>
    );
}
