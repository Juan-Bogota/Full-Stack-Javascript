// Objeto

const a = {};

console.log(a);

const b = new Object();

console.log(b);

// dentro de un objeto a las variables se van a llamar atributos/propiedades y al as funciones se llaman metodos
const juan = {
    nombre: 'Juan',
    apellido: 'Lopez',
    edad: 31,
    pasatiempos: ['Ajedrez','leer', 'Hacer Ejercicio'],
    soltero: true,
    contacto: {
        email:'jotaclopez@hotmail.com',
        twitter:'@jclopez100',
        cel:'3138474777'
    },
    saludar: function(){
        console.log('Hola =)')
    },
    decirMiNombre: function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años
            me puedes seguir ${this.contacto.twitter}, mis pasatiempos son ${juan.pasatiempos.join(',')}`);
    }
}

console.log(juan);
console.log(juan['nombre']);
console.log(juan['apellido']);
console.log(juan.nombre);
console.log(juan.apellido);
console.log(juan.pasatiempos);
console.log(juan.pasatiempos[1]);

console.log(juan.contacto);
console.log(juan.contacto.twitter);

juan.saludar(); // metodo 
juan.decirMiNombre(); 


//lista las llaves del objeto
console.log(Object.keys(juan));

// lista los valores del objeto

console.log(Object.values(juan));


// llaves en un for
for(const key in juan) {
    console.log(key);
}

// valores
for(const key in juan) {
    console.log(juan[key]);
}


for(const key of juan.pasatiempos) {
    console.log(key);
}
// tiene la propiedad
console.log(juan.hasOwnProperty('nombre'));

// propiedades

console.log( `Longitud del objeto ${Object.keys(juan).length}`);

// OBJETOS LITERALES

let nombre = 'simona';
let edad = 7;

const perro = {
    nombre:nombre,
    edad:edad,
    ladrar:function(){
        console.log('Guauuu!!!!!')
    }
}

console.log(perro);
console.log(perro.ladrar());
//ES EQUIVALENTE A:
const dog = {
    nombre,
    edad,
    raza:'Callejero',
    ladrar(){
        console.log('Guauuu!!!!!, wow')
    }
}

console.log(dog);

console.log(juan.constructor === Object);

//OTROS
