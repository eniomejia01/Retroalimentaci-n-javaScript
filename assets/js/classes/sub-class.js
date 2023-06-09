class Persona {

    static _conteo = 0;

    static get conteo() { // Get estático
        return Persona._conteo + ' intancias';
    }

    static mensaje() { // metódo estático
        console.log( this.nombre); // undefined
        console.log( ' Hola a todos, soy un método estático');
    }


    nombre = ''; // estas líneas de código son opcionales, el programa sigue funcionado igual sin ellas
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
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


class Heroe extends Persona{ // Herencia

    clan = 'Sin clan';


    constructor (nombre, codigo, frase) {
        super(nombre, codigo, frase);

        this.clan = 'Los Avengers';

    }

    quienSoy() {
        console.log(`Soy ${ this.nombre }, ${this.clan}`);
        super.quienSoy(); // esto permite llamar el mismo método que esta en la clase padre(Persona)
    }
}

const spiderman = new Heroe('Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman');

console.log( spiderman );
spiderman.quienSoy();

