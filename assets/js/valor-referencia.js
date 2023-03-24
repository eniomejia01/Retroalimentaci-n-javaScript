
/* Que es el operador rest? */

let a = 10; /* todos los primitivos son pasados por valor */
let b = a;
a = 30;

console.log({a, b});


let juan = {nombre: 'Juan'}; /* en javascript todos los objetos son pasados por referencia */
let ana = { ...juan }; /* operador spread */
ana.nombre = 'Ana';

console.log({juan, ana});


const cambiaNombre = ({...persona}) => { /* operador spread */
    persona.nombre = 'Tony';
    return persona;
}


let peter = {nombre: 'Peter'};
let tony = cambiaNombre( peter );



console.log({peter, tony});

// Arreglos

const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
// const otrasFrutas = [...frutas]; /* operador spreet */
const otrasFrutas = frutas.slice(); /* es similar al spread */
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas]; /* es similar al spread */
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });

