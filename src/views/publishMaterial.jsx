export default function PublishMaterial() {
    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] pb-8 pt-24 px-8 md:pb-12 md:pt-32 md:pr-12 md:pl-32 lg:pl-64 font-sans">

                {/* TÍTULO */}
                <div className="mb-10">
                    <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                        Publicar Material
                    </h1>
                </div>


                {/* CONTENIDO PRINCIPAL */}
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.05fr_1fr]">

                    {/* =====================================================
                        FORMULARIO
                    ====================================================== */}
                    <div
                        className="
                            min-h-[610px]
                            w-full
                            rounded-[28px]
                            bg-white
                            px-8
                            py-8
                        "
                    >

                        {/* NOMBRE DEL PRODUCTO */}
                        <div className="mb-6">

                            <label
                                htmlFor="nombreProducto"
                                className="mb-3 block text-[15px] font-extrabold text-[#252429]"
                            >
                                Nombre del Producto:
                            </label>

                            <input
                                id="nombreProducto"
                                type="text"
                                className="
                                    h-[52px]
                                    w-full
                                    rounded-[17px]
                                    border
                                    border-gray-100
                                    bg-[#FAFAFA]
                                    px-5
                                    text-sm
                                    text-[#252429]
                                    shadow-[0_3px_5px_rgba(0,0,0,0.20)]
                                    outline-none
                                "
                            />

                        </div>


                        {/* DESCRIPCIÓN */}
                        <div className="mb-7">

                            <label
                                htmlFor="descripcionProducto"
                                className="mb-3 block text-[15px] font-extrabold text-[#252429]"
                            >
                                Descripción:
                            </label>

                            <textarea
                                id="descripcionProducto"
                                className="
                                    min-h-[110px]
                                    w-full
                                    resize-none
                                    rounded-[17px]
                                    border
                                    border-gray-100
                                    bg-[#FAFAFA]
                                    p-5
                                    text-sm
                                    text-[#252429]
                                    shadow-[0_3px_5px_rgba(0,0,0,0.20)]
                                    outline-none
                                "
                            />

                        </div>


                        {/* PRECIO Y CATEGORÍA */}
                        <div className="mb-7 grid grid-cols-1 gap-8 sm:grid-cols-2">

                            {/* PRECIO */}
                            <div>

                                <label
                                    htmlFor="precioProducto"
                                    className="mb-3 block text-[15px] font-extrabold text-[#252429]"
                                >
                                    Precio:
                                </label>

                                <input
                                    id="precioProducto"
                                    type="text"
                                    className="
                                        h-[50px]
                                        w-full
                                        rounded-[17px]
                                        border
                                        border-gray-100
                                        bg-[#FAFAFA]
                                        px-5
                                        text-sm
                                        text-[#252429]
                                        shadow-[0_3px_5px_rgba(0,0,0,0.20)]
                                        outline-none
                                    "
                                />

                            </div>


                            {/* CATEGORÍA */}
                            <div>

                                <label
                                    htmlFor="categoriaProducto"
                                    className="mb-3 block text-[15px] font-extrabold text-[#252429]"
                                >
                                    Categoría:
                                </label>

                                <div className="relative">

                                    <select
                                        id="categoriaProducto"
                                        defaultValue=""
                                        className="
                                            h-[50px]
                                            w-full
                                            appearance-none
                                            rounded-[17px]
                                            border
                                            border-gray-100
                                            bg-[#FAFAFA]
                                            px-5
                                            pr-12
                                            text-sm
                                            text-gray-500
                                            shadow-[0_3px_5px_rgba(0,0,0,0.20)]
                                            outline-none
                                        "
                                    >
                                        <option value="" disabled>
                                            Seleccionar
                                        </option>

                                        <option>Electrónica</option>
                                        <option>Tecnología</option>
                                        <option>Escolar</option>
                                        <option>Herramientas</option>
                                    </select>


                                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">

                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.3087 13.196L15.6668 7.67064C16.0011 7.32586 15.7984 6.66675 15.3581 6.66675H4.64194C4.2016 6.66675 3.99893 7.32586 4.33327 7.67064L9.69135 13.196C9.86894 13.3792 10.1311 13.3792 10.3087 13.196Z"
                                                fill="#252429"
                                            />
                                        </svg>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* CONDICIÓN Y ZONA DE ENTREGA */}
                        <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2">

                            {/* CONDICIÓN */}
                            <div>

                                <label
                                    htmlFor="condicionProducto"
                                    className="mb-3 block text-[15px] font-extrabold text-[#252429]"
                                >
                                    Condición:
                                </label>

                                <div className="relative">

                                    <select
                                        id="condicionProducto"
                                        defaultValue=""
                                        className="
                                            h-[50px]
                                            w-full
                                            appearance-none
                                            rounded-[17px]
                                            border
                                            border-gray-100
                                            bg-[#FAFAFA]
                                            px-5
                                            pr-12
                                            text-sm
                                            text-gray-500
                                            shadow-[0_3px_5px_rgba(0,0,0,0.20)]
                                            outline-none
                                        "
                                    >
                                        <option value="" disabled>
                                            Seleccionar
                                        </option>

                                        <option>Nuevo</option>
                                        <option>Usado</option>
                                    </select>


                                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">

                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.3087 13.196L15.6668 7.67064C16.0011 7.32586 15.7984 6.66675 15.3581 6.66675H4.64194C4.2016 6.66675 3.99893 7.32586 4.33327 7.67064L9.69135 13.196C9.86894 13.3792 10.1311 13.3792 10.3087 13.196Z"
                                                fill="#252429"
                                            />
                                        </svg>

                                    </div>

                                </div>

                            </div>


                            {/* ZONA DE ENTREGA */}
                            <div>

                                <label
                                    htmlFor="zonaEntrega"
                                    className="mb-3 block text-[15px] font-extrabold text-[#252429]"
                                >
                                    Zona de entrega:
                                </label>

                                <input
                                    id="zonaEntrega"
                                    type="text"
                                    className="
                                        h-[50px]
                                        w-full
                                        rounded-[17px]
                                        border
                                        border-gray-100
                                        bg-[#FAFAFA]
                                        px-5
                                        text-sm
                                        text-[#252429]
                                        shadow-[0_3px_5px_rgba(0,0,0,0.20)]
                                        outline-none
                                    "
                                />

                            </div>

                        </div>


                        {/* BOTÓN ENVIAR */}
                        <button
                            type="button"
                            className="
                                flex
                                h-[58px]
                                w-full
                                items-center
                                justify-center
                                rounded-[16px]
                                bg-[#FAE568]
                                text-[17px]
                                font-extrabold
                                text-[#252429]
                                shadow-[0_3px_6px_rgba(0,0,0,0.22)]
                                transition
                                hover:brightness-95
                            "
                        >
                            Enviar Publicación a Revisión
                        </button>

                    </div>


                    {/* =====================================================
                        FOTOGRAFÍA PRINCIPAL
                    ====================================================== */}
                    <div
                        className="
                            min-h-[610px]
                            w-full
                            rounded-[28px]
                            bg-white
                            px-7
                            py-8
                        "
                    >

                        <h2 className="mb-6 text-[28px] font-extrabold text-[#252429]">
                            Fotografías Principal
                        </h2>


                        {/* SELECCIONAR ARCHIVO */}
                        <div
                            className="
                                mb-7
                                flex
                                min-h-[105px]
                                w-full
                                flex-wrap
                                items-center
                                justify-center
                                gap-3
                                rounded-[24px]
                                bg-[#FFF8D6]
                                px-6
                                py-5
                            "
                        >

                            <button
                                type="button"
                                className="
                                    rounded-full
                                    bg-[#D7D8DD]
                                    px-7
                                    py-3
                                    text-[13px]
                                    font-medium
                                    text-[#252429]
                                "
                            >
                                Elegir Archivo:
                            </button>


                            <span className="text-[13px] font-medium text-[#252429]">
                                No se eligio ningun archivo.
                            </span>

                        </div>


                        {/* VISTA PREVIA */}
                        <div
                            className="
                                flex
                                min-h-[330px]
                                w-full
                                items-center
                                justify-center
                                rounded-[28px]
                                bg-[#FAE568]
                                px-8
                                py-8
                            "
                        >

                            <img
                                src="/img/Calculadora.png"
                                alt="Vista previa de calculadora"
                                className="
                                    h-[290px]
                                    max-h-full
                                    w-auto
                                    object-contain
                                "
                            />

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}