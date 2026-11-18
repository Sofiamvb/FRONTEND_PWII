/*
 * Validaciones de la tarjeta, sin expresiones regulares.
 * Todo se revisa con comparaciones y recorridos normales.
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

// true si el texto trae al menos un digito
function tieneNumeros(texto) {

    for (const caracter of texto) {
        if (caracter >= '0' && caracter <= '9') {
            return true;
        }
    }

    return false;
}

// Quita los espacios para poder contar los digitos
function sinEspacios(texto) {
    return texto.split(' ').join('');
}

/*
 * Algoritmo de Luhn: es la cuenta que cumplen todas las tarjetas reales.
 * Se recorren los digitos de derecha a izquierda, se duplica uno sí y uno no
 * (si pasa de 9 se le restan 9) y al final la suma debe ser multiplo de 10.
 * Sirve para cachar numeros mal tecleados.
 */
function pasaLuhn(numero) {

    let suma = 0;
    let tocaDuplicar = false;

    for (let i = numero.length - 1; i >= 0; i--) {

        let digito = Number(numero[i]);

        if (tocaDuplicar) {
            digito = digito * 2;

            if (digito > 9) {
                digito = digito - 9;
            }
        }

        suma = suma + digito;
        tocaDuplicar = !tocaDuplicar;
    }

    return suma % 10 === 0;
}

/* --------- Funciones para limpiar lo que se escribe, mientras se escribe --------- */

// Se queda solo con los digitos y tira todo lo demas
export function soloDigitosDe(texto) {

    let resultado = '';

    for (const caracter of texto) {
        if (caracter >= '0' && caracter <= '9') {
            resultado = resultado + caracter;
        }
    }

    return resultado;
}

// Quita los numeros (para el nombre del titular)
export function quitarNumeros(texto) {

    let resultado = '';

    for (const caracter of texto) {
        if (caracter < '0' || caracter > '9') {
            resultado = resultado + caracter;
        }
    }

    return resultado;
}

// Deja el numero en grupos de 4: 4111 1111 1111 1111
export function formatearNumeroTarjeta(texto) {

    const digitos = soloDigitosDe(texto).slice(0, 16);

    let resultado = '';

    for (let i = 0; i < digitos.length; i++) {

        // Un espacio antes de cada grupo nuevo, menos al inicio
        if (i > 0 && i % 4 === 0) {
            resultado = resultado + ' ';
        }

        resultado = resultado + digitos[i];
    }

    return resultado;
}

// Pone la diagonal sola: 12 -> 12, 123 -> 12/3
export function formatearVencimiento(texto) {

    const digitos = soloDigitosDe(texto).slice(0, 4);

    if (digitos.length <= 2) {
        return digitos;
    }

    return digitos.slice(0, 2) + '/' + digitos.slice(2);
}

/*
 * Revisa todos los campos y regresa una lista con los errores encontrados.
 * Si la lista viene vacia, la tarjeta esta bien.
 */
export function validarTarjeta(pago) {

    const errores = [];

    /* ---- Titular ---- */

    const titular = (pago.titular_tarjeta || '').trim();

    if (titular === '') {
        errores.push('Escribe el nombre del titular');
    } else if (titular.length < 5) {
        errores.push('El nombre del titular parece incompleto');
    } else if (tieneNumeros(titular)) {
        errores.push('El nombre del titular no debe llevar números');
    }

    /* ---- Número de tarjeta ---- */

    const numero = sinEspacios((pago.numero_tarjeta || '').trim());

    if (numero === '') {
        errores.push('Escribe el número de la tarjeta');
    } else if (!soloNumeros(numero)) {
        errores.push('El número de la tarjeta solo debe llevar dígitos');
    } else if (numero.length < 13 || numero.length > 19) {
        errores.push('El número de la tarjeta debe tener entre 13 y 19 dígitos');
    } else if (!pasaLuhn(numero)) {
        errores.push('El número de la tarjeta no es válido, revísalo');
    }

    /* ---- Vencimiento (MM/AA) ---- */

    const vencimiento = (pago.vencimiento_tarjeta || '').trim();
    const partes = vencimiento.split('/');

    if (vencimiento === '') {
        errores.push('Escribe la fecha de vencimiento');
    } else if (partes.length !== 2) {
        errores.push('El vencimiento va en formato MM/AA');
    } else {

        const mes = partes[0].trim();
        const anio = partes[1].trim();

        if (!soloNumeros(mes) || !soloNumeros(anio) || mes.length !== 2 || anio.length !== 2) {
            errores.push('El vencimiento va en formato MM/AA (por ejemplo 09/28)');
        } else if (Number(mes) < 1 || Number(mes) > 12) {
            errores.push('El mes del vencimiento debe estar entre 01 y 12');
        } else {

            // Se compara contra el mes actual para ver si ya venció
            const hoy = new Date();
            const anioActual = hoy.getFullYear() % 100;
            const mesActual = hoy.getMonth() + 1;

            const yaVencio = Number(anio) < anioActual ||
                (Number(anio) === anioActual && Number(mes) < mesActual);

            if (yaVencio) {
                errores.push('La tarjeta ya está vencida');
            }
        }
    }

    /* ---- CVV ---- */

    const cvv = (pago.cvv_tarjeta || '').trim();

    if (cvv === '') {
        errores.push('Escribe el CVV');
    } else if (!soloNumeros(cvv)) {
        errores.push('El CVV solo debe llevar dígitos');
    } else if (cvv.length < 3 || cvv.length > 4) {
        errores.push('El CVV debe tener 3 o 4 dígitos');
    }

    return errores;
}
