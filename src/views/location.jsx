export default function Location() {
    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] pb-8 pt-24 px-8 md:pb-12 md:pt-32 md:pr-12 md:pl-32 lg:pl-64 font-sans">

                {/* =====================================================
                    ENCABEZADO
                ====================================================== */}
                <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    {/* TÍTULO */}
                    <div>
                        <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                            Puntos de encuentro seguro
                        </h1>
                    </div>


                    {/* PUNTO PREFERIDO */}
                    <div
                        className="
                            flex
                            min-w-[220px]
                            items-center
                            rounded-full
                            bg-[#BDE5F8]
                            px-5
                            py-3
                            text-xs
                            font-medium
                            text-[#3781A7]
                            shadow-[0_3px_7px_rgba(0,0,0,0.18)]
                        "
                    >
                        Punto Preferido:
                    </div>

                </div>


                {/* =====================================================
                    LISTA DE PUNTOS
                ====================================================== */}
                <div className="mt-6 flex w-full flex-col gap-7">


                    {/* =================================================
                        PUNTO 1
                    ================================================== */}
                    <div
                        className="
                            flex
                            min-h-[118px]
                            w-full
                            flex-col
                            justify-between
                            gap-5
                            rounded-[25px]
                            bg-[#FFFDF8]
                            px-7
                            py-5
                            shadow-[0_4px_10px_rgba(0,0,0,0.18)]
                            md:flex-row
                            md:items-center
                        "
                    >

                        {/* INFORMACIÓN */}
                        <div>

                            <h2 className="text-[20px] font-extrabold text-[#1f1f22] underline">
                                Entrada Principal FCFM
                            </h2>

                            <p className="mt-2 text-[13px] font-semibold text-[#9A9898]">
                                Ciudad universitaria
                            </p>

                            <p className="mt-3 text-[13px] font-extrabold text-[#1f1f22]">
                                Horario: 8:00 A.M a 5:00 P.M
                            </p>

                        </div>


                        {/* BOTÓN */}
                        <button
                            type="button"
                            className="
                                flex
                                h-[38px]
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#FAE568]
                                px-5
                                text-[13px]
                                font-extrabold
                                text-[#252429]
                                shadow-[0_3px_6px_rgba(0,0,0,0.22)]
                                transition
                                hover:brightness-95
                            "
                        >
                            Elegir punto preferido
                        </button>

                    </div>


                    {/* =================================================
                        PUNTO 2
                    ================================================== */}
                    <div
                        className="
                            flex
                            min-h-[118px]
                            w-full
                            flex-col
                            justify-between
                            gap-5
                            rounded-[25px]
                            bg-[#FFFDF8]
                            px-7
                            py-5
                            shadow-[0_4px_10px_rgba(0,0,0,0.18)]
                            md:flex-row
                            md:items-center
                        "
                    >

                        {/* INFORMACIÓN */}
                        <div>

                            <h2 className="text-[20px] font-extrabold text-[#1f1f22]">
                                Biblioteca Universitaria
                            </h2>

                            <p className="mt-2 text-[13px] font-semibold text-[#9A9898]">
                                Ciudad universitaria
                            </p>

                            <p className="mt-3 text-[13px] font-extrabold text-[#1f1f22]">
                                Horario: 10:30 A.M a 3:00 P.M
                            </p>

                        </div>


                        {/* BOTÓN */}
                        <button
                            type="button"
                            className="
                                flex
                                h-[38px]
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#FAE568]
                                px-5
                                text-[13px]
                                font-extrabold
                                text-[#252429]
                                shadow-[0_3px_6px_rgba(0,0,0,0.22)]
                                transition
                                hover:brightness-95
                            "
                        >
                            Elegir punto preferido
                        </button>

                    </div>


                    {/* =================================================
                        PUNTO 3
                    ================================================== */}
                    <div
                        className="
                            flex
                            min-h-[118px]
                            w-full
                            flex-col
                            justify-between
                            gap-5
                            rounded-[25px]
                            bg-[#FFFDF8]
                            px-7
                            py-5
                            shadow-[0_4px_10px_rgba(0,0,0,0.18)]
                            md:flex-row
                            md:items-center
                        "
                    >

                        {/* INFORMACIÓN */}
                        <div>

                            <h2 className="text-[20px] font-extrabold text-[#1f1f22]">
                                Explanada de Rectoría
                            </h2>

                            <p className="mt-2 text-[13px] font-semibold text-[#9A9898]">
                                Ciudad universitaria
                            </p>

                            <p className="mt-3 text-[13px] font-extrabold text-[#1f1f22]">
                                Horario: 8:00 A.M a 7:00 P.M
                            </p>

                        </div>


                        {/* BOTÓN */}
                        <button
                            type="button"
                            className="
                                flex
                                h-[38px]
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#FAE568]
                                px-5
                                text-[13px]
                                font-extrabold
                                text-[#252429]
                                shadow-[0_3px_6px_rgba(0,0,0,0.22)]
                                transition
                                hover:brightness-95
                            "
                        >
                            Elegir punto preferido
                        </button>

                    </div>


                    {/* =================================================
                        PUNTO 4
                    ================================================== */}
                    <div
                        className="
                            flex
                            min-h-[118px]
                            w-full
                            flex-col
                            justify-between
                            gap-5
                            rounded-[25px]
                            bg-[#FFFDF8]
                            px-7
                            py-5
                            shadow-[0_4px_10px_rgba(0,0,0,0.18)]
                            md:flex-row
                            md:items-center
                        "
                    >

                        {/* INFORMACIÓN */}
                        <div>

                            <h2 className="text-[20px] font-extrabold text-[#1f1f22]">
                                Área comercial universitaria
                            </h2>

                            <p className="mt-2 text-[13px] font-semibold text-[#9A9898]">
                                Av. Universidad
                            </p>

                            <p className="mt-3 text-[13px] font-extrabold text-[#1f1f22]">
                                Horario: 10:00 A.M a 8:00 P.M
                            </p>

                        </div>


                        {/* BOTÓN */}
                        <button
                            type="button"
                            className="
                                flex
                                h-[38px]
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#FAE568]
                                px-5
                                text-[13px]
                                font-extrabold
                                text-[#252429]
                                shadow-[0_3px_6px_rgba(0,0,0,0.22)]
                                transition
                                hover:brightness-95
                            "
                        >
                            Elegir punto preferido
                        </button>

                    </div>

                </div>

            </div>
        </>
    )
}