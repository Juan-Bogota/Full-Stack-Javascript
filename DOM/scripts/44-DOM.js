// DOM ELEMENTOS - NODOS

// document.getElementById('id') - Acceder a un elemento atravez de su id
// document.querySelector('selectorCSS') - Acceder al primer elemento que coincida con el selector CSS
// document.querySelectorAll('selectorCSS') - Accede a todos los elementos que coincida con el selector CSS devuelve un nodeLIst


// estos 3 casi no se utiliza es mejor querySelector

console.log(document.getElementsByTagName('li')); // etiqueta
console.log(document.getElementsByClassName('card')); // classe
console.log(document.getElementsByName('nombre')); // nombre

const title = document.getElementById('title'); // id
console.log(title);
console.log(title.textContent);

//title.textContent = 'DOM - Accediendo a nodos';

const paragraph = document.querySelector('.paragraph'); // selector valido de css (id,clase,tag)
// getElementById es mejor que el querySelector(para referenciar id) por que es mas rapido y el query selector debe saber el tipo de elemento que esta buscando
console.log(paragraph);

// pseudo clases
const paragraph1 = document.querySelector('.paragraph:nth-child(2)');
console.log(paragraph1);

// los pseudo elemento no se pueden acceder desde el DOM como el before o after, hay otras maneras para acceder

const paragraph2 = document.querySelector('.paragraph::after');
console.log(paragraph2);

const paragraph3 = document.querySelector('.paragraph');
const span = paragraph3.querySelector('span');

console.log(span);
console.log(span.textContent);

const span1 = document.getElementById('title').querySelector('span');
console.log(span1);


//  Nodelist no es un array

const paragraphs = document.querySelectorAll('.paragraph');

paragraphs[0].style.color = 'red'; // no aconsejable
console.log(paragraphs);

//paragraphs.map(p => p.style.color='green'); no es posible el map es un metodo de  array y no de Node List

const paragraphsSpread = [...document.querySelectorAll('.paragraph')];

paragraphsSpread.map(p => p.style.color='green'); 

//psiblemente el spread n sea compatible cn todos los navegadores entonces se usa array.from

const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'));
console.log(paragraphsArray);
paragraphsArray.map(p => p.style.color='blue'); 

document.querySelectorAll('a').forEach((el) => console.log(el));

console.log(document.querySelectorAll('#menu li'));

/*
    Atributos
        element.getAttribute('attribute');
        element.getAttribute('attribute', value);
*/

console.info('\n************ATRIBUTOS***********');



const title1 = document.getElementById('title');
const name1 = document.getElementById('name');

console.log(title1);
console.log(name1);

console.log(name1.getAttribute('type'));

console.log(name1.setAttribute('type', 'number')); // modificar atributos en el DOM
console.log(name1.setAttribute('type', 'text'))

// 

console.log(document.documentElement.lang); // lenguaje HTML
console.log(document.documentElement.getAttribute('lang'));
console.log(document.querySelector('.link-dom').href);

console.log(document.querySelector('.link-dom').getAttribute('href'));


// el signo dolar de la constante se coloca con el fin de saber que esta utiliando elementos del DOM
const $linkDOM = document.querySelector('.link-dom');
$linkDOM.setAttribute('target', '_blank');
$linkDOM.setAttribute('rel', 'noopener');
$linkDOM.setAttribute('href', 'https://youtube.com');

console.log($linkDOM.hasAttribute('rel')); // tiene el atributo

$linkDOM.removeAttribute('rel'); //remueve el atributo

console.log($linkDOM.hasAttribute('rel'));

// Data-Attributes

console.log($linkDOM.getAttribute('data-description'));
console.log($linkDOM.dataset)

console.log($linkDOM.dataset.description);
$linkDOM.setAttribute('data-description', 'Modelo de Objeto del Documento');
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = 'DOM';
console.log($linkDOM.dataset.description);




/*
    Clases
        element.classList.add('class','class',...);
        element.classList.remove('class','class',...);
        element.classList.toggle('class',....[,force]);
        element.classList.contains('class');
        element.classList.replace('OldClass','NewClass');
*/

console.log('************CLASES ***********');

title1.classList.add('main-title', 'other'); // agrega clase

title1.classList.remove('main-title', 'other'); //elimina clase
console.log(title1);

//conttains si contiene o no la clase devuelve un bool
(title1.classList.contains('title')) ?console.log(`Title1 tiene la clase title`): console.log(`Title1 No tiene la clase title`);

title1.classList.replace('titleClass', 'Title'); // reemplaza una clase
console.log(title1);


//

console.log('++++++++ Clases Cards ++++++++++++')
const $card = document.querySelector('.card');
console.log($card);
console.log($card.className);
console.log($card.classList);

$card.classList.add('rotate-45');

console.log($card.className);
console.log($card.classList);

$card.classList.remove('rotate-45');

$card.classList.toggle('rotate-45'); // como no esta la clase lo agrega

$card.classList.toggle('rotate-45'); // como existe la clase lo elimina

$card.classList.toggle('rotate-45'); 

$card.classList.replace('rotate-45', 'rotate-135'); 

$card.classList.add('opacity-80', 'sepia');



/* 
    Atributos Directos

*/

console.log(title1.id);

console.log(title1.innerHTML); // Devuelve como tal el HTML con sus etiquetas
console.log(title1.textContent); //Solo recorre el texto sin importar las etiquetas dentro
console.log(name1.value); // valor dentro del input


/*
    Estilos y variable CSS

*/

// form en HTML la palabra DOM

console.log('+++++++++Estilos CSS+++++++++++');

console.log($linkDOM.style);
console.log($linkDOM.getAttribute('style'));
console.log($linkDOM.style.backgroundColor);
console.log(window.getComputedStyle($linkDOM)); // valores por defecto de  CSS
console.log(getComputedStyle($linkDOM).getPropertyValue('color'));

$linkDOM.style.setProperty('text-decoration', 'none');
$linkDOM.style.setProperty('display', 'block');

$linkDOM.style.width = '20%';
$linkDOM.style.textAlign = 'center';
$linkDOM.style.marginLeft = 'auto';
$linkDOM.style.marginRight = 'auto';
$linkDOM.style.padding = '1rem';
$linkDOM.style.borderRadius = '.5rem';

console.log($linkDOM.style);

// Variables CSS

const $html = document.documentElement,
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color'),
    varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;

$body.style.color = varYellowColor;

//cambiar valor de la variable CSS

$html.style.setProperty('--dark-color', '#111111');
varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');

$body.style.setProperty('background-color', varDarkColor);



