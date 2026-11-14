// Color del recuadro según el estado de la verificación
// (las clases van completas para que Tailwind las detecte)
const coloresVerificacion = {
    'sin enviar': 'bg-[#FAE568]',   // amarillo
    'pendiente':  'bg-[#7DB9FF]',   // azul
    'aprobado':   'bg-[#39A867]',   // verde
    'rechazado':  'bg-[#FF797C]'    // rojo
};

export default function UsuariosVerificaciones({verificado, actualizarUsuarioStatus}) {

    // Campos del usuario (status está directo en el usuario, no dentro de verificacion)
    const { name, apellidoP, email, rol, status, verificacion } = verificado;

    // Estado de la verificación (el "|| {}" evita que truene si viene vacío)
    const { estado } = verificacion || {};

    // Buscamos el color que le toca a este estado
    // (si llega un estado desconocido o vacío, se queda en gris)
    let colorEstado = coloresVerificacion[estado];

    if (!colorEstado) {
        colorEstado = 'bg-gray-300';
    }

    return (
    <div
        className="
        mt-1
        grid
        min-h-[92px]
        grid-cols-[1.35fr_1fr_1.2fr_0.85fr_0.8fr]
        items-center
        bg-[#FFFDF8]
        px-4
        text-[#252429]"
    >
        {/* USUARIO */}
        <div>
            <p className="text-[19px] font-extrabold">
                {name} {apellidoP}
            </p>

            <p className="mt-1 text-[13px] font-semibold text-[#929292] underline">
                {email}
            </p>
        </div>

        {/* ROL */}
        <p className="text-[18px] font-bold text-[#929292]">
            {rol}
        </p>

        {/* VERIFICACIÓN */}
        <div
            className={`
            flex
            h-[38px]
            w-[125px]
            items-center
            justify-center
            rounded-full
            ${colorEstado}
            text-[13px]
            font-extrabold
            text-black
            shadow-[0_3px_5px_rgba(0,0,0,0.18)]`}
        >
            {estado}
        </div>

        {/* CUENTA */}
        <p className="text-[18px] font-extrabold text-[#929292]">
            {status}
        </p>

        {/* BOTÓN */}
        <button
            type="button"
            onClick={() => actualizarUsuarioStatus(verificado._id)}
            className="
            flex
            h-[38px]
            w-[125px]
            items-center
            justify-center
            rounded-full
            bg-[#FF797C]
            text-[13px]
            font-extrabold
            text-black
            shadow-[0_3px_5px_rgba(0,0,0,0.18)]
            transition
            hover:brightness-95"
        >
            Suspender
        </button>

    </div>
    );
}
