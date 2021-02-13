// ARRAY

let numeros = [1,2,3,4,5];

const array = [ 1, true, 'hola', ['A','B','C']]; // se accede a referencia del valor por eso e puede usar const aun asi haya cambios en el array

console.log(numeros);
console.log(array); 


console.log(numeros[2]);

console.log(numeros[5]); // undefined
console.log(array[3])
console.log(array[3][2]); 

const c = Array.of('x', 'y', 'z');
console.log(c);

// operaciones

console.log(numeros[0] + numeros[1]);


let palabras = ['hola', 'estamos', 'en', 'Youtube'];

console.log(`Array palabras es ${palabras}`);


console.log(`longitud palabra 1 es ${palabras[1].length} letras`);
// inicializar el array con valores

const d = Array(10).fill(false);
console.log(d);

const e = new Array();
console.log(e);

const f = new Array('azul', 'rojo', 'verde');
console.log(f);

// ARRAY -Propiedad

let numbers = [1,2,3,4,5];

console.log(numbers.length);


// ARRAY - Metodos
// Array.isArray(variable a evaluar) => devuel si la variable es un array

let number = 4;

console.log(Array.isArray(number));
console.log(Array.isArray(numbers));


// Eliminar un elemento
// .shift() - eliminar el primer elemento del array y devuelve ese elemento
//.pop()- elimina la ultima

console.log(`Array ${numbers}`);
let deletenumber = numbers.shift()
console.log(deletenumber);
console.log(`Shift ${numbers}`);

deletenumber = numbers.pop()
console.log(deletenumber);
console.log(`Pop ${numbers}`);


//agregar elementos
// .push() - (elem 1, elem 2, ...) Añade 1 o mas elementos al final del array y devuelve la nueva longitud
// .unshift() - (elem 1, elem 2, ...) Añade 1 o mas elementos al comienzo del array y devuelve la nueva longitud

numbers = [1,2,3,4,5];
console.log(`Array ${numbers}`);
let newLenght = numbers.push(6, 7)
console.log(`Nueva longitud ${newLenght}`);
console.log(`Push ${numbers}`);

newLenght = numbers.unshift(-1, 0)
console.log(`Nueva longitud ${newLenght}`);
console.log(`Unshift ${numbers}`);

// BUscar .indexof() Devuelve elprimer indice del elemento que coincida con el valor especificado


numbers = [1,2,3,4,5,1];
console.log(`Array ${numbers}`);
console.log(`Indexof numero 1 = ${numbers.indexOf(1)}`);
console.log(`LastIndexOf numero 1 = ${numbers.lastIndexOf(1)}`);


// .reverse() invierte el orden de los elementos

console.log(`Array = ${numbers}`);
console.log(`Array invertido = ${numbers.reverse()}`);

// .join() Devuelve un string con el separador que queremos

console.log(numbers);
console.log(`Array join = ${numbers.join()}`);

let arrayString = numbers.join(' ');
console.log(arrayString);
console.log(numbers.join('-'));

// .splice(a , b(opcional), items(opcional)) => cambia el contenido de un array
//eliminando elementos existentes y/o agregando nuevos elementos
// a Indice de inicio
// b NUmero de elementos a eliminar
// items Elementos añadir en el caso de que se añadan

console.log(`Array = ${numbers}`);
console.log(`splice(3) = ${numbers.splice(3)}`); // desde el 3 al final se elimina todo
numbers = [1,2,3,4,5,1];
console.log(`Array = ${numbers}`);

console.log(`Retorno de splice(2, 2) = ${numbers.splice(2,2)}`); // elimina desde la posicion 2 y despues toma los 2 siguientes valores a eliminar
console.log(`Variable numbers con splice (2,2) = ${numbers}`);
numbers = [1,2,3,4,5,1];
console.log(`Array = ${numbers}`);


console.log(`Retorno de splice(2, 2, 10,23, 54) = ${numbers.splice(2,2,10,23,54)}`); // si b es diferente de 0 elimina el numero de valores que indiquemos en b y añade los valores de items a partir de la pocision de a
console.log(`Variable numbers con splice = ${numbers}`);

numbers = [1,2,3,4,5,1];

console.log(`Retorno de splice(2, 0, 10,23, 54) = ${numbers.splice(2,0,10,23,54)}`); // si b es  0 n elimina elementos y añade elementos desde la pocision de a
console.log(`Variable numbers con splice = ${numbers}`);

// .slice(a,b) Extrae los elementos de un array desde el indice hasta el indice b.
//Si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia del original.

numbers = [1,2,3,4,5,1];


console.log(`Retorno de slice() = ${numbers.slice()}`); // devuelve el array como una copia
console.log(`Variable numbers con slice = ${numbers}`);

console.log(`Retorno de slice(2) = ${numbers.slice(2)}`); // devuelve el array como una copia desde la pocision 2
console.log(`Variable numbers con slice = ${numbers}`);


console.log(`Retorno de slice(2,5) = ${numbers.slice(2, 5)}`); // devuelve el array como una copia desde la pos 2 hasta la pos 5
console.log(`Variable numbers con slice = ${numbers}`);

// function recorrer array

const colores = ['rojo','azul', 'verde'];

colores.forEach(function(el,index){
    console.log(`<li id=${index}>${el}</li>`);
})