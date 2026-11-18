import { Link, useParams, useLocation } from "react-router-dom";
import { obtenerRutaArchivo } from '../../helpers/imagenes';

/*
 * Muestra el documento que subió un usuario para verificarse.
 * Se llega aquí desde el botón "Ver" de la lista de verificaciones.
 *
 * El archivo puede ser una imagen o un PDF (la subida acepta los dos),
 * por eso se revisa la extensión para saber cómo mostrarlo.
 */
export default function Admindocumento() {

    const { archivo } = useParams();

    // El nombre y el tipo se mandan desde la lista. Si alguien abre la
    // dirección directo no vienen, y simplemente no se muestran.
    const { state } = useLocation();
    const nombreUsuario = state ? state.nombreUsuario : '';
    const tipoDocumento = state ? state.tipoDocumento : '';

    const url = obtenerRutaArchivo(archivo);

    const esPdf = archivo.toLowerCase().endsWith('.pdf');

    return (
        <div className="mx-auto w-full max-w-[900px]">

            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">

                <div>
                    <h1 className="text-2xl font-extrabold text-[#252429]">
                        Documento de verificación
                    </h1>

                    <p className="mt-1 text-sm font-medium text-[#8E8E8E]">
                        {nombreUsuario ? nombreUsuario : 'Usuario'}
                        {tipoDocumento ? ` · ${tipoDocumento}` : ''}
                    </p>
                </div>

                <div className="flex items-center gap-3">

                    <Link
                        to="/admin/Adminverification"
                        className="rounded-full bg-[#FFFDF8] px-6 py-2 text-xs font-bold shadow-[0_2px_4px_rgba(0,0,0,0.25)] transition-transform hover:scale-105">
                        Volver
                    </Link>

                </div>

            </div>

            <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-[0_3px_8px_rgba(0,0,0,0.20)]">

                {
                    esPdf ? (
                        // Los PDF no se pueden poner en un <img>, van en un marco
                        <iframe
                            src={url}
                            title="Documento de verificación"
                            className="h-[75vh] w-full rounded-xl border-0"
                        />
                    ) : (
                        <img
                            src={url}
                            alt="Documento de verificación"
                            className="mx-auto max-h-[75vh] w-auto rounded-xl object-contain"
                        />
                    )
                }

            </div>

        </div>
    );
}
