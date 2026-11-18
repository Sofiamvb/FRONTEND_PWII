import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import clienteAxios from "../../config/axios";
import Swal from 'sweetalert2';
import MostrarReporte from '../../componentes/mostrarReportes';
import BuscadorUsuario from '../../componentes/buscadorUsuario';
import ProductoReportado from '../../componentes/productoReportado';
import CompraReportada from '../../componentes/compraReportada';

const campo = `
    h-[46px]
    w-full
    rounded-[23px]
    border
    border-gray-100
    bg-[#FAFAFA]
    px-4
    text-[16px]
    text-[#252429]
    shadow-[0_4px_5px_rgba(0,0,0,0.22)]
    outline-none
    placeholder:text-[#A1A1A1]
`

const tipo_reporte = ['producto sospechoso', 'información incorrecta', 'publicación inapropiada',
    'usuario, fraude', 'problema en transacción']

// Flecha del select
function Flecha() {
    return (
        <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2">
            <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10.3087 13.196L15.6668 7.67064C16.0011 7.32586 15.7984 6.66675 15.3581 6.66675H4.64194C4.2016
                    6.66675 3.99893 7.32586 4.33327 7.67064L9.69135 13.196C9.86894 13.3792 10.1311 13.3792 10.3087 13.196Z"
                    fill="#252429"
                />
            </svg>
        </div>
    )
}

// Los componentes deben empezar con MAYÚSCULA, si no React los trata como etiqueta HTML
function TipoDesplegable({ id, name, placeholder, opciones, value, onChange }) {
    return (
        <div className="relative">
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                aria-label={placeholder}
                required
                className={`${campo} appearance-none pr-12 invalid:text-[#A1A1A1]`}
            >
                <option value="" disabled>
                    {placeholder}
                </option>

                {opciones.map((opcion) => (
                    <option key={opcion} value={opcion}>
                        {opcion}
                    </option>
                ))}
            </select>

            <Flecha />
        </div>
    )
}

const estadoInicial = {
    tipo_de_reporte: '',
    usuario_reportado: '',
    motivo: '',
    descripcionReporte: ''
};

export default function Reports() {

    // Id del usuario que inició sesión (el que hace el reporte)
    const idUsuario = sessionStorage.getItem('id');

    // Qué se reporta, según los query params de la URL:
    //   /home/reports?tipo=producto&id=ID_PRODUCTO → reporte de un producto
    //   /home/reports?tipo=compra&id=ID_PEDIDO     → reporte de una compra
    //   /home/reports?tipo=usuario                 → reporte de un usuario (buscador)
    // Si no viene "tipo" (o viene uno desconocido), se toma como "usuario"
    const [searchParams] = useSearchParams();

    let tipo = searchParams.get('tipo');
    const id = searchParams.get('id');

    if (tipo !== 'producto' && tipo !== 'compra') {
        tipo = 'usuario';
    }

    // Datos del producto o de la compra preseleccionados (null mientras cargan)
    const [producto, guardarProducto] = useState(null);
    const [pedido, guardarPedido] = useState(null);

    // State del formulario (objeto)
    const [reporte, guardarReporte] = useState(estadoInicial);

    // State de la lista "Mis Reportes" (arreglo)
    const [misReportes, guardarMisReportes] = useState([]);

    // Contador para reiniciar el buscador después de enviar
    const [reinicioBuscador, setReinicioBuscador] = useState(0);

    // Leer datos del formulario
    const actualizarState = e => {
        guardarReporte({
            ...reporte,
            [e.target.name]: e.target.value
        });
    };

    // El buscador avisa qué usuario se eligió: usamos actualizarState
    // con un "evento" armado a mano para guardar su _id en usuario_reportado
    const seleccionarUsuario = idUsuarioReportado => {
        actualizarState({
            target: { name: 'usuario_reportado', value: idUsuarioReportado }
        });
    };

    // Traer los reportes que ha hecho el usuario
    const consultarAPI = async () => {
        try {
            const res = await clienteAxios.get(`/productos/reportes/usuario/${idUsuario}`);
            console.log(res.data);
            // El backend responde { mensaje, reportes }, por eso usamos res.data.reportes
            guardarMisReportes(res.data.reportes);
        } catch (error) {
            console.log(error);
        }
    };

    // Traer el producto que se va a reportar (?tipo=producto)
    const consultarProducto = async () => {
        try {
            const res = await clienteAxios.get(`/productos/${id}`);
            guardarProducto(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Traer la compra que se va a reportar (?tipo=compra)
    const consultarPedido = async () => {
        try {
            const res = await clienteAxios.get(`/pedidos/${id}`);
            // El backend responde { mensaje, pedido }
            guardarPedido(res.data.pedido);
        } catch (error) {
            console.log(error);
        }
    };

    // Se vuelve a ejecutar si cambian los query params
    useEffect(() => {
        consultarAPI();

        if (tipo === 'producto' && id) {
            consultarProducto();
        }

        if (tipo === 'compra' && id) {
            consultarPedido();
        }
    }, [tipo, id]);

    // Enviar el reporte
    const agregarReporte = async e => {
        e.preventDefault();

        // Producto y compra necesitan el id en la URL
        if (tipo !== 'usuario' && !id) {
            Swal.fire({
                icon: 'error',
                title: "Falta información",
                text: 'No sabemos qué quieres reportar. Entra desde el producto o la compra.'
            });
            return;
        }

        // Reporte de usuario: es obligatorio elegirlo en el buscador
        if (tipo === 'usuario' && !reporte.usuario_reportado) {
            Swal.fire({
                icon: 'error',
                title: "Falta el usuario",
                text: 'Busca y selecciona al usuario que quieres reportar'
            });
            return;
        }

        // Endpoint según el tipo
        let url = '/reportes';

        if (tipo === 'producto') {
            url = `/productos/${id}/reportar`;
        }

        if (tipo === 'compra') {
            url = `/reportes/compra/${id}`;
        }

        try {

            const res = await clienteAxios.post(url, {
                ...reporte,
                usuario_reporte: idUsuario
            });

            Swal.fire({
                title: "¡Reporte enviado!",
                text: res.data.mensaje,
                icon: "success"
            });

            // Limpiar el formulario y recargar la lista
            guardarReporte(estadoInicial);
            setReinicioBuscador(reinicioBuscador + 1);
            consultarAPI();

        } catch (error) {

            console.log(error);

            Swal.fire({
                icon: 'error',
                title: "Hubo un error",
                text: error.response?.data?.mensaje || 'Intente de nuevo'
            });

        }
    };

    // Qué se muestra en "Estas por reportar a"
    // Por defecto: el buscador. El "key" cambia después de enviar para que se limpie
    let seccionReportado = (
        <BuscadorUsuario
            key={reinicioBuscador}
            id="usuarioReportado"
            onSeleccionar={seleccionarUsuario}
        />
    );

    // Producto: se muestra preseleccionado junto con su vendedor
    if (tipo === 'producto') {
        seccionReportado = <ProductoReportado producto={producto} />;
    }

    // Compra: se muestra la compra junto con el vendedor
    if (tipo === 'compra') {
        seccionReportado = <CompraReportada pedido={pedido} />;
    }

    // Producto o compra sin id: avisamos en lugar de quedarnos "cargando"
    if (tipo !== 'usuario' && !id) {
        seccionReportado = (
            <div className="rounded-[14px] bg-[#FFE3E4] px-4 py-3 text-[13px] font-bold text-[#B4474A]">
                Falta el id en la URL. Entra desde el producto o la compra que quieres reportar.
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] pb-8 pt-24 px-8 md:pb-12 md:pt-28 md:pr-12 md:pl-32 lg:pl-64 font-sans">

                <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 xl:grid-cols-2">

                    <div>

                        <h1 className="mb-7 text-[34px] font-extrabold leading-tight text-[#1f1f22]">
                            Reportar un Problema
                        </h1>

                        {/* TARJETA DEL FORMULARIO (ahora es un <form>) */}
                        <form
                            onSubmit={agregarReporte}
                            className="
                                flex
                                min-h-[480px]
                                w-full
                                flex-col
                                rounded-[22px]
                                bg-white
                                px-7
                                py-7
                                shadow-[0_4px_12px_rgba(0,0,0,0.13)]
                            "
                        >
                            {/* TIPO */}
                            <div className="mb-5">

                                <label
                                    htmlFor="tipoReporte"
                                    className="
                                        mb-2
                                        block
                                        text-[13px]
                                        font-extrabold
                                        text-[#252429]
                                    "
                                >
                                    Tipo:
                                </label>

                                <TipoDesplegable
                                    id="tipoReporte"
                                    name="tipo_de_reporte"
                                    placeholder="Selecciona un tipo"
                                    opciones={tipo_reporte}
                                    value={reporte.tipo_de_reporte}
                                    onChange={actualizarState}
                                />

                            </div>

                            {/* USUARIO REPORTADO */}
                            <div className="mb-5">

                                <label
                                    htmlFor="usuarioReportado"
                                    className="
                                        mb-2
                                        block
                                        text-[13px]
                                        font-extrabold
                                        text-[#252429]
                                    "
                                >
                                    Estas por reportar a
                                </label>

                                {/* producto → tarjeta del producto, compra → tarjeta de la compra,
                                    usuario → buscador (se decide arriba según ?tipo=) */}
                                {seccionReportado}

                            </div>

                            {/* MOTIVO */}
                            <div className="mb-5">

                                <label
                                    htmlFor="motivoReporte"
                                    className="
                                        mb-2
                                        block
                                        text-[13px]
                                        font-extrabold
                                        text-[#252429]
                                    "
                                >
                                    Motivo:
                                </label>

                                <input
                                    id="motivoReporte"
                                    type="text"
                                    name='motivo'
                                    value={reporte.motivo}
                                    onChange={actualizarState}
                                    required
                                    className="
                                        h-[42px]
                                        w-full
                                        rounded-[14px]
                                        bg-[#FBFBFB]
                                        px-4
                                        text-[13px]
                                        text-[#252429]
                                        shadow-[0_2px_5px_rgba(0,0,0,0.13)]
                                        outline-none
                                    "
                                />

                            </div>

                            {/* DESCRIPCIÓN */}
                            <div className="mb-6">

                                <label
                                    htmlFor="descripcionReporte"
                                    className="
                                        mb-2
                                        block
                                        text-[13px]
                                        font-extrabold
                                        text-[#252429]
                                    "
                                >
                                    Descripción:
                                </label>

                                <textarea
                                    id="descripcionReporte"
                                    rows="6"
                                    name='descripcionReporte'
                                    value={reporte.descripcionReporte}
                                    onChange={actualizarState}
                                    required
                                    className="
                                        min-h-[120px]
                                        w-full
                                        resize-none
                                        rounded-[14px]
                                        bg-[#F8F8F8]
                                        p-4
                                        text-[13px]
                                        text-[#252429]
                                        shadow-[0_2px_5px_rgba(0,0,0,0.10)]
                                        outline-none
                                    "
                                />

                            </div>

                            <button
                                type="submit"
                                className="
                                    mt-auto
                                    flex
                                    h-[46px]
                                    w-full
                                    items-center
                                    justify-center
                                    rounded-[50px]
                                    bg-[#E99597]
                                    text-[16px]
                                    font-extrabold
                                    text-[#252429]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.18)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Enviar
                            </button>

                        </form>

                    </div>

                    <div>

                        <h1 className="mb-7 text-[34px] font-extrabold leading-tight text-[#1f1f22]">
                            Mis Reportes
                        </h1>

                        {/* TARJETA DE REPORTES */}
                        <div
                            className="
                                flex
                                min-h-[480px]
                                w-full
                                flex-col
                                gap-3
                                rounded-[22px]
                                bg-white
                                px-4
                                py-4
                                shadow-[0_4px_12px_rgba(0,0,0,0.13)]
                            "
                        >

                            {/* Cada reporte dibuja su propia tarjetita (está en el componente) */}
                            {
                                misReportes.map(rep => (
                                    <MostrarReporte
                                        key={rep._id}
                                        reporte={rep}
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
