


class Persona {

    static porObjeto ({ nombre, apellido, pais}) { // esto es un método statico

        return new Persona( nombre, apellido, pais);
    }

    constructor( nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }



    getInfo() {
        console.log( `info: ${ this.nombre}, ${ this.apellido }, ${ this.pais }` );
    }
}


const nombre1   = 'melisa',
      apellido1 = 'Flores',
      pais1     = 'Guatemala';

const enio = { // objeto
    nombre:   'Ismael',
    apellido: 'Baten',
    pais:     'Guatemala'
}


const persona1 = new Persona(nombre1, apellido1, pais1 );
const persona2 = Persona.porObjeto( enio );

persona1.getInfo();
persona2.getInfo();

