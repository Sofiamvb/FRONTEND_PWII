import { Link } from "react-router-dom"

export default function Checkout() {
    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] pb-8 pt-24 px-8 md:pb-12 md:pt-28 md:pr-12 md:pl-32 lg:pl-64 font-sans">

                {/* VOLVER */}
                <div className="mb-8">
                    <Link
                        to="/home/productDetail"
                        className="
                            inline-flex
                            items-center
                            gap-3
                            text-[15px]
                            font-medium
                            text-[#8B8B8B]
                            transition
                            hover:text-[#252429]
                        "
                    >
                        <svg
                            width="32"
                            height="20"
                            viewBox="0 0 32 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 3L3 10L10 17"
                                stroke="#252429"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            <path
                                d="M4 10H29"
                                stroke="#252429"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>

                        Volver
                    </Link>
                </div>


                {/* TÍTULO */}
                <div className="mb-10">
                    <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                        Finalizar Compra
                    </h1>
                </div>


                {/* CONTENIDO */}
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-8
                        xl:grid-cols-[1.55fr_0.9fr]
                    "
                >

                    {/* =====================================================
                        PAGO
                    ====================================================== */}
                    <div
                        className="
                            min-h-[560px]
                            w-full
                            rounded-[28px]
                            bg-white
                            px-10
                            py-8
                            shadow-[0_4px_8px_rgba(0,0,0,0.22)]
                        "
                    >

                        <h2 className="mb-9 text-[22px] font-extrabold text-[#252429]">
                            Realizar Pago
                        </h2>


                        {/* NOMBRE */}
                        <div className="mb-7">

                            <label
                                htmlFor="nombreTitular"
                                className="mb-3 block text-[16px] font-extrabold text-[#252429]"
                            >
                                Nombre del titular:
                            </label>

                            <input
                                id="nombreTitular"
                                type="text"
                                placeholder="Ej. Adrian Pérez"
                                className="
                                    h-[55px]
                                    w-full
                                    rounded-[17px]
                                    border
                                    border-gray-100
                                    bg-[#FAFAFA]
                                    px-5
                                    text-[14px]
                                    text-[#252429]
                                    shadow-[0_3px_5px_rgba(0,0,0,0.20)]
                                    outline-none
                                    placeholder:text-[#A1A1A1]
                                "
                            />

                        </div>


                        {/* NÚMERO DE TARJETA */}
                        <div className="mb-7">

                            <label
                                htmlFor="numeroTarjeta"
                                className="mb-3 block text-[16px] font-extrabold text-[#252429]"
                            >
                                Numero de Tarjeta:
                            </label>

                            <input
                                id="numeroTarjeta"
                                type="text"
                                placeholder="4242 4242 4242 4242"
                                className="
                                    h-[55px]
                                    w-full
                                    rounded-[17px]
                                    border
                                    border-gray-100
                                    bg-[#FAFAFA]
                                    px-5
                                    text-[14px]
                                    text-[#252429]
                                    shadow-[0_3px_5px_rgba(0,0,0,0.20)]
                                    outline-none
                                    placeholder:text-[#A1A1A1]
                                "
                            />

                        </div>


                        {/* VENCIMIENTO Y CVV */}
                        <div className="mb-11 grid grid-cols-1 gap-8 sm:grid-cols-2">

                            {/* VENCIMIENTO */}
                            <div>

                                <label
                                    htmlFor="vencimiento"
                                    className="mb-3 block text-[16px] font-extrabold text-[#252429]"
                                >
                                    Año de Vencimiento:
                                </label>

                                <input
                                    id="vencimiento"
                                    type="text"
                                    placeholder="MM/AAAA"
                                    className="
                                        h-[55px]
                                        w-full
                                        rounded-[17px]
                                        border
                                        border-gray-100
                                        bg-[#FAFAFA]
                                        px-5
                                        text-center
                                        text-[14px]
                                        text-[#252429]
                                        shadow-[0_3px_5px_rgba(0,0,0,0.20)]
                                        outline-none
                                        placeholder:text-[#A1A1A1]
                                    "
                                />

                            </div>


                            {/* CVV */}
                            <div>

                                <label
                                    htmlFor="cvv"
                                    className="mb-3 block text-[16px] font-extrabold text-[#252429]"
                                >
                                    CVV:
                                </label>

                                <input
                                    id="cvv"
                                    type="text"
                                    className="
                                        h-[55px]
                                        w-full
                                        rounded-[17px]
                                        border
                                        border-gray-100
                                        bg-[#FAFAFA]
                                        px-5
                                        text-[14px]
                                        text-[#252429]
                                        shadow-[0_3px_5px_rgba(0,0,0,0.20)]
                                        outline-none
                                    "
                                />

                            </div>

                        </div>


                        {/* CONFIRMAR */}
                        <button
                            type="button"
                            className="
                                mx-auto
                                flex
                                h-[62px]
                                w-full
                                max-w-[420px]
                                items-center
                                justify-center
                                rounded-[16px]
                                bg-[#FAE568]
                                text-[24px]
                                font-extrabold
                                text-[#252429]
                                shadow-[0_4px_6px_rgba(0,0,0,0.25)]
                                transition
                                hover:brightness-95
                            "
                        >
                            Confirmar Compra
                        </button>

                    </div>


                    {/* =====================================================
                        RESUMEN DE COMPRA
                    ====================================================== */}
                    <div
                        className="
                            min-h-[560px]
                            w-full
                            rounded-[28px]
                            bg-white
                            px-7
                            py-8
                            shadow-[0_4px_8px_rgba(0,0,0,0.22)]
                        "
                    >

                        {/* PRODUCTO */}
                        <div className="flex items-center gap-4">

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
                                    bg-[#FAE568]
                                "
                            >
                                <img
                                    src="/img/Calculadora.png"
                                    alt="Calculadora Científica"
                                    className="h-[52px] w-[52px] object-contain"
                                />
                            </div>


                            <div>

                                <p className="text-[15px] font-extrabold text-[#252429]">
                                    Calculadora Científica
                                </p>

                                <p className="mt-1 text-[12px] font-medium text-[#9A9898]">
                                    Cafetería FOD - Usado
                                </p>

                            </div>

                        </div>


                        {/* SEPARADOR */}
                        <div className="my-6 h-[2px] w-full bg-[#E1E1DC]" />


                        {/* PRECIO */}
                        <div className="mb-5 flex items-center justify-between">

                            <p className="text-[16px] font-medium text-[#252429]">
                                Precio
                            </p>

                            <p className="text-[15px] font-extrabold text-[#252429]">
                                $650
                            </p>

                        </div>


                        {/* COMISIÓN */}
                        <div className="mb-5 flex items-center justify-between">

                            <p className="text-[16px] font-medium text-[#252429]">
                                Comisión de Plataforma
                            </p>

                            <p className="text-[15px] font-extrabold text-[#252429]">
                                10%
                            </p>

                        </div>


                        {/* EXPLICACIÓN */}
                        <p className="text-[12px] font-medium leading-[18px] text-[#9A9898]">
                            La comisión se descuenta del monto que recibe el vendedor;
                            el comprador paga el precio mostrado
                        </p>


                        {/* SEPARADOR */}
                        <div className="my-6 h-[2px] w-full bg-[#E1E1DC]" />


                        {/* TOTAL */}
                        <div className="flex items-center justify-between">

                            <p className="text-[21px] font-extrabold text-[#252429]">
                                Total a pagar:
                            </p>

                            <p className="text-[21px] font-extrabold text-[#252429]">
                                $650
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}