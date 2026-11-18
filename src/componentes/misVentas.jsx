import { Link } from "react-router-dom";
import { obtenerRutaArchivo } from '../helpers/imagenes';
import { textoEstadoPedido } from '../helpers/estadoPedido';

export default function MisVentas({ venta }) {

    const { nombre_producto, precio_producto, estado, lugar, condicion, imagen } = venta.snapshot;

    // El snapshot guarda el nombre del archivo de la imagen principal al momento de la compra
    const rutaImagen = obtenerRutaArchivo(imagen);

    // estado_pago es el estado real del pedido; antes decia "Entregado" fijo
    const { comprador, _id, estado_pago } = venta;

    return (
        <>

            <div
                className="
                grid
                grid-cols-[2.3fr_1.25fr_0.8fr_120px]
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
                        {/* Solo se dibuja la imagen si la venta tiene una */}
                        {rutaImagen && (
                            <img
                                src={rutaImagen}
                                alt={nombre_producto}
                                className="h-[50px] w-[50px] object-contain"
                            />
                        )}
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
                    {textoEstadoPedido(estado_pago)}
                </div>

            </div>
        </>
    )
}