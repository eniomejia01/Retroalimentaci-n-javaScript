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
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, 'Enio', 'Hola');


console.log({casado, vivo, nombre, saludo});


const {apellido: nuevoApellido} = crearPersona('Enio', 'Mejia');
console.log({nuevoApellido});


const tony = {

    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {
//     console.log( 'nombre',personaje.nombre);
//     console.log( 'codeName',personaje.codeName);
//     console.log( 'vivo',personaje.vivo);
//     console.log( 'edad',personaje.edad);
//     console.log( 'trajes',personaje.trajes);
// }


const imprimePropiedades = ( {nombre, codeName, vivo, edad, trajes} ) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
    
    
}
imprimePropiedades( tony );