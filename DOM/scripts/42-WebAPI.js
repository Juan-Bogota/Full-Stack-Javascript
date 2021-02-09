//

console.log(window);
console.log(document);

let texto = 'Hola soy Juan, soy Desarrollador de software';
const hablar = texto => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto); // habla el texto en el navegador

