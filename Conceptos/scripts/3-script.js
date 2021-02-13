// Strings

let cadena = 'Hola Mundo';

console.log('Texto es ' + cadena);
/* PROPIEDADES
    LENGTH -> Devuelve la longitud de la cadena
*/

console.log('Longitud es ' + cadena.length);

/* METODO
    Uppercase => convierte a mayusculas
*/

console.log('UpperCase = ' + cadena.toUpperCase());

// Lowercase => convierte a minusculas

console.log('LowerCase = ' + cadena.toLowerCase());

/* indexOf(string) -> Devuelve la posicion en la que se encuentra el string
    Si no existe devuelve -1
    Encuentra la primera coincidencia
    LastIndexOf -> la ultima
*/

console.log('indexOf de Hola = ' + cadena.indexOf('Hola'));

console.log('indexOf de o = ' + cadena.indexOf('o'));
console.log('indexOf de M = ' + cadena.indexOf('M'));
console.log('Last indexOf de o = ' + cadena.lastIndexOf('o'));

// Search

console.log('Search de Mundo = ' + cadena.search('Mundo'));
console.log('Search de Mundo (rex)= ' + cadena.search(/Mu.do/));

/*
The two methods, indexOf() and search(), are equal?

They accept the same arguments (parameters), and return the same value?
The two methods are NOT equal. These are the differences:

* The search() method cannot take a second start position argument.
* The indexOf() method cannot take powerful search values (regular expressions).
*/

/* replace(valor a buscar, valor nuevo)
    Reemplaza el fragmento
*/

console.log('Remplazar Mundo por World = ' + cadena.replace('Mundo', 'World'));
console.log('Remplazar World por Mundo(rex) = ' + cadena.replace(/Wo.ld/, 'Mundo'));

let text = 'Paracaidas';

/* Rex 
 terminado con /g => reemplaza todas las coincidencia
 terminado con /i => case Insensitive

*/
console.log('Remplazar Paracaidas(rex) a por o = ' + text.replace(/a/g, 'o'));
text = 'Paracaidas';
console.log('Remplazar Paracaidas(rex) por Parapente  = ' + text.replace(/PARACAIDAS/i, 'Parapente'));



/* subtring (inicio,[fin])
    extrae los caracteres desde el inicio al final
*/

console.log('a entre la posicion 3 hasta el final = ' + cadena.substring(3));
console.log('a entre la posicion 3 hasta 7 = ' + cadena.substring(3, 7));

/* slice (inicio, [fin])
    al igual que el substring admite valores negativos, empezada desde atras
    (2, -4) -> Empieza a contar desde el tercer caracter y los 4 ultimos no los considera
*/

console.log('Slice(-3) = ' + cadena.slice(-3));
console.log('Slice(0, -6) = ' + cadena.slice(0, -6));
console.log('Slice(2) = ' + cadena.slice(2));

/* trim() -> Elimina los espcaios al inicio y final de la cadena
*/

let cadena2 = '       Hola Mundo       ';

console.log(cadena2);
console.log('texto sin espacios trim() = ' + cadena2.trim());

/* startsWith(valor, [,inicio]) -> Sirve para saber si la cadena empieza con ese valor 
    Devuelve true o false
*/

console.log('Empieza con H = ' + cadena.startsWith('H'));
console.log('Empieza con h = ' + cadena.startsWith('h'));
console.log('Empieza con M en posicion 5 = '+ cadena.startsWith('M', 5));

/* endsWith (valor, [longitud]) -> termina con ese valor
    Devuelve true o false
*/

console.log('Termina con o = ' + cadena.endsWith('o'));
console.log('Termina con a, 4 longitud  = ' + cadena.endsWith('a', 4));
console.log('Termina con n, 8 longitud= ' + cadena.endsWith('n', 8));
console.log('Termina con Mundo  = ' + cadena.endsWith('Mundo'));

/* includes(valor, [inicio]) -> lo mismo que indexOF devuelve True o False
    inicio= index de la cadena donde inicia la validacion de includes
*/

console.log('Includes(n) = ' + cadena.includes('n'));
console.log('Includes(a, 5) = ' + cadena.includes('a', 5));
console.log('Includes(a, 2) = ' + cadena.includes('a', 2));

/*  repeat(valor) -> Repite el numero de string el numero de veces
*/

let cadena3 = 'Juan Lopez'
console.log("Mi nombre = " + cadena3);
console.log("Mi nombre(repeat 3) = " + cadena3.repeat(3));

// charAt >> Retorna un caracter de acuerdo a su index

console.log(cadena3.charAt(0));  // J
console.log(cadena3.charAt(5));  // L

// charCodeAt >> Retorna a UTF-16 code (integer entre 0 a 65535)

console.log(cadena3.charCodeAt(0)); // 74
console.log(cadena3.charCodeAt(5)); // 76

// Property Access

console.log(cadena3[0]);

/* split(separator) >> string a array 
    separador divide el string
*/
let valores = 'a,b,c,d,e'
console.log(`Split Valores \"a,b,c,d,e\" por , posicion 2 = ${valores.split(',')[2]}`);
// Separar todos los caracteres en un array
console.log(`Split Valores \"a,b,c,d,e\" por "" posicion 2 = ${valores.split('')[2]}`);


/* Template String */

let nombre = 'Juan';
let apellido = 'Lopez';
let edad = 31;
console.log('Metodo 1');
console.log('Hola ' + nombre + ' ' + apellido + '. Tienes ' + edad + ' años.');
console.log('Metodo 2');
console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);

console.log(`Hola ${nombre} ${apellido}. El año que viene tendras ${edad + 1} años.`);

let html1 = `
<UL>
<LI>Juan</LI>
<LI>Lopez</LI>
<LI>Sanchez</LI>
</UL>`

console.log(`Code HTML ${html1}`);
