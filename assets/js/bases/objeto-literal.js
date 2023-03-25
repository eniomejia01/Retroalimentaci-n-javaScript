// los objetos literales son OBJETOS que tienen pares de valor

const personaje = {

    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'malibu, California'
    },

    ultimaPelicula: 'Infinity War',

};

console.log(personaje);
console.log('Nombre:', personaje.nombre); // para acceder un elemento del objeto
console.log('Nombre:', personaje['nombre']);
console.log('Edad: ', personaje.edad);

console.log('Coord: ', personaje.coords);
console.log('Lat: ', personaje.coords.lat);

console.log('No. trajes: ', personaje.trajes.length);
console.log('Último traje: ', personaje.trajes[ personaje.trajes.length - 1 ]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Última película: ', personaje['ultimaPelicula']);

// Mas detalles

delete personaje.edad; // eliminar un elemento
console.log(personaje);

personaje.casado = true;

const entrisPares = Object.entries( personaje ); // Obtener los pares de valores que hay en el objeto
console.log( entrisPares );



Object.freeze( personaje ); // congela el objeto \ bloquea la creación de nuevos propiedades


personaje.dinero = 100000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje);


const propiedades = Object.getOwnPropertyNames( personaje ); // listado de los elementos en el objeto en forma de arreglo
const valores = Object.values( personaje ); 
console.log({ propiedades, valores });



