
// Un metodo es una funcion que se encuentra dentro de un objeto

function saludar( nombre ) { // se recomienda que una función esté antes del código que lo llama \ ::nombre:: es un ::parámetro::
    // console.log( arguments );
    // console.log('Hola ' + nombre);
    return 10;

    console.log('Soy un código que esta despues del return')
}

const saludar2 = function( nombre) { // esto es una función anónima 
    console.log('Hola mundo en llamas ' + nombre );
}

const saludarFlecha = () => { // Esto es una función flecha
    console.log('Hola flecha');
}

const saludarFlecha2 =  (nombre)  => { // Esto es una función flecha \ los parentesis que encierran el parámetro son opcionales, aunque se recomienda usarlos siempre
    console.log('Hola flecha ' + nombre);
}

const retornoDeSaludar = saludar( 'Enio' ); // llamada de la función ::'Enio':: es un ::argumento:: que se pasa al parámetro

// saludar2( 'Ismael');

// saludarFlecha();
// saludarFlecha2('Melissa');


function sumar(a, b) {
    return a + b;
}

const sumar2 = (a,b) =>  a + b; // Forma de usar la función flecha, si solo se tiene un return

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();


console.log( getAleatorio2() );