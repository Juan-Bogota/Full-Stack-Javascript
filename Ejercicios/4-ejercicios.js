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

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes
//pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

console.log(`--------PUNTO 18 vocal-consnante-----> function: countVC('Hola mundo') devuelva Vocales: 4, Consonantes: 5.`);

const countVC = (cadena = '') => {
    if (typeof cadena === 'string' && cadena){
        console.log(`Hay ${cadena.match(/[aeiou]/ig).length} vocales y ${cadena.match(/[^aeiou \d]/ig).length} consonantes`);
    } else {
        console.warn(`Cadena vacia o no es de tipo string`);
    }
}
//19) Programa una función que valide que un texto sea un nombre válido
//pe. miFuncion("Jonathan MirCha") devolverá verdadero.

console.log(`--------PUNTO 19 validacion nombre-----> nombre("Jonathan MirCha") devolverá verdadero.`);

const nombre = (nombre='') => {
    if (typeof nombre === 'string' && nombre){
        let expReg = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/; // /^[A-Za-zÑñÄáÁÉéÍíöóÓÚúüÜ\s]+$/g
        console.log(expReg.test(nombre));
    } else {
        console.warn(`Nombre vacio o no es un string`)
    }
}

// 20) Programa una función que valide que un texto sea un email válido
//pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

console.log(`--------PUNTO 20 validacion mail-----> mail("jonmircha@gmail.com") devolverá verdadero.`);

const mail = (mail='') => {
    if (typeof mail === 'string' && mail){
        let expReg = /^([\w\._-]+@[a-z]+\.[a-z]{2,15})+$/i; ///[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i

        console.log(expReg.test(mail));
    } else {
        console.warn(`Nombre vacio o no es un string`)
    }
}
//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado
//pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

console.log(`--------PUNTO 21 Array al cuadrado----->  arrayAlCuadrado([1, 4, 5]) devolverá [1, 16, 25].`);

const arrayAlCuadrado = (array = null) => {
    if(array instanceof Array && array){
        let newArray = array.map(number => Math.pow(number, 2));
        console.log(newArray);
    } else {
        console.warn(`Array vacio o no es un array`);
    }
}
let array1 = [4,5,6]
arrayAlCuadrado();
arrayAlCuadrado([1,2,3]);
arrayAlCuadrado(array1);



//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array
//pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
console.log(`--------PUNTO 22 Max- Min Array----->  arrayMaxMin([1, 4, 5, 99, -60]) devolverá [99, -60].`);

const arrayMaxMin = (array = null) => {
    if(array instanceof Array && array){
        let newArray = [];
        array = array.filter(number => typeof number === 'number');
        array.sort((a,b)=> a-b);
        newArray.push(array[0], array[array.length - 1]);      
        console.log(newArray);
    } else {
        console.warn(`Array vacio o no es un array`);
    }
}

//MAth.max(...array)
//Math.min(...array)
arrayMaxMin([1,9,4,6,7]);
arrayMaxMin([1,9,4,6,7,10,20,40,100,50,32,-12,-4]);
arrayMaxMin([1,9,4,6,7,10,'d','s','a',50,32,-12,-4]);




//23) Programa una función que dado un array de números devuelva un objeto
//con 2 arreglos en el primero almacena los números pares y en el segundo los impares
//pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

console.log(`--------PUNTO 23 Par - Impar Objeto----->  objetoParImpar([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.`);

const objetoParImpar = (array = null) => {
    if(array instanceof Array && array){
        const newObject = {
            pares: [],
            impares:[]
        }
        array = array.filter(number => typeof number === 'number');
        array.forEach(element => {
            (element % 2 === 0) ? newObject.pares.push(element):newObject.impares.push(element);
        });
        console.log(newObject);
    } else  {
        console.warn(`Array vacio o no es un array`);
    }
}
/*
console.log({
    pares: array.filter(num => num % 2 === 0)
    impares: array.filter(num => num % 2 !== 0)
})
*/
objetoParImpar([1,2,3,4,5,6,7,8,9]);
objetoParImpar([10,21,32,43,15,16,27,68,89]);

objetoParImpar([10,21,32,43,'2','99',15,16,27,68,89]);



// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos
//el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente 
//pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
console.log(`--------PUNTO 24 Asc - Desc Objeto----->  objetoAscDesc([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }`);

const objetoAscDesc = (array = null) => {
    if(array instanceof Array && array.length > 0) {
        const newObject = {
            asc: [],
            desc:[]
        }
        arrayfilter = array.filter(number => typeof number === 'number');
        if(array.length === arrayfilter.length) {
            let asc = [...array];
            asc.sort((a,b) => a-b);
            let desc = [...array];
            desc.sort((a,b) => b-a);
            newObject.asc.push(asc);
            newObject.desc.push(desc);
            console.log(newObject);
        } else {
            console.warn(`EL array tiene valores no numericos`)
        }
    } else {
        console.warn(`el parametro no es un array o esta vacio`);
    }
}
objetoAscDesc([1,2,8,6,4,0,3,6]);
objetoAscDesc([1,2,8,6,4,0,3,'3',6]);



//25) Programa una función que dado un arreglo de elementos, elimine los duplicados
//pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

console.log(`--------PUNTO 25 Eliminar duplicados----->  duplicados(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]`);

const duplicados = (array = null) => {
    if (array instanceof Array && array.length > 0){
        let duplicados = new Set(array);
        //console.log([...new Set(numbers)]); // con array
        console.log(duplicados);
        const newArray = [];
        for (const element of array) {
            if(!(newArray.includes(element)))newArray.push(element);
        }
        console.log(newArray);
    } else {
        console.warn(`El array esta vacio o no es un array`);
    }
}

// array.filter((value,index,array) => array.indexOf(value) === index)
duplicados(["x", 10, "x", 2, "10", 10, true, true]); 
//26) Programa una función que dado un arreglo de números obtenga el promedio
//pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

console.log(`--------PUNTO 25 Promedio----->   promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.`);

const promedio = (array = null) => {
    if (array instanceof Array && array.length > 0){
        arrayfilter = array.filter(number => typeof number === 'number');
        if(arrayfilter.length === array.length){

            let suma = array.reduce((a,b) => a+b);
            console.log(`El promedio es ${suma / array.length}`);
        } else {
            console.warn(`El array contiene valores no numericos`);
        }
    } else {
        console.warn(`El array esta vacio o no es un array`);
    }
}

/*
array.reduce((total, num, index, array) => {
    total += num;
    if (index === array.length -1) return `El promedio ${array.join(' + ')} es ${total / array.length};
    else return total;
})
*/
promedio([9,8,7,6,5,4,3,2,1,0]); 
promedio([9,8,7,6,5,'4',3,2,1,0]);

// 27) Programa una clase llamada Pelicula.

/*
La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
- Todos los datos del objeto son obligatorios.
- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
   7 restantes números.
- Valida que el título no rebase los 100 caracteres.
- Valida que el director no rebase los 50 caracteres.
- Valida que el año de estreno sea un número entero de 4 dígitos.
- Valida que el país o paises sea introducidos en forma de arreglo.
- Valida que los géneros sean introducidos en forma de arreglo.
- Valida que los géneros introducidos esten dentro de los géneros 
   aceptados*.
- Crea un método estático que devuelva los géneros aceptados*.
- Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
  decimal de una posición.
- Crea un método que devuelva toda la ficha técnica de la película.
- Apartir de un arreglo con la información de 3 películas genera 3 
  instancias de la clase de forma automatizada e imprime la ficha técnica 
  de cada película.

  
* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy,
Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror,
Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show,
Thriller, War, Western.
*/

console.log(`-----Ejercicio 27 ----- Class Pelicula`)

class Pelicula {
    constructor(obj){  //constructor({id,titulo,director,estreno,pais,genero,calificacion}) => destructuracion
        this.id = obj.idIMDB;
        this.titulo = obj.titulo;
        this.director = obj.director;
        this.estreno = obj.estreno;
        this.pais = obj.pais;
        this.genero = obj.genero;
        this.calificacion = obj.calificacion;

        this.validarIMDB(this.id);
        this.validarTitulo(this.titulo);
        this.validarDirector(this.director);
        this.validarEstreno(this.estreno);
        this.validarPais(this.pais);
        this.validarGenero(this.genero);
        this.validarCalificacion(this.calificacion);
    }

    validarString(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(typeof valor !== 'string') return console.error(`${propiedad} "${valor}" No es una cadena de texto`);
        return true; 
    }

    validarLongitudString(propiedad, valor, longitud){
        if(valor.length > longitud) return console.error(`${propiedad} "${valor} excede el numero caracteres permitidos"`);
        return true;
    }

    
    validarNumero(propiedad, numero){
        if(!numero) return console.warn(`El numero esta vacio`);
        if(typeof numero !== 'number') return console.warn(`${propiedad} "${valor} no es un numero"`)
        return true;
    }

    validarArray(propiedad, array){
        if(!array) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(!(array instanceof Array)) return console.warn(`${propiedad} "${valor} no es un array`);
        if(array.length === 0) return console.warn(`${propiedad} no tiene datos`);
        for (const element of array) {
            if(typeof element !== 'string') return console.error(`Elemento ${element} no es una cadena de texto`)            
        }
        return true;
    }

    validarIMDB(id) {
        if(this.validarString('IMDB id', id))
         if(!(/^[a-z]{2}[\d]{7}$/i.test(id))){
            return console.warn(`El idIMBD ${id} no es valido, debe tener 9 caracteres, 2 letras y 7 numeros`);
         }
    }

    validarTitulo(titulo) {
        if(this.validarString('Titulo',titulo)){
            this.validarLongitudString('Titulo', titulo,100);
        }
    }

    validarDirector(director) {
        if(this.validarString('Director', director)){
            this.validarLongitudString('Titulo', director, 50);
        }
    }

    validarEstreno(estreno){
        if(this.validarNumero('estreno', estreno)){
           if(!(/^[\d]{4}$/.test(estreno))) {
               return console.warn(`${estreno} no es un año valido de 4 digitos`);
           }
        }
    }

    validarPais(pais){
        this.validarArray('Pais', pais);
    }

    static get listaGeneros() {
        return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];
    }

    validarGenero(genero){
        genero = genero.map(element => element.toLowerCase());
        let generosAceptados = Pelicula.listaGeneros.map(element => element.toLowerCase());
        
        if(this.validarArray('Genero', genero)){
           if(!(generosAceptados.includes(...genero))){

               console.warn(`Genero no es un array o no esta en los generos aceptados`);
               Pelicula.generosAceptados();

            }
        }
    }

    validarCalificacion(calificacion){
        if(this.validarNumero('Calificacion', calificacion)){
            return (!(calificacion <= 10 && calificacion >= 0)) ? console.warn(`La calificacion no esta entre 0 y 10`): this.calificacion = calificacion.toFixed(1);
        }
    }

    static generosAceptados() {
        return console.log(`Géneros Aceptados: ${this.listaGeneros.join(', ')}`);
    }

    get getpelicula() {
        return console.log(`Pelicula: ${this.titulo}\nid IMDB: ${this.id}\nDIRECTOR: ${this.director}\nESTRENO: ${this.estreno}\nPAIS: ${this.pais.join(', ')}\nGENERO: ${this.genero.join(', ')}\nCALIFICACION: ${this.calificacion}`); 
    }


}


const obj = {
    idIMDB:'qw1234423',
    titulo:'Harry',
    director:'Juan',
    estreno: 1943,
    pais:['col'],
    genero:['Music', 'Comedy'],
    calificacion: 2,
    }

const listObj = [
    {
    idIMDB:'qw1234423',
    titulo:'Harry',
    director:'Juan',
    estreno: 1950,
    pais:['col'],
    genero:['Music', 'Comedy'],
    calificacion: 2,
    },
    {
    idIMDB:'qw1234423',
    titulo:'Harry',
    director:'Juan',
    estreno: 1943,
    pais:['col'],
    genero:['Music', 'Comedy'],
    calificacion: 2,
    },
    {
    idIMDB:'qw1234423',
    titulo:'Harry',
    director:'Juan',
    estreno: 1923,
    pais:['col'],
    genero:['Music', 'Comedy'],
    calificacion: 2,
    }
];

const pelicula = new Pelicula(obj);

listObj.forEach(el => new Pelicula(el).getpelicula);
