
import React, { useEffect, useState } from 'react';
import * as productosService from '../../services/productosService';
import * as categoriasService from '../../services/categoriasService';
import * as puntosService from '../../services/puntosService';
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Carrusel from '../../componentes/Carrusel';

const campo = `
    h-[46px]
    w-full
    rounded-full
    border
    border-gray-100
    bg-[#FAFAFA]
    px-5
    text-[14px]
    text-[#252429]
    shadow-[0_4px_5px_rgba(0,0,0,0.20)]
    outline-none
    placeholder:text-[#A1A1A1]
`;

function Flecha() {

    return (

        <div className="
            pointer-events-none
            absolute
            right-5
            top-1/2
            -translate-y-1/2
        ">

            <svg
                width="16"
                height="16"
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

    );

}

const condiciones = [
    'Nuevo',
    'Usado',
    'Semi-Nuevo'
];

export default function SaleDetail() {

    const { idProducto } = useParams();

    const navigate = useNavigate();

    // Eliminar la publicacion. No se puede deshacer, por eso se pregunta antes.
    // El backend revisa que quien borra sea el dueño del producto.
    const eliminarPublicacion = async () => {

        const confirmacion = await Swal.fire({
            title: '¿Eliminar esta publicación?',
            text: 'Esta acción no se puede deshacer',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#E99597',
            cancelButtonColor: '#D7D8DD'
        });

        if (!confirmacion.isConfirmed) {
            return;
        }

        try {

            const res = await productosService.eliminarProducto(idProducto);

            await Swal.fire({
                icon: 'success',
                title: 'Publicación eliminada',
                text: res.mensaje
            });

            // Ya no existe el producto, asi que se regresa a la lista
            navigate('/home/publications');

        } catch (error) {
            console.log(error);

            const mensaje = error.response && error.response.data
                ? error.response.data.mensaje
                : 'Vuelve a intentar';

            Swal.fire({
                icon: 'error',
                title: 'No se pudo eliminar',
                text: mensaje
            });
        }
    }

    const [producto, guardarProducto] = useState({

        nombre_produ: '',
        descripcion: '',
        precio: '',
        condicion: '',
        punto_encuentro: '',
        categoria: '',
        stock: '',
        imagenes: []

    });

    const [categorias, guardarCategoria] = useState([]);

    const [puntos, guardarPunto] = useState([]);

    const [archivo, guardarArchivo] = useState([]);

    const consultarAPIcategoria = async () => {

        try {

            const categoriasConsulta =
                await categoriasService.obtenerCategorias();

            guardarCategoria(
                categoriasConsulta
            );

        } catch (error) {

            console.log(
                'Error al consultar categorías:',
                error
            );

        }

    };

    const consultarAPIpunto = async () => {

        try {

            const consultarAPIpunto =
                await puntosService.obtenerPuntos();

            guardarPunto(
                consultarAPIpunto
            );

        } catch (error) {

            console.log(
                'Error al consultar puntos:',
                error
            );

        }

    };

    const consultarAPI = async () => {

        try {

            const consultaProducto =
                await productosService.obtenerProducto(idProducto);

            console.log(
                'informacion producto',
                consultaProducto
            );

            guardarProducto(
                consultaProducto
            );

        } catch (error) {

            console.log(
                'Error al consultar producto:',
                error
            );

        }

    };

    useEffect(() => {

        consultarAPI();
        consultarAPIcategoria();
        consultarAPIpunto();

    }, [idProducto]);

    const leerInformacionProducto = (e) => {

        guardarProducto({

            ...producto,

            [e.target.name]: e.target.value

        });

    };

    const leerArchivo = (e) => {

        guardarArchivo(
            e.target.files
        );

    };

    const {

        nombre_produ,
        descripcion,
        precio,
        categoria,
        condicion,
        punto_encuentro,
        stock,
        imagenes

    } = producto;

    function EstadoDesplegable({
        id,
        name,
        placeholder,
        opciones,
        onChange
    }) {

        return (

            <div className="relative">

                <select
                    id={id}
                    name={name}
                    onChange={onChange}
                    aria-label={placeholder}
                    value={condicion || ''}
                    required
                    className={`
                        ${campo}
                        appearance-none
                        pr-12
                    `}
                >

                    <option
                        value=""
                        disabled
                    >
                        {placeholder}
                    </option>

                    {opciones.map((opcion) => (

                        <option
                            key={opcion}
                            value={opcion}
                        >
                            {opcion}
                        </option>

                    ))}

                </select>

                <Flecha />

            </div>

        );

    }

    function PuntoDesplegable({
        id,
        name,
        placeholder,
        opciones,
        onChange
    }) {

        const valorPunto =
            typeof punto_encuentro === 'object'
                ? punto_encuentro?._id || ''
                : punto_encuentro || '';

        // Los puntos desactivados por el admin no se ofrecen,
        // salvo el que el producto ya tiene (para que no se vea vacio)
        const disponibles = opciones.filter(opcion =>
            opcion.estado !== false || opcion._id === valorPunto
        );

        return (

            <div className="relative">

                <select
                    id={id}
                    name={name}
                    onChange={onChange}
                    aria-label={placeholder}
                    value={valorPunto}
                    required
                    className={`
                        ${campo}
                        appearance-none
                        pr-12
                    `}
                >

                    <option
                        value=""
                        disabled
                    >
                        {placeholder}
                    </option>

                    {disponibles.map((opcion) => (

                        <option
                            key={opcion._id}
                            value={opcion._id}
                        >
                            {opcion.lugar}
                        </option>

                    ))}

                </select>

                <Flecha />

            </div>

        );

    }

    function CategoriasDesplegable({
        id,
        name,
        placeholder,
        opciones,
        onChange
    }) {

        const valorCategoria =
            typeof categoria === 'object'
                ? categoria?._id || ''
                : categoria || '';

        return (

            <div className="relative">

                <select
                    id={id}
                    name={name}
                    onChange={onChange}
                    aria-label={placeholder}
                    value={valorCategoria}
                    required
                    className={`
                        ${campo}
                        appearance-none
                        pr-12
                    `}
                >

                    <option
                        value=""
                        disabled
                    >
                        {placeholder}
                    </option>

                    {opciones.map((opcion) => (

                        <option
                            key={opcion._id}
                            value={opcion._id}
                        >
                            {opcion.nombre_categoria}
                        </option>

                    ))}

                </select>

                <Flecha />

            </div>

        );

    }

    const editarProducto = async (e) => {

        e.preventDefault();

        // La categoria y el punto llegan populados ({ _id, ... }), como texto si se
        // cambiaron en el select, o en null si el admin los borro
        const idDe = valor => (valor && typeof valor === 'object') ? valor._id : valor;

        // El form usa noValidate: si faltaba algo el navegador bloqueaba el envio
        // con un globito en ingles junto al campo, y parecia que "no se editaba"
        const faltantes = [];

        if (!String(producto.nombre_produ || '').trim()) faltantes.push('el nombre');
        if (!producto.precio) faltantes.push('el precio');
        if (!idDe(producto.categoria)) faltantes.push('la categoría');
        if (!producto.condicion) faltantes.push('el estado');
        if (!idDe(producto.punto_encuentro)) faltantes.push('la ubicación');

        if (faltantes.length > 0) {
            // "el nombre, el precio y la categoría"
            const lista = faltantes.length > 1
                ? `${faltantes.slice(0, -1).join(', ')} y ${faltantes[faltantes.length - 1]}`
                : faltantes[0];

            Swal.fire({
                icon: 'warning',
                title: 'Faltan datos',
                text: `Elige ${lista} antes de guardar.`
            });
            return;
        }

        const formData = new FormData();

        formData.append(
            'nombre_produ',
            producto.nombre_produ
        );

        formData.append(
            'descripcion',
            producto.descripcion
        );

        formData.append(
            'precio',
            producto.precio
        );

        formData.append(
            'categoria',
            idDe(producto.categoria)
        );

        formData.append(
            'condicion',
            producto.condicion
        );

        formData.append(
            'punto_encuentro',
            idDe(producto.punto_encuentro)
        );

        formData.append(
            'stock',
            producto.stock
        );

        for (
            let i = 0;
            i < archivo.length;
            i++
        ) {

            formData.append(
                'imagenes',
                archivo[i]
            );

        }

        try {

            const res =
                await productosService.actualizarProducto(idProducto, formData);

            console.log(res);

            Swal.fire({

                title: "Producto actualizado",

                text:
                    "Los cambios se guardaron correctamente.",

                icon: "success"

            });

        } catch (error) {

            console.log(error);

            Swal.fire({

                icon: 'error',

                title: "No se pudo guardar",

                // El backend dice por que (p. ej. "Los datos del producto no son validos")
                text: error.response?.data?.mensaje || 'Vuelve a intentar'

            });

        }

    };

    // Qué se muestra en el recuadro: por defecto el texto "Sin imagen"
    let contenidoImagen = (
        <p className="text-sm text-[#8B8B8B]">
            Sin imagen
        </p>
    );

    // Si el producto tiene imágenes, se muestra el carrusel
    if (Array.isArray(imagenes) && imagenes.length > 0) {
        contenidoImagen = (
            <Carrusel
                imagenes={imagenes}
                alt={nombre_produ}
            />
        );
    }

    return (

        <div
            className="
                min-h-screen
                w-full
                bg-[#FFFFED]

                px-6
                pb-12
                pt-7

                font-sans

                sm:px-8

                md:px-10
                md:pt-8

                lg:px-14

                xl:px-16
            "
        >

            <div
                className="
                mx-auto
                w-full
                max-w-[1400px]"
            >

                <div className="mb-7">

                    <Link
                        to="/home/publications"
                        className="
                            inline-flex
                            items-center
                            gap-2

                            text-[13px]
                            font-medium
                            text-[#8B8B8B]

                            transition
                            hover:text-[#252429]
                        "
                    >

                        <svg
                            width="28"
                            height="18"
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

                <form onSubmit={editarProducto} noValidate>

                    <div
                        className="
                            grid
                            grid-cols-1
                            items-start

                            gap-7

                            lg:grid-cols-2
                            lg:gap-8
                        "
                    >
                        <div
                            className="
                                flex
                                flex-col
                                gap-7
                            "
                        >

                            <div
                                className="
                                    relative
                                    flex

                                    h-[360px]
                                    w-full

                                    items-center
                                    justify-center

                                    overflow-hidden

                                    rounded-[26px]

                                    bg-[#FAE568]

                                    px-10
                                    py-8
                                "
                            >

                                {/* Imagen principal o "Sin imagen" (se decide arriba) */}
                                {contenidoImagen}


                                {/* INPUT DE ARCHIVOS */}

                                <input
                                    type="file"
                                    name="imagenes"
                                    multiple
                                    onChange={leerArchivo}
                                    className="
                                        absolute
                                        bottom-4
                                        left-4

                                        max-w-[180px]

                                        text-[10px]
                                    "
                                />

                            </div>

                            <div
                                className="
                                    w-full

                                    rounded-[26px]

                                    bg-white

                                    px-7
                                    pb-8
                                    pt-7

                                    shadow-[0_4px_7px_rgba(0,0,0,0.20)]
                                "
                            >

                                <div className="space-y-5">


                                    {/* DESCRIPCIÓN */}

                                    <div>

                                        <label
                                            htmlFor="descripcionProducto"
                                            className="
                                                mb-2
                                                block
                                                pl-1

                                                text-[12px]
                                                font-bold

                                                text-[#252429]
                                            "
                                        >
                                            Descripción
                                        </label>

                                        <textarea
                                            id="descripcionProducto"
                                            name="descripcion"
                                            aria-label="Descripción"
                                            placeholder="Descripción"

                                            className="
                                                h-[48px]
                                                w-full

                                                resize-none

                                                rounded-full

                                                border
                                                border-gray-100

                                                bg-[#FAFAFA]

                                                px-5
                                                py-3

                                                text-[13px]
                                                text-[#252429]

                                                shadow-[0_4px_5px_rgba(0,0,0,0.20)]

                                                outline-none

                                                placeholder:text-[#A1A1A1]
                                            "

                                            value={
                                                descripcion || ''
                                            }

                                            onChange={
                                                leerInformacionProducto
                                            }
                                        />

                                    </div>


                                    {/* CATEGORÍA + ESTADO */}

                                    <div
                                        className="
                                            grid
                                            grid-cols-1

                                            gap-5

                                            sm:grid-cols-2
                                        "
                                    >


                                        {/* CATEGORÍA */}

                                        <div>

                                            <label
                                                className="
                                                    mb-2
                                                    block
                                                    pl-1

                                                    text-[12px]
                                                    font-bold

                                                    text-[#252429]
                                                "
                                            >
                                                Categoría
                                            </label>

                                            <CategoriasDesplegable

                                                id="categoriaProducto"

                                                name="categoria"

                                                placeholder="Categoría"

                                                opciones={
                                                    categorias
                                                }

                                                onChange={
                                                    leerInformacionProducto
                                                }

                                            />

                                        </div>


                                        {/* ESTADO */}

                                        <div>

                                            <label
                                                className="
                                                    mb-2
                                                    block
                                                    pl-1

                                                    text-[12px]
                                                    font-bold

                                                    text-[#252429]
                                                "
                                            >
                                                Estado
                                            </label>

                                            <EstadoDesplegable

                                                id="condicionProducto"

                                                name="condicion"

                                                placeholder="Condición"

                                                opciones={
                                                    condiciones
                                                }

                                                onChange={
                                                    leerInformacionProducto
                                                }

                                            />

                                        </div>

                                    </div>


                                    {/* UBICACIÓN + STOCK */}

                                    <div
                                        className="
                                            grid
                                            grid-cols-1

                                            gap-5

                                            sm:grid-cols-[1.25fr_0.75fr]
                                        "
                                    >


                                        {/* UBICACIÓN */}

                                        <div>

                                            <label
                                                className="
                                                    mb-2
                                                    block
                                                    pl-1

                                                    text-[12px]
                                                    font-bold

                                                    text-[#252429]
                                                "
                                            >
                                                Ubicación
                                            </label>

                                            <PuntoDesplegable

                                                id="zonaEncuentro"

                                                name="punto_encuentro"

                                                placeholder="Zona de encuentro"

                                                opciones={
                                                    puntos
                                                }

                                                onChange={
                                                    leerInformacionProducto
                                                }

                                            />

                                        </div>


                                        {/* STOCK */}

                                        <div>

                                            <label
                                                htmlFor="stockProductoEdit"
                                                className="
                                                    mb-2
                                                    block
                                                    pl-1

                                                    text-[12px]
                                                    font-bold

                                                    text-[#252429]
                                                "
                                            >
                                                Stock
                                            </label>

                                            <input
                                                id="stockProductoEdit"

                                                name="stock"

                                                type="text"

                                                inputMode="numeric"

                                                aria-label="Stock"

                                                placeholder="Stock"

                                                className={
                                                    campo
                                                }

                                                value={
                                                    stock || ''
                                                }

                                                onChange={
                                                    leerInformacionProducto
                                                }
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div>

                            <div
                                className="
                                    w-full

                                    rounded-[26px]

                                    bg-white

                                    px-7
                                    pb-8
                                    pt-7

                                    shadow-[0_4px_7px_rgba(0,0,0,0.20)]
                                "
                            >


                                {/* NOMBRE */}

                                <div className="mb-6">

                                    <label
                                        htmlFor="nombreProductoEdit"
                                        className="
                                            mb-2
                                            block
                                            pl-1

                                            text-[12px]
                                            font-bold

                                            text-[#252429]
                                        "
                                    >
                                        Nombre del producto
                                    </label>

                                    <input
                                        id="nombreProductoEdit"

                                        name="nombre_produ"

                                        type="text"

                                        aria-label="Nombre"

                                        placeholder="Nombre"

                                        className={
                                            campo
                                        }

                                        value={
                                            nombre_produ || ''
                                        }

                                        onChange={
                                            leerInformacionProducto
                                        }
                                    />

                                </div>


                                {/* PRECIO */}

                                <div>

                                    <label
                                        htmlFor="precioProductoEdit"
                                        className="
                                            mb-2
                                            block
                                            pl-1

                                            text-[12px]
                                            font-bold

                                            text-[#252429]
                                        "
                                    >
                                        Precio
                                    </label>

                                    <input
                                        id="precioProductoEdit"

                                        name="precio"

                                        type="text"

                                        inputMode="decimal"

                                        aria-label="Precio"

                                        placeholder="Precio"

                                        className={
                                            campo
                                        }

                                        value={
                                            precio || ''
                                        }

                                        onChange={
                                            leerInformacionProducto
                                        }
                                    />

                                </div>


                                {/* EDITAR */}

                                <button
                                    type="submit"

                                    className="
                                        mt-12

                                        flex

                                        h-[52px]
                                        w-full

                                        items-center
                                        justify-center

                                        rounded-full

                                        bg-[#FAE568]

                                        text-[16px]
                                        font-extrabold

                                        text-[#252429]

                                        shadow-[0_4px_6px_rgba(0,0,0,0.22)]

                                        transition

                                        hover:brightness-95

                                        active:scale-[0.98]
                                    "
                                >
                                    Editar
                                </button>


                                <button
                                    type="button"

                                    onClick={eliminarPublicacion}

                                    className="
                                    mt-6

                                    flex

                                    h-[52px]
                                    w-full

                                    items-center
                                    justify-center

                                    rounded-full

                                    bg-[#E99597]

                                    text-[16px]
                                    font-extrabold

                                    text-[#252429]

                                    shadow-[0_4px_6px_rgba(0,0,0,0.22)]

                                    transition

                                    hover:brightness-95

                                    active:scale-[0.98]
                                "
                                >
                                    Eliminar
                                </button>

                            </div>

                        </div>

                    </div>

                </form>

            </div>

        </div>

    );

}
