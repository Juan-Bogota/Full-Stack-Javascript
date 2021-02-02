// EJERCICIOS

//1) Programa una función que cuente el número de caracteres de una cadena de texto,
// pe. miFuncion("Hola Mundo") devolverá 10.
let cadena = 'Hola';
console.log(typeof cadena);
console.log(`--------PUNTO 1-----> function: ex length('hola')`);

const length = (cadena = "") => {
    (typeof cadena === 'string') ? console.log(`La longitud es ${cadena.length}`): console.warn(`NO es una cadena!!`);
}


//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
// pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

console.log(`--------PUNTO 2-----> function: ex cut('hola', 2)`);
const cut = (cadena = "", number = undefined) => {
    if ( typeof cadena === 'string' && cadena) {
        (number === undefined || typeof number !== 'number') ? console.warn(`NO ingresaste la longitud o no es un numero`): console.log(`Texto recortado de ${cadena} es ${cadena.slice(0, number)}`)
    } else {
        console.warn(`El tipo de dato NO es string o esta vacio`);
    }
}
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter
// pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
console.log(`--------PUNTO 3-----> function: ex sep('hola a todos', ' ')`);
const sep = (cadena = "", separator = undefined) => {
    if (typeof cadena === 'string' && cadena) {
        (typeof separator === 'string')?console.log(cadena.split(separator)):console.warn(`No ingresastes separador o no es un string`)
    } else {
        console.warn(`El tipo de dato NO es string o esta vacio`);
    }
}
//4) Programa una función que repita un texto X veces,
//pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

console.log(`--------PUNTO 4-----> function: ex repeat('hola a todos', 3)`);
const repeat = (cadena = "", number = undefined) => {
    if (typeof cadena === 'string' && cadena) {
        (typeof number === 'number')? (number >= 1)? console.log(`el texto repite ${number} veces = ${cadena.repeat(number)}`):console.warn(`El numero debe ser 1 o mas`): console.warn('el numero de repeticiones no es un numero o esta vacio');
    } else {
        console.warn(`El tipo de dato NO es string o esta vacio`);
    }
}

//5) Programa una función que invierta las palabras de una cadena de texto
//pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

console.log(`--------PUNTO 5-----> function: ex inverse('hola a todos')`);

const inverse = (cadena = '') => {
    if (typeof cadena === 'string' && cadena) {
        let reverse = '';
        for(i = cadena.length -1; i >= 0; i--) {
            reverse += cadena[i];
        }
        console.log(reverse);
    } else {
        console.warn(`no es una cadena o esta vacio`);
    }
}
// cadena.split('').reverse().join('') => otra manera sin usar el for

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo
// pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

console.log(`--------PUNTO 6-----> function: ex contar('hola a todos', 'a')`);

const contar = (cadena = '', palabra = '') => {
    if (typeof cadena === 'string' && cadena) {
        if (!palabra || typeof palabra !== 'string') {
            console.warn(`la palabra a buscar esta vacio o no es un string`)
        } else {
            let position = 0, i;
            for(i = 0; cadena.indexOf(palabra,position) !== -1; i++){
                position = cadena.indexOf(palabra,position) + palabra.length;
            }
            console.log(`La palabra ${cadena} se repite ${i} veces`);
        }
    } else {
        console.warn(`La cadena esta vacia o no es un string`);
    }
}
//7) Programa una función que valide si una palabra o frase dada
//es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
console.log(`--------PUNTO 7-----> function: ex palindromo('salas')`);

const palindromo = (cadena = "") => {
    if (typeof cadena === 'string' && cadena) {
        cadena = cadena.toLowerCase();
        let reverse = '';
        for(i = cadena.length -1; i >= 0; i--) {
            reverse += cadena[i];
        }
        (reverse === cadena) ? console.log(true) : console.log(false);
    } else {
        console.warn(`cadena vacia o no es un string`);
    }

}
//cadena.split('').reverse().join('')

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado
// pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

console.log(`--------PUNTO 8-----> function: ex deleteWord("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")`);

const deleteWord = (cadena = '', palabra = undefined) => {
    if (typeof cadena === 'string' && cadena) {
        if(typeof palabra === 'string' && palabra) {
        let newStr = cadena.replaceAll(palabra , '');
            console.log(newStr);
        } else {
            console.warn(`La palabra a borrar esta vacio o no es un string`)
        }
    } else {
        console.warn(`LA cadena esta vacia o no es de tipo string`);
    }
}
console.log(`--------PUNTO 8a REGEXP-----> function: ex deleteWord("xyz1, xyz2, xyz3, xyz4 y xyz5", "[x-z]")`);
const deleteWord2 = (cadena = '', palabra = undefined) => {
    if (typeof cadena === 'string' && cadena) {
        if(typeof palabra === 'string' && palabra) {
        let newStr = cadena.replace(new RegExp(palabra, 'ig') , '');
            console.log(newStr);
        } else {
            console.warn(`La palabra a borrar esta vacio o no es un string`)
        }
    } else {
        console.warn(`LA cadena esta vacia o no es de tipo string`);
    }
}

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
console.log(`--------PUNTO 9 random-----> function: ex random()`);

const ramdom = () => {
    Math.round(Math.random()*(600 - 500) + 500);
}

//10) Programa una función que reciba un número y evalúe si es capicúa o no
//(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
console.log(`--------PUNTO 10 Capicua toString and Math-----> function: ex capicua(year)`);

const capicua = (year = undefined) => {
    if(typeof year == 'number'){
        newStr = year.toString();
        let reverse = newStr.split('').reverse().join('');
        (reverse === newStr) ? console.log(true): console.log(false); 
    } else {
        console.warn(`El año esta vacio o no es un numero`)
    }
}

const capicua2 = (year = undefined) => {
    if(typeof year == 'number'){
        let number = year, cont = 1, validacion=true;

        while(number > 9) {
            number /= 10;
            cont++;
        }
        if(cont !== 1) {
            for(let i = 0; i < cont; i++){
                (parseInt(year/(Math.pow(10, (cont-1)-i))))%10 === parseInt((year % Math.pow(10,(i + 1))) / Math.pow(10, i))?validacion = true: validacion = false;
            }
        } else {
            validacion = true;
        }
        

       console.log(validacion);
    } else {
        console.warn(`El año esta vacio o no es un numero`)
    }
}
//11) Programa una función que calcule el factorial de un número
//(El factorial de un entero positivo n, se define como el producto de
//todos los números enteros positivos desde 1 hasta n)
//pe. miFuncion(5) devolverá 120.

console.log(`--------PUNTO 11 Factorial-----> function: ex factorial(numero)`);

const factorial = (number = undefined)=> {
    if(typeof number === 'number' && number > 0){

        let resultado = 1;
        for(i=1; i <= number; i++){
            resultado *= i;
        }
        console.log(resultado);
    } else {
        console.warn(`El parametro no es un numero, esta vacio o es menor de 1`);
    }
}

//12) Programa una función que determine si un número es primo
//(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
console.log(`--------PUNTO 12 Primo-----> function: ex primo(numero)`);

const primo = (number = undefined) => {
    if(typeof number === 'number' && number > 0){
        if (number === 1) {
            console.log(true);
        } else {
            let i = 2;
            while(number % i !== 0){
                i++;
            }
            (number === i) ? console.log(true):console.log(false);
        }
    } else {
        console.warn(`El parametro no es un numero o esta vacio o es menor de 1`);
    }
}
//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
console.log(`--------PUNTO 13 Par Impar-----> function: ex parImpar(numero)`);
const parImpar = (number) => {
    if(typeof number === 'number'){
        (number % 2) ? console.log(`El numero ${number} es impar`): console.log(`El numero ${number} es par`);
    }else {
        console.warn(`El parametro no es un numero o esta vacio`); 
    }

}
//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa
// pe. miFuncion(0,"C") devolverá 32°F.
console.log(`--------PUNTO 14 Celcius- Farenheit-----> function: ex celciusFahrenheit(0,'C') // devuelve 32°F`);

const celciusFahrenheit = (number = undefined, converter =undefined) => {
    if(typeof number === 'number' && typeof converter === 'string'){
        converter = converter.toLowerCase();
        if(converter === 'c') console.log(`${(number - 32) * (5/9)} °C`);
        else if(converter === 'f') console.log(`${(number * (9/5)) + 32} °F`);
        else console.warn(`conversor no valido`);
        } else {
            console.warn(`Parametros invalidos`);
    }
}

// 15) Programa una función para convertir números de base binaria a decimal y viceversa
//pe. miFuncion(100,2) devolverá 4 base 10.
console.log(`--------PUNTO 15 binario - decimal-----> function: decimalBinario(100,2) devolverá 4 base 10.`);

const decimalBinario = (number, converter) => {
    if(typeof number === 'number' && typeof converter === 'number'){
        let len = number.toString().length, validation, suma = 0;
        if(converter === 2){ 
            
            for(let i = 0; i < len; i++){
                validation = parseInt((number % (Math.pow(10,(i + 1))))/Math.pow(10,(i)));
                if(validation === 1){
                    suma += Math.pow(2,i);
                } else if(validation !== 0){
                    return console.warn(`No es un numero binario`);
                }
            }
            return console.log(`El binario ${number} su base 10 es ${suma}`);
        }
        if(converter === 10){
            let exp = Math.floor(Math.log2(number)), bin = '';
            for(let i = exp; i >= 0; i--){
                if(number >= Math.pow(2,i)){
                    bin += '1';
                    number -= Math.pow(2,i);
                } else bin += '0';
            }
            return console.log(`El numero ${number} su base 2 (binario) es ${bin}`);
        }
}
}
// binario a decimal parseInt(numero, base)
// numero.toString(2) decimal a bianrio

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada
//pe. miFuncion(1000, 20) devolverá 800.
console.log(`--------PUNTO 16 descuento-----> function: descuento(1000,20) devolverá 800`);

const descuento = (precio = 0, descuento = 0) => {
    if(typeof precio === 'number' && typeof descuento === 'number'){
        if(precio > 0 && descuento > 0){
            (descuento <= 100) ? console.log(`El valor $ ${precio} con descuento de ${descuento} % es ${precio-(precio*(descuento/100))} `): console.warn(`el descuento no debe ser mayor a 100`) ;
        } else return console.warn(`LOs valores numericos mayores a cero`);
    } else return console.warn(`Los parametros deben ser numeros`);
}


// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy
//pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

console.log(`--------PUNTO 17 fechas-----> function: fecha(new Date(1984,4,23)) devolverá 35 años (en 2021)`);

const fecha = (date = undefined) => {
    if(date instanceof Date){
        let now = new Date();
        let anios = now.getFullYear() - date.getFullYear();
        if (date.getMonth() > now.getMonth()) anios -= 1;
        if (date.getMonth() ===  now.getMonth() && date.getDate() > now.getDate()) anios -= 1;
        return (anios>1) ?  console.log(`La edad es ${anios} años`): (anios<0) ? console.log(`Faltan ${Math.abs(anios)} años para llegar al año ${date.getFullYear()}`): console.log(`Estamos en el año ${date.getFullYear()}`);
    }
    return console.warn(`No es una fecha valida o esta vacio`);
}