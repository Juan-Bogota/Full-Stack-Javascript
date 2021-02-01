/* Objeto Math
Es un objeto que se utiliza para operaciones Matematicas

Al ser un objet utiliza la nomenclatura del punto
__Propiedades__ = Math.E, Math.Pi

__Metodos__ = Math.abs(x), Math.ceil(x), Math.floor(x), Math.pow(x,y), Math.random(), Math.round(x), Math.sign(x)  

*/
console.log(Math);
console.log(`Constante de Euler = ${Math.E}`);
console.log(`Constante de PI = ${Math.PI}`);

let numero = -5;
console.log(`ABS = ${Math.abs(numero)}`);

numero = 7.4;
console.log(numero);
console.log(`CEIL = ${Math.ceil(numero)}`);
console.log(`FLOOR = ${Math.floor(numero)}`);
console.log(`ROUND = ${Math.round(numero)}`);


numero = 7.8;
console.log(numero);
console.log(`CEIL = ${Math.ceil(numero)}`);
console.log(`FLOOR = ${Math.floor(numero)}`);
console.log(`ROUND = ${Math.round(numero)}`);

console.log(`POW(2,3) = ${Math.pow(2,3)}`);
console.log(`RANDOM = ${Math.random()}`);
console.log(`RANDOM 2 = ${Math.random()}`);
console.log(`RANDOM 3 (round) * 100 = ${Math.round(Math.random() * 100)}`);
console.log(`RANDOM * 100= ${Math.random() * 100}`);

// Random *(max-min) + min

console.log(`RANDOM 4 (round)[recomendado]entre 50 a 100 = ${Math.round(Math.random() * (100 - 50) + 50)}`);

// Sign indica si el numero es positivo , negativo o cero
console.log(`SIGN DE 0 = ${Math.sign(0)}`)
console.log(`SIGN DE 5 = ${Math.sign(5)}`)
console.log(`SIGN DE -5 = ${Math.sign(-5)}`)

console.log(`raiz cuadrada DE 9 = ${Math.sqrt(9)}`)
console.log(`raiz cuadrada DE 14 = ${Math.sqrt(14)}`)

