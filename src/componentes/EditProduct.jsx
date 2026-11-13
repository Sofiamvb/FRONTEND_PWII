
import { Link } from "react-router-dom";

export default function EditProduct({ publicacion }) {

    const {
        _id,
        nombre_produ,
        descripcion,
        precio,
        condicion,
        punto_encuentro,
        imagenes,
        disponibilidad
    } = publicacion;

    return (
        <div className="
            w-full
            max-w-[230px]
            overflow-hidden
            rounded-[20px]
            bg-[#FFFDF8]
            shadow-[0_4px_8px_rgba(0,0,0,0.18)]
            transition
            duration-200
            hover:-translate-y-1
        ">

            {/* IMAGEN */}
            <div className="
                relative
                flex
                h-[165px]
                w-full
                items-center
                justify-center
                rounded-b-[20px]
                bg-[#FFE96B]
            ">

                <img
                    src={imagenes?.[0]}
                    alt={nombre_produ}
                    className="
                        h-[125px]
                        w-[125px]
                        object-contain
                    "
                />

                {/* NOMBRE */}
                <div className="
                    absolute
                    bottom-[-7px]
                    left-1/2
                    flex
                    max-w-[195px]
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    px-4
                    py-1
                    text-center
                    text-[10px]
                    font-extrabold
                    text-[#252429]
                    shadow-[0_2px_4px_rgba(0,0,0,0.15)]
                ">
                    {nombre_produ}
                </div>

            </div>

            {/* INFORMACIÓN */}
            <div className="
                px-[17px]
                pb-[17px]
                pt-[20px]
            ">

                {/* PRECIO + DISPONIBILIDAD */}
                <div className="
                    mb-[9px]
                    flex
                    items-center
                    justify-between
                    gap-2
                ">

                    <p className="
                        text-[16px]
                        font-extrabold
                        text-[#252429]
                    ">
                        ${precio}
                    </p>

                    <span className="
                        rounded-full
                        bg-[#DDF3E8]
                        px-[9px]
                        py-[4px]
                        text-[8px]
                        font-bold
                        text-[#488669]
                        shadow-[0_1px_3px_rgba(0,0,0,0.12)]
                    ">
                        {/*disponibilidad || "Disponible"*/}
                    </span>

                </div>

                {/* DESCRIPCIÓN */}
                <p className="
                    line-clamp-2
                    text-[10px]
                    font-medium
                    leading-[15px]
                    text-[#9A9898]
                ">
                    {descripcion}
                </p>

                {/* CONDICIÓN */}
                <p className="
                    mt-[5px]
                    text-[10px]
                    font-medium
                    leading-[15px]
                    text-[#9A9898]
                ">
                    Estado: {/*condicion*/}
                </p>

                {/* UBICACIÓN */}
                <p className="
                    mt-[2px]
                    truncate
                    text-[10px]
                    font-medium
                    leading-[15px]
                    text-[#9A9898]
                ">
                    {/*punto_encuentro?.nombre || "FCFM-Ciudad universitaria"*/}
                </p>

                {/* EDITAR */}
                <div className="mt-[13px] flex justify-center">

                    <Link
                        to={`/home/sales/detail/${publicacion._id}`}
                        className="
                            flex
                            h-[29px]
                            min-w-[85px]
                            items-center
                            justify-center
                            rounded-full
                            bg-[#D7D8DD]
                            px-[18px]
                            text-[10px]
                            font-extrabold
                            text-[#252429]
                            shadow-[0_2px_4px_rgba(0,0,0,0.18)]
                            transition
                            duration-200
                            hover:brightness-95
                        "
                    >
                        Editar
                    </Link>

                </div>

            </div>

        </div>
    );
}
