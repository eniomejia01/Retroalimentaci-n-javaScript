// function crearPersona(nombre, apellido) {
//     return{nombre,apellido}
// }

const crearPersona = (nombre, apellido) => ({nombre,apellido}); // es importante poner los parentesis 

const persona = crearPersona('Enio', 'Mejia');
console.log(persona);


function imprimeArgumentos() {
    console.log( arguments );
}


const imprimeArgumentos2 = ( edad, ...args) => { // los tres puntos son importantes, investiga
    // console.log(edad, args );
    return args;
}
const argumentos = imprimeArgumentos2(10, true, 'Enio', 'Hola');

console.log({ argumentos });








