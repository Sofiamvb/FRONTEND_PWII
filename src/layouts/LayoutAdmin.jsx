import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function LayoutAdmin() {
    return (
        <>
          <header className="fixed top-0 left-0 right-0 h-[60px] bg-[#252429] z-50 flex items-center">


                <div className="w-[52px] h-full flex items-center justify-center text-white">Logo</div>

                    <div className="ml-auto flex items-center gap-4 pr-8">

                                        
                                        <Link className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-opacity hover:opacity-70">
                                            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 37.5C21.2156 37.4988 22.4046 37.1435 23.4216 36.4775C24.4385 35.8116 25.2395 34.8638 25.7266 
                                                33.75H14.2734C14.7605 34.8638 15.5615 35.8116 16.5784 36.4775C17.5954 37.1435 18.7844 37.4988 20 37.5ZM31.25 
                                                22.5V17.7711C31.25 12.2656 29.1125 7.46953 23.75 6.25L23.125 2.5H16.875L16.25 6.25C10.8688 7.46953 8.75 
                                                12.2469 8.75 17.7711V22.5L5 27.5V31.25H35V27.5L31.25 22.5Z" fill="#FFFFED" />
                                            </svg>
                                        </Link>

                                        
                                        <Link 
                                        to="/home/profile"
                                        className="flex h-10 w-10 cursor-pointer items-center justify-center">
                                            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 3.75C11.0398 3.75 3.75 11.0398 3.75 20C3.75 28.9602 11.0398 36.25 20 36.25C28.9602 36.25 
                                                36.25 28.9602 36.25 20C36.25 11.0398 28.9602 3.75 20 3.75ZM16.0766 12.8766C17.0664 11.8273 18.4594 11.25 
                                                20 11.25C21.5406 11.25 22.9211 11.8313 23.9148 12.8859C24.9219 13.9547 25.4117 15.3906 25.2961 
                                                16.9344C25.0648 20 22.6898 22.5 20 22.5C17.3102 22.5 14.9305 20 14.7039 16.9336C14.5891 15.3773 15.0781 
                                                13.9367 16.0766 12.8766ZM20 33.75C18.1644 33.7512 16.3473 33.3838 14.6564 32.6696C12.9654 31.9554 11.4352 
                                                30.9089 10.1562 29.5922C10.8887 28.5476 11.822 27.6595 12.9016 26.9797C14.893 25.7031 17.4133 25 20 
                                                25C22.5867 25 25.107 25.7031 27.0961 26.9797C28.1766 27.6592 29.1107 28.5473 29.8438 29.5922C28.565 30.909 
                                                27.0347 31.9556 25.3437 32.6699C23.6528 33.3841 21.8356 33.7514 20 33.75Z" fill="#F7F7EF" />
                                            </svg>
                                        </Link>

                    </div>
                
                
                </header>   

            <div
                className="
                    min-h-screen
                    w-full
                    bg-[#FFFFED]
                    pt-[85px]
                    px-8
                    md:px-12
                "
            >

                <nav
                    className="
                        flex
                        items-center
                        justify-center
                        flex-wrap
                        gap-2
                        mb-7
                    "
                >

                    <Link
                        to="/admin/Adminverification"
                        className="
                            rounded-full
                            bg-[#FFFDF8]
                            px-10
                            py-4
                            text-xs
                            font-bold
                            text-[#252429]
                            shadow-[0_3px_4px_rgba(0,0,0,0.25)]
                            transition-transform
                            hover:scale-105
                            hover:bg-[#FFE86E]
                        "
                    >
                        Verificaciones
                    </Link>


                    <Link
                        to="/admin/Adminusuarios"
                        className="
                            rounded-full
                            bg-[#FFFDF8]
                            px-10
                            py-4
                            text-xs
                            font-bold
                            text-[#252429]
                            shadow-[0_3px_4px_rgba(0,0,0,0.25)]
                            transition-transform
                            hover:scale-105
                            hover:bg-[#FFE86E]
                        "
                    >
                        Usuarios
                    </Link>


                    <Link
                        to="/admin/Admincategorias"
                        className="
                            rounded-full
                            bg-[#FFFDF8]
                            px-10
                            py-4
                            text-xs
                            font-bold
                            text-[#252429]
                            shadow-[0_3px_4px_rgba(0,0,0,0.25)]
                            transition-transform
                            hover:scale-105
                            hover:bg-[#FFE86E]
                        "
                    >
                        Categorías
                    </Link>


                    <Link
                        to="/admin/Admin_productos"
                        className="
                            rounded-full
                            bg-[#FFFDF8]
                            px-10
                            py-4
                            text-xs
                            font-bold
                            text-[#252429]
                            shadow-[0_3px_4px_rgba(0,0,0,0.25)]
                            transition-transform
                            hover:scale-105
                            hover:bg-[#FFE86E]
                        "
                    >
                        Productos
                    </Link>


                    <Link
                        to="/admin/Adminpuntos"
                        className="
                            rounded-full
                            bg-[#FFFDF8]
                            px-10
                            py-4
                            text-xs
                            font-bold
                            text-[#252429]
                            shadow-[0_3px_4px_rgba(0,0,0,0.25)]
                            transition-transform
                            hover:scale-105
                            hover:bg-[#FFE86E]
                        "
                    >
                        Puntos de Compra
                    </Link>


                    <Link
                        to="/admin/Admintransacciones"
                        className="
                            rounded-full
                            bg-[#FFFDF8]
                            px-10   
                            py-4
                            text-xs
                            font-bold
                            text-[#252429]
                            shadow-[0_3px_4px_rgba(0,0,0,0.25)]
                            transition-transform
                            hover:scale-105
                            hover:bg-[#FFE86E]
                        "
                    >
                        Transacciones
                    </Link>


                    <Link
                        to="/admin/Adminreportes"
                        className="
                            rounded-full
                            bg-[#FFFDF8]
                            px-10
                            py-4
                            text-xs
                            font-bold
                            text-[#252429]
                            shadow-[0_3px_4px_rgba(0,0,0,0.25)]
                            transition-transform
                            hover:scale-105
                            hover:bg-[#FFE86E]
                        "
                    >
                        Reportes
                    </Link>


                    <Link
                        to="/admin/valoracionesAdmin"
                        className="
                            rounded-full
                            bg-[#FFFDF8]
                            px-10
                            py-4
                            text-xs
                            font-bold
                            text-[#252429]
                            shadow-[0_3px_4px_rgba(0,0,0,0.25)]
                            transition-transform
                            hover:scale-105
                            hover:bg-[#FFE86E]
                        "
                    >
                        Valoraciones
                    </Link>

                </nav>

                <main className="w-full">

                    <Outlet />

                </main>

            </div>


            <footer>

            </footer>
        </>
    )
}