

class Rectangulo {

    #area = 0; // propiedad privada

    constructor (base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    #calcularArea() {
        console.log( this.#area * 2);
    }
}

const rectangulo = new Rectangulo(10, 15);

rectangulo.calcularArea(); // No se puede acceder a una propiedad privada

console.log( rectangulo );