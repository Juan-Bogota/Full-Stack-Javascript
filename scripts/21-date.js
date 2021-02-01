// date

console.log(Date());

let fecha = new Date();

console.log(fecha);

console.log(`Dia del mes ${fecha.getDate()}`);
// dia de la semana D L M Mi  J V S -> 0 1 2 3 4 5 6
console.log(`Dia de la semana ${fecha.getDay()}`);

// mes E F M A M J J A S O N D -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(`Mes ${fecha.getMonth()}`);

console.log(`Año ${fecha.getFullYear()}`);

console.log(`Hora ${fecha.getHours()}`);

console.log(`Minutos ${fecha.getMinutes()}`);

console.log(`Segundo ${fecha.getSeconds()}`);

console.log(`Milisegundos ${fecha.getMilliseconds()}`);

console.log(`toString = ${fecha.toString()}`);

console.log(`toString Date = ${fecha.toDateString()}`);

console.log(`toLocaleString = ${fecha.toLocaleString()}`);

console.log(`toLocaleString Date = ${fecha.toLocaleDateString()}`);

console.log(`toLocaleString Time= ${fecha.toLocaleTimeString()}`);

console.log(`toLocaleString Time= ${fecha.toLocaleTimeString()}`);

console.log(`timezone Offset= ${fecha.getTimezoneOffset()}`);

console.log(`timezone UTC DATE(LONDON)= ${fecha.getUTCDate()}`);

console.log(`timezone UTC DATE(LONDON) Hour= ${fecha.getUTCHours()}`);
console.log(`now = ${Date.now()}`); // con respecto a la fecha de 1 Enero 1970
let cumpleJuan = new Date(1989,7,8); // el mes empieza en cero

console.log(cumpleJuan);










