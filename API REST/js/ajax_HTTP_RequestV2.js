const d = document,
    $table = d.querySelector('.crud-table'),
    $form = d.querySelector('.crud-form'),
    $title = d.querySelector('.crud-title'),
    $template = d.getElementById('crud-template').content,
    $fragment = d.createDocumentFragment();


const ajax = (options) => {
    let {url, method, success, error, data} = options;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState !== 4) return;
        if(xhr.status >= 200 && xhr.status < 300){
            const json = JSON.parse(xhr.response);
            console.log(json);
            success(json);
        } else {
            let message = xhr.statusText || 'Ocurrio un error';
            error(`Error ${xhr.status}: ${message}`);
        }
    });

    xhr.open(method || 'GET', url);

    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');

    xhr.send(JSON.stringify(data));
}

const getAll = () => {
    ajax({
        url: 'http://127.0.0.1:5000/santos',
        success: (res) => {
            res.forEach(santo => {
                $template.querySelector('.name').textContent = santo.nombre;
                $template.querySelector('.constelacion').textContent = santo.constelacion;
                $template.querySelector('.edit').dataset.id = santo.id;
                $template.querySelector('.edit').dataset.nombre = santo.nombre;
                $template.querySelector('.edit').dataset.constelacion = santo.constelacion;
                $template.querySelector('.delete').dataset.id = santo.id;

                let $clone = d.importNode($template, true);
                $fragment.appendChild($clone);
                
            });
            $table.querySelector('tbody').appendChild($fragment);    
        },
        error: (err)=>{
            console.error(err)
            $table.insertAdjacentHTML('afterend',`<p><b>${err}</b></p>`);
        },
    })
}

d.addEventListener('DOMContentLoaded', getAll)

d.addEventListener('click', (e)=>{
    if(e.target.matches(`.delete`)){
        let isDelete = confirm(`Seguro que quieres eliminar el id: ${e.target.dataset.id}?`)
        if(isDelete){
            let id = e.target.dataset.id;
            ajax({
                url: `http://127.0.0.1:5000/santos/${id}`,
                method: 'DELETE',
                success: (res) => location.reload(),
                error: (err) => alert(err)
            })    
        }
    }
    if(e.target.matches(`.edit`)){
            
        $title.textContent = `Edit Santo ${e.target.dataset.nombre}`;
        $form.nombre.value = e.target.dataset.nombre;
        $form.constelacion.value = e.target.dataset.constelacion;
        $form.id.value = e.target.dataset.id;
    }


})

d.addEventListener('submit', (e)=>{
    if(e.target === $form){
        e.preventDefault();
        if(!e.target.id.value){
            //POST
            ajax({
                url: 'http://127.0.0.1:5000/santos',
                method: 'POST',
                success: (res) => location.reload(),
                error: ()=> $form.insertAdjacentHTML('afterend',`<p><b>${err}</b></p>`),
                data: {
                    nombre: e.target.nombre.value,
                    constelacion: e.target.constelacion.value,
                }
            })
            
        } else {
            // UPDATE
            ajax({
                url: `http://127.0.0.1:5000/santos/${e.target.id.value}`,
                method: 'PUT',
                success: (res) => location.reload(),
                error: ()=> $form.insertAdjacentHTML('afterend',`<p><b>${err}</b></p>`),
                data: {
                    nombre: e.target.nombre.value,
                    constelacion: e.target.constelacion.value,
                }
            })
        }
    }
})