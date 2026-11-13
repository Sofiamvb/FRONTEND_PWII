import { Link } from "react-router-dom"
export default function ConoceMas() {
    return (
        <div className="flex w-full flex-col">


            <div className="px-8 pb-40 pt-12 text-center md:px-16 lg:px-24">
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                    Dale una segunda vida <br className="hidden md:block" /> a tus materiales
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-base font-medium text-gray-300 md:text-lg">
                    Una plataforma exclusiva para la comunidad de la universitaria. Compra, vende y comparte herramientas
                    escolares de forma segura con otros estudiantes.
                </p>
            </div>



            <div className="flex-1 bg-[#fbfbf6] px-8 pb-24 text-[#1f1f22] md:px-16 lg:px-24 rounded-t-[3rem]">



                <div className="mx-auto -mt-24 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">


                    <div className="flex flex-col items-center rounded-[2.5rem] bg-[#83cbfc] p-10 text-center shadow-lg transition-transform hover:-translate-y-2">

                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1f1f22] text-white">

                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M36.6668 20C36.6668 29.2047 29.2048 36.6667 20.0002 36.6667C10.7954 36.6667 3.3335 29.2047 3.3335 20C3.3335 10.7953 10.7954 3.33337 20.0002 3.33337C29.2048 3.33337 36.6668 10.7953 36.6668 20ZM26.7173 14.9495C27.2055 15.4376 27.2055 16.2291 26.7173 16.7172L18.384 25.0505C17.8958 25.5387 17.1045 25.5387 16.6163 25.0505L13.2829 21.7172C12.7948 21.229 12.7948 20.4377 13.2829 19.9495C13.7711 19.4614 14.5626 19.4614 15.0507 19.9495L17.5002 22.3989L21.2248 18.6742L24.9497 14.9495C25.4378 14.4613 26.2292 14.4613 26.7173 14.9495Z" fill="#FBFAF5" />
                            </svg>


                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-[#1f1f22]">1. Verifícate</h3>
                        <p className="font-medium text-[#1f1f22]/80">
                            Acceso seguro y exclusivo. Regístrate usando tu correo universitario o comprobando tu estatus.
                        </p>
                    </div>


                    <div className="flex flex-col items-center rounded-[2.5rem] bg-[#fae568] p-10 text-center shadow-lg transition-transform hover:-translate-y-2">

                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1f1f22] text-white">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 5C11.7289 5 5 11.7289 5 20C5 28.2711 11.7289 35 20 35C28.2711 35 35 28.2711 35 20C35 
                                11.7289 28.2711 5 20 5ZM26.25 28.018L22.0195 23.7875C20.6056 24.7605 18.8791 25.1699 17.1788 
                                24.9355C15.4785 24.701 13.9273 23.8397 12.8294 22.5204C11.7315 21.2011 11.1663 19.5191 11.2446 
                                17.8045C11.323 16.09 12.0393 14.4666 13.2529 13.2529C14.4666 12.0393 16.09 11.323 17.8045 
                                11.2446C19.5191 11.1663 21.2011 11.7315 22.5204 12.8294C23.8397 13.9273 24.701 15.4785 24.9355 
                                17.1788C25.1699 18.8791 24.7605 20.6056 23.7875 22.0195L28.018 26.25L26.25 28.018Z" fill="#FBFAF5" />
                                <path d="M18.125 22.5C20.5412 22.5 22.5 20.5412 22.5 18.125C22.5 15.7088 20.5412 13.75 18.125 
                                13.75C15.7088 13.75 13.75 15.7088 13.75 18.125C13.75 20.5412 15.7088 22.5 18.125 22.5Z" fill="#FBFAF5" />
                            </svg>

                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-[#1f1f22]">2. Publica o Busca</h3>
                        <p className="font-medium text-[#1f1f22]/80">
                            Encuentra esa calculadora científica, placa Arduino o libro que necesitas para este semestre a un precio accesible.
                        </p>
                    </div>


                    <div className="flex flex-col items-center rounded-[2.5rem] border-2 border-gray-100 bg-white p-10 text-center shadow-lg transition-transform hover:-translate-y-2">

                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1f1f22] text-white">

                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0002 36.6672C29.2048 36.6672 36.6668 33.3094 36.6668 29.1672C36.6668 27.0562 34.7285 
                                25.1487 31.6092 23.7859C29.7057 27.2789 26.803 30.2897 23.116 31.8654C21.1342 32.7124 18.8662 32.7124 
                                16.8843 31.8654C13.1973 30.2897 10.2946 27.2789 8.39113 23.7859C5.27175 25.1487 3.3335 27.0562 3.3335 
                                29.1672C3.3335 33.3094 10.7954 36.6672 20.0002 36.6672Z" fill="#FBFAF5" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.3335 14.1911C8.3335 8.19454 13.5568 3.33337 
                                20.0002 3.33337C26.4435 3.33337 31.6668 8.19454 31.6668 14.1911C31.6668 20.1407 27.9432 27.0832 
                                22.1337 29.566C20.7793 30.1447 19.221 30.1447 17.8667 29.566C12.0571 27.0832 8.3335 20.1407 8.3335 
                                14.1911ZM20.0002 18.3334C21.8412 18.3334 23.3335 16.841 23.3335 15C23.3335 13.1591 21.8412 11.6667 
                                20.0002 11.6667C18.1592 11.6667 16.6668 13.1591 16.6668 15C16.6668 16.841 18.1592 18.3334 20.0002 
                                18.3334Z" fill="#FBFAF5" />
                            </svg>


                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-[#1f1f22]">3. Intercambia</h3>
                        <p className="font-medium text-[#1f1f22]/80">
                            Ponte de acuerdo y realiza entregas seguras directamente en la facultad, cafetería o puntos clave del campus.
                        </p>
                    </div>

                </div>

                
                <div className="mt-32 text-center">
                    <h2 className="mb-8 text-3xl font-extrabold lg:text-4xl">¿Listo para empezar?</h2>
                    <Link 
                    to="/auth/register"
                    className="rounded-full bg-[#fae568] px-12 py-4 text-sm font-bold text-[#1f1f22] 
                    shadow-[0_0_25px_rgba(250,229,104,0.4)] transition-transform hover:-translate-y-1 hover:bg-[#f0dc59]"
                    >
                        Comienza ya!
                    </Link>
                </div>

            </div>

        </div>
    )
}