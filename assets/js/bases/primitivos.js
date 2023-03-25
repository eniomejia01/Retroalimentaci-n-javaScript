

let nombre = 'Piter Parker'; // string
console.log(nombre);

nombre = 'Ben parker'; // Reinicializando la variable
console.log(nombre);

nombre = "Tía May";
nombre = `Tía May`; // comillas invertidas

console.log( typeof nombre); // El typeof muestra el tipo de dato que contiene la variable

nombre = 123;
console.log( typeof nombre);


let esMarvel = true; // boolean
console.log( typeof esMarvel);

let edad = 33;
console.log( typeof edad);


let superPoder; // undefined = la variable aún no se ha inicializado
console.log(superPoder);


let soyNull = null;
console.log( typeof soyNull);


let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log( typeof symbol1);


console.log( symbol1 === symbol2 ); // false
