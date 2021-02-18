const d = document,
        $table = d.querySelector('.crud-table'),
        $form = d.querySelector('.crud-form'),
        $title = d.querySelector('.crud-title'),
        $template = d.getElementById('crud-template').content,
        $fragment = d.createDocumentFragment();


const getAll = async () => {
    try {
        let res = await axios.get('http://127.0.0.1:5000/santos/'),
        json = await res.data;

        json.forEach(santo => {
            $template.querySelector('.name').textContent = santo.nombre;
            $template.querySelector('.constelacion').textContent = santo.constelacion;
            $template.querySelector('.edit').dataset.nombre = santo.nombre;
            $template.querySelector('.edit').dataset.constelacion = santo.constelacion;
            $template.querySelector('.edit').dataset.id = santo.id;
            $template.querySelector('.delete').dataset.id = santo.id;
            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        })
        $table.querySelector('tbody').appendChild($fragment);
    } catch (error) {
        console.warn(err.response)
        let message = err.response.statusText || 'Ocurrio un error';
        $table.insertAdjacentHTML('afterend', `<p><b>Error ${err.response.status}: ${message}</b></p>`) ;
    }
}

d.addEventListener('DOMContentLoaded', getAll);

d.addEventListener('submit', async (e) => {
    if(e.target === $form){
        e.preventDefault()
        if(!e.target.id.value){
            //POST
            try {
                let res = await axios.post('http://127.0.0.1:5000/santos',{
                    nombre: e.target.nombre.value,
                    constelacion: e.target.constelacion.value,
                }),
                /* OTRA FORMA
                    await(url, {
                            method: 'POST',
                            headers: { 'content-type': 'application/json' },
                            data: JSON.stringify({
                            nombre: e.target.nombre.value,
                            constelacion: e.target.constelacion.value,
                     }),
                */

                 json = await res.data;
                 location.reload();
            } catch (err) {
                console.warn(err.response)
                let message = err.response.statusText || 'Ocurrio un error';
                $form.insertAdjacentHTML('afterend', `<p><b>Error ${err.response.status}: ${message}</b></p>`) ;
            }

        } else {
            // PUT
            try {
                let res = await axios.put(`http://127.0.0.1:5000/santos/${$form.id.value}`,{
                    nombre: e.target.nombre.value,
                    constelacion: e.target.constelacion.value,
                }),
                 json = await res.data;
                 location.reload();
            } catch (err) {
                console.warn(err.response)
                let message = err.response.statusText || 'Ocurrio un error';
                $form.insertAdjacentHTML('afterend', `<p><b>Error ${err.response.status}: ${message}</b></p>`) ;
            }
        }
    }
})

d.addEventListener('click', async(e)=>{
    if(e.target.matches('.edit')){
        $form.id.value = e.target.dataset.id;
        $form.nombre.value = e.target.dataset.nombre;
        $form.constelacion.value = e.target.dataset.constelacion;
        $title.textContent = `Editar Santo`;
    }

    if(e.target.matches('.delete')){
        let isDelete = confirm(`Esta seguro de eliminar Santo`)
        if(isDelete){
            try {
                let res = await axios.delete(`http://127.0.0.1:5000/santos/${e.target.dataset.id}`),
                 json = await res.data;
                 location.reload();
            } catch (err) {
                console.warn(err.response)
                let message = err.response.statusText || 'Ocurrio un error';
                alert(`Error ${err.response.status}: ${message}`) ;
            }
        }
        
    }
})