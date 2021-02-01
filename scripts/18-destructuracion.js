// Destructuracion

const numeros = [1,2,3];

// sin destructuracion
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

console.log(uno,dos,tres); 

//con destructuracion

const [one, two, three] = numeros;

console.log(one,two,three);

let persona = {
    nombre:'Juan',
    apellido:'Mircha',
    edad:31
}

let {nombre,apellido,edad} = persona;
console.log(nombre,apellido,edad);

let persona1 = {
    name:'Juan',
    lastname:'Mircha',
    edad:31
}
let {name,lastname,age} = persona1;
console.log(name,lastname,age); // age undefined porque no esta en el objeto debe tener el mismo nombre
