// 1-  solicita un nombre, la edad y muestra por consola el mensaje 'hola ____', tiene _____- años y el año que viene tendras ____ años'
//Realiza el ejercicio con promp (mensaje) y haz uso de los template string

/*
let nombre = prompt('Introduzca tu nombre');
let años = parseInt(prompt('Introduzca tu edad'));

console.log(`Hola ${nombre}, tienes ${años} años y el año siguiente tendras ${años + 1} años`);
*/

// 2- Escribe un prgrama que pueda calcular el area de 3 figuras geometricas, triangulo,rectangulo y circulo. En primer lugar pregunta de que figura se quiere calcular el area, despues solicita los datos que necesite para calcularlo<br>
//triangulo = b*h/2 <br>
//rectangulo = b*h <br>
//circulo = pi >* r2 (pi * radio al cuadrado)


let figura = prompt(`Introduzca el nombre de la figura para buscar el area
                     Triangulo, Rectangulo, Circulo`);
figura = figura.toLowerCase();
console.log('LowerCase = ' + figura);
let respuesta = 0;

if (figura === 'triangulo'){
    let base = parseFloat(prompt(`Introduzca la base`));
    let altura = parseFloat(prompt(`Introduzca la altura`));
    respuesta = base * altura / 2;
} else if (figura === 'rectangulo') {
    let base = parseFloat(prompt(`Introduzca la base`));
    let altura = parseFloat(prompt(`Introduzca la altura`));
    respuesta = base * altura;
} else if (figura === 'circulo') {
    let radio = parseFloat(prompt(`Introduzca el radio del circulo`));
    respuesta = Math.PI * Math.pow(radio, 2);
} else {
    respuesta = `La figura ${figura} no es valido`
}

console.log(`El area de la figura ${figura} es ${respuesta}`);

// 3- Solicita un numero e imprime todos los numeros pares e impares desde 1 hasta ese numero 
//con el mensaje 'es par' o 'es impar'
/*
let numero = parseInt(prompt('Intruduzca un numero'));
let string = '';
for (i = 1; i <= numero; i++){
    (i % 2) ? string = 'impar': string = 'par';
    console.log(`${i} es ${string}`);
}
*/

// 4- Escribe un programa que pida un numero entero mayor que 1 y que escriba sie l nuemro es primo o no.
// Un numero primo es aquel que solo es divisible por si mismo y la unidad
/*
let numero = parseInt(prompt(`Introduzca un numero mayor a 1`));

if (numero > 1) {
    let validacion = false;
    let cont = 2;
    while(!validacion) {
        if( numero % cont === 0){
            validacion = true;
        }
        cont++;
    }
    (numero === --cont) ? console.log(`El numero es primo`): console.log(`El numero no es primo`);
} else {
    console.log(`Numero no valido debe ser mayor a 1`);
}

*/

// Escriba un programa que pida un numero entero mayor que cero y calcule su factorial. <br>
//El factorial es el resultado de multiplicar ese numero por sus anteriores hasta la unidad <br>
//5! = 5*4*3*2*1
/*
let numero = parseInt(prompt(`Introduzca un numero mayor que cero`));
if(numero > 0){
    let respuesta = 1;
for(let i = 1; numero >= i; i++){
    respuesta *= i;
}
console.log(`El factorial de ${numero} es ${respuesta}`);
} else {
    console.log(`Numero no es mayor a cero`);
}
*/
// 6- Escribe un programa que permitair introducendo una serie indeterminado de numeros mientra su suma no supere de 50.
//Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos nuemors se ha introducido
/*
let numero;
let acumulado = 0;
let cont = 0;

while(true) {
    numero = parseInt(prompt(`Introduzca un numero`));
    if(isNaN(numero)) {
        console.log(`Numero no valido`);
        break;
    }
    acumulado += numero;
    if(acumulado > 50) {
        console.log(`El acumulado total es ${acumulado} y el contador de numero es ${++cont}`);
        break;
    }
    cont++;
}

*/

// 7- Crea 3 arrays. El primero tendra 5 numers y el segundo se llamara pares y el tercero impares, ambos estaran vacios. Despues multiplica cada uno de los numeros del primer array por un numero aleatorio entre 1 y 10, si el resultado es par guarda ese nuemro en el array de pares y si es impar en el array de impares. Muestra por consola: <br>
//a multiplicacion que se produce junto con su resultado con el formato 2 x 3 = 6
//El array de pares e impares
/*
const arrayOne = [10, 1, 8, 3, 5];
const par = [];
const impar = [];
let aleatorio;
let resultado;
for (let num of arrayOne) {
    aleatorio = Math.ceil((Math.random() * 10));
    resultado = aleatorio * num;
    (resultado % 2) ? impar.push(resultado): par.push(resultado);
    console.log(`${num} x ${aleatorio} = ${resultado}`);
}
console.log(par);
console.log(impar);

*/
// 8- Dado un array de letras, solicita un numero de DNI y calcula que letra le corresponde.
// El numero no puede ser negativo ni tener mas de 8 digitos. La posicion de la letra es el
// resultado del modulo del numero introducido entre 23
/*      
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let numero = parseInt(prompt(`Introduzca su DNI`));
console.log(letras.length);
if(numero > 0 && numero < 100000000) {
    let posicion = numero % 23;
    console.log(`La letra correspondiente al DNI ${numero} es ${letras[posicion]}`);
} else {
    console.log(`Numero es menor a cero o mayor de 8 digitos`);
}
*/


// 9-Solicitar al usuario una palabra y mostrar por dconsla el numero de consonantes, vocales y longitud de la palabra
/*
let palabra = prompt(`Introduzca una palabra`);
const vocal = [97,101,105,111,117];
let v = 0, c = 0;
palabra = palabra.toLowerCase();
for (let num in palabra){
    (vocal.indexOf(palabra.charCodeAt(num)) != -1) ? v++: c++;
}
console.log(`La palabra ${palabra} tiene ${v} vocales y ${c} consonantes`);

// cada elemento del array vocal
vocal.forEach(element => {
    console.log(element);
});
*/

// 10 - determinar si un color introducido por el usuario a travez del prompt se encuentra dentro del array o no

/*const colores = ['azul','amarillo','rojo','verde', 'rosa'];
let palabra = prompt(`Introduzca un color`);

palabra = palabra.toLowerCase();
if (colores.indexOf(palabra) !== -1)
    console.log(`El color existe en el array de colores`);
else
    console.log(`El color no existe =(`);

*/