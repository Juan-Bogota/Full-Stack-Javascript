// DOM

// INTRODUCCION

console.log('********Elementos del Documento**********');

console.log(document); // todo el HTML documento

console.log(document.head);

console.log(document.body);

console.log(document.documentElement); // dentro la etiqueta HTML sin el Doctype

console.log(document.doctype);

console.log(document.characterSet);

console.log(document.title);

console.log(document.links);

console.log(document.images);

console.log(document.forms);

console.log(document.styleSheets); // estilos CSS

console.log(document.scripts);

setTimeout(() => {
    console.log(document.getSelection().toString());    
},3000);

console.log(document);

document.write('<h2> Hola Mundo desde el DOM</h2>')
// si seleccionamos un elemento en la ventana dedesarrollador y en la consola escribimos $0, imprime toda la etiqueta y caracteristica, solo funciona en el navegador











