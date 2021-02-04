// Generator => sintaxis mas amigable para crear iteradores de un elemento iterable
// asterisco al lado de funcion indica que es un generator

// yield => parecido a un return, la diferencia es que puede haber varios yield en la funcion cada vez que se llama
// a la funcion, hay un cursor que indica en que yield esta para ejecutar el codigo hasta encontrar el siguiente yield

function* iterable(){
    yield 'hola';
    console.log('Hola Consola');
    yield 'Hola 2';
    console.log('Seguimos con mas instrucciones');
    yield 'Hola 3';
    yield 'Hola 4';
}

// los generadores permiten manejar el codigo de forma asincrono
// los generadores es convertir el codigo de una funcion iterable

let iterador = iterable(); // internamente ya hace el Symbol iterator

//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());
//console.log(iterador.next());

for (const yield1 of iterador) {
console.log(yield1); 
}

const arr = [...iterable()];
console.log(arr);

function cuadrado(valor){
    setTimeout(() => {
        return console.log({valor, resultado:valor*valor});
    }, Math.random()*1000);

}

function* generador(){
    console.log('Inicia Generator');
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    yield cuadrado(6);
    console.log('Termina Generator');
}

let gen = generador();

for (const yield1 of gen) {
    console.log(yield1);
}

// Asincronia - NO Bloqueante