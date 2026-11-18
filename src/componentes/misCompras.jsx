import { Link } from "react-router-dom";
import { obtenerRutaArchivo } from '../helpers/imagenes';

export default function MisCompras({ compra }) {

    const { nombre_producto, precio_producto, estado, lugar, condicion, imagen } = compra.snapshot;

    // El snapshot guarda el nombre del archivo de la imagen principal al momento de la compra
    const rutaImagen = obtenerRutaArchivo(imagen);

    const {vendedor, _id} = compra;

    return (
        <>

            <div
                className="
                grid
                grid-cols-[2.3fr_1.25fr_0.8fr_120px_70px]
                items-center
                min-h-[88px]
                mx-8
                border-b
                border-[#D9D9D3]
                 text-[#252429]"
            >
                <div className="flex items-center gap-4">

                    <div className="flex h-[58px] w-[58px] shrink-0 items-center 
                    justify-center overflow-hidden rounded-full bg-[#FAE568]">
                        {/* Solo se dibuja la imagen si la compra tiene una */}
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

                <p className="text-[14px] font-medium">
                    {vendedor.name}
                </p>

                <p className="text-[14px] font-medium">
                    ${precio_producto}
                </p>

                <div
                    className="
                    flex
                    h-[31px]
                    w-[105px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#DDF3E8]
                    text-[13px]
                    font-medium
                    shadow-[0_2px_5px_rgba(0,0,0,0.14)]"
                >
                    Entregado
                </div>

                <Link
                    to={`/home/purchases/detail/${_id}`}
                    className="
                    flex
                    h-[31px]
                    w-[62px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#83CBFC]
                    text-[13px]
                    font-medium
                    text-[#252429]
                    shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                    transition
                    hover:brightness-95"
                >
                    Abrir
                </Link>

            </div>

        </>
    )
}