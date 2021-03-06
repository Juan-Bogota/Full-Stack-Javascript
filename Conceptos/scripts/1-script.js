/* 
VAR vs LET
*/

var libro = 'Mil y una noches';
let libroOne = 'El principito';

console.log('valor declarado con var = ' + libro);
console.log('valor declarado con let = ' + libroOne);

console.log(window);
console.log(window.libro);      // Var se comporta como una variable global y se encuentra dentro del objeto Window
console.log(window.libroOne); // Undefined debido a que esta fuera del bloque

//  LET respeta el scope o bloque, con VAR no lo hacia y por lo cual es una
//  mala practica de programacion LET solo funciona dentro del bloque VAR funciona dentro del documento y se comporta como GLOBAL

console.log('*************VAR*****************');
var musica = 'Rock';
console.log('Variable Musica antes del Bloque', musica);
{
    var musica = 'Pop';
    console.log('Variable Musica dentro del Bloque', musica);

}
console.log('Variable Musica despues del Bloque', musica);

console.log('*************LET*****************');
let musica2 = 'Rock';
console.log('Variable Musica antes del Bloque', musica2);
{
    let musica2 = 'Pop';
    console.log('Variable Musica dentro del Bloque', musica2);

}
console.log('Variable Musica despues del Bloque', musica2);

// Declarar y asignar variables
let numero = 5;
let palabra = 'Hola Mundo';
let respuesta = true;
console.log(numero);
console.log(palabra);
console.log(respuesta);

// Modificar datos de una variable
numero = 54;
console.log(numero);

// Declarar y asignar constantes
// const PI; // esto genera error, const debedefinir el valor cuando se declara
const PI = 3.14;
console.log(PI);

// Modificar una constante, en la consla muestra un error
// PI = 3;
// console.log(PI);

// EXCEPCION CONST

let objeto = {
    nombre: 'Juan',
    apellido: 'Lopez'
}

let colores = ['blanco', 'negro', 'azul'];
console.log(objeto);
console.log(colores);

// Add valores

objeto.correo = 'jotaclopez@hotmail.com';
colores.push('morado');
console.log('Add values');
console.log(objeto);
console.log(colores);

// DECLARANDO COMO CONST

console.log('CONST');
const objeto1 = {
    nombre: 'Juan',
    apellido: 'Lopez'
}

const colores1 = ['blanco', 'negro', 'azul'];
console.log(objeto1);
console.log(colores1);

objeto1.correo = 'jotaclopez@hotmail.com';
colores1.push('morado');
console.log('Add values CONST');
console.log(objeto1);
console.log(colores1);

// Sucede porque el  objeto o array es un compuesto y esta se accede por referencia no por valor
// ALgo que sucede con los primitivos