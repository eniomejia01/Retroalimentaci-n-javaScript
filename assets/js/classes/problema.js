
// Este código es obsoleto, pero aún se ve en algunos proyectos
function Persona(nombre, edad) {
    console.log('Se ejecutó esta línea')

    this.nombre = nombre;
    this.edad   = edad;

    this.imprimir = function() {
        console.log( `Nombre: ${ this.nombre} - edad ${ this.edad}`);
    }
}


const maria = new Persona('Maria', 18);
const melissa = new Persona('Melissa', 35);

maria.imprimir();
melissa.imprimir();