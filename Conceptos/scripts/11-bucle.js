//BUCLE

//while


let pass = 'hola'; // while se cumple la condicion y va al do-while pide el pass ya se que n valida la condicion antes de escribir y asignar pass

while (pass!= 'hola') {
    pass = prompt('Introduzca la contraseña');   
}

console.log('FIN DEL PROGRAMA');
//do while

do {
    pass = prompt('Introduzca la contraseña = hola');   
} while(pass != 'hola');


let cont = 0; 

while (cont < 10) {
    console.log(`While ${cont}`);
    cont++;
}

do {
    console.log(`Do While ${cont}`);
    cont++;
} while(cont < 10);

// FOR
console.log(`---for 1----`)
for(let i = 0; i <= 3; i++){
    console.log(i);
}

console.log(`---for 2----`)
for(let i = 3; i >= 0; i--){
    console.log(i);
}

console.log(`---for 3----`)
for(let i = 0; i <= 3; ++i){
    if(i%2 === 0)
        console.log(i);
}

console.log(`---for 4----`)
let numbers = [10,20,26,33,45,59];
for(let i = 0; i < numbers.length; i++){
        console.log(`EL index ${i} su valor es ${numbers[i]}`);
}

console.log(`---for of ----`)
//BUCLE FOR OF / FOR IN

let names = ['juan', 'carlos','marcela','lady'];
for(let name of names) {
    console.log(name);
    console.log(names.indexOf(name))
}

let frase ='Hola Mundo';
for(let caracter of frase){
    console.log(caracter);
}

console.log(`---for in (index) ----`)
// for in se utiliza mas en objetos
for(let index in names) {
    console.log(index);
    console.log(names[index]);

}

const me = {
    nombre:'juan',
    apellido:'lopez',
    edad:31
}

for(const propiedad in me){
    console.log(`Key: ${propiedad}, Value ${me[propiedad]}`);
}