export default function CategoriasAdmin() {
    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] px-8 pb-12 pt-8 md:px-12 font-sans">

                {/* TÍTULO GENERAL */}
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                        Administración de UniMarket
                    </h1>
                </div>


                {/* =====================================================
                    CONTENIDO PRINCIPAL
                ====================================================== */}
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-10
                        xl:grid-cols-[0.8fr_1.2fr]
                    "
                >

                    {/* =================================================
                        AGREGAR / EDITAR CATEGORÍA
                    ================================================== */}
                    <div
                        className="
                            min-h-[500px]
                            w-full
                            bg-[#FFFDF8]
                            px-8
                            py-8
                        "
                    >

                        <h2 className="text-[26px] font-extrabold text-[#252429]">
                            Agregar Nueva Categoria
                        </h2>


                        {/* NOMBRE */}
                        <div className="mt-14">

                            <label
                                htmlFor="nombreCategoria"
                                className="
                                    mb-4
                                    block
                                    text-[16px]
                                    font-extrabold
                                    text-[#252429]
                                "
                            >
                                Nombre:
                            </label>


                            <input
                                id="nombreCategoria"
                                type="text"
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
                                    outline-none
                                "
                            />

                        </div>


                        {/* BOTONES */}
                        <div
                            className="
                                mt-12
                                flex
                                flex-wrap
                                items-center
                                justify-around
                                gap-5
                            "
                        >

                            {/* AGREGAR */}
                            <button
                                type="button"
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
                                    hover:brightness-95
                                "
                            >
                                Agregar
                            </button>


                            {/* GUARDAR */}
                            <button
                                type="button"
                                className="
                                    flex
                                    h-[38px]
                                    min-w-[150px]
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
                                    hover:brightness-95
                                "
                            >
                                Guardar cambios
                            </button>

                        </div>

                    </div>


                    {/* =================================================
                        LISTADO DE CATEGORÍAS
                    ================================================== */}
                    <div
                        className="
                            min-h-[500px]
                            w-full
                            bg-[#FFFDF8]
                            px-8
                            py-8
                        "
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
                                md:justify-between
                            "
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
                                        placeholder:text-[#A0A0A0]
                                    "
                                />

                            </div>

                        </div>


                        {/* =================================================
                            CATEGORÍA 1
                        ================================================== */}
                        <div
                            className="
                                mb-6
                                grid
                                grid-cols-[1fr_auto_auto]
                                items-center
                                gap-4
                            "
                        >

                            <p className="text-[18px] font-extrabold text-[#252429]">
                                Electrónica
                            </p>


                            <button
                                type="button"
                                className="
                                    flex
                                    h-[38px]
                                    w-[125px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#FAE568]
                                    text-[13px]
                                    font-extrabold
                                    text-[#252429]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Editar
                            </button>


                            <button
                                type="button"
                                className="
                                    flex
                                    h-[38px]
                                    w-[125px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#FF797C]
                                    text-[13px]
                                    font-extrabold
                                    text-[#252429]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Eliminar
                            </button>

                        </div>


                        {/* =================================================
                            CATEGORÍA 2
                        ================================================== */}
                        <div
                            className="
                                mb-6
                                grid
                                grid-cols-[1fr_auto_auto]
                                items-center
                                gap-4
                            "
                        >

                            <p className="text-[18px] font-extrabold text-[#252429]">
                                Realidad Virtual
                            </p>


                            <button
                                type="button"
                                className="
                                    flex
                                    h-[38px]
                                    w-[125px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#FAE568]
                                    text-[13px]
                                    font-extrabold
                                    text-[#252429]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Editar
                            </button>


                            <button
                                type="button"
                                className="
                                    flex
                                    h-[38px]
                                    w-[125px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#FF797C]
                                    text-[13px]
                                    font-extrabold
                                    text-[#252429]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Eliminar
                            </button>

                        </div>


                        {/* =================================================
                            CATEGORÍA 3
                        ================================================== */}
                        <div
                            className="
                                mb-6
                                grid
                                grid-cols-[1fr_auto_auto]
                                items-center
                                gap-4
                            "
                        >

                            <p className="text-[18px] font-extrabold text-[#252429]">
                                Libros
                            </p>


                            <button
                                type="button"
                                className="
                                    flex
                                    h-[38px]
                                    w-[125px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#FAE568]
                                    text-[13px]
                                    font-extrabold
                                    text-[#252429]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Editar
                            </button>


                            <button
                                type="button"
                                className="
                                    flex
                                    h-[38px]
                                    w-[125px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#FF797C]
                                    text-[13px]
                                    font-extrabold
                                    text-[#252429]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Eliminar
                            </button>

                        </div>


                        {/* =================================================
                            CATEGORÍA 4
                        ================================================== */}
                        <div
                            className="
                                mb-6
                                grid
                                grid-cols-[1fr_auto_auto]
                                items-center
                                gap-4
                            "
                        >

                            <p className="text-[18px] font-extrabold text-[#252429]">
                                Herramientas
                            </p>


                            <button
                                type="button"
                                className="
                                    flex
                                    h-[38px]
                                    w-[125px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#FAE568]
                                    text-[13px]
                                    font-extrabold
                                    text-[#252429]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Editar
                            </button>


                            <button
                                type="button"
                                className="
                                    flex
                                    h-[38px]
                                    w-[125px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#FF797C]
                                    text-[13px]
                                    font-extrabold
                                    text-[#252429]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Eliminar
                            </button>

                        </div>


                        {/* =================================================
                            CATEGORÍA 5
                        ================================================== */}
                        <div
                            className="
                                grid
                                grid-cols-[1fr_auto_auto]
                                items-center
                                gap-4
                            "
                        >

                            <p className="text-[18px] font-extrabold text-[#252429]">
                                Multimedia
                            </p>


                            <button
                                type="button"
                                className="
                                    flex
                                    h-[38px]
                                    w-[125px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#FAE568]
                                    text-[13px]
                                    font-extrabold
                                    text-[#252429]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Editar
                            </button>


                            <button
                                type="button"
                                className="
                                    flex
                                    h-[38px]
                                    w-[125px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#FF797C]
                                    text-[13px]
                                    font-extrabold
                                    text-[#252429]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Eliminar
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}