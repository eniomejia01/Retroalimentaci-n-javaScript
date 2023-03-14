// los objetos literales son OBJETOS que tienen pares de valor

let personaje = {

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
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad: ', personaje.edad);

console.log('Coord: ', personaje.coords);
console.log('Lat: ', personaje.coords.lat);

console.log('No. trajes: ', personaje.trajes.length);
console.log('Último traje: ', personaje.trajes[ personaje.trajes.length - 1 ]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Última película: ', personaje['ultimaPelicula']);

