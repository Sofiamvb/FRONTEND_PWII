import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as categoriasService from "../../services/categoriasService";
import * as puntosService from "../../services/puntosService";
import * as productosService from "../../services/productosService";
import { validarProducto, soloDigitos, soloPrecio } from '../../helpers/validarProducto'
import Swal from 'sweetalert2';

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

const condiciones = ['Nuevo', 'Usado', 'Semi-Nuevo']

// La opción vacía hace de placeholder: se ve gris hasta que se elige un valor
function EstadoDesplegable({ id, name, placeholder, opciones, onChange }) {
    console.log(opciones)
    return (
        <div className="relative">
            <select
                id={id}
                name={name}
                onChange={onChange}
                aria-label={placeholder}
                defaultValue=""
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

function CategoriasDesplegable({ id, name, placeholder, opciones, onChange }) {
    console.log(opciones)
    return (
        <div className="relative">
            <select
                id={id}
                name={name}
                onChange={onChange}
                aria-label={placeholder}
                defaultValue=""
                required
                className={`${campo} appearance-none pr-12 invalid:text-[#A1A1A1]`}
            >
                <option value="" disabled>
                    {placeholder}
                </option>

                {opciones.map((opcion) => (
                    <option key={opcion._id} value={opcion._id}>
                        {opcion.nombre_categoria}
                    </option>
                ))}
            </select>

            <Flecha />
        </div>
    )
}

function PuntoDesplegable({ id, name, placeholder, opciones, onChange }) {
    console.log(opciones)
    return (
        <div className="relative">
            <select
                id={id}
                name={name}
                onChange={onChange}
                aria-label={placeholder}
                defaultValue=""
                required
                className={`${campo} appearance-none pr-12 invalid:text-[#A1A1A1]`}
            >
                <option value="" disabled>
                    {placeholder}
                </option>

                {opciones.map((opcion) => (
                    <option key={opcion._id} value={opcion._id}>
                        {opcion.lugar}
                    </option>
                ))}
            </select>

            <Flecha />
        </div>
    )
}

export default function PublishMaterial() {



    const [categorias, guardarCategoria] = useState([]);
    const [puntos, guardarPunto] = useState([]);

    const consultarAPIcategoria = async () => {
        const categoriasConsulta = await categoriasService.obtenerCategorias();
        guardarCategoria(categoriasConsulta);
    }

    const consultarAPIpunto = async () => {
        const consultarAPIpunto = await puntosService.obtenerPuntos();
        guardarPunto(consultarAPIpunto);
    }

    useEffect(() => {
        consultarAPIcategoria();
        consultarAPIpunto();
    }, []);


    const idUsuario = sessionStorage.getItem('id');

    //producto = state, guardarProducto = funcion para guaradar el state
    const [producto, guardarProducto] = useState({
        usuario: idUsuario,
        nombre_produ: '',
        descripcion: '',
        precio: '',
        categoria: '',
        condicion: '',
        punto_encuentro: '',
        stock: '',
        
    });

    //archivo = state, guardarArchivo = setState
    const [archivo, guardarArchivo] = useState('');

    const leerInformacionProducto = e => {

        const campo = e.target.name;
        let valor = e.target.value;

        // Estos dos campos son numericos: no se dejan teclear letras
        if (campo === 'precio') {
            valor = soloPrecio(valor);
        }

        if (campo === 'stock') {
            valor = soloDigitos(valor);
        }

        guardarProducto({
            //Obtiene una copia del state
            ...producto,
            [campo]: valor
        })
        console.log(producto)
        console.log(archivo)
    }

    const leerArchivo = e => {
        guardarArchivo(e.target.files);
    }

    //Añadir un producto nuevo
    const agregarProducto = async e => {

        e.preventDefault();
        console.log(producto)

        // Se revisa todo antes de armar el formData
        const errores = validarProducto(producto, archivo);

        if (errores.length > 0) {

            Swal.fire({
                icon: 'error',
                title: 'Revisa los datos del producto',
                // Se listan todos juntos para no corregir de uno en uno
                html: '<ul style="text-align:left; margin:0; padding-left:20px">' +
                    errores.map(error => `<li>${error}</li>`).join('') +
                    '</ul>'
            });

            return;
        }

        //crear un formData
        const formData = new FormData();
        formData.append('usuario', producto.usuario);
        formData.append('nombre_produ', producto.nombre_produ);
        formData.append('descripcion', producto.descripcion);
        formData.append('precio', producto.precio);
        formData.append('categoria', producto.categoria);
        formData.append('condicion', producto.condicion);
        formData.append('punto_encuentro', producto.punto_encuentro);
        formData.append('stock', producto.stock);
        for (let i = 0; i < archivo.length; i++) {
            formData.append('imagenes', archivo[i]);
        }

        //Guardar en la base de  datos
        try {
            //Enviar peticion 
            const res = await productosService.crearProducto(formData);

            Swal.fire({
                title: "Se ha registrado!",
                text: "Se ha añadido un nuevo producto!",
                icon: "success"
            });

            console.log(res);


        } catch (error) {
            console.log(error)

            // El backend explica por que no se pudo (p. ej. falta verificarse)
            const mensaje = error.response && error.response.data
                ? error.response.data.mensaje
                : 'Vuelve a intentar';

            Swal.fire({
                icon: 'error',
                title: "Hubo un error",
                text: mensaje

            });
        }

    }

    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] pb-8 pt-24 px-8 md:pb-12 md:pt-36 md:pr-12 md:pl-32 lg:pl-64 xl:pl-[23%] xl:pr-[4.7%] font-sans">

                {/* TÍTULO (alineado con el borde izquierdo de los campos) */}
                <div className="mb-7 pl-5 sm:pl-9">
                    <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                        Publicar Material
                    </h1>
                </div>


                {/* CONTENIDO PRINCIPAL */}
                {/* noValidate: la validacion la hace validarProducto, asi los mensajes
                    salen todos juntos y en español en lugar de los del navegador */}
                <form onSubmit={agregarProducto} noValidate>
                    <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[1.05fr_1fr]">

                        <div
                            className="
                            w-full
                            rounded-[28px]
                            bg-white
                            pb-[74px]
                            pt-[58px]
                        "
                        >

                            <div className="px-5 sm:px-9">

                                {/* NOMBRE */}
                                <div className="mb-9">
                                    <input
                                        id="nombreProducto"
                                        name="nombre_produ"
                                        type="text"
                                        aria-label="Nombre"
                                        placeholder="Nombre"
                                        className={campo}
                                        onChange={leerInformacionProducto}
                                    />
                                </div>


                                {/* DESCRIPCIÓN */}
                                <div className="mb-[34px]">
                                    <textarea
                                        id="descripcionProducto"
                                        name="descripcion"
                                        aria-label="Descripción"
                                        placeholder="Descripción"
                                        className="
                                        h-[103px]
                                        w-full
                                        resize-none
                                        rounded-[23px]
                                        border
                                        border-gray-100
                                        bg-[#FAFAFA]
                                        px-4
                                        py-2.5
                                        text-[16px]
                                        text-[#252429]
                                        shadow-[0_4px_5px_rgba(0,0,0,0.22)]
                                        outline-none
                                        placeholder:text-[#A1A1A1]"
                                        onChange={leerInformacionProducto}
                                    />
                                </div>


                                {/* PRECIO, CATEGORÍA, CONDICIÓN Y ZONA */}
                                <div className="grid grid-cols-1 gap-x-8 gap-y-[33px] sm:grid-cols-2">

                                    <input
                                        id="precioProducto"
                                        name="precio"
                                        type="text"
                                        inputMode="decimal"
                                        aria-label="Precio"
                                        placeholder="Precio"
                                        value={producto.precio}
                                        className={campo}
                                        onChange={leerInformacionProducto}
                                    />

                                    <CategoriasDesplegable
                                        id="categoriaProducto"
                                        name="categoria"
                                        placeholder="Categoría"
                                        opciones={categorias}
                                        onChange={leerInformacionProducto}
                                    />

                                    <EstadoDesplegable
                                        id="condicionProducto"
                                        name="condicion"
                                        placeholder="Condición"
                                        opciones={condiciones}
                                        onChange={leerInformacionProducto}
                                    />

                                    <PuntoDesplegable
                                        id="zonaEncuentro"
                                        name="punto_encuentro"
                                        placeholder="Zona de encuentro"
                                        opciones={puntos.filter(punto => punto.estado !== false)}
                                        onChange={leerInformacionProducto}
                                    />

                                </div>


                                {/* STOCK */}
                                <div className="mt-[49px]">
                                    <input
                                        id="stockProducto"
                                        name="stock"
                                        type="text"
                                        inputMode="numeric"
                                        aria-label="Stock"
                                        placeholder="Stock"
                                        value={producto.stock}
                                        maxLength={5}
                                        className={campo}
                                        onChange={leerInformacionProducto}
                                    />
                                </div>

                            </div>


                            {/* BOTÓN ENVIAR */}
                            <div className="mt-[49px] px-5 sm:px-9">

                                <button
                                    type="submit"
                                    className="
                                    flex
                                    h-[51px]
                                    w-full
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#FAE568]
                                    text-[15px]
                                    font-extrabold
                                    text-[#252429]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.22)]
                                    transition
                                    hover:brightness-95
                                "
                                >
                                    Enviar a revisión
                                </button>

                            </div>

                        </div>

                        <div
                            className="
                            w-full
                            rounded-[28px]
                            bg-white
                            px-5
                            pb-8
                            pt-10
                            xl:pb-[134px]
                        "
                        >

                            <h2 className="mb-5 pl-5 text-[28px] font-extrabold text-[#252429]">
                                Fotografías Principal
                            </h2>


                            {/* SELECCIONAR ARCHIVO */}
                            <div
                                className="
                            mb-7
                            flex
                            min-h-[121px]
                            w-full
                            items-center
                            justify-center
                            gap-3
                            rounded-[24px]
                            bg-[#FFF8D6]
                            px-6
                            py-5"
                            >


                                <input
                                    id="imagen"
                                    name="imagenes"
                                    type="file"
                                    multiple
                                    onChange={leerArchivo}
                                />
                            </div>


                            {/* VISTA PREVIA */}
                            <div
                                className="
                                flex
                                min-h-[320px]
                                w-full
                                items-center
                                justify-center
                                rounded-[32px]
                                bg-[#FAE568]
                                px-8
                                py-5
                            "
                            >

                                <img
                                    src="/img/Calculadora.png"
                                    alt="Vista previa de calculadora"
                                    className="
                                    h-[280px]
                                    max-h-full
                                    w-auto
                                    object-contain
                                "
                                />

                            </div>

                        </div>

                    </div>
                </form>

            </div>
        </>
    )
}
