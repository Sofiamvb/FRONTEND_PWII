export default function AdminProductos() {
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
                    CONTENEDOR PRINCIPAL
                ====================================================== */}
                <div
                    className="
                        w-full
                        overflow-hidden
                        bg-[#FFFDF8]
                        shadow-[0_3px_6px_rgba(0,0,0,0.15)]
                    "
                >

                    {/* =================================================
                        ENCABEZADO DE PRODUCTOS
                    ================================================== */}
                    <div
                        className="
                            flex
                            min-h-[70px]
                            flex-col
                            gap-5
                            border-b
                            border-[#D7D7D0]
                            px-8
                            py-4
                            md:flex-row
                            md:items-center
                            md:justify-between
                        "
                    >

                        <h2 className="text-[27px] font-extrabold text-[#252429]">
                            Productos Registrados
                        </h2>


                        {/* FILTRO */}
                        <div className="w-full md:w-[300px]">

                            <input
                                type="text"
                                placeholder="FILTRO"
                                className="
                                    h-[44px]
                                    w-full
                                    rounded-full
                                    border
                                    border-gray-100
                                    bg-white
                                    px-6
                                    text-[13px]
                                    text-[#252429]
                                    shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                    outline-none
                                    placeholder:text-[#A5A5A5]
                                "
                            />

                        </div>

                    </div>


                    {/* =================================================
                        TABLA
                    ================================================== */}
                    <div className="w-full overflow-x-auto">

                        <div className="min-w-[1100px] w-full">

                            {/* ENCABEZADO TABLA */}
                            <div
                                className="
                                    grid
                                    min-h-[55px]
                                    grid-cols-[2.1fr_1.1fr_0.8fr_1.3fr_1.35fr_1.8fr]
                                    items-center
                                    bg-[#FFF0A3]
                                    px-7
                                    text-[#252429]
                                "
                            >
                                <span className="text-[14px] font-extrabold">
                                    Producto
                                </span>

                                <span className="text-[14px] font-extrabold">
                                    Estudiante
                                </span>

                                <span className="text-[14px] font-extrabold">
                                    Precio
                                </span>

                                <span className="text-[14px] font-extrabold">
                                    Aprobación
                                </span>

                                <span className="text-[14px] font-extrabold">
                                    Disponibilidad
                                </span>

                                <span className="text-[14px] font-extrabold">
                                    Acciones
                                </span>
                            </div>


                            {/* =================================================
                                PRODUCTO 1
                            ================================================== */}
                            <div
                                className="
                                    grid
                                    min-h-[82px]
                                    grid-cols-[2.1fr_1.1fr_0.8fr_1.3fr_1.35fr_1.8fr]
                                    items-center
                                    border-b
                                    border-[#D9D9D3]
                                    px-7
                                    text-[#252429]
                                "
                            >

                                {/* PRODUCTO */}
                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            flex
                                            h-[55px]
                                            w-[55px]
                                            shrink-0
                                            items-center
                                            justify-center
                                            overflow-hidden
                                            rounded-full
                                            bg-[#FAE568]
                                        "
                                    >
                                        <img
                                            src="/img/microcontrolador.png"
                                            alt="Microcontrolador"
                                            className="h-[48px] w-[48px] object-contain"
                                        />
                                    </div>


                                    <div>

                                        <p className="text-[14px] font-extrabold">
                                            Microcontrolador
                                        </p>

                                        <p className="mt-1 text-[11px] font-medium text-[#999999]">
                                            Estacion Universidad - Usado
                                        </p>

                                    </div>

                                </div>


                                {/* ESTUDIANTE */}
                                <p className="text-[13px] font-medium">
                                    Mariana Lopez
                                </p>


                                {/* PRECIO */}
                                <p className="text-[13px] font-medium">
                                    $500
                                </p>


                                {/* APROBACIÓN */}
                                <div
                                    className="
                                        flex
                                        h-[31px]
                                        w-[110px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#DDF3E8]
                                        text-[12px]
                                        font-medium
                                        shadow-[0_2px_5px_rgba(0,0,0,0.15)]
                                    "
                                >
                                    Aprobado
                                </div>


                                {/* DISPONIBILIDAD */}
                                <div
                                    className="
                                        flex
                                        h-[31px]
                                        w-[115px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#DDF3E8]
                                        text-[12px]
                                        font-medium
                                        shadow-[0_2px_5px_rgba(0,0,0,0.15)]
                                    "
                                >
                                    Disponible
                                </div>


                                {/* ACCIONES */}
                                <div className="flex items-center gap-3">

                                    <button
                                        type="button"
                                        className="
                                            flex
                                            h-[31px]
                                            w-[90px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#FAE568]
                                            text-[12px]
                                            font-medium
                                            text-[#252429]
                                            shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                            transition
                                            hover:brightness-95
                                        "
                                    >
                                        Disponible
                                    </button>


                                    <button
                                        type="button"
                                        className="
                                            flex
                                            h-[31px]
                                            w-[86px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#FF797C]
                                            text-[12px]
                                            font-medium
                                            text-[#252429]
                                            shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                            transition
                                            hover:brightness-95
                                        "
                                    >
                                        Rechazar
                                    </button>

                                </div>

                            </div>


                            {/* =================================================
                                PRODUCTO 2
                            ================================================== */}
                            <div
                                className="
                                    grid
                                    min-h-[82px]
                                    grid-cols-[2.1fr_1.1fr_0.8fr_1.3fr_1.35fr_1.8fr]
                                    items-center
                                    border-b
                                    border-[#D9D9D3]
                                    px-7
                                    text-[#252429]
                                "
                            >

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            flex
                                            h-[55px]
                                            w-[55px]
                                            shrink-0
                                            items-center
                                            justify-center
                                            overflow-hidden
                                            rounded-full
                                            bg-[#83CBFC]
                                        "
                                    >
                                        <img
                                            src="/img/meta_quest.png"
                                            alt="Visor de RV"
                                            className="h-[50px] w-[50px] object-contain"
                                        />
                                    </div>


                                    <div>

                                        <p className="text-[14px] font-extrabold">
                                            Visor de RV
                                        </p>

                                        <p className="mt-1 text-[11px] font-medium text-[#999999]">
                                            Ciudad Universitaria - Usado
                                        </p>

                                    </div>

                                </div>


                                <p className="text-[13px] font-medium">
                                    Alan Salas
                                </p>


                                <p className="text-[13px] font-medium">
                                    $800
                                </p>


                                <div
                                    className="
                                        flex
                                        h-[31px]
                                        w-[110px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#DDF3E8]
                                        text-[12px]
                                        font-medium
                                        shadow-[0_2px_5px_rgba(0,0,0,0.15)]
                                    "
                                >
                                    Aprobado
                                </div>


                                <div
                                    className="
                                        flex
                                        h-[31px]
                                        w-[115px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FFF0AD]
                                        text-[12px]
                                        font-medium
                                        shadow-[0_2px_5px_rgba(0,0,0,0.15)]
                                    "
                                >
                                    Reservado
                                </div>


                                <div className="flex items-center gap-3">

                                    <button
                                        type="button"
                                        className="
                                            flex
                                            h-[31px]
                                            w-[90px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#FAE568]
                                            text-[12px]
                                            font-medium
                                            text-[#252429]
                                            shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                            transition
                                            hover:brightness-95
                                        "
                                    >
                                        Disponible
                                    </button>


                                    <button
                                        type="button"
                                        className="
                                            flex
                                            h-[31px]
                                            w-[86px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#FF797C]
                                            text-[12px]
                                            font-medium
                                            text-[#252429]
                                            shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                            transition
                                            hover:brightness-95
                                        "
                                    >
                                        Rechazar
                                    </button>

                                </div>

                            </div>


                            {/* =================================================
                                PRODUCTO 3
                            ================================================== */}
                            <div
                                className="
                                    grid
                                    min-h-[82px]
                                    grid-cols-[2.1fr_1.1fr_0.8fr_1.3fr_1.35fr_1.8fr]
                                    items-center
                                    border-b
                                    border-[#D9D9D3]
                                    px-7
                                    text-[#252429]
                                "
                            >

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            flex
                                            h-[55px]
                                            w-[55px]
                                            shrink-0
                                            items-center
                                            justify-center
                                            overflow-hidden
                                            rounded-full
                                            bg-[#FAE568]
                                        "
                                    >
                                        <img
                                            src="/img/Calculadora.png"
                                            alt="Calculadora Científica"
                                            className="h-[48px] w-[48px] object-contain"
                                        />
                                    </div>


                                    <div>

                                        <p className="text-[14px] font-extrabold">
                                            Calculadora Científica
                                        </p>

                                        <p className="mt-1 text-[11px] font-medium text-[#999999]">
                                            Cafeteria FOD - Usado
                                        </p>

                                    </div>

                                </div>


                                <p className="text-[13px] font-medium">
                                    Sofia Blanco
                                </p>


                                <p className="text-[13px] font-medium">
                                    $650
                                </p>


                                <div
                                    className="
                                        flex
                                        h-[31px]
                                        w-[110px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#DDF3E8]
                                        text-[12px]
                                        font-medium
                                        shadow-[0_2px_5px_rgba(0,0,0,0.15)]
                                    "
                                >
                                    Aprobado
                                </div>


                                <div
                                    className="
                                        flex
                                        h-[31px]
                                        w-[115px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#F9DCDD]
                                        text-[12px]
                                        font-medium
                                        shadow-[0_2px_5px_rgba(0,0,0,0.15)]
                                    "
                                >
                                    No disponible
                                </div>


                                <div className="flex items-center gap-3">

                                    <button
                                        type="button"
                                        className="
                                            flex
                                            h-[31px]
                                            w-[90px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#FAE568]
                                            text-[12px]
                                            font-medium
                                            text-[#252429]
                                            shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                            transition
                                            hover:brightness-95
                                        "
                                    >
                                        Disponible
                                    </button>


                                    <button
                                        type="button"
                                        className="
                                            flex
                                            h-[31px]
                                            w-[86px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#FF797C]
                                            text-[12px]
                                            font-medium
                                            text-[#252429]
                                            shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                            transition
                                            hover:brightness-95
                                        "
                                    >
                                        Rechazar
                                    </button>

                                </div>

                            </div>


                            {/* =================================================
                                PRODUCTO 4
                            ================================================== */}
                            <div
                                className="
                                    grid
                                    min-h-[82px]
                                    grid-cols-[2.1fr_1.1fr_0.8fr_1.3fr_1.35fr_1.8fr]
                                    items-center
                                    border-b
                                    border-[#D9D9D3]
                                    px-7
                                    text-[#252429]
                                "
                            >

                                <div className="flex items-center gap-4">

                                    {/* TABLETA GRÁFICA */}
                                    <div
                                        className="
                                            relative
                                            flex
                                            h-[55px]
                                            w-[55px]
                                            shrink-0
                                            items-center
                                            justify-center
                                            overflow-hidden
                                            rounded-full
                                            bg-[#83CBFC]
                                        "
                                    >
                                        <div
                                            className="
                                                h-[27px]
                                                w-[40px]
                                                -rotate-[18deg]
                                                rounded-[3px]
                                                bg-[#252429]
                                                shadow-md
                                            "
                                        >
                                            <div className="ml-1 mt-1 h-[1px] w-[29px] bg-[#55545A]" />
                                        </div>
                                    </div>


                                    <div>

                                        <p className="text-[14px] font-extrabold">
                                            Tableta Gráfica
                                        </p>

                                        <p className="mt-1 text-[11px] font-medium text-[#999999]">
                                            Cafeteria FCC - Usado
                                        </p>

                                    </div>

                                </div>


                                <p className="text-[13px] font-medium">
                                    Alejandro
                                </p>


                                <p className="text-[13px] font-medium">
                                    $900
                                </p>


                                <div
                                    className="
                                        flex
                                        h-[31px]
                                        w-[110px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FFF0AD]
                                        text-[12px]
                                        font-medium
                                        shadow-[0_2px_5px_rgba(0,0,0,0.15)]
                                    "
                                >
                                    Pendiente
                                </div>


                                <div
                                    className="
                                        flex
                                        h-[31px]
                                        w-[115px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#DDF3E8]
                                        text-[12px]
                                        font-medium
                                        shadow-[0_2px_5px_rgba(0,0,0,0.15)]
                                    "
                                >
                                    Disponible
                                </div>


                                <div className="flex items-center gap-3">

                                    <button
                                        type="button"
                                        className="
                                            flex
                                            h-[31px]
                                            w-[90px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#FAE568]
                                            text-[12px]
                                            font-medium
                                            text-[#252429]
                                            shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                            transition
                                            hover:brightness-95
                                        "
                                    >
                                        Disponible
                                    </button>


                                    <button
                                        type="button"
                                        className="
                                            flex
                                            h-[31px]
                                            w-[86px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#FF797C]
                                            text-[12px]
                                            font-medium
                                            text-[#252429]
                                            shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                            transition
                                            hover:brightness-95
                                        "
                                    >
                                        Rechazar
                                    </button>

                                </div>

                            </div>


                            {/* =================================================
                                PRODUCTO 5
                            ================================================== */}
                            <div
                                className="
                                    grid
                                    min-h-[82px]
                                    grid-cols-[2.1fr_1.1fr_0.8fr_1.3fr_1.35fr_1.8fr]
                                    items-center
                                    px-7
                                    text-[#252429]
                                "
                            >

                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            flex
                                            h-[55px]
                                            w-[55px]
                                            shrink-0
                                            items-center
                                            justify-center
                                            overflow-hidden
                                            rounded-full
                                            bg-[#FAE568]
                                        "
                                    >
                                        <img
                                            src="/img/microcontrolador.png"
                                            alt="Microcontrolador"
                                            className="h-[48px] w-[48px] object-contain"
                                        />
                                    </div>


                                    <div>

                                        <p className="text-[14px] font-extrabold">
                                            Microcontrolador
                                        </p>

                                        <p className="mt-1 text-[11px] font-medium text-[#999999]">
                                            Cafeteria FCFM - Usado
                                        </p>

                                    </div>

                                </div>


                                <p className="text-[13px] font-medium">
                                    Mariana López
                                </p>


                                <p className="text-[13px] font-medium">
                                    $500
                                </p>


                                <div
                                    className="
                                        flex
                                        h-[31px]
                                        w-[110px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#DDF3E8]
                                        text-[12px]
                                        font-medium
                                        shadow-[0_2px_5px_rgba(0,0,0,0.15)]
                                    "
                                >
                                    Aprobado
                                </div>


                                <div
                                    className="
                                        flex
                                        h-[31px]
                                        w-[115px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#DDF3E8]
                                        text-[12px]
                                        font-medium
                                        shadow-[0_2px_5px_rgba(0,0,0,0.15)]
                                    "
                                >
                                    Disponible
                                </div>


                                <div className="flex items-center gap-3">

                                    <button
                                        type="button"
                                        className="
                                            flex
                                            h-[31px]
                                            w-[90px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#FAE568]
                                            text-[12px]
                                            font-medium
                                            text-[#252429]
                                            shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                            transition
                                            hover:brightness-95
                                        "
                                    >
                                        Disponible
                                    </button>


                                    <button
                                        type="button"
                                        className="
                                            flex
                                            h-[31px]
                                            w-[86px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#FF797C]
                                            text-[12px]
                                            font-medium
                                            text-[#252429]
                                            shadow-[0_2px_5px_rgba(0,0,0,0.18)]
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

            </div>
        </>
    )
}