import { obtenerImagenPrincipal } from '../helpers/imagenes';

export default function Products({producto}) {

    const {_id, nombre_produ, descripcion, precio, condicion, stock, categoria, punto_encuentro, imagenes} = producto;

    // URL completa de la imagen principal (o null si el producto no tiene imágenes)
    const imagenPrincipal = obtenerImagenPrincipal(imagenes);

    return (
        <>
            
                <div className="flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-1">
                    <div className="relative flex h-52 w-full flex-col items-center justify-center bg-[#fae568] p-4">


                        <div className="mb-4 flex h-32 w-32 items-center justify-center">
                            {/* Solo se dibuja la imagen si el producto tiene una */}
                            {imagenPrincipal && (
                                <img
                                    src={imagenPrincipal}
                                    alt={nombre_produ}
                                    className="h-full w-full object-contain"
                                />
                            )}
                        </div>

                        <div className="absolute -bottom-3 max-w-[90%] truncate rounded-full bg-white/95 px-5 py-1.5 text-xs font-bold text-[#1f1f22] shadow-sm backdrop-blur-sm">
                            {nombre_produ}
                        </div>
                    </div>

                    <div className="flex flex-col px-6 pb-6 pt-8">
                        <div className="mb-2 flex items-center justify-between">
                            <span className="text-xl font-extrabold text-[#1f1f22]">${precio}</span>
                            <span className="rounded-full bg-[#e6f4ea] px-3 py-1 text-[10px] font-bold text-[#1e8e3e]">Disponible</span>
                        </div>
                        <div className="mt-1 flex flex-col space-y-0.5">
                            <p className="text-sm text-gray-500">{descripcion}</p>
                            <p className="text-xs text-gray-400">Estado: Nuevo</p>
                            <p className="text-xs text-gray-400">FCFM-Ciudad universitaria</p>
                        </div>
                    </div>
                </div>
            
        </>
    )
}