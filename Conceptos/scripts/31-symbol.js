// tipo de dato symbols
// symbol crea una referencia unica que no cambia

Symbol();

let id = 'hola';
let id2 = 'hola';

console.log(id === id2); // true

id =Symbol('id');
id2 = Symbol('id');

console.log(id === id2); // false
console.log(id, id2);

console.log(typeof id, typeof id2); //tipo de dato primitivo

const NAME = Symbol('nombre');
const SALUDAR = Symbol('saludar');

// propiedades privadas de objetos
const persona = {
    [NAME]: 'Juan',
    apellido: 'Lopez'
}

console.log(persona);

//las propiedades(key) son privadas y no aparecen cuando se hace un for

for (const key in persona) {
    console.log(key); 
    console.log(persona[key]);       
}

//

persona.NAME = 'Juancho';
console.log(persona);

console.log(persona.NAME);
console.log(persona[NAME]);

persona[SALUDAR] = function () {
    console.log(`Hola a todos`);
}

console.log(persona);

// como invoca la funcion

persona[SALUDAR]();

console.log(Object.getOwnPropertySymbols(persona));