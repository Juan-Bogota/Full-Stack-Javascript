// POO
/*   Clases - Modelo a seguir.
Objetos - Es una instancia de una clase , instancia es una copia del modelo a seguir
Atributos - es una característica o propiedad del objeto (son variables dentro de un objeto)
Métodos - son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
*/
// POO programacion Orientado a Objetos


// JAvascript es un un lenguaje de programacion basado en prototipos no en clases

// transforma la clase a una funcion prototipada , web motores navegador, servidor nodejs

const animal = {
    nombre: 'Snoopy',
    sonar(){console.log('Soy un animal');}
}
console.log(animal); // __PROTO__ EN CONSOLA

const animal2 = {
    nombre: 'Lola Bunny',
    sonar(){console.log('Soy un animal');}
}
console.log(animal2); // __PROTO__ EN CONSOLA

// la idea es usar clases si el objeto tiene similitudes cuando se crea por facilidad

// funcion constructora
function Animal(nombre, genero){
    //atributos
    this.nombre = nombre;
    this.genero = genero;
    //metodos
    this.sonar = function(){
        console.log('Soy otro animal'); 
    }
    this.saludar = function(){
        console.log(`Me llamo ${this.nombre}`)
    }
}
// la idea es separar los atributos y metodos de la funcion constructora, debido a que se puede repetir el
// codigo de los metodos o funciones de cada instancia
//mejora a nivel de rendimiento y memoria en la programacion o aplicacion y evitar repetir los metodos en cada instancia

function Animal1(nombre, genero){
    //atributos
    this.nombre = nombre;
    this.genero = genero;
}

Animal1.prototype.sonar = function(){
    console.log('Soy otro animal'); 
}
Animal1.prototype.saludar = function(){
    console.log(`Me llamo ${this.nombre}`)
}

const snoopy = new Animal('Snoopy', 'Macho'),
    lolaBunny = new Animal('Lola Bunny', 'Hembra');


const snoopy1 = new Animal1('Snoopy', 'Macho'),
    lolaBunny1 = new Animal1('Lola Bunny', 'Hembra');

console.log(snoopy);
console.log(lolaBunny);

console.log('Manera correcta, los metodos estan en prototype')
console.log(snoopy1);
console.log(lolaBunny1);

//HERENCIA PROTOTIPICA

function Perro(nombre, genero,size){
    this.super = Animal1;
    this.super(nombre,genero);
    this.size=size;
}
// Perro esta heredando de animal
Perro.prototype = new Animal1();
Perro.prototype.constructor = Perro;

//sobreescritura del metodo del prototipo padre en el hijo

Perro.prototype.sonar = function(){
    console.log('Soy un perro y mi sonido es ladrar');
}

Perro.prototype.ladrar = function(){
    console.log('Guauu Guauu');
}

const snoopy2 = new Perro('Snoopy', 'Macho', 'Mediano');

console.log(snoopy2);


// CLASES
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    }
    saludar(){
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`
    }

}

const juan = new Persona('Juan', 'Lopez', 31);

const marce = new Persona('Marcela', 'Sanchez', 26);

console.log(juan);
console.log(marce);

class AnimalClass{
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    //metodos
    sonar(){
        console.log('Soy otro animal'); 
    }
    saludar(){
        console.log(`Me llamo ${this.nombre}`)
    }
}

const mini = new AnimalClass('Mini', 'Hembra'),
    scooby = new AnimalClass('Scooby', 'Macho');

console.log(mini);
mini.saludar();
mini.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();
// super es un metodo especial que permite llamar el constructor de la clase padre

class PerroClass extends AnimalClass {
    constructor(nombre,genero,size){
        super(nombre, genero);
        this.size = size;
        this.raza = null;
    }

    sonar() {
        console.log('Soy un perro y ladro');
    }

    ladrar() {
        console.log('Guauuu Guauuu =)');
    }

    // un metodo estatico se pueden ejecutar sin necesidad de instanciar la clase
    static queEres(){
        console.log('Los perrod somos animales amigables y somos animales mamiferos')
    }

    // Los setters y getters son metodos especiales que nos permite establcer y obtener los valores de los atributos
    //de nuestra clase

    get getRaza() {
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }



}

const mini1 = new AnimalClass('Mini', 'Hembra'),
    scooby1 = new PerroClass('Scooby', 'Macho', 'Gigante');




console.log(mini1);
mini1.saludar();
mini1.sonar();
console.log(scooby1);
scooby1.saludar();
scooby1.sonar();
console.log('---Static----');
PerroClass.queEres(); // no instanciamos para obtener info del metodo, se invoca directamente

console.log(scooby1.getRaza);
scooby1.setRaza = 'Gran Danes';
console.log(scooby1.getRaza);