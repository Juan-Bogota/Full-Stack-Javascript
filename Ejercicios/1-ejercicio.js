// Javascript ejercicio

const number = document.getElementById('numbers');
const resultado = document.getElementById('result');

let a = parseInt(prompt(' Introducir el primer numero'));
let b = parseInt(prompt(' Introducir el segundo numero'));
let c = parseInt(prompt(' Introducir el tercer numero'));

number.textContent = `Los numeros son ${a}, ${b}, ${c}`;

// Ejercicio


if (a >= b && a >= c) {
    if (b > c) {
        resultado.textContent = `El orden es ${a}, ${b}, ${c}`;
    } else {
        resultado.textContent = `El orden es ${a}, ${c}, ${b}`;
    }
}
else if (b >= a && b >= c){
    if (a > c) {
        resultado.textContent = `El orden es ${b}, ${a}, ${c}`;
    } else {
        resultado.textContent = `El orden es ${b}, ${c}, ${a}`;
    }
}
else{
    if (b > a) {
        resultado.textContent = `El orden es ${c}, ${b}, ${a}`;
    } else {
        resultado.textContent = `El orden es ${c}, ${a}, ${b}`;
    }
}
