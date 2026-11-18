import { Link } from "react-router-dom";

/*
 * Una fila de la lista de reportes del panel de admin.
 * Los botones los maneja la vista (Adminreportes), aquí solo se avisan.
 */

// Color de la pastilla segun como va el reporte
function colorEstado(estado) {

    if (estado === 'resuelto') {
        return 'bg-[#DDF3E8] text-[#488669]';
    }

    if (estado === 'cerrado') {
        return 'bg-[#E4E4E4] text-[#6B6B6B]';
    }

    if (estado === 'revision') {
        return 'bg-[#DCEBF8] text-[#3A7CA5]';
    }

    // pendiente
    return 'bg-[#FDF0CE] text-[#9A7B1F]';
}

export default function ReporteAdmin({ reporte, onCerrar }) {

    const { _id, tipo_de_reporte, motivo, estadoReporte } = reporte;

    return (
        <div
            className="
                mb-6
                flex
                min-h-[100px]
                w-full
                flex-col
                justify-between
                gap-5
                rounded-[30px]
                bg-white
                px-8
                py-5
                shadow-[0_4px_8px_rgba(0,0,0,0.20)]
                lg:flex-row
                lg:items-center
            "
        >

            {/* INFORMACIÓN */}
            <div>

                <div className="flex flex-wrap items-center gap-3">

                    <h3 className="text-[18px] font-extrabold capitalize text-[#252429]">
                        {tipo_de_reporte}
                    </h3>

                    <span className={`rounded-full px-3 py-1 text-[10px] font-bold capitalize ${colorEstado(estadoReporte)}`}>
                        {estadoReporte}
                    </span>

                </div>

                <p
                    className="
                        mt-1
                        max-w-[350px]
                        text-[14px]
                        font-semibold
                        leading-[20px]
                        text-[#929292]
                    "
                >
                    {motivo}
                </p>

            </div>


            {/* ACCIONES */}
            <div className="flex flex-wrap items-center gap-3">

                <Link
                    to={`/admin/reporte/${_id}`}
                    className="
                        flex
                        h-[36px]
                        min-w-[75px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[#FFFDF8]
                        px-5
                        text-[12px]
                        font-extrabold
                        text-[#252429]
                        shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                        transition
                        hover:brightness-95
                    "
                >
                    Ver
                </Link>

                <button
                    type="button"
                    onClick={() => onCerrar(reporte)}
                    className="
                        flex
                        h-[36px]
                        min-w-[75px]
                        items-center
                        justify-center
                        rounded-full
                        bg-[#FF797C]
                        px-5
                        text-[12px]
                        font-extrabold
                        text-[#252429]
                        shadow-[0_3px_6px_rgba(0,0,0,0.20)]
                        transition
                        hover:brightness-95
                    "
                >
                    Cerrar reporte
                </button>

            </div>

        </div>
    );
}
