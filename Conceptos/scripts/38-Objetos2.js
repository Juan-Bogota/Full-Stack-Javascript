// Propiedad Dinamicas de los Objetos
// mecanismo geerar propiedades dinamicas en el objeto



const objUsuarios = {};

const usuarios = ['Juan', 'Sandra', 'Lida', 'Martha', 'Rosa'];

usuarios.forEach((usuario, index) => objUsuarios[`id_${index}`] = usuario);

console.log(objUsuarios);

let aleatorio = Math.round(Math.random()*100 + 5);
const objUsuarios1 = {
    propiedad: 'Valor',
    [`id_${aleatorio}`]: 'Valor Aleatorio',
};

console.log(objUsuarios1);

