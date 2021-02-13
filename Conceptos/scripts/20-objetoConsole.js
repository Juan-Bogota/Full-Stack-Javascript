// Console

console.log(console);

console.error('Esto es un error');

console.warn('Esto es un aviso');

// mirar console en facebook, hay bloqueos y errores

console.info('Esto es un mensaje informativo');

console.log('Un registro de lo que ha pasado en nuestra aplicacion');

let nombre = 'Juan',
apellido = 'Lopez',
edad=31;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);
console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);

console.clear(); // limpia la consola

console.log(window); // windows objeto global de js del navegador
console.log(document); // document representacion del documento html atravez de js por medio de los nodos y elementos de js ingresamos a las etiquetas de html

console.dir(window);

console.dir(document); // muestra las propiedades, metodos, representar un objeto susmetodos y atributos..

console.clear();

console.group('Los cursos:')
console.log('Curso de Javascript');
console.log('Curso de NodeJS');
console.log('Curso de Puthon');
console.groupEnd();

console.groupCollapsed('Los cursos:')
console.log('Curso de Javascript');
console.log('Curso de NodeJS');
console.log('Curso de Puthon');
console.groupEnd();

console.clear();

console.log(console);
console.table(Object.entries(console).sort());

const numbers = [1,2,3,4,5],
    vocales = ['a', 'e', 'i', 'o', 'u'];

console.table(numbers);
console.table(vocales);

const perro = {
    nombre: 'Boni',
    raza: 'raza',
    color:'cafe'
}

console.table(perro);

console.clear();

// tiempo inicio y final para saber cuanto tiempo se demora en ejecutar un bloque de codigo
console.time('Cuanto tiempo tarda mi codigo');
const arreglo = Array(1000000);

for(let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
}

console.timeEnd('Cuanto tiempo tarda mi codigo');

console.clear();

// console.count para hacer un contador y saber cuantas veces ingresa a esa linea de codigo o bloque
// se usa para tener control de la aplicacion
for(let i = 0; i < 100; i++) {
    console.count('codigo for')
    console.log(i);
}

console.clear();

let x = 1, y = 2, pruebaXY = 'Se espera que X sea menor que Y';

console.assert(x < y, [x,y,pruebaXY]);
console.assert(x > y, [x,y,pruebaXY]);