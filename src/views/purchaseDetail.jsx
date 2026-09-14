import { Link } from "react-router-dom"

export default function PurchaseDetail() {
    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] pb-8 pt-24 px-8 md:pb-12 md:pt-32 md:pr-12 md:pl-32 lg:pl-64 font-sans">

                {/* TÍTULO */}
                <div className="mb-10">
                    <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                        Meta Quest 3
                    </h1>
                </div>


                {/* CONTENIDO PRINCIPAL */}
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-10
                        xl:grid-cols-[0.95fr_1.05fr]
                    "
                >

                    {/* =====================================================
                        SEGUIMIENTO
                    ====================================================== */}
                    <div
                        className="
                            min-h-[620px]
                            w-full
                            rounded-[28px]
                            bg-white
                            px-10
                            py-9
                            shadow-[0_4px_8px_rgba(0,0,0,0.22)]
                        "
                    >

                        <h2 className="mb-12 text-[28px] font-extrabold text-[#252429]">
                            Seguimiento:
                        </h2>


                        {/* CONTENEDOR DEL TIMELINE */}
                        <div className="relative">

                            {/* LÍNEA VERTICAL */}
                            <div
                                className="
                                    absolute
                                    left-[25px]
                                    top-[25px]
                                    h-[315px]
                                    w-[2px]
                                    bg-[#A7A7A7]
                                "
                            />


                            {/* =========================================
                                PASO 1
                            ========================================== */}
                            <div className="relative mb-12 flex items-center gap-6">

                                {/* ICONO */}
                                <div
                                    className="
                                        relative
                                        z-10
                                        flex
                                        h-[52px]
                                        w-[52px]
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#83CBFC]
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-[28px]
                                            w-[28px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            border-[3px]
                                            border-[#252429]
                                        "
                                    >
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4 10L8 14L16 6"
                                                stroke="#252429"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>

                                </div>


                                {/* TEXTO */}
                                <div>

                                    <h3 className="text-[18px] font-extrabold text-[#252429]">
                                        Pago Retenido
                                    </h3>

                                    <p className="mt-1 text-[13px] font-semibold text-[#9A9898]">
                                        20 ago 2026, 4:10 p.m.
                                    </p>

                                </div>

                            </div>


                            {/* =========================================
                                PASO 2
                            ========================================== */}
                            <div className="relative mb-12 flex items-center gap-6">

                                <div
                                    className="
                                        relative
                                        z-10
                                        flex
                                        h-[52px]
                                        w-[52px]
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#83CBFC]
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-[28px]
                                            w-[28px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            border-[3px]
                                            border-[#252429]
                                        "
                                    >
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4 10L8 14L16 6"
                                                stroke="#252429"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>

                                </div>


                                <div>

                                    <h3 className="text-[18px] font-extrabold text-[#252429]">
                                        Material entregado
                                    </h3>

                                    <p className="mt-1 text-[13px] font-semibold text-[#9A9898]">
                                        20 ago 2026, 5:00 p.m.
                                    </p>

                                </div>

                            </div>


                            {/* =========================================
                                PASO 3
                            ========================================== */}
                            <div className="relative mb-12 flex items-center gap-6">

                                <div
                                    className="
                                        relative
                                        z-10
                                        flex
                                        h-[52px]
                                        w-[52px]
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#83CBFC]
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-[28px]
                                            w-[28px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            border-[3px]
                                            border-[#252429]
                                        "
                                    >
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4 10L8 14L16 6"
                                                stroke="#252429"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>

                                </div>


                                <div>

                                    <h3 className="text-[18px] font-extrabold text-[#252429]">
                                        Recepción confirmada
                                    </h3>

                                    <p className="mt-1 text-[13px] font-semibold text-[#9A9898]">
                                        20 ago 2026, 5:03 p.m.
                                    </p>

                                </div>

                            </div>


                            {/* =========================================
                                PASO 4
                            ========================================== */}
                            <div className="relative flex items-center gap-6">

                                <div
                                    className="
                                        relative
                                        z-10
                                        flex
                                        h-[52px]
                                        w-[52px]
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#83CBFC]
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-[28px]
                                            w-[28px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            border-[3px]
                                            border-[#252429]
                                        "
                                    >
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4 10L8 14L16 6"
                                                stroke="#252429"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>

                                </div>


                                <div>

                                    <h3 className="text-[18px] font-extrabold text-[#252429]">
                                        Pago liberado
                                    </h3>

                                    <p className="mt-1 text-[13px] font-semibold text-[#9A9898]">
                                        20 ago 2026, 6:00 p.m.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =====================================================
                        COLUMNA DERECHA
                    ====================================================== */}
                    <div className="flex flex-col gap-6">


                        {/* =================================================
                            RESUMEN DE COMPRA
                        ================================================== */}
                        <div
                            className="
                                w-full
                                rounded-[28px]
                                bg-white
                                px-7
                                py-6
                                shadow-[0_4px_8px_rgba(0,0,0,0.22)]
                            "
                        >

                            {/* PRODUCTO */}
                            <div className="mb-6 flex items-center gap-4">

                                <div
                                    className="
                                        flex
                                        h-[62px]
                                        w-[62px]
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
                                        alt="Meta Quest 3"
                                        className="h-[56px] w-[56px] object-contain"
                                    />
                                </div>


                                <div>

                                    <p className="text-[16px] font-extrabold text-[#252429]">
                                        Meta Quest 3
                                    </p>

                                    <p className="mt-1 text-[13px] font-medium text-[#9A9898]">
                                        $800
                                    </p>

                                </div>

                            </div>


                            {/* DATOS */}
                            <div className="space-y-5">

                                <div className="flex items-center justify-between">

                                    <p className="text-[14px] font-medium text-[#9A9898]">
                                        Comision(10%):
                                    </p>

                                    <p className="text-[15px] font-extrabold text-[#252429]">
                                        $80
                                    </p>

                                </div>


                                <div className="flex items-center justify-between">

                                    <p className="text-[14px] font-medium text-[#9A9898]">
                                        Vendedor recibe:
                                    </p>

                                    <p className="text-[15px] font-extrabold text-[#252429]">
                                        $720
                                    </p>

                                </div>


                                <div className="flex items-center justify-between">

                                    <p className="text-[14px] font-medium text-[#9A9898]">
                                        Estado pago
                                    </p>


                                    <span
                                        className="
                                            flex
                                            h-[30px]
                                            min-w-[115px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#DDF3E8]
                                            px-4
                                            text-[12px]
                                            font-medium
                                            text-[#488669]
                                            shadow-[0_2px_5px_rgba(0,0,0,0.15)]
                                        "
                                    >
                                        Liberado
                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            PUNTO DE ENCUENTRO
                        ================================================== */}
                        <div
                            className="
                                flex
                                min-h-[130px]
                                w-full
                                items-center
                                justify-between
                                gap-5
                                rounded-[28px]
                                bg-[#FAE568]
                                px-8
                                py-5
                            "
                        >

                            <div>

                                <h2 className="text-[21px] font-extrabold text-[#252429]">
                                    Punto de Encuentro
                                </h2>

                                <p className="mt-3 text-[16px] font-extrabold text-[#252429]">
                                    Biblioteca Universitaria
                                </p>

                                <p className="mt-1 text-[13px] font-semibold text-[#8B845F]">
                                    Ciudad Universidad
                                </p>

                            </div>


                            {/* ICONO UBICACIÓN */}
                            <div className="shrink-0">

                                <svg
                                    width="100"
                                    height="90"
                                    viewBox="0 0 100 90"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M50 7C35 7 24 19 24 34C24 54 50 72 50 72C50 72 76 54 76 34C76 19 65 7 50 7Z"
                                        fill="#202C62"
                                    />

                                    <circle
                                        cx="50"
                                        cy="34"
                                        r="9"
                                        fill="#FAE568"
                                    />

                                    <path
                                        d="M18 62C9 66 7 72 11 77C18 84 36 85 49 85"
                                        stroke="#202C62"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                    />

                                    <path
                                        d="M82 62C91 66 93 72 89 77C82 84 64 85 51 85"
                                        stroke="#202C62"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                    />

                                    <path
                                        d="M43 79L51 85L44 91"
                                        stroke="#202C62"
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                            </div>

                        </div>


                        {/* =================================================
                            CALIFICACIÓN
                        ================================================== */}
                        <div
                            className="
                                w-full
                                rounded-[28px]
                                bg-white
                                px-7
                                py-5
                                shadow-[0_4px_8px_rgba(0,0,0,0.22)]
                            "
                        >

                            <h2 className="mb-4 text-[22px] font-extrabold text-[#252429]">
                                Calificación:
                            </h2>


                            <div
                                className="
                                    flex
                                    min-h-[70px]
                                    items-center
                                    justify-between
                                    rounded-[23px]
                                    bg-[#F6F6F6]
                                    px-5
                                    py-3
                                "
                            >

                                {/* USUARIO */}
                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            flex
                                            h-[42px]
                                            w-[42px]
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-black
                                        "
                                    >

                                        <svg
                                            width="30"
                                            height="30"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="12"
                                                cy="8"
                                                r="4"
                                                fill="white"
                                            />

                                            <path
                                                d="M4.5 20C5.2 15.9 8 14 12 14C16 14 18.8 15.9 19.5 20"
                                                fill="white"
                                            />
                                        </svg>

                                    </div>


                                    <div>

                                        <p className="text-[13px] font-extrabold text-[#252429]">
                                            Maria Lopez
                                        </p>

                                        <p className="mt-1 text-[10px] font-medium text-[#8E8E8E]">
                                            UANL - FIME
                                        </p>

                                    </div>

                                </div>


                                {/* ESTRELLA */}
                                <div className="flex items-center gap-3">

                                    <svg
                                        width="37"
                                        height="37"
                                        viewBox="0 0 24 24"
                                        fill="black"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                        />
                                    </svg>


                                    <span className="text-[26px] font-extrabold text-[#252429]">
                                        4.5
                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            REPORTAR
                        ================================================== */}
                        <Link
                            to="/home/reports"
                            className="
                                flex
                                min-h-[72px]
                                w-full
                                items-center
                                justify-center
                                rounded-[17px]
                                bg-[#E99597]
                                text-[18px]
                                font-extrabold
                                text-[#252429]
                                shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                transition
                                hover:brightness-95
                            "
                        >
                            Reportar Problema
                        </Link>

                    </div>

                </div>

            </div>
        </>
    )
}