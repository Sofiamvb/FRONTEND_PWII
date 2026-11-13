export default function VerificationAdmin() {
    return (
        <>

            <div
                className="
                    w-full
                    pb-12
                    font-sans
                "
            >

                <div className="mb-8 px-5">

                    <h1
                        className="
                            text-3xl
                            font-extrabold
                            text-[#1f1f22]
                        "
                    >
                        Administración de UniMarket
                    </h1>

                </div>


                <div
                    className="
                        mx-4
                        min-h-[430px]
                        bg-[#FFFDF8]
                        px-7
                        py-7
                    "
                >

                    <div
                        className="
                            mb-8
                            flex
                            items-center
                            justify-between
                        "
                    >

                        <h2
                            className="
                                text-2xl
                                font-extrabold
                                text-[#252429]
                            "
                        >
                            Verificaciones pendientes
                        </h2>


                        <div className="relative">

                            <select
                                className="
                                    appearance-none
                                    w-[220px]
                                    rounded-full
                                    border
                                    border-gray-100
                                    bg-white
                                    py-2.5
                                    pl-5
                                    pr-10
                                    text-sm
                                    text-gray-400
                                    shadow-[0_2px_5px_rgba(0,0,0,0.20)]
                                    outline-none
                                    focus:border-gray-300
                                "
                            >

                                <option>FILTRO</option>
                                <option>Más reciente</option>
                                <option>Más antiguo</option>
                                <option>Universidad</option>

                            </select>


                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    right-4
                                    top-1/2
                                    -translate-y-1/2
                                "
                            >

                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >

                                    <path
                                        d="
                                            M10.3087 13.196
                                            L15.6668 7.67064
                                            C16.0011 7.32586 15.7984 6.66675 15.3581 6.66675
                                            H4.64194
                                            C4.2016 6.66675 3.99893 7.32586 4.33327 7.67064
                                            L9.69135 13.196
                                            C9.86894 13.3792 10.1311 13.3792 10.3087 13.196
                                            Z
                                        "
                                        fill="#252429"
                                    />

                                </svg>

                            </div>

                        </div>

                    </div>


                    <div
                        className="
                            mb-6
                            flex
                            min-h-[72px]
                            items-center
                            justify-between
                            bg-white
                            px-5
                            py-3
                            shadow-[0_3px_3px_rgba(0,0,0,0.25)]
                        "
                    >

                        <div>

                            <h3
                                className="
                                    text-base
                                    font-extrabold
                                    text-[#252429]
                                "
                            >
                                Carlos Méndez
                            </h3>


                            <p
                                className="
                                    text-xs
                                    font-semibold
                                    text-gray-400
                                "
                            >
                                UANL FCFM Constancia de estudio: Constancia.pdf
                            </p>


                            <div
                                className="
                                    mt-1
                                    flex
                                    gap-8
                                    text-xs
                                    font-bold
                                    text-[#252429]
                                "
                            >

                                <span>
                                    Enviado: 4 sep 2026
                                </span>

                                <span>
                                    10:30 A.M.
                                </span>

                            </div>

                        </div>


                        <div
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >

                            <button
                                className="
                                    rounded-full
                                    bg-[#FFFDF8]
                                    px-6
                                    py-2
                                    text-xs
                                    font-bold
                                    shadow-[0_2px_4px_rgba(0,0,0,0.25)]
                                    transition-transform
                                    hover:scale-105
                                "
                            >
                                Ver
                            </button>


                            <button
                                className="
                                    rounded-full
                                    bg-[#FFE76B]
                                    px-6
                                    py-2
                                    text-xs
                                    font-bold
                                    shadow-[0_2px_4px_rgba(0,0,0,0.25)]
                                    transition-transform
                                    hover:scale-105
                                "
                            >
                                Aprobar
                            </button>


                            <button
                                className="rounded-full
                                    bg-[#FF747B]
                                    px-6
                                    py-2
                                    text-xs
                                    font-bold
                                    shadow-[0_2px_4px_rgba(0,0,0,0.25)]
                                    transition-transform
                                    hover:scale-105
                                "
                            >
                                Rechazar
                            </button>

                        </div>

                    </div>


                    <div
                        className="
                            mb-6
                            flex
                            min-h-[72px]
                            items-center
                            justify-between
                            bg-white
                            px-5
                            py-3
                            shadow-[0_3px_3px_rgba(0,0,0,0.25)]
                        "
                    >

                        <div>

                            <h3 className="text-base font-extrabold text-[#252429]">
                                Alan Salas
                            </h3>

                            <p className="text-xs font-semibold text-gray-400">
                                UANL FIME Constancia de estudio: ConstanciaAlan.pdf
                            </p>

                            <div className="mt-1 flex gap-8 text-xs font-bold">

                                <span>
                                    Enviado: 4 sep 2026
                                </span>

                                <span>
                                    10:30 A.M.
                                </span>

                            </div>

                        </div>


                        <div className="flex items-center gap-3">

                            <button className="rounded-full bg-[#FFFDF8] px-6 py-2 text-xs font-bold shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                                Ver
                            </button>

                            <button className="rounded-full bg-[#FFE76B] px-6 py-2 text-xs font-bold shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                                Aprobar
                            </button>

                            <button className="rounded-full bg-[#FF747B] px-6 py-2 text-xs font-bold shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                                Rechazar
                            </button>

                        </div>

                    </div>


                    <div
                        className="
                            flex
                            min-h-[72px]
                            items-center
                            justify-between
                            bg-white
                            px-5
                            py-3
                            shadow-[0_3px_3px_rgba(0,0,0,0.25)]
                        "
                    >

                        <div>

                            <h3 className="text-base font-extrabold text-[#252429]">
                                Alejandro Acosta
                            </h3>

                            <p className="text-xs font-semibold text-gray-400">
                                UANL FCFM Constancia de estudio: Constancia_Alejandro.pdf
                            </p>

                            <div className="mt-1 flex gap-8 text-xs font-bold">

                                <span>
                                    Enviado: 4 sep 2026
                                </span>

                                <span>
                                    10:30 A.M.
                                </span>

                            </div>

                        </div>


                        <div className="flex items-center gap-3">

                            <button className="rounded-full bg-[#FFFDF8] px-6 py-2 text-xs font-bold shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                                Ver
                            </button>

                            <button className="rounded-full bg-[#FFE76B] px-6 py-2 text-xs font-bold shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                                Aprobar
                            </button>

                            <button className="rounded-full bg-[#FF747B] px-6 py-2 text-xs font-bold shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                                Rechazar
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}