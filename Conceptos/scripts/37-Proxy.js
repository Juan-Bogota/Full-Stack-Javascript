// Proxy => es un mecanismo  de javascript que te permite crear un objeto basado en un bjeto literal inicial
// es similar en POO, haz de cuenta las clase que es un modelo a seguir y cuando tu generas una nueva instancia de esa clase
// ese objeto o instancia creada obtiene ciertas caracteristicas
// Los proxy son similares en vez de clase lo hace por medio de un objeto literal, genera una copia y va a permitir
// a que tu realices ciertas operaciones como por ejemplo vaidacion de propiedades de tipos de datos dentro de la copia que se esta creando
// del objeto original


// Vas a tener una vinculacion entre el objeto en el cual te basas y pues la nueva instancia que haz generado
// Y todo esto se va administrar atravez de un objeto espercioal que tambien recibe el proxy que se conoce como handle o manejador

const persona = {
    nombre: '',
    apellido:'',
    edad: 0,
}

const manejador = {
    set(obj, prop, valor) {
        if(Object.keys(obj).indexOf(prop) === -1){
            return console.error(`La propiedad ${prop} no existe en el objeto persona`)
        }
        if((prop === 'nombre' || prop === 'apellido') && !(/^[A-Za-zÑñÁáÉéÍíÓóÚúü\s]+$/g.test(valor))){
            return console.error(`La propiedad ${prop} solo acepta letras y espacios en blanco`);
        }
        obj[prop] = valor;
    }
}
const Juan = new Proxy(persona, manejador);

Juan.nombre = 'Juan@';
Juan.apellido = 'Lopez';
Juan.edad = 31;
Juan.Twitter = '@jclopez100';
console.log(Juan);

console.log(persona);

