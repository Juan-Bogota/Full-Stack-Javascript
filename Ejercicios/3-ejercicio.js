class Libro {
    constructor(titulo, autor, año, genero){
        this.titulo = titulo,
        this.autor= autor,
        this.año = año,
        this.genero = genero
    }
    info(){
        return `El titulo del libro es ${this.titulo}, su autor es ${this.autor}, fue escrito en el año ${this.año} y su genero es ${this.genero}`
    }
    getAuthors(){
        return this.autor;
    }

    getGenero(){
        return this.genero;
    }
}
const generos = ['aventuras', 'terror', 'fantasia'];
const books = [];
let i = 1;
while(i <= 3){
    let libro = prompt(`Introduzca Libro ${i}`);
    if (libro === '') continue;
    let autor = prompt(`Introduzca Autor ${i}`);
    if (autor === '') continue;
    let data = prompt(`Introduzca Año ${i}`);
    if (data.length !== 4 || isNaN(parseInt(data))) continue;
    let genero = prompt(`Introduzca genero ${i}`).toLowerCase();
    if (genero === '' || generos.indexOf(genero) === -1) continue;
    
    books.push(new Libro(libro, autor, data, genero))
    
    i++;
}
    
const getBooks = function(){
    console.log(books);
}

const getAutor = function(){
    
    const authors = [];
    for (const book of books) {
        authors.push(book.getAuthors());
    }
    for (const author of authors.sort()){
        console.log(author);
    }
}

const getGenero = function() {
    let genero = prompt(`Introduzca genero`).toLowerCase();
    const generoArray = [];
    for (const book of books) {
        if(book.getGenero() === genero)
            generoArray.push(book.info());
    }
    console.log(generoArray);
}