export default function AdminTransacciones() {
    return (
        <>
            <div className="min-h-screen w-full bg-[#FFFFED] px-8 pb-12 pt-8 md:px-12 font-sans">

                <div className="mb-9">
                    <h1 className="text-4xl font-extrabold text-[#1f1f22]">
                        Administración de UniMarket
                    </h1>
                </div>

                <div
                    className="
                        w-full
                        overflow-hidden
                        bg-[#FFFDF8]
                        shadow-[0_3px_6px_rgba(0,0,0,0.15)]
                    "
                >

                    <div
                        className="
                            flex
                            min-h-[64px]
                            items-center
                            border-b
                            border-[#D9D9D3]
                            bg-white
                            px-8
                        "
                    >
                        <h2 className="text-[27px] font-extrabold text-[#252429]">
                            Transacciones Realizadas
                        </h2>
                    </div>

                    <div className="w-full overflow-x-auto">

                        <div className="min-w-[1050px] w-full">

                            <div
                                className="
                                    grid
                                    min-h-[54px]
                                    grid-cols-[1.15fr_1.2fr_1.05fr_1.2fr_0.8fr_1fr]
                                    items-center
                                    bg-[#FFF0A3]
                                    px-5
                                    text-[#252429]
                                "
                            >
                                <span className="text-[13px] font-extrabold">
                                    ID
                                </span>

                                <span className="text-[13px] font-extrabold">
                                    Producto
                                </span>

                                <span className="text-[13px] font-extrabold">
                                    Comprador
                                </span>

                                <span className="text-[13px] font-extrabold">
                                    Vendedor
                                </span>

                                <span className="text-[13px] font-extrabold">
                                    Pago
                                </span>

                                <span className="text-[13px] font-extrabold">
                                    Estado
                                </span>
                            </div>


                            <div
                                className="
                                    grid
                                    min-h-[70px]
                                    grid-cols-[1.15fr_1.2fr_1.05fr_1.2fr_0.8fr_1fr]
                                    items-center
                                    border-b
                                    border-[#D9D9D3]
                                    px-5
                                    text-[#252429]
                                "
                            >
                                <p className="text-[13px] font-medium">
                                    t_demo_sale
                                </p>

                                <p className="text-[13px] font-medium">
                                    Arduino UNO
                                </p>

                                <p className="text-[13px] font-medium">
                                    Alan
                                </p>

                                <p className="text-[13px] font-medium">
                                    Mariana López
                                </p>

                                <p className="text-[13px] font-medium">
                                    $500
                                </p>

                                <div
                                    className="
                                        flex
                                        h-[30px]
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
                                    Aprobado
                                </div>
                            </div>


                            <div
                                className="
                                    grid
                                    min-h-[70px]
                                    grid-cols-[1.15fr_1.2fr_1.05fr_1.2fr_0.8fr_1fr]
                                    items-center
                                    border-b
                                    border-[#D9D9D3]
                                    px-5
                                    text-[#252429]
                                "
                            >
                                <p className="text-[13px] font-medium">
                                    t_demo_sale1
                                </p>

                                <p className="text-[13px] font-medium">
                                    Protoboard
                                </p>

                                <p className="text-[13px] font-medium">
                                    Alejandro
                                </p>

                                <p className="text-[13px] font-medium">
                                    Mariana López
                                </p>

                                <p className="text-[13px] font-medium">
                                    $600
                                </p>

                                <div
                                    className="
                                        flex
                                        h-[30px]
                                        w-[115px]
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#FAE568]
                                        text-[12px]
                                        font-medium
                                        shadow-[0_2px_5px_rgba(0,0,0,0.15)]
                                    "
                                >
                                    Pago Retenido
                                </div>
                            </div>


                            <div
                                className="
                                    grid
                                    min-h-[70px]
                                    grid-cols-[1.15fr_1.2fr_1.05fr_1.2fr_0.8fr_1fr]
                                    items-center
                                    border-b
                                    border-[#D9D9D3]
                                    px-5
                                    text-[#252429]
                                "
                            >
                                <p className="text-[13px] font-medium">
                                    t_demo_sale2
                                </p>

                                <p className="text-[13px] font-medium">
                                    Sensor Ultrasonico
                                </p>

                                <p className="text-[13px] font-medium">
                                    Sofia
                                </p>

                                <p className="text-[13px] font-medium">
                                    Mariana López
                                </p>

                                <p className="text-[13px] font-medium">
                                    $900
                                </p>

                                <div
                                    className="
                                        flex
                                        h-[30px]
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
                                    Aprobado
                                </div>
                            </div>


                            <div
                                className="
                                    grid
                                    min-h-[70px]
                                    grid-cols-[1.15fr_1.2fr_1.05fr_1.2fr_0.8fr_1fr]
                                    items-center
                                    border-b
                                    border-[#D9D9D3]
                                    px-5
                                    text-[#252429]
                                "
                            >
                                <p className="text-[13px] font-medium">
                                    t_demo_sale3
                                </p>

                                <p className="text-[13px] font-medium">
                                    Arduino UNO
                                </p>

                                <p className="text-[13px] font-medium">
                                    Axl
                                </p>

                                <p className="text-[13px] font-medium">
                                    Mariana López
                                </p>

                                <p className="text-[13px] font-medium">
                                    $350
                                </p>

                                <div
                                    className="
                                        flex
                                        h-[30px]
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
                                    Aprobado
                                </div>
                            </div>


                            <div
                                className="
                                    grid
                                    min-h-[70px]
                                    grid-cols-[1.15fr_1.2fr_1.05fr_1.2fr_0.8fr_1fr]
                                    items-center
                                    border-b
                                    border-[#D9D9D3]
                                    px-5
                                    text-[#252429]
                                "
                            >
                                <p className="text-[13px] font-medium">
                                    t_demo_sale4
                                </p>

                                <p className="text-[13px] font-medium">
                                    Arduino UNO
                                </p>

                                <p className="text-[13px] font-medium">
                                    Leonardo
                                </p>

                                <p className="text-[13px] font-medium">
                                    Mariana López
                                </p>

                                <p className="text-[13px] font-medium">
                                    $400
                                </p>

                                <div
                                    className="
                                        flex
                                        h-[30px]
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
                                    Aprobado
                                </div>
                            </div>


                            <div
                                className="
                                    grid
                                    min-h-[70px]
                                    grid-cols-[1.15fr_1.2fr_1.05fr_1.2fr_0.8fr_1fr]
                                    items-center
                                    px-5
                                    text-[#252429]
                                "
                            >
                                <p className="text-[13px] font-medium">
                                    t_demo_sale5
                                </p>

                                <p className="text-[13px] font-medium">
                                    Protoboard
                                </p>

                                <p className="text-[13px] font-medium">
                                    Alan
                                </p>

                                <p className="text-[13px] font-medium">
                                    Mariana López
                                </p>

                                <p className="text-[13px] font-medium">
                                    $500
                                </p>

                                <div
                                    className="
                                        flex
                                        h-[30px]
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
                                    Aprobado
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}