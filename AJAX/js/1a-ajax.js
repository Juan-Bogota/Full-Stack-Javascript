
// AJAX: XMLHttpRequest
(()=>{
    const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById('xhr'),
    $fragment = document.createDocumentFragment();

    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState !== 4) return;
        if(xhr.status >= 200 && xhr.status < 300){
            const data = JSON.parse(xhr.response);
            data.forEach(user => {
                const $li = document.createElement('li');
                $li.innerHTML = `<b>${user.name}</b> --- ${user.email} --- ${user.phone}`;
                $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);
        } else {
            
            let message = xhr.statusText || 'Ocurrio un error';
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }
    })

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.send();
})();

// AJAX API Fetch
(()=>{
    const $fetch = document.getElementById('fetch'),
        $fragment = document.createDocumentFragment();

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? res.json(res): Promise.reject(res))
        .then(json =>{
            json.forEach(user => {
                const $li = document.createElement('li');
                $li.innerHTML = `<b>${user.name}</b> --- ${user.email} --- ${user.phone}`;
                $fragment.appendChild($li);
            });
            $fetch.appendChild($fragment);
        })
        .catch(error => {
            let message = error.statusText || 'Ocurrio un error';
            $fetch.innerHTML = `Error ${error.status}: ${message}`;
        })
        .finally(()=>{
            //console.log('Finally');
        })
})();

// el segundo then, espera la respuesta del primer then lo cual es un
// Mayor control y una mejor lectura del codigo con las peticiones asincronas

// AJAX API FETCH ASYNC AWAIT
(()=>{
    const $fetchAsync = document.getElementById('fetch-async'),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/users'),
                json = await res.json();
                //if(!res.ok) throw new Error('Ocurrio un erro al solicitar los datos');
                if(!res.ok) throw {status: res.status, statusText:res.statusText}
                json.forEach(user => {
                    const $li = document.createElement('li');
                    $li.innerHTML = `<b>${user.name}</b> --- ${user.email} --- ${user.phone}`;
                    $fragment.appendChild($li);
                });
                $fetchAsync.appendChild($fragment);
        } catch (error) {
            console.dir(error);
            let message = error.statusText || 'Ocurrio un error';
            $fetchAsync.innerHTML = `Error ${error.status}: ${message}`;
        } finally {
            //console.log('finally FETCH - ASYNC');
        }
    }

    getData();
   
})();

// AJAX AXIOS
(()=>{
    const $axios = document.getElementById('axios'),
        $fragment = document.createDocumentFragment();
    
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        let json = res.data;
        json.forEach(user => {
            const $li = document.createElement('li');
            $li.innerHTML = `<b>${user.name}</b> --- ${user.email} --- ${user.phone}`;
            $fragment.appendChild($li);
        });
        $axios.appendChild($fragment);
    })
    .catch(err => {
        console.warn(err.response)
        let message = err.response.statusText || 'Ocurrio un error';
        $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally();

})();

// AJAX AXIOS - ASYNC
(()=>{
    const $axiosAsync = document.getElementById('axios-async'),
        $fragment = document.createDocumentFragment();
    
    async function getData(){
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/users'),
                json = await res.data;
            json.forEach(user => {
                const $li = document.createElement('li');
                $li.innerHTML = `<b>${user.name}</b> --- ${user.email} --- ${user.phone}`;
                $fragment.appendChild($li);
            });
            $axiosAsync.appendChild($fragment);
        } catch (err) {
            console.warn(err.response)
            let message = err.response.statusText || 'Ocurrio un error';
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        } finally {

        }
    }

    getData();
})();