

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[ juegos.length - 1];

console.log( {primero, ultimo} );

juegos.forEach( (elemento, indice, arreglo) => {
    console.log({ elemento, indice, arreglo });
} ); // forma de recorrer todos los elementos de un arreglo

let nuevaLongitud = juegos.push( 'F-Zero' ); // colocar un elemento al final del arreglo
console.log({nuevaLongitud, juegos});



nuevaLongitud = juegos.unshift('Fire embled'); // agragar un elemento al inicio de una arreglo
console.log({nuevaLongitud, juegos});


let juegoBorrado = juegos.pop(); // Borra el elemento final de una arreglo
console.log({juegoBorrado, juegos});

let pos = 1;

console.log(juegos);
let juegosBorrados = juegos.splice( pos, 2 );
console.log({juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});



//TODO: Referencia

