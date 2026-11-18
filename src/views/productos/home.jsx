import React, { useEffect, useState } from 'react';
import * as categoriasService from '../../services/categoriasService';
import * as productosService from '../../services/productosService';
import Products from "../../componentes/Products"
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom";

export default function Home() {

    const [productos, guardarProductos] = useState([]);
    const [categorias, guardarCategorias] = useState([]);

    // Todos los filtros viven en la URL: /home?buscar=arduino&categoria=Libros&precio_final=500
    // Asi el buscador del header y estos filtros se entienden entre si,
    // y limpiar es tan facil como quitarlos de la URL.
    const [searchParams, setSearchParams] = useSearchParams();
    const buscar = searchParams.get('buscar') || '';
    const categoria = searchParams.get('categoria') || '';
    const precioFinal = searchParams.get('precio_final') || '';

    const hayFiltros = buscar !== '' || categoria !== '' || precioFinal !== '';

    // Lo que se escribe en "Precio maximo" antes de aplicarlo
    const [precioEscrito, guardarPrecioEscrito] = useState(precioFinal);

    // Las categorias se traen de la base para que los nombres siempre coincidan
    // con los que espera el backend (compara el nombre exacto)
    useEffect(() => {

        const consultarCategorias = async () => {
            const respuesta = await categoriasService.obtenerCategorias();
            guardarCategorias(respuesta);
        }

        consultarCategorias();

    }, []);

    // Se vuelve a consultar cada vez que cambia algun filtro
    useEffect(() => {

        const consultarAPI = async () => {
            const productosConsulta = await productosService.obtenerProductosHome({
                buscar,
                categoria,
                precio_final: precioFinal
            });
            guardarProductos(productosConsulta);
        }

        consultarAPI();

    }, [buscar, categoria, precioFinal]);

    // Agrega o quita un filtro de la URL sin tocar los demas
    const cambiarFiltro = (nombre, valor) => {

        const nuevos = new URLSearchParams(searchParams);

        if (valor === '') {
            nuevos.delete(nombre);
        } else {
            nuevos.set(nombre, valor);
        }

        setSearchParams(nuevos);
    }

    // El precio se aplica al salir del campo o al dar Enter, no en cada tecla
    const aplicarPrecio = () => {

        const texto = precioEscrito.trim();

        if (texto === '' || isNaN(Number(texto))) {
            guardarPrecioEscrito('');
            cambiarFiltro('precio_final', '');
            return;
        }

        cambiarFiltro('precio_final', texto);
    }

    const limpiarFiltros = () => {
        guardarPrecioEscrito('');
        setSearchParams({});
    }

    return (
        <>



            <div className="min-h-screen w-full bg-[#FFFFED] pb-8 pt-24 px-8 md:pb-12 md:pt-32 md:pr-12 md:pl-32 lg:pl-64 font-sans">


                <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <div>
                        <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                            {buscar ? `Resultados para "${buscar}"` : 'Materiales disponibles'}
                        </h1>
                        <p className="mt-2 text-sm font-medium text-gray-600">
                            {productos.length === 1 ? '1 resultado' : `${productos.length} resultados`}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6">


                        <div className="flex items-center gap-3">
                            <label className="text-sm font-bold text-[#1f1f22]">Categoría</label>
                            <div className="relative">
                                <select
                                    value={categoria}
                                    onChange={e => cambiarFiltro('categoria', e.target.value)}
                                    className="appearance-none rounded-full border border-gray-100 bg-white py-2.5 pl-5 pr-10 text-sm text-gray-500 shadow-[0_2px_10px_rgba(0,0,0,0.04)] outline-none focus:border-gray-300">
                                    <option value="">Todas</option>
                                    {
                                        categorias.map(unaCategoria => (
                                            <option
                                                key={unaCategoria._id}
                                                value={unaCategoria.nombre_categoria}>
                                                {unaCategoria.nombre_categoria}
                                            </option>
                                        ))
                                    }
                                </select>

                                <div className="pointer-events-none absolute right-4 top-1/2 flex h-3 w-3 -translate-y-1/2 items-center justify-center">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.3087 13.196L15.6668 7.67064C16.0011 7.32586 15.7984 6.66675 15.3581 6.66675H4.64194C4.2016 6.66675 3.99893 7.32586 4.33327 7.67064L9.69135 13.196C9.86894 13.3792 10.1311 13.3792 10.3087 13.196Z" fill="#252429" />
                                    </svg>

                                </div>
                            </div>
                        </div>


                        <div className="flex items-center gap-3">
                            <label className="text-sm font-bold text-[#1f1f22]">Precio máximo</label>
                            <div className="relative">
                                <input type="text"
                                    id="buscarprecio"
                                    name="buscarPrecio"
                                    placeholder="Precio"
                                    value={precioEscrito}
                                    onChange={e => guardarPrecioEscrito(e.target.value)}
                                    onBlur={aplicarPrecio}
                                    onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); aplicarPrecio(); } }}
                                    className="appearance-none rounded-full border border-gray-100 bg-white py-2.5 pl-5 pr-10 text-sm text-gray-500 shadow-[0_2px_10px_rgba(0,0,0,0.04)] outline-none focus:border-gray-300" />

                            </div>
                        </div>

                        {
                            hayFiltros && (
                                <button
                                    type="button"
                                    onClick={limpiarFiltros}
                                    className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-bold text-[#1f1f22] shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-colors hover:bg-gray-50">
                                    Limpiar filtros
                                </button>
                            )
                        }

                    </div>
                </div>

                <div className="row mt-5">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {
                            productos.map(producto => (
                                <Link
                                    key={producto._id}
                                    to={`/home/productDetail/${producto._id}`}
                                    className="block"
                                >
                                    <Products
                                        producto={producto}
                                    />
                                </Link>
                            ))
                        }

                    </div>

                    {
                        productos.length === 0 && (
                            <p className="mt-10 text-center text-sm font-medium text-gray-500">
                                No encontramos materiales con esos filtros.
                            </p>
                        )
                    }
                </div>

            </div>


        </>
    )
}