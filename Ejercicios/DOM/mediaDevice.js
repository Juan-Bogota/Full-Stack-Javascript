// DETECCION DE AUDIO, VIDEO , COMPARTIR PANTALLA

const d = document,
    n = navigator;

export default function mediaDevices(idVideo){
    const myConstraints = {
        audio: true,
        video: true
    },
    $video = d.getElementById(idVideo);

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia(myConstraints)
        .then(mediaStream => {
            /* usar el flujo de datos */
            
            //console.log(mediaStream);
            //console.dir($video);
            $video.srcObject = mediaStream;
            $video.play();
        }).catch(function(err) {
            /* manejar el error */
            $video.insertAdjacentHTML('beforebegin', `<p><mark>${err}</mark></p>`);
            console.error(`no es posible acceder: ${err}`);
        });
    }
}
