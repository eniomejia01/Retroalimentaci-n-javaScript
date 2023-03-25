


const regresaTrue = ( ) => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = ( ) => {
    console.log('Regresa false');
    return false;
}




console.warn('Not o la negacion');
console.log(true);
console.log(!true); // false
console.log(!false); // true

console.log( !regresaFalse());


console.warn('And'); // true si todos los valores son verdaderos
console.log( true && true );
console.log( true && !false ); //true

console.log('===================');
console.log( regresaFalse() && regresaTrue() ); // false
console.log( regresaTrue() && regresaFalse() ); // false

console.log('=====&&=====');
regresaFalse() && regresaTrue();

console.log('4 condiciones', true && true && true && false); // false


console.warn('OR'); // true, basta con uno de los dos sea verdadero, unicamente será false cuando haya dos false
console.log( true || false );
console.log( false || false );

console.log( regresaTrue() || regresaFalse() );
console.log('4 condiciones', true || true || true || false); // true


console.warn('asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola mundo en llamas' && 150;
const a2 = 'hola ' && 'Mundo' && soyFalse && true;
const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1, a2, a3, a4, a5});

if ( true || true || true || false ) { // no tener mas de 3 valores booleanos en una condicion
    console.log('Hacer algo');
} else {
    console.log('hacer otra cosa');
}






