/*
Es una aplicación Web que permite encriptar y desencriptar textos.

Fue desarrollada con tecnología HTML, CSS y JavaScript, la función es encriptar y desencriptar textos, se deben tener ciertas consideraciones de reglas a cumplir.
*/

// Aquí puedes añadir el código para encriptar y desencriptar textos
// Ejemplo simple de encriptar y desencriptar texto
function encriptarTexto(texto) {
    // Ejemplo de encriptación simple (esto debe ser reemplazado con tu propia lógica)
    return btoa(texto);
}

function desencriptarTexto(textoEncriptado) {
    try {
        // Intentar desencriptar el texto
        return atob(textoEncriptado);
    } catch (e) {
        // Si ocurre un error, devolver un mensaje de error
        return 'Texto no válido para desencriptar. Puedes intentar encriptar un texto válido.';
    }
}

// Configura los eventos de los botones
document.addEventListener('DOMContentLoaded', () => {
    const btnEncriptar = document.getElementById('btn-encriptar');
    const btnDesencriptar = document.getElementById('btn-desencriptar');
    const btnCopiar = document.getElementById('btn-copiar');
    const btnLimpiar = document.getElementById('btn-limpiar');
    const textoEncriptar = document.getElementById('texto-encriptar');
    const textoDesencriptar = document.getElementById('texto-desencriptar');
    const resultadoEncriptar = document.getElementById('resultado-encriptar');
    const resultadoDesencriptar = document.getElementById('resultado-desencriptar');

    btnEncriptar.addEventListener('click', () => {
        const texto = textoEncriptar.value;
        if (texto.trim() === '') {
            alert('Por favor, ingresa un texto válido para encriptar.');
            return;
        }
        const resultado = encriptarTexto(texto);
        resultadoEncriptar.textContent = resultado;
        // Limpia el campo de desencriptar cuando se encripta un nuevo texto
        textoDesencriptar.value = '';
    });

    btnDesencriptar.addEventListener('click', () => {
        const texto = textoDesencriptar.value;
        if (texto.trim() === '') {
            alert('Por favor, ingresa un texto encriptado válido para desencriptar.');
            return;
        }
        const resultado = desencriptarTexto(texto);
        resultadoDesencriptar.textContent = resultado;
    });

    btnCopiar.addEventListener('click', () => {
        const texto = resultadoEncriptar.textContent;
        navigator.clipboard.writeText(texto).then(() => {
            alert('Texto copiado al portapapeles');
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
    });

    btnLimpiar.addEventListener('click', () => {
        // Limpia todos los campos y resultados
        textoEncriptar.value = '';
        textoDesencriptar.value = '';
        resultadoEncriptar.textContent = 'Resultado encriptado aparecerá aquí...';
        resultadoDesencriptar.textContent = 'Resultado desencriptado aparecerá aquí...';
    });
});
