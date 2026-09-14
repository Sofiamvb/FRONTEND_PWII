import Products from "../componentes/Products"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            
                <div className="min-h-screen w-full bg-[#FFFFED] pb-8 pt-24 px-8 md:pb-12 md:pt-32 md:pr-12 md:pl-32 lg:pl-64 font-sans">


                    <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                        <div>
                            <h1 className="text-4xl font-extrabold text-[#1f1f22]">Materiales disponibles</h1>
                            <p className="mt-2 text-sm font-medium text-gray-600">8 resultados</p>
                        </div>

                        <div className="flex flex-wrap items-center gap-6">

                            
                            <div className="flex items-center gap-3">
                                <label className="text-sm font-bold text-[#1f1f22]">Categoría</label>
                                <div className="relative">
                                    <select className="appearance-none rounded-full border border-gray-100 bg-white py-2.5 pl-5 pr-10 text-sm text-gray-500 shadow-[0_2px_10px_rgba(0,0,0,0.04)] outline-none focus:border-gray-300">
                                        <option>Seleccionar</option>
                                        <option>Electrónica</option>
                                        <option>Escolar</option>
                                        <option>Tecnología</option>
                                    </select>

                                    <div className="pointer-events-none absolute right-4 top-1/2 flex h-3 w-3 -translate-y-1/2 items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3087 13.196L15.6668 7.67064C16.0011 7.32586 15.7984 6.66675 15.3581 6.66675H4.64194C4.2016 6.66675 3.99893 7.32586 4.33327 7.67064L9.69135 13.196C9.86894 13.3792 10.1311 13.3792 10.3087 13.196Z" fill="#252429" />
                                        </svg>

                                    </div>
                                </div>
                            </div>


                            <div className="flex items-center gap-3">
                                <label className="text-sm font-bold text-[#1f1f22]">Precio máximo</label>
                                <div className="relative">
                                    <input type="text"
                                        id="buscarprecio"
                                        name="buscarPrecio"
                                        placeholder="Precio"
                                        className="appearance-none rounded-full border border-gray-100 bg-white py-2.5 pl-5 pr-10 text-sm text-gray-500 shadow-[0_2px_10px_rgba(0,0,0,0.04)] outline-none focus:border-gray-300" />

                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                            <Link to="/home/productDetail" className="block">
                                <Products />
                            </Link>
                            <Link to="/home/productDetail" className="block">
                                <Products />
                            </Link>
                            <Products />
                            <Products />
                            <Products />
                            <Products />
                            <Products />
                            <Products />
                            <Products />

                        </div>
                    </div>

                </div>

            
        </>
    )
}