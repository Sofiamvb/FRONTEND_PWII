// Tarjeta del producto que se está reportando (cuando se llega desde un producto)
export default function ProductoReportado({ producto }) {

    // Mientras carga el producto
    if (!producto) {
        return (
            <div className="rounded-[14px] bg-[#FBFBFB] px-4 py-3 text-[13px] text-[#9A9A9A] shadow-[0_2px_5px_rgba(0,0,0,0.13)]">
                Cargando producto...
            </div>
        );
    }

    const { nombre_produ, precio, usuario } = producto;

    // Vendedor (el "|| {}" evita que truene si ya no existe)
    const { name, apellidoP } = usuario || {};

    return (
        <div className="flex items-center justify-between gap-4 rounded-[14px] bg-[#FBFBFB] px-4 py-3 shadow-[0_2px_5px_rgba(0,0,0,0.13)]">

            {/* PRODUCTO */}
            <div>
                <p className="text-[11px] font-bold uppercase text-[#9A9A9A]">
                    Producto
                </p>
                <p className="text-[14px] font-extrabold text-[#252429]">
                    {nombre_produ}
                </p>
                <p className="text-[12px] font-medium text-[#9A9A9A]">
                    ${precio}
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
