export const PI = Math.PI;

export let usuario = 'Juan';

let password = 'qwerty'; // exporto lo que sea necesario
//export default password; // export default  let o const manera correcta

// No puede tener 2 export default,en funciones declaradas
//export default function saludar(){
export function saludar(){
    console.log('Hola Modulos +ES6');
}

export default class Saludar{
    constructor() {
        console.log('Hola soy una class');
    }
}