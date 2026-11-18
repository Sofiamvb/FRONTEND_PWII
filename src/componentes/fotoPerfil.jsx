import { useState } from 'react';
import Swal from 'sweetalert2';
import clienteAxios from '../config/axios';
import { obtenerRutaArchivo } from '../helpers/imagenes';

// Foto que se muestra si el usuario todavía no ha subido una
const FOTO_DEFAULT = '/img/profile.png';

// Foto de perfil: al darle clic se elige una imagen y se sube en ese momento
// imagen:        nombre del archivo guardado en el usuario (puede venir vacío)
// idUsuario:     _id del usuario
// onActualizada: avisa al padre el nombre del archivo nuevo
export default function FotoPerfil({ imagen, idUsuario, onActualizada }) {

    // Mientras se sube la foto (para mostrar "Subiendo..." y bloquear otro clic)
    const [subiendo, setSubiendo] = useState(false);

    // Ruta de la foto: la del usuario o la de default
    let rutaFoto = obtenerRutaArchivo(imagen);

    if (!rutaFoto) {
        rutaFoto = FOTO_DEFAULT;
    }

    // Se ejecuta al elegir un archivo
    const cambiarFoto = async e => {

        const archivo = e.target.files[0];

        // Limpiamos el input para poder elegir la misma foto otra vez si falla
        e.target.value = '';

        if (!archivo) {
            return;
        }

        if (!archivo.type.startsWith('image/')) {
            Swal.fire({
                icon: 'error',
                title: 'Archivo no válido',
                text: 'Selecciona una imagen (jpg, png, webp...)'
            });
            return;
        }

        // Los archivos se mandan con FormData, no como JSON
        const formData = new FormData();
        formData.append('imagen', archivo);

        setSubiendo(true);

        try {

            const res = await clienteAxios.put(`/users/imagen/${idUsuario}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            // Avisamos al padre para que muestre la foto nueva
            onActualizada(res.data.imagen);

            Swal.fire({
                title: '¡Listo!',
                text: res.data.mensaje,
                icon: 'success'
            });

        } catch (error) {

            console.log(error);

            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: error.response?.data?.mensaje || 'Intente de nuevo'
            });

        }

        setSubiendo(false);
    };

    // Texto y visibilidad de la capa que aparece encima de la foto
    // Normal: solo se ve al pasar el mouse. Subiendo: se ve siempre
    let textoBoton = 'Cambiar foto';
    let visibilidadCapa = 'opacity-0 group-hover:opacity-100';

    if (subiendo) {
        textoBoton = 'Subiendo...';
        visibilidadCapa = 'opacity-100';
    }

    return (
        // El <label> envuelve al input: al darle clic a la foto se abre el selector de archivos
        <label
            htmlFor="fotoPerfil"
            className="group relative block h-full w-full cursor-pointer"
        >

            <img
                src={rutaFoto}
                alt="Foto de perfil"
                className="h-full w-full object-cover"
            />

            {/* Capa oscura que aparece al pasar el mouse (o siempre mientras sube) */}
            <span
                className={`
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-black/45
                    text-center
                    text-xs
                    font-extrabold
                    text-white
                    transition-opacity
                    ${visibilidadCapa}
                `}
            >
                {textoBoton}
            </span>

            {/* Input escondido: el label es el que se ve */}
            <input
                id="fotoPerfil"
                type="file"
                accept="image/*"
                onChange={cambiarFoto}
                disabled={subiendo}
                className="hidden"
            />

        </label>
    );
}
