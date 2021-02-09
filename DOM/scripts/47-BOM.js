// BOM

// si cambiamos el tamaño del navegador se activa el evento
/*
window.addEventListener('resize', (e) => {
    console.clear();
    console.log('******* Evento Resize *********')
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    
    console.log(window.outerHeight);
    console.log(window.outerWidth);
    console.log(e);
})

window.addEventListener('scroll', e => {
    console.clear();
    console.log('******* Evento Scroll *********')
   
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
})
*/

window.addEventListener('load', e => {
 
    console.log('******* Evento Load *********')
   
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})

/*

JQUERY

$(window).load(funcion);
$(document).ready(funcion);
$(window).on('load', funcion);


*/

// DOM Content Load carga mas rapido la pagina 6 o 7 veces depende la estructura de la pagina
// DOM Content Load solo carga el HTML sin estilos css e script mientras que el load espera que cargue todo, es mas
// eficiente en peticiones API para un mejor rendimiento y rapida respuestas
document.addEventListener('DOMContentLoaded', (e) => {
    console.log('******* Evento DOM Content Load *********')
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})

// METODOS

const $abrir = document.getElementById('abrir');
const $cerrar = document.getElementById('cerrar');
const $imprimir = document.getElementById('imprimir');

let ventana; // se guarda en una variable para tener referencia de la pestaña que se abre

// ventanas emergentes
$abrir.addEventListener('click', ()=>{
    ventana = window.open('https://jonmircha.com');
})

$cerrar.addEventListener('click', ()=>{
    //window.close(); // se cierra la misma ventana XD
    ventana.close();
})
// sale la ventana para imprimir
$imprimir.addEventListener('click', ()=>{
    window.print();
})


// Objeto Location - es el objeto que contiene la barra de direcciones


console.log(location);
console.log(location.origin);
console.log(location.href);

console.log(location.protocol);

console.log(location.host);
console.log(location.hostname);

console.log(location.pathname);

console.log(location.hash); //  hash en la URL
console.log(location.search); // parametros en la URL

//location.reload() //recargar la pagina



// Objeto History

// console.log(history);

// history.back(numero); ir hacia atras
 
// history.forward(numero); ir hacia adelante

// history.go(numero); El numero indica hacia adelante o hacia atras 

// 

console.log('**************Objeto Navegador - Navigator*********************');

console.log(navigator);

console.log(navigator.connection);

console.log(navigator.geolocation);

console.log(navigator.mediaDevices);// dispositivos como camaras o microfonos

console.log(navigator.mimeTypes); // aplicaciones que soportan los navegadores

console.log(navigator.onLine); // el usuario pierde la conexion

console.log(navigator.serviceWorker); // API nos ayuda hacer progresive Web APP, convertir un sitio web una 

console.log(navigator.storage);

console.log(navigator.usb);

console.log(navigator.userAgent); // informacion del navegador
