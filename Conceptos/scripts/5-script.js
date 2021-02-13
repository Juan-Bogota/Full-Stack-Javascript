/* Condicionales IF - ELSE- ELSE IF
*/

// Simple
let num = 5;
if (num > 0) console.log(`${num} es mayor de 0`);

if (num > 0) {
    console.log(`${num} es mayor de 0`);
    console.log('validacion exitoso');
}

// Compuesto
num = -2;
console.log(`${num}`);
    
if (num > 0) {
    console.log(`${num} es mayor de 0`);
} else {
    console.log(`${num} es menor de 0`);
}

// Multiple

num = 0;
console.log(`${num}`);
    
if (num > 0) {
    console.log(`${num} es mayor de 0`);
} else if (num < 0){
    console.log(`${num} es menor de 0`);
} else {
    console.log(`${num} es igual a 0`);
}
/*Operadores Logicos
 && and
 || or
*/

let num1 = 3, num2 = -2;

if(num1 > 0 && num2 > 0)
{
    console.log(`${num1} y ${num2} son mayores a 0`);
}

if(num1 > 0 || num2 > 0)
{
    console.log(`${num1} o ${num2} son mayores a 0`);
}

let word = 'Hello World';

if(word.length > 5)
{
    console.log(`${word} tiene mas de 5 letras`);
} else if(word.length < 5) {
    console.log(`${word} tiene menos de 5 letras`);
} else {
    console.log(`${word} tiene 5 letras`);
}

let respuesta = true;
if(respuesta == true) console.log(`Respuesta tiene un true`);
if(respuesta) console.log(`Respuesta tiene un true[metodo 2]`);

respuesta = false;
if(respuesta == false) console.log(`Respuesta tiene un false`)
if(!respuesta) console.log(`Respuesta tiene un false[metodo 2]`)

  /*
    Cortocircuito OR - cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto
    Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto
*/

function saludar (nombre = 'Dexconocido'){
    console.log(`hola ${nombre}`);
}
console.log();

saludar('Jon');
saludar();

function saludar1 (nombre){
    nombre = nombre || 'Desconocido'; //cortocircuito OR
    console.log(`hola ${nombre}`);
}

saludar1('Jon');
saludar1();

console.log('cadena' || 'valor derecha');
console.log(19 || 'valor derecha');
console.log(true|| 'valor derecha');
console.log([] || 'valor derecha');


console.log(false|| 'valor derecha');
console.log(null || 'valor derecha');
console.log('' || 'valor derecha');
console.log(0 || 'valor derecha');


console.log('cadena' && 'valor derecha');
console.log(19 && 'valor derecha');
console.log(true && 'valor derecha');
console.log([] && 'valor derecha');

console.log(false && 'valor derecha');
console.log(null && 'valor derecha');
console.log('' && 'valor derecha');
console.log(0 && 'valor derecha');


console.log(0 || false);

console.log(1 && true);
