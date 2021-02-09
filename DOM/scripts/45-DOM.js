// DOM 


/*
    interactuar con el contenido textual

    PAdre =
*/

const $paragraph = document.getElementById('que-es');

let text = `
<p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
</p>
<p>
Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
    <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>
`

$paragraph.innerText = text; // no estandarizado

$paragraph.textContent = text; // si va insertar solo texto

$paragraph.innerHTML = text; // si va insertar HTML

$paragraph.outerHTML = text; // si quiero reemplazar todo el contenido incluido las etiquetas html en este caso p id='que-es'

/*
    DOM TRAVERSING
    Recorriendo el DOM


*/

const $cards = document.querySelector('.cards');
console.log($cards);
console.log($cards.children); // devuelve todos los elementos hijos
console.log($cards.children[2]);

console.log($cards.parentElement); // Elemento o padre nodo, subir un nivel
//console.log($cards.parentNode);

console.log($cards.firstChild); //primer hijo nodo -> text content enter y espacios

console.log($cards.firstElementChild); // primer elemento hijo del nodo

console.log($cards.lastElementChild);

console.log($cards.previousSibling);
console.log($cards.previousElementSibling);

console.log($cards.nextElementSibling);

console.log($cards.childNodes);  // es mejor utilizar children, ya que aparecen nodos de tipo texto(salto de linea generalmente)

console.log($cards.closest('div')); // busca el ancestro mas cercano

console.log($cards.closest('body'));

console.log($cards.children[3].closest('section')); // section of cards

console.log($cards.hasChildNodes()); // valida si tiene nodos hijos, como verdadero o falso

console.log($cards.nextSibling); // nodo hermano siguiente
console.log($cards.nextElementSibling); // nodo hermano siguiente recomedado

console.log($cards.previousElementSibling); // nodo hermano anterior recomendado
console.log($cards.previousSibling); // nodo hermano anterior

/* 
    cREANDO elEMENTOS Y fRAGMENTOS

*/

const $figure = document.createElement('figure'),
    $img = document.createElement('img'),
    $figcaption = document.createElement('figcaption'),
    $figcaptionText = document.createTextNode('Animals'),
    $figure2 = document.createElement('figure');


$img.setAttribute('src', 'https://placeimg.com/200/200/animals');
$img.setAttribute('alt', 'Animals2');
$figcaption.appendChild($figcaptionText);
$figure.classList.add('card');
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure); // agrega figure al nodo

$cards.appendChild($figure2);
$figure2.innerHTML = `<img src="https://placeimg.com/200/200/tech" alt="Tech">
<figcaption>Tech2</figcaption>`

$figure2.classList.add('card');

const estaciones = ['Primavera', 'Verano', 'Invierno','Otoño'],
    $ul = document.createElement('ul');
    
document.write('<h3>Estaciones del Año</h3>');
document.body.appendChild($ul);

estaciones.forEach(el => {
    const $li = document.createElement('li');
    $li.textContent = el;
    $ul.appendChild($li);
});


const continentes = ['America', 'Africa', 'Europa','Asia', 'Oceania'],
    $ul2 = document.createElement('ul');
    
document.write('<h3>Continente</h3>');
document.body.appendChild($ul2);
$ul2.innerHTML = '';
continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`);

// fragmento es una variable dinamico, en cada iteracion que estamos agregando un nuevo elemento en vez de pegarlo al dom sino al fragmento
// que esta en memoria, y cuando tenemos listo el fragmento lo insertamos al DOM en una ocasion;

// otra forma (ESTA ES LA MEJOR FORMA) FRAGMENTOS
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ],

  $ul3 = document.createElement('ul'),
  $fragment = document.createDocumentFragment();

document.write('<h3>Meses del Año</h3>');

//meses.forEach(el => $ul3.innerHTML += `<li>${el}</li>`);

meses.forEach( el => {
    const $li = document.createElement('li');
    
    $li.textContent = el;
    $fragment.appendChild($li);
})

$ul3.appendChild($fragment);
document.body.appendChild($ul3);


// TEMPLATES

const $template = document.getElementById('template-card').content,
        $fragment1 = document.createDocumentFragment(),
        cardContent = [
            {
                title: "Tecnología",
                img:"https://placeimg.com/200/200/tech"
            },
            {
                title: "Animales",
                img:"https://placeimg.com/200/200/animals"
            },
            {
                title: "Arquitectura",
                img:"https://placeimg.com/200/200/arch"
            },
            {
                title: "Gente",
                img:"https://placeimg.com/200/200/people"
            },
            {
                title: "Naturaleza",
                img:"https://placeimg.com/200/200/nature"
            }
        ]

cardContent.forEach(el => {
    $template.querySelector('img').setAttribute('src', el.img);
    $template.querySelector('img').setAttribute('alt', el.title);
    $template.querySelector('figcaption').textContent = el.title;

    let $clone = document.importNode($template, true); // true copia toda la estructura, flase solo copia la etiqueta de apertura y cierre
    $fragment1.appendChild($clone);
})

$cards.appendChild($fragment1);


// Modificando Elementos (old style)

const $newCard = document.createElement('figure'),
        $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>

`;

$newCard.classList.add('card');

$cards.replaceChild($newCard, $cards.children[2]); // reemplazar un nodo en un lugar especifico replaceChild(newElement, OldElement)

$cards.insertBefore($newCard, $cards.firstElementChild); // insertar antes de un nodo en especifico

$cards.removeChild($cards.lastElementChild);

document.body.appendChild($cloneCards);
// child.replaceWith(newChild) 

// document.getElementById('id').replaceWith(newElement)




// Modificando elementos (new style)

/* 
    insertAdjacent...
        .insertAdjacentElement(position, el) => appendChild
        .insertAdjacentHTML(position, html) => innerHTML
        .insertAdjacentText(position, text) => text content

    Posiciones:
        beforebegin(hermano anterior)
        afterbegin(primer hijo)
        befreend(ultimo hijo)
        afterend(hermano siguiente)
*/



const $newCard1 = document.createElement('figure'),
        $cards1 = document.querySelector('.cards');


let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
`;


$newCard1.classList.add('card');



$newCard1.insertAdjacentHTML('beforeend', $contentCard);

$newCard1.querySelector('figcaption').insertAdjacentText('beforeend', 'Any Style');

$cards1.insertAdjacentElement('afterbegin', $newCard1);

/*

JQUERY 
Elemento utilizados en JQUERY, en JS Vanilla

    parent.before - Antes de que empiece (hermano Anterior)
    parent.prepend() - Despues de que empiece(primer hijo)
    parent.append() - antes de que acabe (ultimo hijo)
    parent.after()- despues de que acabe(hermano siguiente)
*/

//$cards1.before($newCard1);
//$cards1.prepend($newCard1);

//$cards1.append($newCard1);

//$cards1.after($newCard1);


