// tipo de dato MAP

//OBJETOS PARA ALMACENAR CONJUNTO DE VALORES

//

let mapa = new Map();

mapa.set('nombre', 'Juan');
mapa.set('apellido', 'Lopez');
mapa.set('edad', 35);

console.log(mapa);

console.log(mapa.size);

console.log(mapa.has('nombre'));
console.log(mapa.has('correo'));

console.log(mapa.get('nombre'));

mapa.set('nombre', 'Juancho');
console.log(mapa.get('nombre'));

mapa.delete('apellido');
console.log(mapa);

// iterar 

for (const [key, value] of mapa) {
    console.log(`key: ${key} Value: ${value}`);
}

// lo diferente de un objeto primitivo
// las llaves NO necesariamente un string puede ser cualquier tipo de dato incluso null o undefined

mapa.set(19,'diecinueve');
mapa.set(false, 'falso');
mapa.set({},{});

console.log(mapa);

// agregar de otra forma

const mapa2 = new Map([
    ['nombre', 'David'],
    ['edad', 7],
    ['animal', 'perro'],
    [null,'nulo']
])

console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);
