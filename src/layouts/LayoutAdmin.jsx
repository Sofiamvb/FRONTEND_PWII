import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function LayoutAdmin() {

    const navigate = useNavigate();

    function logout() {

        sessionStorage.clear();

        navigate('/auth');

    }

    return (
        <>
          <header className="fixed top-0 left-0 right-0 h-[60px] bg-[#252429] z-50 flex items-center">


                <div className="w-[65px] h-full flex items-center justify-center">
                    <img src="/img/UniMarket.png" alt="UniMarket" className="h-8 w-auto" />
                </div>

                    <div className="ml-auto flex items-center gap-4 pr-8">

                                        
                                        <Link className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-opacity hover:opacity-70">
                                            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 37.5C21.2156 37.4988 22.4046 37.1435 23.4216 36.4775C24.4385 35.8116 25.2395 34.8638 25.7266 
                                                33.75H14.2734C14.7605 34.8638 15.5615 35.8116 16.5784 36.4775C17.5954 37.1435 18.7844 37.4988 20 37.5ZM31.25 
                                                22.5V17.7711C31.25 12.2656 29.1125 7.46953 23.75 6.25L23.125 2.5H16.875L16.25 6.25C10.8688 7.46953 8.75 
                                                12.2469 8.75 17.7711V22.5L5 27.5V31.25H35V27.5L31.25 22.5Z" fill="#FFFFED" />
                                            </svg>
                                        </Link>

                                        
                                        <div
                                        className="flex h-10 w-10 items-center justify-center">
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
                                        </div>

                                        {/* Sin esto el admin no tendria por donde salir:
                                            /home es zona de estudiantes y lo regresaria aqui */}
                                        <button
                                            onClick={logout}
                                            title="Cerrar sesión"
                                            className="flex h-10 w-10 cursor-pointer items-center justify-center transition-opacity hover:opacity-70">
                                            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule='evenodd' clipRule='evenodd' d="M26.875 20C26.875 19.3097 26.3153 18.75 25.625 18.75H7.33738L10.6051 15.9491C11.1293 15.4998 11.19 14.7107 10.7407 14.1865C10.2914 13.6624 9.50231 13.6017 8.97816 14.051L3.14483 19.051C2.86776 19.2884 2.70831 19.6352 2.70831 20C2.70831 20.3649 2.86776 20.7117 3.14483 20.949L8.97816 25.949C9.50231 26.3984 10.2914 26.3377 10.7407 25.8135C11.19 25.2894 11.1293 24.5002 10.6051 24.051L7.33738 21.25H25.625C26.3153 21.25 26.875 20.6904 26.875 20Z" fill="#F7F7EF" />
                                                <path d="M15.625 13.3335C15.625 14.5038 15.625 15.089 15.9059 15.5093C16.0275 15.6913 16.1837 15.8476 16.3658 15.9692C16.7862 16.2501 17.3713 16.2501 18.5417 16.2501H25.625C27.696 16.2501 29.375 17.929 29.375 20.0002C29.375 22.0712 27.696 23.7502 25.625 23.7502H18.5417C17.3713 23.7502 16.786 23.7502 16.3657 24.031C16.1837 24.1527 16.0275 24.3088 15.9059 24.4908C15.625 24.9112 15.625 25.4963 15.625 26.6668C15.625 31.3808 15.625 33.7378 17.0895 35.2023C18.554 36.6668 20.9107 36.6668 25.6247 36.6668H27.2913C32.0053 36.6668 34.3623 36.6668 35.8268 35.2023C37.2913 33.7378 37.2913 31.3808 37.2913 26.6668V13.3335C37.2913 8.61946 37.2913 6.26243 35.8268 4.79796C34.3623 3.3335 32.0053 3.3335 27.2913 3.3335H25.6247C20.9107 3.3335 18.554 3.3335 17.0895 4.79796C15.625 6.26243 15.625 8.61945 15.625 13.3335Z" fill="#F7F7EF" />
                                            </svg>
                                        </button>

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