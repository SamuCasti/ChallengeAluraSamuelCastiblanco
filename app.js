function encriptar() {
    let texto = document.querySelector('.encriptador_mensaje').value;
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    mostrarMensaje(textoEncriptado);
}

function desencriptar() {
    let texto = document.querySelector('.encriptador_mensaje').value;
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    mostrarMensaje(textoDesencriptado);
}

function mostrarMensaje(mensaje) {
    if (mensaje.trim() === '') {
        condicionesIniciales();
    } else {
        document.querySelector('.encriptador_respuesta_mensaje').textContent = '';
        document.querySelector('.encriptador_respuesta_mensaje2').textContent = mensaje;
        document.querySelector('.encriptador_respuesta_imagen').style.display = 'none';

        const botonCopiar = document.querySelector('.encriptador_Boton_copiar');
        botonCopiar.style.display = 'inline-block';
        botonCopiar.style.padding = '1.5rem';
        botonCopiar.style.gap = '8px';
        botonCopiar.style.fontSize = '1rem';
        botonCopiar.style.textDecoration = 'none';
        botonCopiar.style.color = 'white';
        botonCopiar.style.borderRadius = '24px';
        botonCopiar.style.width = '70%';
        botonCopiar.style.height = '10%';
        botonCopiar.style.textAlign = 'center';
        botonCopiar.style.flexDirection = 'row';
        botonCopiar.style.justifyContent = 'space-between';
        botonCopiar.style.fontFamily = 'var(--fuente-inter)';
        botonCopiar.style.backgroundColor = '#CED4DA';
        botonCopiar.style.color = '#495057';
        botonCopiar.style.marginTop = '100%';
    }
}

function condicionesIniciales() {
    document.querySelector('.encriptador_respuesta_mensaje').textContent = "Ningún mensaje fue encontrado";
    document.querySelector('.encriptador_respuesta_mensaje2').textContent = "Ingresa el texto que desees encriptar o desencriptar";
    document.querySelector('.encriptador_respuesta_imagen').style.display = 'block';
    document.querySelector('.encriptador_Boton_copiar').style.display = 'none';
}

function copiar() {
    const mensaje = document.querySelector('.encriptador_respuesta_mensaje').textContent;
    // opcion para copiar al portapales con un .catch para saber si se copia o no
    navigator.clipboard.writeText(mensaje).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}