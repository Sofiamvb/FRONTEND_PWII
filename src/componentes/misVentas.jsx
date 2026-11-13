import { Link } from "react-router-dom";

export default function MisVentas({ venta }) {

    console.log('compra:', venta)

    const { nombre_producto, precio_producto, estado, lugar, condicion } = venta.snapshot;

    const { comprador, _id } = venta;

    return (
        <>

            <div
                className="
                grid
                grid-cols-[2.3fr_1.25fr_0.8fr_1fr_1.55fr_0.65fr]
                items-center
                min-h-[88px]
                mx-8
                border-b
                border-[#D9D9D3]
                text-[#252429]"
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
                        bg-[#FAE568]"
                    >
                        <img
                            src="/img/microcontrolador.png"
                            alt="Microcontrolador"
                            className="h-[50px] w-[50px] object-contain"
                        />
                    </div>

                    <div className="leading-tight">

                        <p className="text-[15px] font-extrabold">
                            {nombre_producto}
                        </p>

                        <p className="mt-1.5 text-[12px] font-medium text-[#9A9898]">
                            {`${lugar} - ${condicion}`}
                        </p>

                    </div>

                </div>

                {/* COMPRADOR */}
                <p className="text-[14px] font-medium">
                    {comprador.name}
                </p>

                {/* PRECIO */}
                <p className="text-[14px] font-medium">
                    ${precio_producto}
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
                    shadow-[0_2px_5px_rgba(0,0,0,0.14)]"
                >
                    Entregado
                </div>

            </div>
        </>
    )
}