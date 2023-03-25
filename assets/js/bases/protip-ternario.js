

const elMayor = (a, b ) =>  ( a > b ) ? a : b;

const tieneMembresia = ( miembro ) => (miembro) ? '2 Dólares' : '10 Dólares';


console.log( elMayor(20, 15));
console.log( tieneMembresia(false));


const amigo = false;
const amigosArr = [

    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    /* (() => 'Nick Fury')() */ // funcion anonima autoinvocada

    elMayor(10,15),
];

console.log(amigosArr);


const notas = 82.5; // A+ A B+

const grado = notas >= 95 ? 'A+':
              notas >= 90 ? 'A' :
              notas >= 85 ? 'B+':
              notas >= 80 ? 'B' :
              notas >= 75 ? 'C+' :
              notas >= 70 ? 'C' : 'F';

console.log( {notas, grado });



