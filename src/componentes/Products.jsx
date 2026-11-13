
export default function Products({producto}) {

    const {_id, nombre_produ, descripcion, precio, condicion, stock, categoria, punto_encuentro} = producto;

    return (
        <>
            
                <div className="flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-1">
                    <div className="relative flex h-52 w-full flex-col items-center justify-center bg-[#fae568] p-4">

                        <div className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-sm hover:scale-110 transition-transform">

                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.66667 7.61413C1.66667 11.6665 5.01619 13.826 7.46811 15.759C8.33333 16.441 9.16667 17.0832 10 17.0832C10.8333 17.0832 11.6667 16.441 12.5319 15.759C14.9838 13.826 18.3333 11.6665 18.3333 7.61413C18.3333 3.56168 13.7498 0.687766 10 4.58374C6.25013 0.687766 1.66667 3.56168 1.66667 7.61413Z" fill="#252429" />
                            </svg>

                        </div>

                        <div className="mb-4 flex h-32 w-32 items-center justify-center">
                            <img src="/public/img/calculadora.png" alt="" />
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