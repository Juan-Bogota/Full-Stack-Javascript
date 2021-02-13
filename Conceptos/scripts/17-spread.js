//spread
//spread operator

const numbers = [-12,3,5,7,12,54];

//Enviar elementos en un array a una funcion

const addNumbers = function(a,b,c){
    console.log(a+b+c);
}

addNumbers(1,2,3);
let numbers1 = [1,2,3]

addNumbers(numbers1);

//spread
addNumbers(...numbers);
addNumbers(...numbers1);

// añadir un array a otro array

let users = ['javier', 'juan', 'martha', 'marcela', 'leidy'];

let newUsers = ['maria', 'pepito', 'jose'];

users.push(newUsers[0], newUsers[1], newUsers[2]); // no es muy practico si hay muchos usuarios
console.log(users);

users = ['javier', 'juan', 'martha', 'marcela', 'leidy'];

users.push(...newUsers);
//users.unshift(...newUsers); 
//users.splice(2,0,...newUsers);

console.log(users)

// Copiar arrays

let arr1 = [1,2,3,4];
let arr2 = [arr1]; // array dentro de otro array

console.log(arr2);

arr2 = [...arr1];
console.log(arr2);

//concatenar arrays

let arrConcat = arr1.concat(arr2);
console.log(arrConcat);

arrConcat = [...arr1, ...arr2];
console.log(arrConcat);

// Enviar un numero indefinido de parametros a una funcion

const restParams = function(...numbers) {
    console.log(numbers);
}

restParams();

restParams(1);

restParams(2,3);

restParams(2,3,4,5,6,7,8);


//libreria math

console.log(Math.max(1,2,3));
numbers3 = [-12,3,5,7,12,54, 3, 5];

console.log(Math.max(numbers));
console.log(Math.max(...numbers));

// eliminar elementos duplicados

console.log(new Set(numbers)); // con set
console.log([...new Set(numbers)]); // con array
// sumar 

function sumar(a,b,...c){
    let resultado = a + b;

    c.forEach(function(num){
        resultado += num;
    })
    return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3,4));

console.log(sumar(1,2,3,4,5,6,7,8,9));


