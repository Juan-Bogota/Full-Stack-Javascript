// funcion anonima Autoejecutable

(function(){
    console.log(`Funcion Anonima Autoejecutable`);
})();

(function(d, w, c){
    console.log(`Funcion Anonima Autoejecutable Numero 2`);
    console.log(d);
    console.log(w);
    c.log('Este es un console.log');
})(document, window, console); // document va al argumento d, window a w y consola a c

// funcion clasica
(function(){
    console.log(`version Clasica`);
})();

// La crackford

((function(){
    console.log('version Crackford');
})());

// Unario

+function () {
    console.log('version Unaria');
}();

//Facebook

!function(){
    console.log('version Facebook');
}();