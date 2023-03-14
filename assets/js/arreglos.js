

// const arr = new Array(10);

// const arr = []; // inicializacion de un arreglo
// console.log( arr );


let videoJuegos = [ 'Mario 3', 'Meganman', 'Chrono Trigger' ];
console.log( {videoJuegos} );

console.log( videoJuegos[0] ); // Acceso a un elemento de un arreglo

let arregloCosas = [
    true,
    123,
    'Enio',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman',
    ]],
];

// console.log( arregloCosas );

console.log( arregloCosas[7][4][1] ); // forma de acceder a un elemento de arreglo que esta dentro de un arreglo


