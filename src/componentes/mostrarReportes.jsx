export default function MostrarReporte({ reporte }) {

    const { tipo_de_reporte, motivo, estadoReporte } = reporte;

    return (
        // Tarjetita de cada reporte (antes estaba en reports.jsx envolviendo al map)
        <div
            className="
            flex
            min-h-[62px]
            w-full
            items-center
            justify-between
            gap-4
            rounded-[16px]
            bg-[#FFFDF8]
            px-5
            py-3
            shadow-[0_2px_6px_rgba(0,0,0,0.13)]"
        >

            {/* INFORMACIÓN */}
            <div>

                <h2
                    className="
                    text-[13px]
                    font-extrabold
                    capitalize
                    text-[#252429]"
                >
                    {tipo_de_reporte}
                </h2>

                <p
                    className="
                    mt-1
                    max-w-[185px]
                    text-[11px]
                    font-medium
                    leading-[14px]
                    text-[#9A9A9A]"
                >
                    {motivo}
                </p>

            </div>

            {/* ESTADO */}
            <span
                className="
                flex
                h-[25px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#FFF0AD]
                px-4
                text-[11px]
                font-medium
                capitalize
                text-[#252429]
                shadow-[0_2px_4px_rgba(0,0,0,0.14)]"
            >
                {estadoReporte}
            </span>

        </div>
    );
}
