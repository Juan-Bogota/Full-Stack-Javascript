// DETECCION DE DISPOSITIVOS JS

const d = document,
    n = navigator,
    userAgent = n.userAgent;

export default function userDeviceInfo(id){
    const $id = d.getElementById(id),
        isMobile = {
            android: () => userAgent.match(/android/i),
            ios: () => userAgent.match(/iphone|ipad|ipod/i),
            windows: () => userAgent.match(/windows phone/i),
            any(){
                return this.android() || this.ios() || this.windows();
            }
        },
        isDesktop = {
            linux: ()=> userAgent.match(/linux/i),
            mac: ()=> userAgent.match(/mac os/i),
            windows: ()=> userAgent.match(/windows nt/i),
            any(){
                return this.linux() || this.mac() || this.windows();
            }
        },
        isBrowser = {
            chrome: () => userAgent.match(/chrome/i),
            safari: () => userAgent.match(/safari/i),
            firefox: () => userAgent.match(/firefox/i),
            opera: () => userAgent.match(/opera| opera mini/i),
            ie: () => userAgent.match(/msie | iemobile/i),
            edge: () => userAgent.match(/edge/i),
            any(){
                return this.ie() || this.edge() || this.chrome() || this.safari() || this.firefox() || this.opera();
            }
        }

    //console.log(userAgent);
    
    $id.innerHTML = `
    <ul>
        <li>User Agent: <b>${userAgent}</b></li>
        <li>Dispositivo: <b>${(isMobile.any()) ? isMobile.any(): isDesktop.any()}</b></li>
        <li>Browser: <b>${isBrowser.any()}</b></li>
    </ul>
    `;

    /* Contenido exclusivo*/
    if(isBrowser.chrome()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`;
    }

    if(isBrowser.firefox()){
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Firefox</mark></p>`;
    }
    if(isDesktop.linux()){
        $id.innerHTML += `<p><mark>Descarga nuestro software para Linux</mark></p>`;
    }
    if(isDesktop.mac()){
        $id.innerHTML += `<p><mark>Descarga nuestro software para MAC</mark></p>`;
    }
    if(isDesktop.windows()){
        $id.innerHTML += `<p><mark>Descarga nuestro software para Windows</mark></p>`;
    }

    // REDIRECCIONES

    if(isMobile.android()){
        location.href = 'https://jonmircha.com';
    }
}