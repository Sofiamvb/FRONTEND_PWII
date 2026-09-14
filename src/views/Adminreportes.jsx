export default function AdminReportes() {
    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] px-8 pb-12 pt-8 md:px-12 font-sans">

                {/* TÍTULO GENERAL */}
                <div className="mb-9">
                    <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                        Administración de UniMarket
                    </h1>
                </div>


                {/* =====================================================
                    CONTENEDOR DE REPORTES
                ====================================================== */}
                <div
                    className="
                        w-full
                        bg-[#FFFDF8]
                        shadow-[0_3px_6px_rgba(0,0,0,0.15)]
                    "
                >

                    {/* =================================================
                        ENCABEZADO
                    ================================================== */}
                    <div
                        className="
                            flex
                            min-h-[68px]
                            flex-col
                            gap-4
                            border-b
                            border-[#D9D9D3]
                            bg-white
                            px-8
                            py-3
                            md:flex-row
                            md:items-center
                            md:justify-between
                        "
                    >

                        <h2 className="text-[27px] font-extrabold text-[#252429]">
                            Reportes
                        </h2>


                        {/* FILTRO */}
                        <div className="relative w-full md:w-[290px]">

                            <select
                                defaultValue=""
                                className="
                                    h-[43px]
                                    w-full
                                    appearance-none
                                    rounded-full
                                    border
                                    border-gray-100
                                    bg-white
                                    px-5
                                    pr-12
                                    text-[13px]
                                    text-[#777777]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                    outline-none
                                "
                            >
                                <option value="" disabled>
                                    FILTRO
                                </option>

                                <option>Todos</option>
                                <option>Publicaciones</option>
                                <option>Fraudes</option>
                                <option>Comentarios</option>
                            </select>


                            {/* FLECHA */}
                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    right-5
                                    top-1/2
                                    -translate-y-1/2
                                "
                            >
                                <svg
                                    width="16"
                                    height="16"
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


                    {/* =================================================
                        LISTA DE REPORTES
                    ================================================== */}
                    <div className="px-4 py-4 md:px-5">


                        {/* =================================================
                            REPORTE 1
                        ================================================== */}
                        <div
                            className="
                                mb-6
                                flex
                                min-h-[100px]
                                w-full
                                flex-col
                                justify-between
                                gap-5
                                rounded-[30px]
                                bg-white
                                px-8
                                py-5
                                shadow-[0_4px_8px_rgba(0,0,0,0.20)]
                                lg:flex-row
                                lg:items-center
                            "
                        >

                            {/* INFORMACIÓN */}
                            <div>

                                <h3 className="text-[18px] font-extrabold text-[#252429]">
                                    Publicación Inapropiada
                                </h3>

                                <p
                                    className="
                                        mt-1
                                        max-w-[350px]
                                        text-[14px]
                                        font-semibold
                                        leading-[20px]
                                        text-[#929292]
                                    "
                                >
                                    Una publicación fuera de lugar en la pagina
                                </p>

                            </div>


                            {/* ACCIONES */}
                            <div className="flex flex-wrap items-center gap-3">

                                <button
                                    type="button"
                                    className="
                                        flex
                                        h-[36px]
                                        min-w-[75px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FFFDF8]
                                        px-5
                                        text-[12px]
                                        font-extrabold
                                        text-[#252429]
                                        shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Ver
                                </button>


                                <button
                                    type="button"
                                    className="
                                        flex
                                        h-[36px]
                                        min-w-[100px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FAE568]
                                        px-5
                                        text-[12px]
                                        font-extrabold
                                        text-[#252429]
                                        shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Borrar
                                </button>


                                <button
                                    type="button"
                                    className="
                                        flex
                                        h-[36px]
                                        min-w-[100px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FF797C]
                                        px-5
                                        text-[12px]
                                        font-extrabold
                                        text-[#252429]
                                        shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Rechazar
                                </button>

                            </div>

                        </div>


                        {/* =================================================
                            REPORTE 2
                        ================================================== */}
                        <div
                            className="
                                mb-6
                                flex
                                min-h-[100px]
                                w-full
                                flex-col
                                justify-between
                                gap-5
                                rounded-[30px]
                                bg-white
                                px-8
                                py-5
                                shadow-[0_4px_8px_rgba(0,0,0,0.20)]
                                lg:flex-row
                                lg:items-center
                            "
                        >

                            {/* INFORMACIÓN */}
                            <div>

                                <h3 className="text-[18px] font-extrabold text-[#252429]">
                                    Posible Fraude
                                </h3>

                                <p
                                    className="
                                        mt-1
                                        max-w-[350px]
                                        text-[14px]
                                        font-semibold
                                        leading-[20px]
                                        text-[#929292]
                                    "
                                >
                                    Publicación engañosa para los usuarios
                                </p>

                            </div>


                            {/* ACCIONES */}
                            <div className="flex flex-wrap items-center gap-3">

                                <button
                                    type="button"
                                    className="
                                        flex
                                        h-[36px]
                                        min-w-[75px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FFFDF8]
                                        px-5
                                        text-[12px]
                                        font-extrabold
                                        text-[#252429]
                                        shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Ver
                                </button>


                                <button
                                    type="button"
                                    className="
                                        flex
                                        h-[36px]
                                        min-w-[100px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FAE568]
                                        px-5
                                        text-[12px]
                                        font-extrabold
                                        text-[#252429]
                                        shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Borrar
                                </button>


                                <button
                                    type="button"
                                    className="
                                        flex
                                        h-[36px]
                                        min-w-[100px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FF797C]
                                        px-5
                                        text-[12px]
                                        font-extrabold
                                        text-[#252429]
                                        shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Rechazar
                                </button>

                            </div>

                        </div>


                        {/* =================================================
                            REPORTE 3
                        ================================================== */}
                        <div
                            className="
                                flex
                                min-h-[100px]
                                w-full
                                flex-col
                                justify-between
                                gap-5
                                rounded-[30px]
                                bg-white
                                px-8
                                py-5
                                shadow-[0_4px_8px_rgba(0,0,0,0.20)]
                                lg:flex-row
                                lg:items-center
                            "
                        >

                            {/* INFORMACIÓN */}
                            <div>

                                <h3 className="text-[18px] font-extrabold text-[#252429]">
                                    Comentario Inapropiado
                                </h3>

                                <p
                                    className="
                                        mt-1
                                        max-w-[350px]
                                        text-[14px]
                                        font-semibold
                                        leading-[20px]
                                        text-[#929292]
                                    "
                                >
                                    Un usuario insulto en los comentarios
                                </p>

                            </div>


                            {/* ACCIONES */}
                            <div className="flex flex-wrap items-center gap-3">

                                <button
                                    type="button"
                                    className="
                                        flex
                                        h-[36px]
                                        min-w-[75px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FFFDF8]
                                        px-5
                                        text-[12px]
                                        font-extrabold
                                        text-[#252429]
                                        shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Ver
                                </button>


                                <button
                                    type="button"
                                    className="
                                        flex
                                        h-[36px]
                                        min-w-[100px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FAE568]
                                        px-5
                                        text-[12px]
                                        font-extrabold
                                        text-[#252429]
                                        shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Borrar
                                </button>


                                <button
                                    type="button"
                                    className="
                                        flex
                                        h-[36px]
                                        min-w-[100px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FF797C]
                                        px-5
                                        text-[12px]
                                        font-extrabold
                                        text-[#252429]
                                        shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Rechazar
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}