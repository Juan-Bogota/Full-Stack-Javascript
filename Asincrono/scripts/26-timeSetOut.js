// Time Set Out


console.log('Inicio');
// setTimeOut recibe una funcion(callback) y un tiempo(ms)
setTimeout(() => {
    console.log('Ejecutando un setTimeout esto se ejecuta una vez');
}, 3000);


setInterval(()=>{
    console.log('Ejecutando un set interval, se ejecuta indefinidamente cada intervalo tiempo')
}, 1000);

let temporizador = setInterval(()=> {
    console.log(new Date().toLocaleTimeString());
},1000);

//limpia un setInterval
//clearTimeout(temporizador); // para que funciones el clear la funcion debe estar en una variable
//clearInterval(temporizador); // lo mismo que el timeout paro con frecuencia de tiempo
//console.log('despues del clear');
