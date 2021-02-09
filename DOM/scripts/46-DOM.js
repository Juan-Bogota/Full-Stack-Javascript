// Evento
/*

Un evento es cualquier cosa que sucede en el documento
COntrolar la acciones del usuario o del documento cuando pasan ciertas acciones

    * El contenido se ha leido
    * El contenido se ha cargado
    * El usuario mueve el raton
    * El usuario mueve el raton
    * El usuario pulsa una tecla
    * LA ventana se ha cerrado
    * 
    * <p onclick="saludo()" Soy un parrafo</p> => no recomendado insertar jsen html
    * <p (click)="saludo()"> Soy un parrafo<p> => ANGULAR
    * Element.addEventListener('event', callback)

Eventos de raton:
    click - cuando pulsamos el boton izquierdo del raton
    dblclick - cuando pulsadomos 2 veces el click izquierdo
    mousecenter - cuando entramos en la zona que tiene el evento
    mouseleave -  cuando salimos en la zona que tiene el evento
    mousedown - cuando pulsamos el boton iquierdo del raton
    mouseup - cuando soltamos el boton izquierdo del raton
    mousemve- cuando movemos el raton

Events de Teclado:
    keydown: cuando pulsamos una tecla
    keyup:cuando soltamos una tecla
    keypress- cuando presionamos una tecla y no lo soltamos

*/

const holaMundo = (e)=> {
    alert('Hola Mundo II');
    console.log(event);
    console.log(e);
;}
const $button = document.getElementById('button');

const $eventoSemantico = document.getElementById('evento-semantico');

$eventoSemantico.onclick = holaMundo; // no se coloca parentesis de funcion porque el navegador lo ejecuta


// .onclick permite hacer un evento 
// con addEventListener permite hacer eventos multiples

const $eventoMultiple = document.getElementById('evento-multiple');

$eventoMultiple.addEventListener('click', holaMundo);
$eventoMultiple.addEventListener('click', (e)=> {
    alert('Manejador de eventos Multiples');
    console.log('Evento Multiple');
    console.log(e);
});
/* // CLICK

$button.addEventListener('click', ()=> {
    console.log('click');
})

*/


/*
// DOBLE CLICK
const $button = document.getElementById('button');
$button.addEventListener('dblclick', ()=> {
    console.log('doble click');
})

*/

// MOUSE ENTER y leave


const $box = document.getElementById('box');
const $input = document.getElementById('name');

/*

$box.addEventListener('mouseenter', () => {
    $box.style.background = 'green';
})

$box.addEventListener('mouseleave', () => {
    $box.style.background = 'red';
})



// MEJOR FORMA CON CLASES
$box.addEventListener('mouseenter', () => {
    $box.classList.replace('red', 'green');
})

$box.addEventListener('mouseleave', () => {
    $box.classList.replace('green','red');
})
*/

/*
$box.addEventListener('mousedown', () => {
    console.log('HAS PULSADO LA CAJA');
})

$box.addEventListener('mouseup', () => {
    console.log('HAS SOLTADO EL BOTON DEL MOUSE LA CAJA');
})



$box.addEventListener('mouseenter', () => {
    console.log('ESTAS DENTRO DE LA CAJA');
})



$input.addEventListener('keypress', () => {
    console.log('HAS ESCRITO UNA TECLA');
})

$input.addEventListener('keydown', () => {
    console.log('HAS PULSADO UNA TECLA');
})

$input.addEventListener('keyup', () => {
    console.log('HAS SOLTADO UNA TECLA');
})
*/
// OBJETO EVENTO

const $form = document.getElementById('form');

$input.addEventListener('keyup', (e)=> {
    console.log(e);
    console.log(e.key);
    console.log($input.value);
})

$input.addEventListener('click', (e)=> {
    console.log(e);
})


$button.addEventListener('click', (e) => {
    console.log(e.target);
})


const $gallery = document.getElementById('gallery');

$gallery.addEventListener('click', (e)=> {
    console.log(e.target);
    console.log(e.target.textContent);
    e.target.classList.add('red');
})

$form.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log('El formulario se envio');
})

const $link = document.getElementById('link');

$link.addEventListener('click', (e) => {
    e.preventDefault();
})


// CON PARAMETROS

function saludar(nombre = 'Desconocid@'){
    alert(`Hola ${nombre}`);
}

//$eventoMultiple.addEventListener('click', saludar);
// saludar no es la funcion del evento y puede recibir parametros
$eventoMultiple.addEventListener('click', ()=> {
    saludar();
    saludar('Juan');
});


// REMOVER EVENTOS

const $eventoRemover = document.getElementById('evento-remover');

const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener('dblclick', removerDobleClick);
    $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener('dblclick',removerDobleClick);

// FLUJO DE EVENTOS - UNA VEZ QUE EL EVENTO SE ORIGINA TIENE UNA PROPAGACION A LO LARGO DEL ARBOL DEL DOM

//FASE DE BURBUJA ES LA PROPAGACION DEL EVENTO DESDE LO MAS INTERNO A LO MAS EXTERNO(document);

const $divEventos = document.querySelectorAll('.eventos-flujo div');
const $linkEventos = document.querySelector('.eventos-flujo a');

console.log($divEventos);

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    e.stopPropagation();
}


$divEventos.forEach(div => {
    div.addEventListener('click', flujoEventos, false); // false => elemento mas interno al mas externo
    //div.addEventListener('click', flujoEventos, true); // Fase de captura: true => elemento mas externo al mas interno
    /* div.addEventListener('click', flujoEventos, {
        capture: false,
        once:true,
    }); // tambien se puede como objeto, once: consiste que el evento se ejecutara una sola vez
    */
})

$linkEventos.addEventListener('click', (e)=> {
    alert('Hola a todos');
    //e.preventDefault(); // prevenir la acciones por defecto los elementos HTML o del DOM que se este trabajando
    e.stopPropagation();

})


// DELEGACION DE LOS EVENTOS 

// Asignado de manera dinamica a cada div un addEventListener no es optimo si tenemos 1000 div y tampoco es optimo en un for
// Cuando podemos crear un evento en el padre hasta que detecte cual es el elemento que desemcadena el evento

// una buena forma es al document

document.addEventListener('click', (e) => {
    console.log('CLick en', e.target);
})
function flujoEventos2(e) {
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
}

// con los if indicamos que eventos se va a delegar en cada elemento
if(e.target.matches('eventos-flujo div')){
    flujoEventos2(e);
}

if(e.target.matches('.eventos-flujo a')) {
    alert('Hola en Delegacion de Eventos');
    e.preventDefault();
}