export default function UsuariosAdmin() {
    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] px-8 pb-12 pt-8 md:px-12">

                {/* TÍTULO */}
                <div className="mb-9">
                    <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                        Administración de UniMarket
                    </h1>
                </div>


                {/* =====================================================
                    TABLA DE USUARIOS
                ====================================================== */}
                <div className="w-full overflow-x-auto">

                    <div className="min-w-[1000px] w-full">

                        {/* ENCABEZADO */}
                        <div
                            className="
                                grid
                                min-h-[64px]
                                grid-cols-[1.35fr_1fr_1.2fr_0.85fr_0.8fr]
                                items-center
                                bg-[#F9E67D]
                                px-6
                                text-[#252429]
                            "
                        >
                            <span className="text-[18px] font-extrabold">
                                Usuarios
                            </span>

                            <span className="text-[18px] font-extrabold">
                                Rol
                            </span>

                            <span className="text-[18px] font-extrabold">
                                Verificación
                            </span>

                            <span className="text-[18px] font-extrabold">
                                Cuenta
                            </span>

                            <span></span>
                        </div>


                        {/* =================================================
                            USUARIO 1
                        ================================================== */}
                        <div
                            className="
                                mt-1
                                grid
                                min-h-[92px]
                                grid-cols-[1.35fr_1fr_1.2fr_0.85fr_0.8fr]
                                items-center
                                bg-[#FFFDF8]
                                px-4
                                text-[#252429]
                            "
                        >

                            {/* USUARIO */}
                            <div>
                                <p className="text-[19px] font-extrabold">
                                    Carlos Méndez
                                </p>

                                <p className="mt-1 text-[13px] font-semibold text-[#929292] underline">
                                    CarlosM23@uanl.edu.mx
                                </p>
                            </div>


                            {/* ROL */}
                            <p className="text-[18px] font-bold text-[#929292]">
                                Estudiante
                            </p>


                            {/* VERIFICACIÓN */}
                            <div
                                className="
                                    flex
                                    h-[38px]
                                    w-[125px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#39A867]
                                    text-[13px]
                                    font-extrabold
                                    text-black
                                    shadow-[0_3px_5px_rgba(0,0,0,0.18)]
                                "
                            >
                                Verificado
                            </div>


                            {/* CUENTA */}
                            <p className="text-[18px] font-extrabold text-[#929292]">
                                Activa
                            </p>


                            {/* BOTÓN */}
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
                                    text-black
                                    shadow-[0_3px_5px_rgba(0,0,0,0.18)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Suspender
                            </button>

                        </div>


                        {/* =================================================
                            USUARIO 2
                        ================================================== */}
                        <div
                            className="
                                mt-4
                                grid
                                min-h-[92px]
                                grid-cols-[1.35fr_1fr_1.2fr_0.85fr_0.8fr]
                                items-center
                                bg-[#FFFDF8]
                                px-4
                                text-[#252429]
                            "
                        >

                            <div>
                                <p className="text-[19px] font-extrabold">
                                    Alan Salas
                                </p>

                                <p className="mt-1 text-[13px] font-semibold text-[#929292] underline">
                                    Lalanzon123@gmail.com
                                </p>
                            </div>


                            <p className="text-[18px] font-bold text-[#929292]">
                                Estudiante
                            </p>


                            <div
                                className="
                                    flex
                                    h-[38px]
                                    w-[125px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#39A867]
                                    text-[13px]
                                    font-extrabold
                                    text-black
                                    shadow-[0_3px_5px_rgba(0,0,0,0.18)]
                                "
                            >
                                Verificado
                            </div>


                            <p className="text-[18px] font-extrabold text-[#929292]">
                                Activa
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
                                    bg-[#FF797C]
                                    text-[13px]
                                    font-extrabold
                                    text-black
                                    shadow-[0_3px_5px_rgba(0,0,0,0.18)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Suspender
                            </button>

                        </div>


                        {/* =================================================
                            USUARIO 3
                        ================================================== */}
                        <div
                            className="
                                mt-4
                                grid
                                min-h-[92px]
                                grid-cols-[1.35fr_1fr_1.2fr_0.85fr_0.8fr]
                                items-center
                                bg-[#FFFDF8]
                                px-4
                                text-[#252429]
                            "
                        >

                            <div>
                                <p className="text-[19px] font-extrabold">
                                    Alejandro Acosta
                                </p>

                                <p className="mt-1 text-[13px] font-semibold text-[#929292] underline">
                                    Alejandro.AB@uanl.edu.mx
                                </p>
                            </div>


                            <p className="text-[18px] font-bold text-[#929292]">
                                Estudiante
                            </p>


                            <div
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
                                    text-black
                                    shadow-[0_3px_5px_rgba(0,0,0,0.18)]
                                "
                            >
                                Pendiente
                            </div>


                            <p className="text-[18px] font-extrabold text-[#929292]">
                                Activa
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
                                    bg-[#FF797C]
                                    text-[13px]
                                    font-extrabold
                                    text-black
                                    shadow-[0_3px_5px_rgba(0,0,0,0.18)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Suspender
                            </button>

                        </div>


                        {/* =================================================
                            USUARIO 4
                        ================================================== */}
                        <div
                            className="
                                mt-4
                                grid
                                min-h-[92px]
                                grid-cols-[1.35fr_1fr_1.2fr_0.85fr_0.8fr]
                                items-center
                                bg-[#FFFDF8]
                                px-4
                                text-[#252429]
                            "
                        >

                            <div>
                                <p className="text-[19px] font-extrabold">
                                    Sofia Blanco
                                </p>

                                <p className="mt-1 text-[13px] font-semibold text-[#929292] underline">
                                    SoafiaV04@gmail.com
                                </p>
                            </div>


                            <p className="text-[18px] font-bold text-[#929292]">
                                Estudiante
                            </p>


                            <div
                                className="
                                    flex
                                    h-[38px]
                                    w-[125px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#39A867]
                                    text-[13px]
                                    font-extrabold
                                    text-black
                                    shadow-[0_3px_5px_rgba(0,0,0,0.18)]
                                "
                            >
                                Verificado
                            </div>


                            <p className="text-[18px] font-extrabold text-[#929292]">
                                Activa
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
                                    bg-[#FF797C]
                                    text-[13px]
                                    font-extrabold
                                    text-black
                                    shadow-[0_3px_5px_rgba(0,0,0,0.18)]
                                    transition
                                    hover:brightness-95
                                "
                            >
                                Suspender
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}