export default function Reports() {
    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] pb-8 pt-24 px-8 md:pb-12 md:pt-32 md:pr-12 md:pl-32 lg:pl-64 font-sans">

                {/* =====================================================
                    CONTENIDO PRINCIPAL
                ====================================================== */}
                <div className="grid grid-cols-1 gap-10 xl:grid-cols-[1.05fr_0.95fr]">

                    {/* =================================================
                        COLUMNA IZQUIERDA
                        REPORTAR UN PROBLEMA
                    ================================================== */}
                    <div>

                        <h1 className="mb-10 text-4xl font-extrabold text-[#1f1f22]">
                            Reportar un Problema
                        </h1>


                        {/* TARJETA DEL FORMULARIO */}
                        <div
                            className="
                                min-h-[540px]
                                w-full
                                rounded-[25px]
                                bg-white
                                px-8
                                py-7
                                shadow-[0_4px_10px_rgba(0,0,0,0.20)]
                            "
                        >

                            {/* =========================
                                TIPO
                            ========================== */}
                            <div className="mb-7">

                                <label
                                    htmlFor="tipoReporte"
                                    className="
                                        mb-3
                                        block
                                        text-[14px]
                                        font-extrabold
                                        text-[#252429]
                                    "
                                >
                                    Tipo:
                                </label>


                                <div className="relative">

                                    <select
                                        id="tipoReporte"
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

                                        <option>Publicación</option>
                                        <option>Usuario</option>
                                        <option>Compra</option>
                                        <option>Venta</option>
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


                            {/* =========================
                                MOTIVO
                            ========================== */}
                            <div className="mb-7">

                                <label
                                    htmlFor="motivoReporte"
                                    className="
                                        mb-3
                                        block
                                        text-[14px]
                                        font-extrabold
                                        text-[#252429]
                                    "
                                >
                                    Motivo:
                                </label>


                                <div className="relative">

                                    <select
                                        id="motivoReporte"
                                        defaultValue=""
                                        className="
                                            h-[50px]
                                            w-full
                                            appearance-none
                                            rounded-[17px]
                                            border-2
                                            border-[#1593FF]
                                            bg-[#FAFAFA]
                                            px-5
                                            pr-12
                                            text-sm
                                            text-gray-500
                                            shadow-[0_3px_5px_rgba(0,0,0,0.18)]
                                            outline-none
                                        "
                                    >
                                        <option value="" disabled>
                                            Seleccionar
                                        </option>

                                        <option>Contenido inapropiado</option>
                                        <option>Posible fraude</option>
                                        <option>Información falsa</option>
                                        <option>Comportamiento inadecuado</option>
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


                            {/* =========================
                                DESCRIPCIÓN
                            ========================== */}
                            <div className="mb-8">

                                <label
                                    htmlFor="descripcionReporte"
                                    className="
                                        mb-3
                                        block
                                        text-[14px]
                                        font-extrabold
                                        text-[#252429]
                                    "
                                >
                                    Descripción:
                                </label>


                                <textarea
                                    id="descripcionReporte"
                                    rows="6"
                                    className="
                                        min-h-[150px]
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


                            {/* =========================
                                ENVIAR REPORTE
                            ========================== */}
                            <button
                                type="button"
                                className="
                                    flex
                                    h-[58px]
                                    w-full
                                    items-center
                                    justify-center
                                    rounded-[16px]
                                    bg-[#E99597]
                                    text-[16px]
                                    font-extrabold
                                    text-[#252429]
                                    shadow-[0_3px_5px_rgba(0,0,0,0.20)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Enviar Reporte
                            </button>

                        </div>

                    </div>


                    {/* =================================================
                        COLUMNA DERECHA
                        MIS REPORTES
                    ================================================== */}
                    <div>

                        <h1 className="mb-10 text-4xl font-extrabold text-[#1f1f22]">
                            Mis Reportes
                        </h1>


                        {/* TARJETA DE REPORTES */}
                        <div
                            className="
                                min-h-[540px]
                                w-full
                                rounded-[25px]
                                bg-white
                                px-5
                                py-5
                                shadow-[0_4px_10px_rgba(0,0,0,0.20)]
                            "
                        >

                            {/* =========================
                                REPORTE 1
                            ========================== */}
                            <div
                                className="
                                    mb-5
                                    flex
                                    min-h-[86px]
                                    w-full
                                    items-center
                                    justify-between
                                    gap-5
                                    rounded-[25px]
                                    bg-[#FFFDF8]
                                    px-6
                                    py-4
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                "
                            >

                                {/* INFORMACIÓN */}
                                <div>

                                    <h2
                                        className="
                                            text-[15px]
                                            font-extrabold
                                            text-[#252429]
                                        "
                                    >
                                        Publicación Inapropiada
                                    </h2>

                                    <p
                                        className="
                                            mt-1
                                            max-w-[260px]
                                            text-[12px]
                                            font-medium
                                            leading-[16px]
                                            text-[#858585]
                                        "
                                    >
                                        Una publicación fuera de lugar en la pagina
                                    </p>

                                </div>


                                {/* ESTADO */}
                                <span
                                    className="
                                        flex
                                        h-[30px]
                                        min-w-[105px]
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FFF0AD]
                                        px-4
                                        text-[12px]
                                        font-medium
                                        text-[#252429]
                                        shadow-[0_2px_5px_rgba(0,0,0,0.16)]
                                    "
                                >
                                    Pendiente
                                </span>

                            </div>


                            {/* =========================
                                REPORTE 2
                            ========================== */}
                            <div
                                className="
                                    flex
                                    min-h-[86px]
                                    w-full
                                    items-center
                                    justify-between
                                    gap-5
                                    rounded-[25px]
                                    bg-[#FFFDF8]
                                    px-6
                                    py-4
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                "
                            >

                                {/* INFORMACIÓN */}
                                <div>

                                    <h2
                                        className="
                                            text-[15px]
                                            font-extrabold
                                            text-[#252429]
                                        "
                                    >
                                        Posible Fraude
                                    </h2>

                                    <p
                                        className="
                                            mt-1
                                            max-w-[260px]
                                            text-[12px]
                                            font-medium
                                            leading-[16px]
                                            text-[#858585]
                                        "
                                    >
                                        Publicación engañosa para los usuarios
                                    </p>

                                </div>


                                {/* ESTADO */}
                                <span
                                    className="
                                        flex
                                        h-[30px]
                                        min-w-[105px]
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FFF0AD]
                                        px-4
                                        text-[12px]
                                        font-medium
                                        text-[#252429]
                                        shadow-[0_2px_5px_rgba(0,0,0,0.16)]
                                    "
                                >
                                    Pendiente
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}