// JSON 
//json.org/json-es.html

// estandar en el intercambio de informacion en los lenguajes

const json = {
    cadena: 'Juan',
    numero: 35,
    booleano: true,
    arreglo: ['correr', 'programar', 'cocinar'],
    objeto:{
        twitter: '@jklopez100',
        email:'jotaclopez@hotmail.com'
    },
    nulo:null
}

console.log(json);

console.log(JSON); // OBJETO tipo symbol
console.log("{}")
console.log(JSON.parse("{}")); //PArse :> analizar una cadena de texto y lo cnvierte en un objeto que javascript valide
console.log("[1,2,3]");
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("19"));
console.log(JSON.parse("null"));
//console.log(JSON.parse("undefined")); // no es un formato valido de objeto

console.log(JSON.stringify({}));
console.log(JSON.stringify([1,2,3]));

console.log(JSON.stringify(true));
console.log(JSON.stringify({x:2, y:3}));
console.log(JSON.stringify(json));

console.log(JSON.parse('{"cadena":"Juan","numero":35,"booleano":true,"arreglo":["correr","programar","cocinar"],"objeto":{"twitter":"@jklopez100","email":"jotaclopez@hotmail.com"},"nulo":null}'));

