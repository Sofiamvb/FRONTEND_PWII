export default function Notifications() {
    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] pb-8 pt-24 px-8 md:pb-12 md:pt-32 md:pr-12 md:pl-32 lg:pl-64 font-sans">

                {/* =====================================================
                    ENCABEZADO
                ====================================================== */}
                <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                        Notificaciones
                    </h1>


                    {/* MARCAR TODAS COMO LEÍDAS */}
                    <button
                        type="button"
                        className="
                            flex
                            h-[42px]
                            items-center
                            justify-center
                            rounded-full
                            bg-[#83CBFC]
                            px-7
                            text-[13px]
                            font-extrabold
                            text-[#252429]
                            shadow-[0_3px_6px_rgba(0,0,0,0.22)]
                            transition
                            hover:brightness-95
                        "
                    >
                        Marcar todos como leído
                    </button>

                </div>


                {/* =====================================================
                    LISTA DE NOTIFICACIONES
                ====================================================== */}
                <div className="flex w-full flex-col gap-6">


                    {/* =================================================
                        NOTIFICACIÓN 1 - NO LEÍDA
                    ================================================== */}
                    <div
                        className="
                            flex
                            min-h-[105px]
                            w-full
                            flex-col
                            justify-between
                            gap-5
                            rounded-[25px]
                            border-2
                            border-[#1593FF]
                            bg-white
                            px-7
                            py-5
                            shadow-[0_4px_8px_rgba(0,0,0,0.18)]
                            md:flex-row
                            md:items-center
                        "
                    >

                        {/* INFORMACIÓN */}
                        <div>

                            <h2 className="text-[20px] font-extrabold text-[#1f1f22]">
                                Cuenta Verificada
                            </h2>


                            <p className="mt-1 text-[13px] font-semibold text-[#9A9898]">
                                Tu cuenta ha sido verificada correctamente
                            </p>


                            {/* FECHA Y HORA */}
                            <div className="mt-3 flex flex-wrap items-center gap-8">

                                <p className="text-[13px] font-extrabold text-[#252429]">
                                    22 sep 2026
                                </p>

                                <p className="text-[13px] font-extrabold text-[#252429]">
                                    07:30 P.M.
                                </p>

                            </div>

                        </div>


                        {/* BOTÓN */}
                        <button
                            type="button"
                            className="
                                flex
                                h-[40px]
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#83CBFC]
                                px-6
                                text-[13px]
                                font-extrabold
                                text-[#252429]
                                shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                transition
                                hover:brightness-95
                            "
                        >
                            Marcar como Leído
                        </button>

                    </div>


                    {/* =================================================
                        NOTIFICACIÓN 2
                    ================================================== */}
                    <div
                        className="
                            flex
                            min-h-[105px]
                            w-full
                            flex-col
                            justify-between
                            gap-5
                            rounded-[25px]
                            bg-white
                            px-7
                            py-5
                            shadow-[0_4px_8px_rgba(0,0,0,0.20)]
                            md:flex-row
                            md:items-center
                        "
                    >

                        {/* INFORMACIÓN */}
                        <div>

                            <h2 className="text-[20px] font-extrabold text-[#1f1f22]">
                                Nueva compra de tu producto
                            </h2>


                            <p className="mt-1 text-[13px] font-semibold text-[#9A9898]">
                                Mariana inició la compra de “Arduino”
                            </p>


                            {/* FECHA Y HORA */}
                            <div className="mt-3 flex flex-wrap items-center gap-8">

                                <p className="text-[13px] font-extrabold text-[#252429]">
                                    22 agosto 2026
                                </p>

                                <p className="text-[13px] font-extrabold text-[#252429]">
                                    05:10 P.M.
                                </p>

                            </div>

                        </div>


                        {/* BOTÓN */}
                        <button
                            type="button"
                            className="
                                flex
                                h-[40px]
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#83CBFC]
                                px-6
                                text-[13px]
                                font-extrabold
                                text-[#252429]
                                shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                                transition
                                hover:brightness-95
                            "
                        >
                            Marcar como Leído
                        </button>

                    </div>

                </div>

            </div>
        </>
    )
}