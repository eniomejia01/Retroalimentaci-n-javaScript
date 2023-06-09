
// Un singleton es una instancia única de mi clase


class Singleton {

    static instancia; // undefined
    nombre = '';

    constructor( nombre = '' ) {

        if( !!Singleton.instancia ) {
            return Singleton.instancia;
        }
        
        Singleton.instancia = this; // el this esta haciendo referencia a la instancia
        this.nombre = nombre;


    }

}

const instancia1 = new Singleton('Iroman');
const instancia2 = new Singleton('Sipderman');
const instancia3 = new Singleton('Blackpanter');


console.log( `Nombre de la instancia1 es : ${ instancia1.nombre} ` );
console.log( `Nombre de la instancia2 es : ${ instancia2.nombre} ` );
console.log( `Nombre de la instancia3 es : ${ instancia3.nombre} ` );


// !En JavaScript, el patrón de diseño Singleton se utiliza para garantizar que una clase solo tenga una única instancia y proporcionar un punto de acceso global a esa instancia. Esto significa que cada vez que se solicite una instancia de la clase Singleton, se devolverá la misma instancia existente en lugar de crear una nueva.


