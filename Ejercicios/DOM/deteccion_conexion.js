//DETECCION DE CONEXION O DESCONEXION

const d = document,
    w = window;

export default function detectionConexion(status, log){

    const $status = d.getElementById(status),
        $log = d.getElementById(log);

    function updateOnlineStatus(e) {
        let condition = navigator.onLine ? "online" : "offline";
    
        $status.className = condition;
        $status.innerHTML = `Conexion: ${condition.toUpperCase()}`;
        
        setTimeout(()=>{
            $status.classList.add('hidden');
        }, 6000)
        $log.innerHTML = "";
        $log.insertAdjacentHTML("beforeend", "Event: " + e.type + "; Status: " + condition);
      };
    w.addEventListener('online', updateOnlineStatus);
    w.addEventListener('offline', updateOnlineStatus);
}
