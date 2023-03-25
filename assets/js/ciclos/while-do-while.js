

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

/* while ( i < carros.length ) {
    console.log(carros[i]);
    i++;
}
 */
// undefined
//false
// null


while ( carros[i] ) { // cuidado con el ciclo infinito puede hacer explotar tu computadora porque consume todo tu RAM
    if( i === 1){
        // break;
        i++;
        continue;
    }

    console.log(carros[i]);
    i++;
}


console.warn('Do while')

let j = 10;

do { // ejecuta el codigo al menos una vez

    console.log( carros [j])
    j++;

} while ( carros[j] );




