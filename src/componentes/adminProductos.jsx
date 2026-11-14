
export default function AdminProductosConsulta({producto, actualizarAprobacionProducto}) {

    const { nombre_produ, condicion, usuario, precio } = producto;

    // Datos del vendedor (el "|| {}" evita que truene si el usuario ya no existe)
    const { name, apellidoP } = usuario || {};

    return (
    <div
        className="
        grid
        min-h-[82px]
        grid-cols-[2.1fr_1.1fr_0.8fr_1.3fr_1.35fr_1.8fr]
        items-center
        border-b
        border-[#D9D9D3]
        px-7
        text-[#252429]"
    >
        {/* PRODUCTO */}
        <div className="flex items-center gap-4">

            <div
                className="
                flex
                h-[55px]
                w-[55px]
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
                    className="h-[48px] w-[48px] object-contain"
                />
            </div>

            <div>

                <p className="text-[14px] font-extrabold">
                    {nombre_produ}
                </p>

                <p className="mt-1 text-[11px] font-medium text-[#999999]">
                    {condicion}
                </p>

            </div>

        </div>

        {/* ESTUDIANTE */}
        <p className="text-[13px] font-medium">
            {name} {apellidoP}
        </p>

        {/* PRECIO */}
        <p className="text-[13px] font-medium">
            ${precio}
        </p>

        {/* APROBACIÓN */}
        <div
            className="
            flex
            h-[31px]
            w-[110px]
            items-center
            justify-center
            rounded-full
            bg-[#DDF3E8]
            text-[12px]
            font-medium
            shadow-[0_2px_5px_rgba(0,0,0,0.15)]"
        >
            Aprobado
        </div>

        {/* DISPONIBILIDAD */}
        <div
            className="
            flex
            h-[31px]
            w-[115px]
            items-center
            justify-center
            rounded-full
            bg-[#DDF3E8]
            text-[12px]
            font-medium
            shadow-[0_2px_5px_rgba(0,0,0,0.15)]"
        >
            Disponible
        </div>

        {/* ACCIONES */}
        <div className="flex items-center gap-3">

            <button
                type="button"
                className="
                flex
                h-[31px]
                w-[90px]
                items-center
                justify-center
                rounded-full
                bg-[#FAE568]
                text-[12px]
                 font-medium
                text-[#252429]
                shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                transition
                hover:brightness-95"
            >
                Aprobar
            </button>

            <button
                type="button"
                className="
                flex
                h-[31px]
                w-[86px]
                items-center
                justify-center
                rounded-full
                 bg-[#FF797C]
                text-[12px]
                font-medium
                text-[#252429]
                shadow-[0_2px_5px_rgba(0,0,0,0.18)]
                transition
                 hover:brightness-95"
            >
                Rechazar
            </button>

        </div>

    </div>
    );
}
