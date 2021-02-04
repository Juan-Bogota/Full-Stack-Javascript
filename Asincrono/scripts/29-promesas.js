//promesas

//callback => controlar el comportamiento en javascript, el primer mecanismo fueron las fuciones callback
// utilizan callback como parametros para poder trabajar, pero cuando tienes que estar concatenando una callbak detras de otra
// para estar haciendo diferentes tareas pero unas depende de otros, se empieza a generar una piramide del infierno o una callback hell
// Si yo quisiera manejar los errores en esta concatenacion de funciones tendria que estar haciendo el manejo del error por cada iteracion(funcion)
// para solucionarlo, js tiene las promesas funciona como un if - else(resolve- reject)


function cuadradoPromise(value){
    if(typeof value !== 'number') return Promise.reject(`El valor "${value}" no es un numero`);
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve({
                value,
                result: value * value,
            });
        }, 0 || Math.random() * 2000);
    });
};

cuadradoPromise(0)
    .then((obj) => {
        //console.log(obj);
        console.log('Inicio Promesa');
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(1);
    })
    .then((obj) => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
    })
    .then((obj) => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(3);
    })
    .then((obj) => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(4);
    })
    .then((obj) => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise('5');
    })
    .then((obj) => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        console.log(`Fin de la promesa`);    
    })
    .catch(err => console.error(err));