

// console.log('Hola mundo');

// VARIABLE: Es un contenedor de informacion que apunta a un lugar en memoria. Dicha informacion puede cambiar en el futuro.

// Polyfill: es un código que provee el funcionamiento de una nueva caracteristica de JavaScript(ES6), en versiones viejas como ES5.

// Javascript es un lenguaje interpretado

alert('Hola desde app.js');

// console.log( console.log('Hola mundo'));

let a = 10, 
    b = 20,
    c = 'Hola ',
    d = 'Spiderman', //String
    x = a + b; 

const saludo = c + d;

console.log('%c Mis variables', 'color:blue; font-weight: bold');
console.log({a});
console.log({b}); // forma de mostrar las variables definidas con sus valores
console.log({c});

console.warn( x );

console.error( x );

c = 'Hola de nuevo';

console.table({a,b,c,d,x});


