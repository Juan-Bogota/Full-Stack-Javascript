// ARCHIVO PRINCIPAL

import { countdown } from "./countdown.js";
import { moveBall, atajos } from "./eventos_teclado.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import {rejolDigital, alarma} from "./reloj_digital.js";
import { scrollUp } from "./scroll_up.js";

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

});
