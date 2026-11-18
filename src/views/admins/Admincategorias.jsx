import React, { useState, useEffect } from 'react';
import * as categoriasService from "../../services/categoriasService";
import Swal from 'sweetalert2';
import Categroias from '../../componentes/categorias';

export default function CategoriasAdmin() {

    const [categoria, guardarCategoria] = useState({
        nombre_categoria: ''
    });

    // Lista de categorías que vienen del backend
    const [categorias, guardarCategorias] = useState([]);

    // Leer datos del formulario
    const actualizarState = e => {
        guardarCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    };

    const consultarAPI = async () => {
        try {
            const categoriaConsulta = await categoriasService.obtenerCategorias();
            console.log(categoriaConsulta);
            guardarCategorias(categoriaConsulta);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        consultarAPI();
    }, [])

    // Añadir una categoría nueva
    const agregarCategoria = async e => {
        e.preventDefault();
        try {

            const res = await categoriasService.crearCategoria(categoria);

            console.log(res);

            Swal.fire({
                title: "¡Se ha registrado!",
                text: res.mensaje,
                icon: "success"
            });

            // Limpiar el input y recargar la lista
            guardarCategoria({ nombre_categoria: '' });
            consultarAPI();

        } catch (error) {

            console.log(error);

            Swal.fire({
                icon: 'error',
                title: "Hubo un error",
                text: 'Intente de nuevo'
            });

        }
    };

    // Actualizar una categoría (se llama desde el componente Categroias)
    const actualizarCategoria = async (id, nombre_categoria) => {
        try {

            const res = await categoriasService.actualizarCategoria(id, nombre_categoria);

            Swal.fire({
                title: "¡Actualizada!",
                text: res.mensaje,
                icon: "success"
            });

            consultarAPI();

            return true;   // avisa al componente que sí se actualizó

        } catch (error) {

            console.log(error);

            Swal.fire({
                icon: 'error',
                title: "Hubo un error",
                text: 'Intente de nuevo'
            });

            return false;  // el componente se queda en modo edición

        }
    };

    // Eliminar una categoría (se llama desde el componente Categroias)
    const eliminarCategoria = async id => {

        const confirmacion = await Swal.fire({
            title: "¿Eliminar categoría?",
            text: "Esta acción no se puede deshacer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar"
        });

        if (!confirmacion.isConfirmed) return;

        try {

            const res = await categoriasService.eliminarCategoria(id);

            Swal.fire({
                title: "¡Eliminada!",
                text: res.mensaje,
                icon: "success"
            });

            consultarAPI();

        } catch (error) {

            console.log(error);

            // Si alguna publicacion la usa, el backend no deja borrarla y dice cuantas son
            Swal.fire({
                icon: 'error',
                title: "No se pudo eliminar",
                text: error.response?.data?.mensaje || 'Intente de nuevo'
            });

        }
    };

    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] px-8 pb-12 pt-8 md:px-12 font-sans ">

                {/* TÍTULO GENERAL */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                        Administración de UniMarket
                    </h1>
                </div>

                {/* CONTENIDO PRINCIPAL */}
                <div
                    className="
                    grid
                    grid-cols-1
                    gap-10
                    xl:grid-cols-[0.8fr_1.2fr]"
                >

                    {/* PANEL AGREGAR CATEGORÍA */}
                    <div
                        className="
                        min-h-[500px]
                        w-full
                        bg-[#FFFDF8]
                        px-8
                        py-8"
                    >

                        <h2 className="text-[26px] font-extrabold text-[#252429]">
                            Agregar Nueva Categoria
                        </h2>

                        {/* FORMULARIO */}
                        <form onSubmit={agregarCategoria}>

                            {/* NOMBRE */}
                            <div className="mt-14">

                                <label
                                    htmlFor="nombreCategoria"
                                    className="
                                    mb-4
                                    block
                                    text-[16px]
                                    font-extrabold
                                    text-[#252429] "
                                >
                                    Nombre:
                                </label>

                                <input
                                    id="nombreCategoria"
                                    name="nombre_categoria"
                                    type="text"
                                    value={categoria.nombre_categoria}
                                    required
                                    className="
                                    h-[52px]
                                    w-full
                                     rounded-full
                                    border
                                    border-gray-100
                                    bg-white
                                    px-6
                                    text-[14px]
                                    text-[#252429]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                    outline-none"
                                    onChange={actualizarState}
                                />

                            </div>

                            {/* BOTÓN AGREGAR */}
                            <div
                                className="
                                mt-12
                                flex
                                flex-wrap
                                items-center
                                justify-around
                                gap-5 "
                            >

                                <button
                                    type="submit"
                                    className="
                                    flex
                                     h-[38px]
                                    min-w-[130px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#FAE568]
                                    px-6
                                    text-[13px]
                                    font-extrabold
                                    text-[#252429]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                    transition
                                    hover:brightness-95"
                                >
                                    Agregar
                                </button>

                            </div>

                        </form>

                    </div>

                    {/* PANEL LISTADO DE CATEGORÍAS */}
                    <div
                        className="
                        min-h-[500px]
                        w-full
                        bg-[#FFFDF8]
                        px-8
                        py-8"
                    >

                        {/* ENCABEZADO */}
                        <div
                            className="
                            mb-12
                            flex
                            flex-col
                            gap-5
                            md:flex-row
                            md:items-center
                            md:justify-between"
                        >

                            <h2 className="text-[26px] font-extrabold text-[#252429]">
                                Categorias
                            </h2>

                            {/* BUSCADOR */}
                            <div className="w-full md:w-[280px]">

                                <input
                                    type="text"
                                    placeholder="Buscar"
                                    className="
                                    h-[43px]
                                    w-full
                                    rounded-full
                                    border
                                    border-gray-100
                                    bg-white
                                    px-5
                                    text-[13px]
                                    text-[#252429]
                                     shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                    outline-none
                                    placeholder:text-[#A0A0A0]"
                                />

                            </div>

                        </div>

                        {/* LISTADO DE CATEGORÍAS */}
                        {
                            categorias.map(cat => (

                                <Categroias
                                    key={cat._id}
                                    categoria={cat}
                                    actualizarCategoria={actualizarCategoria}
                                    eliminarCategoria={eliminarCategoria}
                                />

                            ))
                        }

                    </div>

                </div>

            </div>
        </>
    );
}
