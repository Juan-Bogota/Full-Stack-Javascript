/*
    *Proceso Single Thread y Multi Thread
    - thread son las unidades basicas de ejecucion de cada proceso que hace la maquina
    - Si abrimos un programa se inicia un proceso o varios procesos
    - JS solo tiene un hilo de ejecucion(single Thread)
    -Filosofia LIFO
    
    * Operaciones de CPU y Operaciones de I/O
    - CPU => codigo de una aplicacion se consideran de CpU pasan la mayor tiempo consumiendo los procesos de la cpu(ex loop infinito, error de logica)
    - OPeraciones i/O => queda en espera la peticion del recurso que han solicitado como un formulario que sea procesado en un servidor, un pago de linea por medio de una api y espera respuesta

    * Operaciones COncurrrentes y Paralelas
    - Concurrencia=> 2 o mas tareas progresan simultaneamente
    - Paralelismo => 2 o mas tareas se ejecutan simultaneamente 

    * Operaciones Bloqueantes y No Bloqueantes
    Fase de espera cada se va ejecutar una operacion de nuestro codigo
    - BLoqueante : no devuelve el control o hilo hasta que haya terminado sus tareas, envia un mensaje al hilo principal de que terminado sus tareas
    - No Bloqueantes: operaciones se ejecutan devuelve inmediatamente el contro el hilo principal no importa si hayan terminado o no su ejecucion 

    * Operaciones Sincronas y Asincronas
    Se refiere cuando tendra lugar la respuesta
    - Sincrono = la respuesta sucede en el presente en el tiempo presente y sigue otra operacion
    - Asincrono= La respuesta sucede en un futuro y no se sabe su tiempo de respuesta, asincrona no espera el resultado,
     es por eso que suelta el control al hilo principal(asincrono- no bloqueante)
    
     Javascript usa un modelo asincrono y no bloqueante, con un loop de eventos implementado en un solo hilo(single thread)
     para operaciones de entrada y salida(Input/Output).

    Pagina visualizacion
     http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

*/

(function () {

    console.log('this is the start');
  
    setTimeout(function cb() {
      console.log('this is a msg from call back');
    });
  
    console.log('this is just a message');
  
    setTimeout(function cb1() {
      console.log('this is a msg from call back1');
    }, 0);
  
    console.log('this is the  end');
  
  })();
  
  // "this is the start"
  // "this is just a message"
  // "this is the end"
  // cabe notar que la función retorna en este punto (undefined)
  // "this is a msg from call back"
  // "this is a msg from call back1"

  // Codigo Sincrono Bloqueante

  (()=> {
    console.log('Codigo Sincrono');
    console.log('Inicio');

    function dos(){
        console.log('Dos');
    }

    function uno(){
        console.log('Uno');
        dos();
        console.log('Tres');
    }

    uno();
    console.log('Fin');
  })()

  console.log('*******************');
  // Codigo Asincrono No Bloqueante
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
