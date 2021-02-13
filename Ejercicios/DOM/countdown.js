// COuntDown

const d = document;

export function countdown(writeCountDown, limitDate, finalMessage) {
    const $write = d.getElementById(writeCountDown);

    let countdownTempo, dif;
    const newYear = new Date(...limitDate);

    countdownTempo = setInterval(()=> {
        let time = new Date();
        dif = Math.round((newYear.getTime() - time.getTime())/1000);
        const countObj = {
            dias: Math.floor((dif % (3600 * 24 * 365)) / (60 * 60 *24)),
            horas: ("0" + Math.floor((dif % (3600 * 24)) / (60 * 60))).slice(-2),
            minutos: ("0" + Math.floor((dif % 3600) / 60)).slice(-2),
            segundos: ("0" + dif % 60).slice(-2),

        }
        
        $write.innerHTML =`<h2>${countObj.dias} dias ${countObj.horas} horas ${countObj.minutos} minutos ${countObj.segundos} segundos</h2>`;
        
    },1000);
    if( dif < 0){
        clearInterval(countdownTempo);
        $write.innerHTML = `<h2>${finalMessage}</h2>`;
        alert(`${finalMessage}`);
        
    }
} 