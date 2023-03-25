


let a = 5;

if( a >= 10 ) { // excepciones, undefined, null, una asignación
    console.log('A es mayor o igual a 10');

} else {
    console.log('A es menor a 10')
}

// console.log('Fin de programa');


const hoy = new Date();
let dia = hoy.getDay();

console.log( dia );


if ( dia === 0) { /* el doble igual [ == ]  no toma en cuenta el tipo de dato \ el triple igual [===] toma en cuenta el tipo de dato*/
    console.log('Domingo');
} else if (dia === 1){
    console.log('Lunes');

} else if (dia === 2){
    console.log('Martes');
} else{
    console.log('No es lunes, martes o domingo...');
}


// sin usar If Else, o switch, unicamente objetos

dia = 6;

const diaLetras = {

    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'viernes',
    6: 'Sabado'

};

const diaLetras2 = ['Domingo','Lunes','Martes','Miercoles','Jueves','viernes','Sabado'];
console.log(diaLetras2[dia]);


// dia de la semana