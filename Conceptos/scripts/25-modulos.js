// modulos llama archivos de javascript por lo cual no es necesario las funciones autoejecutables
// en el html debe estar definido type=module con el fin de que el import sea soportado
//import / export

import Saludar, {PI, usuario, saludar} from './25-constantes.js';
//import {sumar,restar} from './25-aritmetica.js';
import {aritmetica as calc} from './25-aritmetica.js'; //as para un alias
console.log('Archivos modulos.js');

console.log(`Importacion de PI = ${PI}`);
console.log(`soy ${usuario}`);

console.log(`Suma = ${calc.sumar(4,5)}`);
console.log(`Resta = ${calc.restar(4,5)}`);
saludar();
let saludo = new Saludar();
//console.log(saludo);
saludo;


