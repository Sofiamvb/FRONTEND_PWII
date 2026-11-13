import { Link } from "react-router-dom"

export default function LandingPage() {
    return (
        <>

            <div className="relative flex flex-col items-center justify-between overflow-x-hidden pb-20 pl-8 pt-10 md:pl-16 lg:flex-row lg:pl-24 lg:pt-16">

               
                <div className="flex w-full flex-col items-start pr-8 lg:w-[55%] lg:pr-0">

                
                    <h1 className="text-[3.5rem] font-extrabold leading-[1] tracking-tighter sm:text-7xl lg:text-[7.5rem]">
                        Materiales <br />
                        que siguen <br />
                        circulando
                    </h1>

                   
                    <div className="mt-20 flex flex-col items-start lg:mt-32">
                        <p className="max-w-md text-base font-medium text-gray-300 md:text-lg">
                            Compra y vende, sácale un buen provecho a todos estos artículos.
                        </p>

                        <Link 
                        to="home"
                        className="mt-10 rounded-full bg-[#fae568] px-12 py-4 text-sm font-bold text-[#1f1f22] 
                        shadow-[0_0_25px_rgba(250,229,104,0.4)] transition-transform hover:-translate-y-1 hover:bg-[#f0dc59]"

                        >
                            
                            Navegar
                        </Link>
                    </div>

                </div>

                
              
                <div className="mt-16 grid w-full grid-cols-2 gap-6 lg:mt-0 lg:w-[45%] lg:-mr-12 lg:gap-8">

                   
                    <div className="flex aspect-square items-center justify-center rounded-[2.5rem] bg-[#fae568] p-6 shadow-lg lg:rounded-[3rem]">
                        <div className="flex h-full w-full items-center justify-center">
                           <img src="/public/img/meta_quest.png" alt="" />
                        </div>
                    </div>

                   
                    <div className="flex aspect-square items-center justify-center rounded-[2.5rem] bg-[#83cbfc] p-6 shadow-lg lg:rounded-[3rem]">
                        <div className="flex h-full w-full items-center justify-center">
                            <img src="/public/img/calculadora_dibujo.png" alt="" />
                        </div>
                    </div>

                    
                    <div className="flex aspect-square items-center justify-center rounded-[2.5rem] bg-[#83cbfc] p-6 shadow-lg lg:rounded-[3rem]">
                        <div className="flex h-full w-full items-center justify-center">
                            <img src="/public/img/microcontrolador.png" alt="" />
                        </div>
                    </div>

                    
                    <div className="flex aspect-square items-center justify-center rounded-[2.5rem] bg-[#fae568] p-6 shadow-lg lg:rounded-[3rem]">
                        <div className="flex h-full w-full items-center justify-center">
                            <img src="/public/img/camara.png" alt="" />
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}