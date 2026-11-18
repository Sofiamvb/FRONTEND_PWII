// Tarjeta de la compra que se está reportando (?tipo=compra&id=...)
export default function CompraReportada({ pedido }) {

    // Mientras carga la compra
    if (!pedido) {
        return (
            <div className="rounded-[14px] bg-[#FBFBFB] px-4 py-3 text-[13px] text-[#9A9A9A] shadow-[0_2px_5px_rgba(0,0,0,0.13)]">
                Cargando compra...
            </div>
        );
    }

    const { snapshot, total_sin_comision, fecha_pedido, vendedor } = pedido;

    // "|| {}" evita que truene si falta algún dato
    const { nombre_producto } = snapshot || {};
    const { name, apellidoP } = vendedor || {};

    const fecha = new Date(fecha_pedido);

    return (
        <div className="flex items-center justify-between gap-4 rounded-[14px] bg-[#FBFBFB] px-4 py-3 shadow-[0_2px_5px_rgba(0,0,0,0.13)]">

            {/* COMPRA */}
            <div>
                <p className="text-[11px] font-bold uppercase text-[#9A9A9A]">
                    Compra
                </p>
                <p className="text-[14px] font-extrabold text-[#252429]">
                    {nombre_producto}
                </p>
                <p className="text-[12px] font-medium text-[#9A9A9A]">
                    ${total_sin_comision} · {fecha.toLocaleDateString('es-MX')}
                </p>
            </div>

            {/* VENDEDOR */}
            <div className="text-right">
                <p className="text-[11px] font-bold uppercase text-[#9A9A9A]">
                    Vendedor
                </p>
                <p className="text-[14px] font-extrabold text-[#252429]">
                    {name} {apellidoP}
                </p>
            </div>

        </div>
    );
}
