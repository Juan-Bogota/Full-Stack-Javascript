// arrow function

const saludo = function(){
    console.log(`Hola`);
}

saludo();

const saludar = ()=> console.log(`Hola`);

saludar();

const saludarNombre = nombre => console.log(`Hola ${nombre}`);

saludarNombre('Juan');

// 2 parametros

const sumar = function sumar (a,b) {
    console.log(a+b);
}

const sumarArrow = (a,b) => console.log(a+b);

sumar(2,4);
sumarArrow(3,5);

// varias lineas

const numbers = () => {
    console.log('Uno');
    console.log('Dos');
    console.log('Tres');
}
numbers();

const numeros = [1,2,3,4,6];

numeros.forEach((num, index) => console.log(`Index ${index} es ${num}`));


//this hace referencia al contexto del objeto
//this existe en el contexto del navegador o contexto global this se vuelve el objeto windows, objeto del DOM
function perro(){
    console.log(this);
}

perro();
// this hace referencia al contexto en donde se encuentre
//this hace referencia al objeto dog a diferencia a la funcion perro
const dog = {
    nombre: 'Firulais',
    ladrar:function(){
        console.log(this)
    }
}

dog.ladrar();

// si hacemos arrow function en el objeto tendremos problemas con this ya que va a tener un contexto global(window)
// y no del objeto
const dog1 = {
    nombre: 'Firulais',
    ladrar: ()=>{
        console.log(this)
    }
}

dog1.ladrar();

// con el objeto literal se puede corregir el inconveniente de this y va tener el contexto del objeto
const dog2 = {
    nombre: 'Firulais',
    ladrar(){
        console.log(this)
    }
}

dog2.ladrar();
