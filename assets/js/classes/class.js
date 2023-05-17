

class Persona {


    nombre = ''; // estas líneas de código son opcionales, el programa sigue funcionado igual sin ellas
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return ` La comida favorita de ${ this.nombre } es ${ this.comida}`;
    }

    // métodos
    quienSoy() {
        console.log( `Soy ${ this.nombre} y mi identidad es ${ this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log( `${this.codigo} dice: ${this.frase}`);
    }
}


const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman');
const iroman    = new Persona('Tony Stark', 'Iroman', 'Yo soy iroman');

// console.log( iroman);

spiderman.miFrase();
spiderman.quienSoy(); // ejecutando el metodo que está en la clase

spiderman.setComidaFavorita = 'El pay de cereza de la tía May';

console.log( spiderman.getComidaFavorita )

console.log( spiderman );



