import { useState, useEffect } from 'react';
import { obtenerRutaArchivo } from '../helpers/imagenes';

const estiloFlecha = `
    absolute
    top-1/2
    flex
    h-10
    w-10
    -translate-y-1/2
    items-center
    justify-center
    rounded-full
    bg-white/90
    text-[20px]
    font-extrabold
    text-[#252429]
    shadow-[0_2px_6px_rgba(0,0,0,0.20)]
    transition
    hover:scale-110
`;

// Carrusel sencillo: recibe el arreglo "imagenes" del producto
//   [{ url: 'abc123.jpg', imgPrincipal: true }, ...]
// Empieza en la imagen principal y se mueve con flechas o con los puntitos
export default function Carrusel({ imagenes, alt }) {

    // Posición de la imagen que se está viendo
    const [actual, setActual] = useState(0);

    // Cuando llegan las imágenes del backend, empezamos en la principal
    useEffect(() => {

        if (!Array.isArray(imagenes)) {
            return;
        }

        let indicePrincipal = imagenes.findIndex(imagen => imagen.imgPrincipal === true);

        if (indicePrincipal === -1) {
            indicePrincipal = 0;
        }

        setActual(indicePrincipal);

    }, [imagenes]);

    // Sin imágenes no se dibuja nada
    if (!Array.isArray(imagenes) || imagenes.length === 0) {
        return null;
    }

    const total = imagenes.length;

    // Ir a la anterior (si estamos en la primera, vamos a la última)
    const anterior = () => {
        setActual((actual - 1 + total) % total);
    };

    // Ir a la siguiente (si estamos en la última, regresamos a la primera)
    const siguiente = () => {
        setActual((actual + 1) % total);
    };

    const rutaImagen = obtenerRutaArchivo(imagenes[actual].url);

    // ===== UNA SOLA IMAGEN: sin flechas ni puntitos =====
    if (total === 1) {
        return (
            <img
                src={rutaImagen}
                alt={alt}
                className="h-full max-h-[360px] w-full object-contain"
            />
        );
    }

    // ===== VARIAS IMÁGENES: carrusel completo =====
    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center">

            <img
                src={rutaImagen}
                alt={`${alt} (${actual + 1} de ${total})`}
                className="h-full max-h-[360px] w-full object-contain"
            />

            {/* FLECHAS */}
            <button
                type="button"
                onClick={anterior}
                aria-label="Imagen anterior"
                className={`${estiloFlecha} left-0`}
            >
                ‹
            </button>

            <button
                type="button"
                onClick={siguiente}
                aria-label="Imagen siguiente"
                className={`${estiloFlecha} right-0`}
            >
                ›
            </button>

            {/* PUNTITOS */}
            <div className="mt-5 flex gap-2">
                {imagenes.map((imagen, indice) => {

                    // El puntito de la imagen actual se ve más oscuro y más ancho
                    let estiloPunto = 'w-2.5 bg-white';

                    if (indice === actual) {
                        estiloPunto = 'w-6 bg-[#252429]';
                    }

                    return (
                        <button
                            key={imagen.url}
                            type="button"
                            onClick={() => setActual(indice)}
                            aria-label={`Ver imagen ${indice + 1}`}
                            className={`h-2.5 rounded-full transition-all ${estiloPunto}`}
                        />
                    );
                })}
            </div>

        </div>
    );
}
