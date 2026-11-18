const url_backend = import.meta.env.VITE_BACKEND_URL;

// Recibe el nombre de un archivo guardado en el backend (imagen o pdf):
//   'abc123.jpg'  →  'http://localhost:3000/uploads/abc123.jpg'
// Si no hay nombre, regresa null.
export function obtenerRutaArchivo(nombreArchivo) {

    if (!nombreArchivo) {
        return null;
    }

    // El backend guarda solo el nombre del archivo y lo sirve en /uploads
    return `${url_backend}/uploads/${nombreArchivo}`;
}

// Recibe el arreglo "imagenes" de un producto:
//   [{ url: 'abc123.jpg', imgPrincipal: true }, { url: 'xyz.jpg', imgPrincipal: false }]
// y regresa la URL completa de la imagen principal, lista para usar en src.
// Si ninguna está marcada como principal, usa la primera.
// Si el producto no tiene imágenes, regresa null.
export function obtenerImagenPrincipal(imagenes) {

    // Sin imágenes (undefined, null o arreglo vacío)
    if (!Array.isArray(imagenes) || imagenes.length === 0) {
        return null;
    }

    // Buscar la que tenga imgPrincipal en true
    let principal = imagenes.find(imagen => imagen.imgPrincipal === true);

    // Si ninguna es principal, tomamos la primera
    if (!principal) {
        principal = imagenes[0];
    }

    return obtenerRutaArchivo(principal.url);
}
