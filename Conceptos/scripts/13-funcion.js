// funciones

function estoEsUnaFuncion(){
    console.log('Uno');
    console.log('Dos');
    console.log('Tres');
}

// Invocacion de funcion

estoEsUnaFuncion();
estoEsUnaFuncion();
// esta funcion no recibe parametros ni devuelve un valor

// funcion 2

function unaFuncionQueDevuelvaValor(){
    console.log('Cuatro');
    console.log('Cinco');
    console.log('Seis');
    return 'La funcion retorna este string';
}

console.log(`El retorno de la funcion es ${unaFuncionQueDevuelvaValor()}`);

// funcion 3

function aceptaParametros(nombre, edad){
    console.log(`El nombre es ${nombre} y tiene ${edad} años`);
}
aceptaParametros('Juan', 31);
aceptaParametros(); //undefined parametros

function aceptaParametrosTwo(nombre = 'Desconocido', edad = 0){
    console.log(`El nombre es ${nombre} y tiene ${edad} años`);
}
aceptaParametrosTwo();
// Funciones declaradas vs funciones expresadas

//puede invocarse en cualquier parte del codigo, incluso antes de que la funcion sea declarada

funcionDeclarada();
function funcionDeclarada(){
    console.log('Esto es una funcion declarado');
}

funcionDeclarada();

// Funcion Anonima
// Funcion expresada es decir una funcion que se ha asignado como valor a una variable
// si invocamos esta funcion antes de su definicion JS nos dira ReferenceError: Cannot access 'funcionExpresada' before initialization

// funcionExpresada();
const funcionExpresada = function(){
    console.log('Esto es una funcion expresada');
}

funcionExpresada();