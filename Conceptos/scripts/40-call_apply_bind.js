// Call Apply Bind

// SOn metodos que permite conservar la referencia de un scope en particular y utlizarlo en algun codigo
// call apply y bind son muy parecidos


console.log(this);
this.lugar = 'Contexto Global';

function saludar(){
    console.log(`${this.lugar}`);
}

saludar(); //contexto Global

const obj = {
    lugar: 'Contexto Objeto',
}

saludar.call(obj); // contexto Objeto el parametro se refiere al contexto o nuevo this al que quiero llamar en este caso obj(objeto)
saludar.apply(obj);
function saludar1(saludo, aQuien){
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar1.call(obj,'Hola', 'Juan');
saludar1.apply(obj, ['Adios', 'Lopez']); // la diferencia call y apply es como recibe los parametros - apply se puede pasar parametros en un Array, y call separados por comas


saludar1.call(null,'Hola', 'Juan');
saludar1.call(this,'Hola', 'Juan');

this.nombre = 'Window';
const persona = {
    nombre: 'Juan',
    saludar(){
        console.log(`Hola ${this.nombre}`);
    }
}

persona.saludar();

const otraPersona = {
    // saludar: persona.saludar, => como otraPersona no contiene this.nombre sale windows ya que lo toma del contexto global
    //saludar: persona.saludar.bind(this), // contexto this o window
    saludar: persona.saludar.bind(persona), // enlaza el contexto de persona
}

otraPersona.saludar();
