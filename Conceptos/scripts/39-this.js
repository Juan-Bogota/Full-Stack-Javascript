// this hace referencia al objeto que esta trabajando

// COntexto donde ejecutamos las cosas

console.log(this); // this hace referencia global o al objeto window
                   // nodejs al objeto global

console.log(this == window); // true

this.nombre = 'Contexto Global';
console.log(this.nombre);


function imprimir(){
    console.log(this.nombre); // Ambito global
}

imprimir();

const obj = {
    nombre : 'COntexto Objeto',
    imprimir(){
        console.log(this.nombre);
    }
}

obj.imprimir();

const obj2 = {
    nombre : 'Contexto Objeto 2',
    imprimir,
}

obj2.imprimir(); // funcion anonima crea su propio scope y el this es del mismo objeto

const obj3 = {
    nombre : 'Contexto Objeto 3',
    imprimir: ()=>{
        console.log(this.nombre);
    }
}
obj3.imprimir(); // arrow function no maneja su propio scope, lo heredan donde ha sido creado y lo que hace el contexto de la palabra this es agarrarlo directamente del padre del objeto en que se ha creado

function Persona (nombre) {
    this.nombre = nombre;
    //return console.log(this.nombre);
    return function(){
        console.log(this.nombre); // Ambito Global => como la funcio anonima crea un scope pero no tiene dentro una propiedad nombre lo toma del ambito global 
    }
}

let Juan = new Persona('Juan');
Juan();

function Persona1 (nombre) {
    this.nombre = nombre;
    //return console.log(this.nombre);
    return () => console.log(this.nombre); // Ambito  Persona1 => hereda del padre
}

let Juan1 = new Persona1('Juan');
Juan1();

//alternativa Arrow function
function Persona2 (nombre) {
    const that = this;
    that.nombre = nombre;
    //return console.log(this.nombre);
    return function(){
        console.log(that.nombre);
    }
}

let Juan2 = new Persona2('Juan');
Juan2();