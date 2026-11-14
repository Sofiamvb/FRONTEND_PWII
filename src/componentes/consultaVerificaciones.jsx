export default function Verificaciones({ usuario, cambiarEstadoVerificacion }) {

    // Campos del usuario que vienen del backend
    const { name, apellidoP, institucion, carrera, verificacion } = usuario;

    // Campos de la verificación (el "|| {}" evita que truene si viene vacío)
    const { tipoDocumento, documentoUrl, fechaEnvio } = verificacion || {};

    // fechaEnvio llega como texto, lo convertimos a fecha para mostrarlo bonito
    const fecha = new Date(fechaEnvio);

    return (
    <div
        className="
        mb-6
        flex
        min-h-[72px]
        items-center
        justify-between
        bg-white
        px-5
        py-3
        shadow-[0_3px_3px_rgba(0,0,0,0.25)]"
    >
        <div>

            <h3
                className="
                text-base
                font-extrabold
                text-[#252429]"
            >
                {name} {apellidoP}
            </h3>

            <div
                className="
                mt-1
                flex
                gap-8
                text-xs
                font-bold
                text-[#252429]"
            >
                <span>Enviado: {fecha.toLocaleDateString('es-MX')}</span>
                <span>{fecha.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}</span>

            </div>

        </div>

        <div
            className="
            flex
            items-center
            gap-3"
        >
            <button
                className="
                rounded-full
                 bg-[#FFFDF8]
                px-6
                py-2
                text-xs
                font-bold
                shadow-[0_2px_4px_rgba(0,0,0,0.25)]
                transition-transform
                hover:scale-105"
            >
                Descargar
            </button>

            <button
                type="button"
                onClick={() => cambiarEstadoVerificacion(usuario._id, 'aprobado')}
                className="
                rounded-full
                bg-[#FFE76B]
                px-6
                py-2
                text-xs
                font-bold
                shadow-[0_2px_4px_rgba(0,0,0,0.25)]
                transition-transform
                hover:scale-105"
            >
                Aprobar
            </button>

            <button
                type="button"
                onClick={() => cambiarEstadoVerificacion(usuario._id, 'rechazado')}
                className="rounded-full
                bg-[#FF747B]
                px-6
                py-2
                text-xs
                font-bold
                shadow-[0_2px_4px_rgba(0,0,0,0.25)]
                transition-transform
                hover:scale-105
                                "
            >
                Rechazar
            </button>

        </div>

    </div>
    );
}
