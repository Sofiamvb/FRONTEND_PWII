const ESTRELLAS = [1, 2, 3, 4, 5];

/*
 * Cinco estrellas que se pintan hasta el valor recibido.
 *
 *   <Estrellas valor={4} />                      -> solo para mostrar
 *   <Estrellas valor={n} onElegir={fn} />        -> se puede hacer clic para calificar
 */
export default function Estrellas({ valor = 0, onElegir = null, tamano = 24 }) {

    const sePuedeElegir = onElegir !== null;

    return (
        <div
            className="flex items-center"
            aria-label={`Calificación ${valor} de 5`}>

            {
                ESTRELLAS.map(numero => (
                    <svg
                        key={numero}
                        onClick={sePuedeElegir ? () => onElegir(numero) : undefined}
                        width={tamano}
                        height={tamano}
                        viewBox="0 0 24 24"
                        // Se pinta de negro hasta donde llega la calificacion
                        fill={numero <= valor ? "#252429" : "#D9D9D9"}
                        className={sePuedeElegir ? 'cursor-pointer transition-transform hover:scale-110' : ''}
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                ))
            }

        </div>
    );
}
