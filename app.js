
let numeroSecreto = 0;
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// Funcion para asiganr texto a diferentes etiquetas del HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;
}

// Funcion para click del usuario
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    // comparativa para el número secreto y el input
    if (numeroDeUsuario === numeroSecreto) {
        //acerto el usuario
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // mel susuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

// funcion para limpiar el input
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

// Funcion para generar numero aleatorio
function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    // Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // si el número generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto()
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

// Funcion para generar nuestros elementos iniciales
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

// Reiniciar juego
function reiniciarJuego() {
    //Limpiar input
    limpiarCaja();
    // indicar mensaje con intervalos de numeros, Generar número aleatorio, Inicializar número de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();