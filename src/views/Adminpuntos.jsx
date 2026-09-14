export default function AdminPuntos() {
    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] px-8 pb-12 pt-8 md:px-12 font-sans">

                {/* TÍTULO GENERAL */}
                <div className="mb-9">
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
                        xl:grid-cols-[0.9fr_1.1fr]
                    "
                >

                    {/* =================================================
                        AGREGAR PUNTO DE COMPRA
                    ================================================== */}
                    <div
                        className="
                            min-h-[590px]
                            w-full
                            bg-[#FFFDF8]
                            pb-8
                        "
                    >

                        {/* ENCABEZADO */}
                        <div
                            className="
                                flex
                                min-h-[58px]
                                items-center
                                bg-[#FFF4B8]
                                px-7
                            "
                        >
                            <h2 className="text-[25px] font-extrabold text-[#55545A]">
                                Agregar Punto de compra
                            </h2>
                        </div>


                        {/* FORMULARIO */}
                        <div className="px-7 pt-7">

                            {/* NOMBRE */}
                            <div className="mb-6">

                                <label
                                    htmlFor="nombrePunto"
                                    className="
                                        mb-3
                                        block
                                        text-[15px]
                                        font-extrabold
                                        text-[#66656B]
                                    "
                                >
                                    Nombre
                                </label>

                                <input
                                    id="nombrePunto"
                                    type="text"
                                    className="
                                        h-[49px]
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


                            {/* UBICACIÓN */}
                            <div className="mb-6">

                                <label
                                    htmlFor="ubicacionPunto"
                                    className="
                                        mb-3
                                        block
                                        text-[15px]
                                        font-extrabold
                                        text-[#66656B]
                                    "
                                >
                                    Ubicación
                                </label>

                                <input
                                    id="ubicacionPunto"
                                    type="text"
                                    className="
                                        h-[49px]
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


                            {/* HORARIO */}
                            <div className="mb-6">

                                <label
                                    htmlFor="horarioPunto"
                                    className="
                                        mb-3
                                        block
                                        text-[15px]
                                        font-extrabold
                                        text-[#66656B]
                                    "
                                >
                                    Horario
                                </label>

                                <input
                                    id="horarioPunto"
                                    type="text"
                                    placeholder="Ej. 8:00 - 21:00"
                                    className="
                                        h-[49px]
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
                                        placeholder:text-[#B0B0B0]
                                    "
                                />

                            </div>


                            {/* DESCRIPCIÓN */}
                            <div className="mb-8">

                                <label
                                    htmlFor="descripcionPunto"
                                    className="
                                        mb-3
                                        block
                                        text-[15px]
                                        font-extrabold
                                        text-[#66656B]
                                    "
                                >
                                    Descripción
                                </label>

                                <textarea
                                    id="descripcionPunto"
                                    rows="4"
                                    className="
                                        min-h-[115px]
                                        w-full
                                        resize-none
                                        rounded-[20px]
                                        border
                                        border-gray-100
                                        bg-white
                                        p-5
                                        text-[14px]
                                        text-[#252429]
                                        shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                        outline-none
                                    "
                                />

                            </div>


                            {/* BOTÓN AGREGAR */}
                            <button
                                type="button"
                                className="
                                    mx-auto
                                    flex
                                    h-[43px]
                                    min-w-[170px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#FAE568]
                                    px-7
                                    text-[14px]
                                    font-extrabold
                                    text-[#252429]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Agregar Punto
                            </button>

                        </div>

                    </div>


                    {/* =================================================
                        PUNTOS YA CREADOS
                    ================================================== */}
                    <div className="w-full px-3">

                        <h2
                            className="
                                mb-7
                                text-[27px]
                                font-extrabold
                                text-[#55545A]
                            "
                        >
                            Puntos ya creados
                        </h2>


                        {/* PUNTO 1 */}
                        <div
                            className="
                                mb-5
                                flex
                                min-h-[88px]
                                w-full
                                flex-col
                                justify-between
                                gap-5
                                rounded-[28px]
                                bg-white
                                px-7
                                py-4
                                shadow-[0_4px_8px_rgba(0,0,0,0.20)]
                                md:flex-row
                                md:items-center
                            "
                        >

                            <div>

                                <p className="text-[16px] font-medium text-[#55545A]">
                                    Entrada Principal FCFM
                                </p>

                                <p className="mt-1 text-[11px] font-medium text-[#A3A3A3]">
                                    Ciudad Universitaria | 8:00 - 21:00
                                </p>

                            </div>


                            <div className="flex shrink-0 items-center gap-3">

                                <button
                                    type="button"
                                    className="
                                        flex
                                        h-[32px]
                                        min-w-[88px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FAE568]
                                        px-4
                                        text-[12px]
                                        font-medium
                                        text-[#55545A]
                                        shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Desactivar
                                </button>


                                <button
                                    type="button"
                                    className="
                                        flex
                                        h-[32px]
                                        min-w-[85px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FF797C]
                                        px-4
                                        text-[12px]
                                        font-medium
                                        text-[#55545A]
                                        shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Eliminar
                                </button>

                            </div>

                        </div>


                        {/* PUNTO 2 */}
                        <div
                            className="
                                mb-5
                                flex
                                min-h-[88px]
                                w-full
                                flex-col
                                justify-between
                                gap-5
                                rounded-[28px]
                                bg-white
                                px-7
                                py-4
                                shadow-[0_4px_8px_rgba(0,0,0,0.20)]
                                md:flex-row
                                md:items-center
                            "
                        >

                            <div>

                                <p className="text-[16px] font-medium text-[#55545A]">
                                    Arriba de la estación
                                </p>

                                <p className="mt-1 text-[11px] font-medium text-[#A3A3A3]">
                                    Estacion Universidad | 8:00 - 21:00
                                </p>

                            </div>


                            <div className="flex shrink-0 items-center gap-3">

                                <button
                                    type="button"
                                    className="
                                        flex
                                        h-[32px]
                                        min-w-[88px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FAE568]
                                        px-4
                                        text-[12px]
                                        font-medium
                                        text-[#55545A]
                                        shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Desactivar
                                </button>


                                <button
                                    type="button"
                                    className="
                                        flex
                                        h-[32px]
                                        min-w-[85px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FF797C]
                                        px-4
                                        text-[12px]
                                        font-medium
                                        text-[#55545A]
                                        shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Eliminar
                                </button>

                            </div>

                        </div>


                        {/* PUNTO 3 */}
                        <div
                            className="
                                mb-5
                                flex
                                min-h-[88px]
                                w-full
                                flex-col
                                justify-between
                                gap-5
                                rounded-[28px]
                                bg-white
                                px-7
                                py-4
                                shadow-[0_4px_8px_rgba(0,0,0,0.20)]
                                md:flex-row
                                md:items-center
                            "
                        >

                            <div>

                                <p className="text-[16px] font-medium text-[#55545A]">
                                    Cafeteria Quimícas
                                </p>

                                <p className="mt-1 text-[11px] font-medium text-[#A3A3A3]">
                                    Ciudad Universitaria | 8:00 - 21:00
                                </p>

                            </div>


                            <div className="flex shrink-0 items-center gap-3">

                                <button
                                    type="button"
                                    className="
                                        flex
                                        h-[32px]
                                        min-w-[88px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FAE568]
                                        px-4
                                        text-[12px]
                                        font-medium
                                        text-[#55545A]
                                        shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Desactivar
                                </button>


                                <button
                                    type="button"
                                    className="
                                        flex
                                        h-[32px]
                                        min-w-[85px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FF797C]
                                        px-4
                                        text-[12px]
                                        font-medium
                                        text-[#55545A]
                                        shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Eliminar
                                </button>

                            </div>

                        </div>


                        {/* PUNTO 4 */}
                        <div
                            className="
                                flex
                                min-h-[88px]
                                w-full
                                flex-col
                                justify-between
                                gap-5
                                rounded-[28px]
                                bg-white
                                px-7
                                py-4
                                shadow-[0_4px_8px_rgba(0,0,0,0.20)]
                                md:flex-row
                                md:items-center
                            "
                        >

                            <div>

                                <p className="text-[16px] font-medium text-[#55545A]">
                                    Entrada Principal
                                </p>

                                <p className="mt-1 text-[11px] font-medium text-[#A3A3A3]">
                                    Estacion Universidad | 8:00 - 21:00
                                </p>

                            </div>


                            <div className="flex shrink-0 items-center gap-3">

                                <button
                                    type="button"
                                    className="
                                        flex
                                        h-[32px]
                                        min-w-[88px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FAE568]
                                        px-4
                                        text-[12px]
                                        font-medium
                                        text-[#55545A]
                                        shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Desactivar
                                </button>


                                <button
                                    type="button"
                                    className="
                                        flex
                                        h-[32px]
                                        min-w-[85px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FF797C]
                                        px-4
                                        text-[12px]
                                        font-medium
                                        text-[#55545A]
                                        shadow-[0_2px_5px_rgba(0,0,0,0.18)]
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

            </div>
        </>
    )
}