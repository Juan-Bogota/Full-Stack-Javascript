// Async - Await

// 1) callbacks
// 2) promise => evolucin a las callbacks y mejor manejo de error
// 3) Async - Await van a esperar a que algo se cumpla para poder seguir ejecutando el proceso en ese momento
// trabajan en conjunto con las promesas

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

async function funcionAsyncDeclarada(){
    try {
       console.log('Inicio Async Function');
       let obj = await cuadradoPromise(0);
       console.log(`Async Function: ${obj.value}, ${obj.result}`)
       obj = await cuadradoPromise(1);
       console.log(`Async Function: ${obj.value}, ${obj.result}`)
       obj = await  cuadradoPromise(2);
       console.log(`Async Function: ${obj.value}, ${obj.result}`)
    } catch (error) {
        console.error(error);
    }
}

funcionAsyncDeclarada();

const funcionAsyncExpresada =  async () => {
    try {
        console.log('Inicio Async Function');
        let obj = await cuadradoPromise(10);
        console.log(`Async Function: ${obj.value}, ${obj.result}`)
        obj = await cuadradoPromise(20);
        console.log(`Async Function: ${obj.value}, ${obj.result}`)
        obj = await  cuadradoPromise(30);
        console.log(`Async Function: ${obj.value}, ${obj.result}`)
     } catch (error) {
         console.error(error);
     }
}

funcionAsyncExpresada();