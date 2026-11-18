/*
 * Validaciones del formulario para publicar un producto, sin expresiones regulares.
 * Funciona igual que validarTarjeta: regresa una lista con los errores encontrados
 * y si viene vacia es que todo esta bien.
 *
 * En los campos de texto solo se revisa que no esten vacios. El precio y el stock
 * si se revisan como numeros, porque el backend los exige mayores a 0.
 */

// true si el texto trae solo digitos del 0 al 9
function soloNumeros(texto) {

    if (texto.length === 0) {
        return false;
    }

    for (const caracter of texto) {
        if (caracter < '0' || caracter > '9') {
            return false;
        }
    }

    return true;
}

// Se queda solo con los digitos (para el campo de stock)
export function soloDigitos(texto) {

    let resultado = '';

    for (const caracter of texto) {
        if (caracter >= '0' && caracter <= '9') {
            resultado = resultado + caracter;
        }
    }

    return resultado;
}

// Igual que la anterior pero deja pasar un punto, para precios como 1250.50
export function soloPrecio(texto) {

    let resultado = '';
    let yaHayPunto = false;

    for (const caracter of texto) {

        if (caracter >= '0' && caracter <= '9') {
            resultado = resultado + caracter;
        } else if (caracter === '.' && !yaHayPunto) {
            resultado = resultado + caracter;
            yaHayPunto = true;
        }
    }

    return resultado;
}

export function validarProducto(producto, archivos) {

    const errores = [];

    /* ---- Nombre ---- */
    // Solo se revisa que no venga vacio: los nombres llevan numeros
    // a cada rato (Raspberry Pi 4, Casio fx-991ES, Fuente 0-30V)

    if ((producto.nombre_produ || '').trim() === '') {
        errores.push('Escribe el nombre del producto');
    }

    /* ---- Descripción ---- */

    if ((producto.descripcion || '').trim() === '') {
        errores.push('Escribe la descripción del producto');
    }

    /* ---- Precio ---- */

    const precio = (producto.precio || '').toString().trim();

    if (precio === '') {
        errores.push('Escribe el precio');
    } else if (isNaN(Number(precio))) {
        errores.push('El precio solo debe llevar números');
    } else if (Number(precio) <= 0) {
        errores.push('El precio debe ser mayor a 0');
    }

    /* ---- Stock ---- */

    const stock = (producto.stock || '').toString().trim();

    if (stock === '') {
        errores.push('Escribe cuántas piezas tienes');
    } else if (!soloNumeros(stock)) {
        errores.push('El stock debe ser un número entero');
    } else if (Number(stock) < 1) {
        errores.push('El stock debe ser al menos 1');
    }

    /* ---- Listas desplegables ---- */

    if (!producto.categoria) {
        errores.push('Elige una categoría');
    }

    if (!producto.condicion) {
        errores.push('Elige la condición del producto');
    }

    if (!producto.punto_encuentro) {
        errores.push('Elige una zona de encuentro');
    }

    /* ---- Imágenes ---- */

    if (!archivos || archivos.length === 0) {
        errores.push('Sube al menos una imagen del producto');
    } else if (archivos.length > 5) {
        errores.push('Puedes subir máximo 5 imágenes');
    }

    return errores;
}
