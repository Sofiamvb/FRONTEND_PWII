export default function DisponibilidadProducto({ disponibilidad }) {

    // La disponibilidad puede llegar como booleano (true/false) o como texto ("true"/"false")
    const estaDisponible = disponibilidad === true || disponibilidad === 'true';

    return estaDisponible ? 'Disponible' : 'No disponible';

}
