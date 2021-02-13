// RELOJ DIGITAL SECCION 1
const d = document;

export function rejolDigital(iniciarReloj, escribir, detenerReloj) {
    
    const $buttonReloj = d.getElementById(iniciarReloj);
    const $escribirReloj = d.getElementById(escribir);
    let clockTempo;    

    d.addEventListener('click', (e) => {
        if(e.target.matches(`#${iniciarReloj}`)){
            $escribirReloj.classList.toggle('is-active');
            clockTempo = setInterval(() => {
                d.getElementById(escribir).innerHTML = `<h2>${new Date().toLocaleTimeString()}</h2>`;
    
            }, 1000);
            $buttonReloj.disabled = true;
        }
        
        if(e.target.matches(`#${detenerReloj}`)){
            clearInterval(clockTempo);
            d.getElementById(escribir).innerHTML = null;
            $escribirReloj.classList.toggle('is-active');
            $buttonReloj.disabled = false;
        }

        

    });
}

export function alarma (sound, iniciarAlarma, detenerAlarma) {
    let alarmTempo;
    const $buttonAlarma = d.getElementById(iniciarAlarma);
    const $audio = d.createElement('audio');
    //$audio.setAttribute('src', sound);
    $audio.src = sound;
    d.addEventListener('click', (e) => {
        if(e.target.matches(`#${iniciarAlarma}`)){
            alarmTempo = setTimeout(() => {
                $audio.play();
            },2000)
            
            $buttonAlarma.disabled = true;
            
            //d.querySelector('main').firstElementChild.appendChild($audio);

        }

        if(e.target.matches(`#${detenerAlarma}`)){
            clearTimeout(alarmTempo);
            //const $audioTag = d.querySelector('main').firstElementChild;
            $audio.pause();
            $audio.currentTime = 0;
            $buttonAlarma.disabled = false;
            //$audioTag.removeChild($audioTag.lastElementChild);
        }
    })
}