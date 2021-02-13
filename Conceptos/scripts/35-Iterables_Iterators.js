//Iterables & Iterators

document.querySelectorAll('p'); // Tipo de dato NodeList no un array
// NOdeList son elemento iterables
// String, array,set, nodelist

//iterador => interfaz apuntador que va recorriendo los elementos y la misma estructura de datos
// iterable => es el elemento el cual su contenido se puede recorrer
// iterador => es el apuntador que esta recorriendo digamos que es el mecanismo que esta recorriendo los elementos
// y en base en eso hay diferentes mecanismos para recorrer o consumir un elemento iterable, por ejemplos la destructuracio
// los metodos for for of, Array.from, spread operator, las promesas, etc

// hay un elemento es el iterador (interfaz directa de un iterador) con un metodo especial llamado next, que es el que itera los
//elementos

//const iterable = [1,2,3,4,5];
//const iterable = new Set([1,2,3,4,5,4,3,4,4,5]);
//const iterable = ' Hola Mundo';
const iterable = new Map([
    ['nombre', 'juan'],
    ['edad', 7],
]);


//Accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador); 

//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());

let next = iterador.next();

while(!next.done){
    console.log(next.value);
    next = iterador.next();
}








