import React, { useEffect, useState } from 'react';
import * as productosService from '../../services/productosService';
import * as pedidosService from '../../services/pedidosService';
import Swal from 'sweetalert2';
import { Link, useParams, useNavigate } from "react-router-dom"
import {
    validarTarjeta,
    soloDigitosDe,
    quitarNumeros,
    formatearNumeroTarjeta,
    formatearVencimiento
} from '../../helpers/validarTarjeta'

// Estilos compartidos
const labelClass = "mb-2 block pl-3 text-[13px] font-bold text-[#252429]"

const inputClass = `
    h-[44px]
    w-full
    rounded-full
    bg-white
    px-4
    text-[13px]
    text-[#252429]
    placeholder:text-[#A9A9A9]
    shadow-[0_3px_4px_rgba(0,0,0,0.18)]
    outline-none
    transition
    focus:ring-2
    focus:ring-[#FAE568]
`

function FilaDetalle({ etiqueta, valor }) {
    return (
        <div className="flex items-start justify-between gap-4">
            <p className="text-[15px] font-medium text-[#252429]">{etiqueta}</p>
            <p className="text-right text-[12px] font-medium text-[#9A9898]">{valor}</p>
        </div>
    )
}

export default function Checkout() {
    const navigate = useNavigate();

    const idComprador = sessionStorage.getItem('id');

    const { idProducto } = useParams();

    const [producto, guardarProducto] = useState({
        usuario: '',
        nombre_produ: '',
        descripcion: '',
        precio: '',
        categoria: '',
        punto_encuentro: '',
        condicion: '',
        stock: '',
        disponibilidad: '',
        imagenes: ''

    });
    console.log(producto)

    const consultarAPI = async () => {
        const productoConsulta = await productosService.obtenerProducto(idProducto)
        guardarProducto(productoConsulta);

    }

    useEffect(() => {
        consultarAPI();
    }, []);

    const [pago, guardarPago] = useState({
        titular_tarjeta: '',
        numero_tarjeta: '',
        vencimiento_tarjeta: '',
        cvv_tarjeta: '',
        snapshot: '',
        vendedor: producto.usuario,
        comprador: idComprador,
        cantidad: producto.stock

    })

    console.log(pago)

    //Leer datos del formulario
    const actualizarState = e => {

        const campo = e.target.name;
        let valor = e.target.value;

        // Se limpia lo que se escribe para que no entren caracteres que no van.
        // Asi no se puede teclear una letra en el numero de la tarjeta.
        if (campo === 'numero_tarjeta') {
            valor = formatearNumeroTarjeta(valor);
        }

        if (campo === 'vencimiento_tarjeta') {
            valor = formatearVencimiento(valor);
        }

        if (campo === 'cvv_tarjeta') {
            valor = soloDigitosDe(valor).slice(0, 4);
        }

        if (campo === 'titular_tarjeta') {
            valor = quitarNumeros(valor);
        }

        //Almacenar lo que escribe el uauario en el state
        guardarPago({
            //crear una copia de el state actaul
            ...pago,
            [campo]: valor
        })
    }



    const realizarPago = (e) => {
        e.preventDefault()

        // Antes de cobrar nada se revisa la tarjeta
        const errores = validarTarjeta(pago);

        if (errores.length > 0) {

            Swal.fire({
                icon: 'error',
                title: 'Revisa los datos de tu tarjeta',
                // Se listan todos los errores juntos para no corregir de uno en uno
                html: '<ul style="text-align:left; margin:0; padding-left:20px">' +
                    errores.map(error => `<li>${error}</li>`).join('') +
                    '</ul>'
            });

            return;
        }

        // Sin punto de encuentro no hay donde entregar
        if (!producto.punto_encuentro) {
            Swal.fire({
                icon: 'error',
                title: 'No se puede comprar',
                text: 'Esta publicación no tiene punto de encuentro. Pídele al vendedor que lo actualice.'
            });
            return;
        }

        const datos = {
            titular_tarjeta: pago.titular_tarjeta,
            numero_tarjeta: pago.numero_tarjeta,
            vencimiento_tarjeta: pago.vencimiento_tarjeta,
            cvv_tarjeta: pago.cvv_tarjeta,
            vendedor: pago.vendedor,
            comprador: pago.comprador,
            cantidad: producto.stock,
            snapshot: {
                nombre_producto: producto.nombre_produ,
                descripcion_producto: producto.descripcion,
                precio_producto: producto.precio,
                zona: producto.punto_encuentro?.zona,
                lugar: producto.punto_encuentro?.lugar,
                condicion: producto.condicion,
                categoria: producto.categoria,
                stock: producto.stock,
                vendedor: producto.usuario,
                imagen: producto.imagenes
            }

        }

        console.log('dato:',datos)
     
        // enviar peticion
        pedidosService.comprarProducto(idProducto, idComprador, datos)
            .then(res => {

                Swal.fire({
                    title: "Compra finalizada",
                    text: res.mensaje,
                    icon: "success"
                });

                navigate(`/home/purchases/detail/${res.pedido._id}`);

            })
            .catch(error => {
                console.log(error)

                // El backend explica por que no se pudo (p. ej. falta verificarse)
                const mensaje = error.response && error.response.data
                    ? error.response.data.mensaje
                    : 'Vuelve a intentar';

                Swal.fire({
                    icon: 'error',
                    title: "No se pudo completar la compra",
                    text: mensaje
                });
            })
            

    }

    return (
        <div className="mt-25 min-h-screen w-full bg-[#FFFFED] pb-8 pt-24 px-8 md:pb-12 md:pt-28 md:pr-12 md:pl-32 lg:pl-64 font-sans">
            <div className="mx-auto w-full max-w-[1250px]">

                {/* ENCABEZADO */}
                <div className="mr-8 mb-8 flex items-end justify-between gap-4">
                    <h1 className="text-3xl font-extrabold text-[#1f1f22] md:text-4xl">
                        Finalizar Compra
                    </h1>

                    <Link
                        to={`/home/productDetail/${idProducto}`}
                        className="text-[15px] font-medium text-[#8B8B8B] transition hover:text-[#252429]"
                    >
                        Volver
                    </Link>
                </div>

                <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[1.2fr_1fr]">

                    <form
                        onSubmit={realizarPago}
                        className="
                            w-full
                            rounded-[28px]
                            bg-[#FBFAF6]
                            px-6
                            pb-12
                            pt-10
                            shadow-[0_4px_8px_rgba(0,0,0,0.22)]
                            sm:px-9
                        "
                    >
                        <h2 className="mb-8 pl-3 text-[20px] font-extrabold text-[#252429]">
                            Realizar pago
                        </h2>

                        <div className="space-y-6">

                            {/* TITULAR */}
                            <div>
                                <label htmlFor="titular" className={labelClass}>
                                    Titular de la tarjeta
                                </label>
                                <input
                                    id="titular"
                                    name='titular_tarjeta'
                                    type="text"
                                    autoComplete="cc-name"
                                    placeholder="Nombre completo"
                                    value={pago.titular_tarjeta}
                                    className={inputClass}
                                    required
                                    onChange={actualizarState}
                                />
                            </div>

                            {/* NÚMERO DE TARJETA */}
                            <div>
                                <label htmlFor="numero" className={labelClass}>
                                    Número de tarjeta
                                </label>
                                <input
                                    id="numero"
                                    name='numero_tarjeta'
                                    type="text"
                                    inputMode="numeric"
                                    autoComplete="cc-number"
                                    placeholder="0000 0000 0000 0000"
                                    value={pago.numero_tarjeta}
                                    maxLength={19}
                                    className={inputClass}
                                    required
                                    onChange={actualizarState}
                                />
                            </div>

                            {/* VENCIMIENTO + CVV */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label htmlFor="vencimiento" className={labelClass}>
                                        Vencimiento
                                    </label>
                                    <input
                                        id="vencimiento"
                                        name='vencimiento_tarjeta'
                                        type="text"
                                        inputMode="numeric"
                                        autoComplete="cc-exp"
                                        placeholder="MM/AA"
                                        value={pago.vencimiento_tarjeta}
                                        maxLength={5}
                                        className={inputClass}
                                        required
                                        onChange={actualizarState}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="cvv" className={labelClass}>
                                        CVV
                                    </label>
                                    <input
                                        id="cvv"
                                        name='cvv_tarjeta'
                                        type="password"
                                        inputMode="numeric"
                                        autoComplete="cc-csc"
                                        placeholder="•••"
                                        value={pago.cvv_tarjeta}
                                        maxLength={4}
                                        className={inputClass}
                                        required
                                        onChange={actualizarState}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* FINALIZAR COMPRA */}
                        <button
                            type="submit"
                            className="
                                mx-auto
                                mt-10
                                flex
                                h-[52px]
                                w-full
                                max-w-[300px]
                                items-center
                                justify-center
                                rounded-full
                                bg-[#FAE568]
                                text-[18px]
                                font-extrabold
                                text-[#252429]
                                shadow-[0_4px_6px_rgba(0,0,0,0.25)]
                                transition
                                hover:brightness-95
                                active:translate-y-[1px]
                            "
                        >
                            Finalizar compra
                        </button>
                    </form>

                    <aside
                        className="
                            w-full
                            rounded-[28px]
                            bg-[#FBFAF6]
                            px-6
                            pb-12
                            pt-8
                            shadow-[0_4px_8px_rgba(0,0,0,0.22)]
                            sm:px-8
                        "
                    >
                        {/* PRODUCTO */}
                        <div className="flex items-center gap-5">
                            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FAE568]">
                                <img
                                    src={producto.imagenes}
                                    alt={producto.nombre_produ}
                                    className="h-[40px] w-[40px] object-contain"
                                />
                            </div>

                            <div className="min-w-0">
                                <p className="truncate text-[14px] font-extrabold text-[#252429]"
                                >
                                    {producto.nombre_produ}

                                </p>
                                <p className="mt-0.5 text-[11px] font-medium text-[#9A9898]"
                                >
                                    {`${producto.punto_encuentro?.zona || 'Sin punto de encuentro'}|${producto.condicion}`}
                                </p>
                            </div>
                        </div>

                        {/* SEPARADOR */}
                        <div className="mt-5 h-[2px] w-full bg-[#E1E1DC]" />

                        {/* DETALLES */}
                        <div className="my-6 space-y-4">
                            <FilaDetalle etiqueta="Precio" valor={`$${producto.precio}`} />
                            <FilaDetalle etiqueta="Ubicación" valor={producto.punto_encuentro?.lugar || 'Sin punto de encuentro'} />
                            <FilaDetalle etiqueta="Vendedor" valor={producto.usuario.name} />
                            <FilaDetalle etiqueta="Cantidad" valor={producto.stock} />
                        </div>

                        {/* SEPARADOR */}
                        <div className="h-[2px] w-full bg-[#E1E1DC]" />

                        {/* TOTAL */}
                        <div className="mt-6 flex items-center justify-between px-1">
                            <p className="text-[18px] font-extrabold text-[#252429]">
                                Total a pagar:
                            </p>
                            <p className="text-[18px] font-extrabold text-[#252429]">
                                ${producto.precio}
                            </p>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    )
}
