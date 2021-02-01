// Array - Metodos II

//.from(iterable) = convierte en array el elemento iterable

let word = 'Hola Mundo';

console.log(Array.from(word));

console.log(word.split(''));


//.sort([callback]) = ordena los elementos de un array alfabeticamente
// si le pasamos un callback los ordena en funcion del algoritmo que le pasemos
// callback funcion que lo ejecuta otra funcion

const letters = ['z', 'e', 't', 'w', 'b'];

console.log(`sort() letras es ${letters.sort()}`);

// no valido para numeros

const numeros = [0,1,4,100,34];

console.log(`sort() numero es ${numeros.sort()}`);

console.log(`Sort() con otro metodo para numeros${numeros.sort((a,b)=> a-b)}`)
console.log(`Sort() con otro metodo para numeros${numeros.sort((a,b)=> b-a)}`)

// forEach(callback(currentValue, [index])), ejecuta la funcion indicada una vez por cada elemento del array

numeros.forEach((number, index) => {
    console.log(`El index ${index} es el numero ${number}`);
})

//some(callback) comprueba si al menos un elemento del array cumple la condicion

const words = ['HTML', 'CSS', 'JavaScript', 'PHP'];
console.log(words.some(word => word.length > 10));
console.log(words.some(word => word.length > 5));

//every(callback) comprueba si todos los elemento del array cumple la condicion
console.log(words.every(word => word.length > 10));
console.log(words.every(word => word.length > 5));

// map(callback) Transforma todos los elementos del array y devuelve un nuevo array
const num = [0,1,4,100,34,55];

const num2 = num.map(number=> number*2); // el nuevo array seria number * 2
console.log(num2);

//filter(callback) Filtra todos los elementos del array que cumpla la condicion y devuelve un nuevo array

const num3 = num.filter(number => number > 40); //el nuevo array solo esta los numero mayor a 40
console.log(num3);
// reduce(callback) reduce todos los elementos del array a un unico valor

console.log(num.reduce((a,b) => a+b));
console.log(num.reduce((a,b) => a-b));

const users = [
    {
        name:'user 1',
        online: true
    },
    {
        name:'user 2',
        online: false
    },
    {
        name:'user 3',
        online: true
    },
    {
        name:'user 4',
        online: true
    },
    {
        name:'user 5',
        online: false
    },
    {
        name:'user 6',
        online: true
    },
]

const userOnline = users.reduce((cont,user) => {
    if(user.online) cont ++;
    return cont;
}, 0)

console.log(`Hay ${userOnline} usuarios conectados`)