// GEOLOCALIZACION

const d = document,
    ng = navigator.geolocation;
export default function geolocation(id){
    const $geo = d.getElementById(id);

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    const sucess = position => {
    
        let pos = [position.coords.latitude, position.coords.longitude, position.coords.accuracy];
        
        const $ul = d.createElement('ul'),
        $h2 = d.createElement('h2'),
        $anchor = d.createElement('div');

        $h2.innerText = 'Tu posicion actual es:'
        $geo.appendChild($h2);
        
        $geo.appendChild($ul);

        pos.forEach((el, index)=>{
            const name = ['Latitud', 'Longitud', 'Precision'];
            let $li = d.createElement('li');
            $ul.appendChild($li);
            $li.insertAdjacentText('beforeend', `${name[index]}: ${el}`);
        })
        $ul.lastElementChild.insertAdjacentText('beforeend', ' metros');
        
        $anchor.innerHTML = `<a href="https://www.google.com/maps/@${position.coords.latitude}, ${position.coords.longitude},18z" target="_blank" rel="noopener noreferrer">Ir a Google Maps</a>`
        $geo.appendChild($anchor);
    }

    const error = err => {
        $geo.innerHTML = `<p><mark>No hubo permisos de Geolocalizacion ${err}</mark></p>`;
        console.error('No hubo permisos de Geolocalizacion del usuario');
    }


    ng.getCurrentPosition(sucess,error,options);
}