export default function DisponibilidadProducto(disponibilidad){

    console.log(disponibilidad)

    let Disponible;

    if(disponibilidad){

        Disponible = 'Disponible'

    }else{

        Disponible = 'No disponible'

    }

    return Disponible;

}