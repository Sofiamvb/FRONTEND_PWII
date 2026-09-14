import { Link } from "react-router-dom"

export default function Sales() {
    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] pb-8 pt-24 px-8 md:pb-12 md:pt-32 md:pr-12 md:pl-32 lg:pl-64 font-sans">

                {/* TÍTULO */}
                <div className="mb-10">
                    <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                        Mis Ventas
                    </h1>
                </div>


                {/* TABLA */}
                <div className="row mt-5">

                    <div className="w-full overflow-x-auto">

                        <div className="min-w-[1050px] w-full overflow-hidden bg-[#FFFDF8] shadow-[0_3px_6px_rgba(0,0,0,0.20)]">

                            {/* ENCABEZADO */}
                            <div
                                className="
                                    grid
                                    grid-cols-[2.3fr_1.25fr_0.8fr_1fr_1.55fr_0.65fr]
                                    items-center
                                    min-h-[68px]
                                    bg-[#F9E67D]
                                    px-8
                                    text-[17px]
                                    font-extrabold
                                    text-[#252429]
                                "
                            >
                                <span>Producto</span>
                                <span>Comprador</span>
                                <span>Precio</span>
                                <span>Estado</span>
                                <span>Fecha</span>
                                <span></span>
                            </div>


                            {/* ================= VENTA 1 ================= */}
                            <div
                                className="
                                    grid
                                    grid-cols-[2.3fr_1.25fr_0.8fr_1fr_1.55fr_0.65fr]
                                    items-center
                                    min-h-[88px]
                                    mx-8
                                    border-b
                                    border-[#D9D9D3]
                                    text-[#252429]
                                "
                            >

                                {/* PRODUCTO */}
                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            flex
                                            h-[58px]
                                            w-[58px]
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
                                            className="h-[50px] w-[50px] object-contain"
                                        />
                                    </div>


                                    <div className="leading-tight">

                                        <p className="text-[15px] font-extrabold">
                                            Microcontrolador
                                        </p>

                                        <p className="mt-1.5 text-[12px] font-medium text-[#9A9898]">
                                            Estacion Universidad - Usado
                                        </p>

                                    </div>

                                </div>


                                {/* COMPRADOR */}
                                <p className="text-[14px] font-medium">
                                    Mariana Lopez
                                </p>


                                {/* PRECIO */}
                                <p className="text-[14px] font-medium">
                                    $500
                                </p>


                                {/* ESTADO */}
                                <div
                                    className="
                                        flex
                                        h-[31px]
                                        w-[105px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#BDE5F8]
                                        text-[13px]
                                        font-medium
                                        shadow-[0_2px_5px_rgba(0,0,0,0.14)]
                                    "
                                >
                                    Entregado
                                </div>


                                {/* FECHA */}
                                <p className="whitespace-nowrap text-[13px] font-medium">
                                    3 sep 2026, 1:20 p.m.
                                </p>


                                {/* ABRIR */}
                                <Link
                                    to="/home/sales/detail"
                                    className="
                                        flex
                                        h-[31px]
                                        w-[62px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FAE568]
                                        text-[13px]
                                        font-medium
                                        text-[#252429]
                                        shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Abrir
                                </Link>

                            </div>


                            {/* ================= VENTA 2 ================= */}
                            <div
                                className="
                                    grid
                                    grid-cols-[2.3fr_1.25fr_0.8fr_1fr_1.55fr_0.65fr]
                                    items-center
                                    min-h-[88px]
                                    mx-8
                                    border-b
                                    border-[#D9D9D3]
                                    text-[#252429]
                                "
                            >

                                {/* PRODUCTO */}
                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            flex
                                            h-[58px]
                                            w-[58px]
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
                                            className="h-[51px] w-[51px] object-contain"
                                        />
                                    </div>


                                    <div className="leading-tight">

                                        <p className="text-[15px] font-extrabold">
                                            Visor de RV
                                        </p>

                                        <p className="mt-1.5 text-[12px] font-medium text-[#9A9898]">
                                            Ciudad Universitaria - Usado
                                        </p>

                                    </div>

                                </div>


                                {/* COMPRADOR */}
                                <p className="text-[14px] font-medium">
                                    Sofia Blanco
                                </p>


                                {/* PRECIO */}
                                <p className="text-[14px] font-medium">
                                    $800
                                </p>


                                {/* ESTADO */}
                                <div
                                    className="
                                        flex
                                        h-[31px]
                                        w-[105px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#BDE5F8]
                                        text-[13px]
                                        font-medium
                                        shadow-[0_2px_5px_rgba(0,0,0,0.14)]
                                    "
                                >
                                    Pendiente
                                </div>


                                {/* FECHA */}
                                <p className="whitespace-nowrap text-[13px] font-medium">
                                    3 sep 2026, 1:20 p.m.
                                </p>


                                {/* ABRIR */}
                                <Link
                                    to="/home/sales/detail"
                                    className="
                                        flex
                                        h-[31px]
                                        w-[62px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FAE568]
                                        text-[13px]
                                        font-medium
                                        text-[#252429]
                                        shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Abrir
                                </Link>

                            </div>


                            {/* ================= VENTA 3 ================= */}
                            <div
                                className="
                                    grid
                                    grid-cols-[2.3fr_1.25fr_0.8fr_1fr_1.55fr_0.65fr]
                                    items-center
                                    min-h-[88px]
                                    mx-8
                                    border-b
                                    border-[#D9D9D3]
                                    text-[#252429]
                                "
                            >

                                {/* PRODUCTO */}
                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            flex
                                            h-[58px]
                                            w-[58px]
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
                                            className="h-[50px] w-[50px] object-contain"
                                        />
                                    </div>


                                    <div className="leading-tight">

                                        <p className="text-[15px] font-extrabold">
                                            Calculadora Científica
                                        </p>

                                        <p className="mt-1.5 text-[12px] font-medium text-[#9A9898]">
                                            Cafeteria FOD - Usado
                                        </p>

                                    </div>

                                </div>


                                {/* COMPRADOR */}
                                <p className="text-[14px] font-medium">
                                    Leonardo García
                                </p>


                                {/* PRECIO */}
                                <p className="text-[14px] font-medium">
                                    $650
                                </p>


                                {/* ESTADO */}
                                <div
                                    className="
                                        flex
                                        h-[31px]
                                        w-[105px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#BDE5F8]
                                        text-[13px]
                                        font-medium
                                        shadow-[0_2px_5px_rgba(0,0,0,0.14)]
                                    "
                                >
                                    Pendiente
                                </div>


                                {/* FECHA */}
                                <p className="whitespace-nowrap text-[13px] font-medium">
                                    3 sep 2026, 1:20 p.m.
                                </p>


                                {/* ABRIR */}
                                <Link
                                    to="/home/sales/detail"
                                    className="
                                        flex
                                        h-[31px]
                                        w-[62px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FAE568]
                                        text-[13px]
                                        font-medium
                                        text-[#252429]
                                        shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Abrir
                                </Link>

                            </div>


                            {/* ================= VENTA 4 ================= */}
                            <div
                                className="
                                    grid
                                    grid-cols-[2.3fr_1.25fr_0.8fr_1fr_1.55fr_0.65fr]
                                    items-center
                                    min-h-[88px]
                                    mx-8
                                    text-[#252429]
                                "
                            >

                                {/* PRODUCTO */}
                                <div className="flex items-center gap-4">

                                    <div
                                        className="
                                            relative
                                            flex
                                            h-[58px]
                                            w-[58px]
                                            shrink-0
                                            items-center
                                            justify-center
                                            overflow-hidden
                                            rounded-full
                                            bg-[#83CBFC]
                                        "
                                    >

                                        {/* Tableta gráfica dibujada con CSS */}
                                        <div
                                            className="
                                                h-[29px]
                                                w-[42px]
                                                -rotate-[18deg]
                                                rounded-[3px]
                                                bg-[#252429]
                                                shadow-md
                                            "
                                        >
                                            <div className="ml-1 mt-1 h-[1px] w-[31px] bg-[#55545A]" />
                                        </div>

                                    </div>


                                    <div className="leading-tight">

                                        <p className="text-[15px] font-extrabold">
                                            Tableta Gráfica
                                        </p>

                                        <p className="mt-1.5 text-[12px] font-medium text-[#9A9898]">
                                            Cafeteria FCC - Usado
                                        </p>

                                    </div>

                                </div>


                                {/* COMPRADOR */}
                                <p className="text-[14px] font-medium">
                                    Dante Omar
                                </p>


                                {/* PRECIO */}
                                <p className="text-[14px] font-medium">
                                    $900
                                </p>


                                {/* ESTADO */}
                                <div
                                    className="
                                        flex
                                        h-[31px]
                                        w-[105px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#BDE5F8]
                                        text-[13px]
                                        font-medium
                                        shadow-[0_2px_5px_rgba(0,0,0,0.14)]
                                    "
                                >
                                    Entregado
                                </div>


                                {/* FECHA */}
                                <p className="whitespace-nowrap text-[13px] font-medium">
                                    3 sep 2026, 1:20 p.m.
                                </p>


                                {/* ABRIR */}
                                <Link
                                    to="/home/sales/detail"
                                    className="
                                        flex
                                        h-[31px]
                                        w-[62px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FAE568]
                                        text-[13px]
                                        font-medium
                                        text-[#252429]
                                        shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                        transition
                                        hover:brightness-95
                                    "
                                >
                                    Abrir
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}