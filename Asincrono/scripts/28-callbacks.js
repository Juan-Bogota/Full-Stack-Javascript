// Callbacks (llamada de vuelta) => funcion que se va ejecutar despues de que otra lo haga
// de hecho es el mecanismo por excelencia de js para invocar algunas de sus funciones
// es el mecanismo para poder trabajar o controlar con la sincronia, es decir en la sesion anterior
// los numeros se ejecutaban en diferente orden debido a los tiempos de espera, pero con este mecanismo
// las ejecuciones estan en orden tener control, piense que quiza para el proceso 3 necesitamos del proceso 2
// pero como el 2 no esta listo podria dar error. 


  // Codigo Asincrono  No Bloqueante (tema anterior vs callbacks)
  (()=> {
    console.log('Asincrono');
    console.log('Inicio');

  function dos(){
      setTimeout(function(){
          console.log('Dos');
      },1000);
  }

  function uno(){
      setTimeout(function(){
          console.log('Uno');
      },0); // se almacenas en la pila asi el tiempo sea cero

      dos();
      console.log('Tres');
  }

  uno();
  console.log('Fin');
})()

function cuadradoCallback(value, callback){
    setTimeout(() => {
        callback(value, value*value);
    }, 0 | Math.random()*2000);
}



//callbacks es el primer mecanismo para manejar la sincronia 
cuadradoCallback(0,(value,result) => {
    console.log('Inicia Callback');
    console.log(`Callback ${value}, ${result}`);
    cuadradoCallback(1,(value,result) => {
        console.log(`Callback ${value}, ${result}`);
        cuadradoCallback(2,(value,result) => {
            console.log(`Callback ${value}, ${result}`);
            cuadradoCallback(3,(value,result) => {
                console.log(`Callback ${value}, ${result}`);
                cuadradoCallback(4,(value,result) => {
                    console.log(`Callback ${value}, ${result}`);
                    cuadradoCallback(3,(value,result) => {
                        console.log(`Callback ${value}, ${result}`);
                        console.log(`Callback Hell!!`);
                    });
                });
            });
        });
    });
});
