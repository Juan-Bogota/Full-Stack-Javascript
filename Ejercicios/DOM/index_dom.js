// ARCHIVO PRINCIPAL

import carrousel, { slider } from "./carrousel.js";
import { countdown } from "./countdown.js";
import detectionConexion from "./deteccion_conexion.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import { moveBall, atajos } from "./eventos_teclado.js";
import filtroBusqueda, { filtroBusqueda1 } from "./filtro_busqueda.js";
import forms, { contactFormValidations } from "./forms.js";
import responsiveTester, { responsiveTester1 } from "./form_tester.js";
import geolocation from "./gelocalizacion.js";
import mediaDevices from "./mediaDevice.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import {rejolDigital, alarma} from "./reloj_digital.js";
import responsiveDesing, {responsiveMedia} from "./responsive.js";
import scrollSpy from "./scroll_spy.js";
import { scrollUp } from "./scroll_up.js";
import aleatorio from "./sorteo_digital.js";
import speechText from "./speech.js";
import theme, { themeDark } from "./theme.js";
import videoInteligente from "./video-inteligente.js";

const d = document;

d.addEventListener('DOMContentLoaded', () => {


    // MENU HAMBURGUER  
    hamburgerMenu('button-menu', '.panel', '.navbar');

    // SECCION 1 - RELOJ DIGITAL
    rejolDigital('iniciar-reloj', 'escribir-reloj', 'detener-reloj');
    alarma('./assets/perforar_1_2.mp3', 'iniciar-alarma', 'detener-alarma');

    // SECCION 2 EVENTOS DEL TECLADO
    moveBall('#rectangle', '#ball');
    atajos();

    //SECCION 3 COUNTDOWN
    countdown('countdown', [new Date().getFullYear() + 1,0,1] , `New Happy Year ${new Date().getFullYear() + 1}`);

    //MENU SCROLL UP
    scrollUp('scroll');

    //BUTTON THEME DARK - LIGHT
    //theme('theme');
    
    // SECCION 4 RESPONSIVE MEDIA
    responsiveMedia('maps', '(min-width: 600px)',`<a href="https://www.google.es/maps/place/Cra.+110+Bis+%2363-83,+Bogot%C3%A1/@4.7008684,-74.1332168,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f9caedc65abfb:0x9d428416c603884b!8m2!3d4.7008684!4d-74.1310281" target="_blank" rel="noopener noreferrer">Ir al mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3971492887677!2d-74.13321678523766!3d4.700868396585586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9caedc65abfb%3A0x9d428416c603884b!2sCra.%20110%20Bis%20%2363-83%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1613268666741!5m2!1sen!2sco" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);
    responsiveMedia('video', '(min-width: 600px)',`<a href="https://www.youtube.com/embed/16geDhp5Xmg" target="_blank" rel="noopener noreferrer">Ir al Video</a>` , `<iframe width="560" height="315" src="https://www.youtube.com/embed/16geDhp5Xmg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

    // SECCION 5 FORM - RESPONSIVE TESTER

    //responsiveTester('webpage', 'widthPage', 'heightPage', 'probar', 'cerrar');
    responsiveTester1('form');

    // SECCION 6 - USER AGENT

    userDeviceInfo('user-device');

    // SECCION 8 - WEB CAM
    // tip getUserMedia API , mediaDevices, permite acceder a los dispositivos
   mediaDevices('video1');


   // SECCION 9 - GEOLOCATION
    geolocation('geolocation');

    //SECCION 10 FILTRO BUSQUEDA
    //filtroBusqueda('cards', 'buscar');
    filtroBusqueda1('cards', '.card', 'buscar');

    //SECCION 11
    aleatorio('programacion', 'ganador');

    // SECCION 12
    //carrousel('carrousel', 'back','next');
    slider();

    // SECCION 13
    // scroolspy, detectar cuando un elemento entra al foco, interseptionObserver
    scrollSpy();

    //SECCION 14
    videoInteligente('video-inteligente', 'section13');

    //SECCION 14
    forms('formulario');
    contactFormValidations();
    
    
});
//segunda forma THEME DARK - LIGHT

themeDark('theme', 'dark-mode'); 
//SECCION 7 - CONEXION Y DESCONEXION
// tip objeto navigator propiedad evaluar la deteccion de la conecxion y el objeto window eventos de cnexon y desconexion

detectionConexion('conexion', 'log');

// SECCION 15 
    // narrador speech sintexis API => detectan dinamicamente la voces
    // detectar los idiomas del sistema operativo, guardar en un select
    speechText('language-speech');