import { Link } from "react-router-dom"

export default function Publications() {
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
                            Mis Publicaciones
                        </h1>
                    </div>


                    {/* FILTRO + NUEVA PUBLICACIÓN */}
                    <div className="flex flex-wrap items-center gap-5">

                        {/* CATEGORÍA */}
                        <div className="flex items-center gap-3">

                            <label className="text-sm font-bold text-[#1f1f22]">
                                Categoría
                            </label>

                            <div className="relative">

                                <select
                                    defaultValue=""
                                    className="
                                        min-w-[165px]
                                        appearance-none
                                        rounded-full
                                        border
                                        border-gray-100
                                        bg-white
                                        py-2.5
                                        pl-5
                                        pr-11
                                        text-sm
                                        text-gray-500
                                        shadow-[0_3px_7px_rgba(0,0,0,0.15)]
                                        outline-none
                                    "
                                >
                                    <option value="" disabled>
                                        Seleccionar
                                    </option>

                                    <option>Electrónica</option>
                                    <option>Tecnología</option>
                                    <option>Escolar</option>
                                    <option>Accesorios</option>
                                </select>


                                {/* FLECHA */}
                                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">

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


                        {/* NUEVA PUBLICACIÓN */}
                        <Link
                            to="/home/publications/new"
                            className="
                                flex
                                h-[42px]
                                items-center
                                justify-center
                                rounded-full
                                bg-[#FAE568]
                                px-7
                                text-sm
                                font-extrabold
                                text-[#252429]
                                shadow-[0_3px_6px_rgba(0,0,0,0.22)]
                                transition
                                hover:brightness-95
                            "
                        >
                            Nueva Publicación
                        </Link>

                    </div>

                </div>


                {/* =====================================================
                    PUBLICACIONES
                ====================================================== */}
                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">


                    {/* =================================================
                        PUBLICACIÓN 1
                    ================================================== */}
                    <div
                        className="
                            w-full
                            max-w-[290px]
                            overflow-hidden
                            rounded-[22px]
                            bg-[#FFFDF8]
                            shadow-[0_5px_12px_rgba(0,0,0,0.20)]
                        "
                    >

                        {/* IMAGEN */}
                        <div
                            className="
                                relative
                                flex
                                h-[235px]
                                items-center
                                justify-center
                                rounded-b-[25px]
                                bg-[#FAE568]
                            "
                        >

                            <img
                                src="/img/Calculadora.png"
                                alt="Calculadora científica"
                                className="h-[150px] w-[150px] object-contain"
                            />


                            {/* CORAZÓN */}
                            <button
                                type="button"
                                className="
                                    absolute
                                    right-4
                                    top-4
                                    flex
                                    h-[38px]
                                    w-[38px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                    shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                "
                            >
                                <svg
                                    width="19"
                                    height="19"
                                    viewBox="0 0 24 24"
                                    fill="#252429"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 21s-7.2-4.35-9.6-8.4C.6 9.6 1.2 5.4 4.8 4.2c2.4-.8 4.8.2 6 2 1.2-1.8 3.6-2.8 6-2 3.6 1.2 4.2 5.4 2.4 8.4C19.2 16.65 12 21 12 21Z" />
                                </svg>
                            </button>


                            {/* NOMBRE DEL PRODUCTO */}
                            <div
                                className="
                                    absolute
                                    bottom-3
                                    left-1/2
                                    flex
                                    min-w-[150px]
                                    -translate-x-1/2
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                    px-4
                                    py-1.5
                                    text-[11px]
                                    font-bold
                                    text-[#252429]
                                    shadow-sm
                                "
                            >
                                Calculadora científica
                            </div>

                        </div>


                        {/* INFORMACIÓN */}
                        <div className="px-5 pb-5 pt-4">

                            <div className="mb-3 flex items-center justify-between">

                                <p className="text-[20px] font-extrabold text-[#252429]">
                                    $300
                                </p>


                                <span
                                    className="
                                        rounded-full
                                        bg-[#DDF3E8]
                                        px-3
                                        py-1
                                        text-[10px]
                                        font-bold
                                        text-[#488669]
                                        shadow-[0_2px_4px_rgba(0,0,0,0.12)]
                                    "
                                >
                                    Disponible
                                </span>

                            </div>


                            <p className="text-[12px] font-medium text-[#9A9898]">
                                Casio calculadora científica
                            </p>

                            <p className="mt-1 text-[12px] font-medium text-[#9A9898]">
                                Estado: Nuevo
                            </p>

                            <p className="mt-1 text-[12px] font-medium text-[#9A9898]">
                                FCFM-Ciudad universitaria
                            </p>

                        </div>

                    </div>


                    {/* =================================================
                        PUBLICACIÓN 2
                    ================================================== */}
                    <div
                        className="
                            w-full
                            max-w-[290px]
                            overflow-hidden
                            rounded-[22px]
                            bg-[#FFFDF8]
                            shadow-[0_5px_12px_rgba(0,0,0,0.20)]
                        "
                    >

                        {/* IMAGEN */}
                        <div
                            className="
                                relative
                                flex
                                h-[235px]
                                items-center
                                justify-center
                                rounded-b-[25px]
                                bg-[#83CBFC]
                            "
                        >

                            <img
                                src="/img/microcontrolador.png"
                                alt="Microcontrolador"
                                className="h-[145px] w-[145px] object-contain"
                            />


                            {/* CORAZÓN */}
                            <button
                                type="button"
                                className="
                                    absolute
                                    right-4
                                    top-4
                                    flex
                                    h-[38px]
                                    w-[38px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                    shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                "
                            >
                                <svg
                                    width="19"
                                    height="19"
                                    viewBox="0 0 24 24"
                                    fill="#252429"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 21s-7.2-4.35-9.6-8.4C.6 9.6 1.2 5.4 4.8 4.2c2.4-.8 4.8.2 6 2 1.2-1.8 3.6-2.8 6-2 3.6 1.2 4.2 5.4 2.4 8.4C19.2 16.65 12 21 12 21Z" />
                                </svg>
                            </button>


                            {/* NOMBRE */}
                            <div
                                className="
                                    absolute
                                    bottom-3
                                    left-1/2
                                    flex
                                    min-w-[135px]
                                    -translate-x-1/2
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                    px-4
                                    py-1.5
                                    text-[11px]
                                    font-bold
                                    text-[#252429]
                                    shadow-sm
                                "
                            >
                                Microcontrolador
                            </div>

                        </div>


                        {/* INFORMACIÓN */}
                        <div className="px-5 pb-5 pt-4">

                            <div className="mb-3 flex items-center justify-between">

                                <p className="text-[20px] font-extrabold text-[#252429]">
                                    $100
                                </p>


                                <span
                                    className="
                                        rounded-full
                                        bg-[#DDF3E8]
                                        px-3
                                        py-1
                                        text-[10px]
                                        font-bold
                                        text-[#488669]
                                        shadow-[0_2px_4px_rgba(0,0,0,0.12)]
                                    "
                                >
                                    Disponible
                                </span>

                            </div>


                            <p className="text-[12px] font-medium text-[#9A9898]">
                                Placa Arduino
                            </p>

                            <p className="mt-1 text-[12px] font-medium text-[#9A9898]">
                                Estado: Usado
                            </p>

                            <p className="mt-1 text-[12px] font-medium text-[#9A9898]">
                                Cafeteria FCC
                            </p>

                        </div>

                    </div>


                    {/* =================================================
                        PUBLICACIÓN 3
                    ================================================== */}
                    <div
                        className="
                            w-full
                            max-w-[290px]
                            overflow-hidden
                            rounded-[22px]
                            bg-[#FFFDF8]
                            shadow-[0_5px_12px_rgba(0,0,0,0.20)]
                        "
                    >

                        {/* IMAGEN */}
                        <div
                            className="
                                relative
                                flex
                                h-[235px]
                                items-center
                                justify-center
                                rounded-b-[25px]
                                bg-[#FAE568]
                            "
                        >

                            <img
                                src="/img/meta_quest.png"
                                alt="Visor de realidad virtual"
                                className="h-[155px] w-[155px] object-contain"
                            />


                            {/* CORAZÓN */}
                            <button
                                type="button"
                                className="
                                    absolute
                                    right-4
                                    top-4
                                    flex
                                    h-[38px]
                                    w-[38px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                    shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                                "
                            >
                                <svg
                                    width="19"
                                    height="19"
                                    viewBox="0 0 24 24"
                                    fill="#252429"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 21s-7.2-4.35-9.6-8.4C.6 9.6 1.2 5.4 4.8 4.2c2.4-.8 4.8.2 6 2 1.2-1.8 3.6-2.8 6-2 3.6 1.2 4.2 5.4 2.4 8.4C19.2 16.65 12 21 12 21Z" />
                                </svg>
                            </button>


                            {/* NOMBRE */}
                            <div
                                className="
                                    absolute
                                    bottom-3
                                    left-1/2
                                    flex
                                    min-w-[125px]
                                    -translate-x-1/2
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-white
                                    px-4
                                    py-1.5
                                    text-[11px]
                                    font-bold
                                    text-[#252429]
                                    shadow-sm
                                "
                            >
                                Visor de RV
                            </div>

                        </div>


                        {/* INFORMACIÓN */}
                        <div className="px-5 pb-5 pt-4">

                            <div className="mb-3 flex items-center justify-between">

                                <p className="text-[20px] font-extrabold text-[#252429]">
                                    $4000
                                </p>


                                <span
                                    className="
                                        rounded-full
                                        bg-[#DDF3E8]
                                        px-3
                                        py-1
                                        text-[10px]
                                        font-bold
                                        text-[#488669]
                                        shadow-[0_2px_4px_rgba(0,0,0,0.12)]
                                    "
                                >
                                    Disponible
                                </span>

                            </div>


                            <p className="text-[12px] font-medium text-[#9A9898]">
                                Meta quest 3
                            </p>

                            <p className="mt-1 text-[12px] font-medium text-[#9A9898]">
                                Estado: Usado
                            </p>

                            <p className="mt-1 text-[12px] font-medium text-[#9A9898]">
                                FCFM-Ciudad universitaria
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}