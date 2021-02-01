// Operadores Matematicos

let a = 5;
let b = 2;

let c = new Number(10); // 

console.log(c);
let usuario = 'Carlos';

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

console.log('Hola ' + usuario);

// Operadores de incremento

a = 5;

console.log(a);   // 5
console.log(a++); // 5

console.log(a);   // 6
console.log(++a); // 7

console.log(a);   // 7
console.log(a--); // 7

console.log(a);   // 6
console.log(--a); // 5

// Operadores de Asignacion

a = 10;

a += 3;
console.log('Suma de 10 + 3 = ' + a); 

a -= 3;
console.log('Resta de 13 - 3 = ' + a); 

a *= 3;
console.log('Multiplicacion de 10 / 3 = ' + a); 

a /= 3;
console.log('Division de 30/3 = ' + a); 

a %= 3;
console.log('Modulo de 10 % 3 es' + a); 


// trabajar con decimales

let d = 7.19;
console.log(d.toFixed(1)); // solo un decimal
console.log(d.toFixed(5)); // 5 decimales

console.log(parseInt(d)); // parsea el valor a int
console.log(parseFloat(d)); // a float

let e = "5.6";

console.log(typeof d, typeof e); // number , string

console.log(a + b);

console.log(d + e); // 7.195.6  ??? lo que hace concatenar si es num lo convierte a cadena


console.log(d + parseInt(e));

console.log(d + parseFloat(e)); // valor correcto

console.log(d + Number.parseInt(e));

console.log(d + Number.parseFloat(e)); // valor correcto

