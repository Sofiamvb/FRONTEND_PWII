export default function Nosotros() {
    return (
        <div className="px-8 pb-24 pt-8 md:px-16 lg:px-24">
            
            
            <div className="flex justify-center w-full flex-col overflow-hidden rounded-[3rem] shadow-2xl lg:flex-row mt-20">
                
                
                <div className="relative flex w-full flex-col justify-center bg-[#fae568] p-12 lg:w-[40%] lg:p-20">
                    
                    
                    <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#83cbfc]"></div>
                    
                    
                    <h1 className="relative z-10 text-5xl font-extrabold leading-[1.1] tracking-tighter text-[#1f1f22] sm:text-6xl lg:text-[4.5rem] xl:text-[5.5rem]">
                        De <br />
                        estudiantes, <br />
                        para <br />
                        estudiantes.
                    </h1>
                </div>

                
                <div className="flex w-full flex-col justify-center bg-[#fbfbf6] p-12 text-[#1f1f22] lg:w-[60%] lg:p-20">
                    <div className="max-w-2xl">
                        
                        <h2 className="mb-6 text-3xl font-extrabold lg:text-4xl">Nuestra misión</h2>
                        
                        <p className="mb-6 text-base font-medium text-gray-700 md:text-lg">
                            Sabemos lo complicado que puede ser conseguir el material adecuado para las prácticas de la facultad. Muchas veces terminamos el semestre y esos componentes, calculadoras o herramientas se quedan empolvándose en un cajón.
                        </p>
                        
                        <p className="mb-12 text-base font-medium text-gray-700 md:text-lg">
                            Este espacio fue creado para que esos artículos sigan circulando dentro de nuestra propia comunidad. Queremos facilitar el intercambio seguro, apoyar la economía de nuestros compañeros y darle una segunda vida útil a cada objeto.
                        </p>

                        
                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            
                            
                            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gray-200 shadow-sm transition-transform hover:scale-[1.02]">
                                <div className="flex h-full w-full items-center justify-center bg-[#e5e5e5] text-gray-400">
                                    {/* Reemplaza este comentario con tu <img> usando la clase: className="h-full w-full object-cover" */}
                                    
                                </div>
                            </div>

                            
                            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gray-200 shadow-sm transition-transform hover:scale-[1.02]">
                                <div className="flex h-full w-full items-center justify-center bg-[#e5e5e5] text-gray-400">
                                    {/* Reemplaza este comentario con tu <img> usando la clase: className="h-full w-full object-cover" */}
                                    
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            
        </div>
    )
}