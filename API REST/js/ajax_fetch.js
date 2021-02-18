const d = document,
    $table = d.querySelector('.crud-table'),
    $form = d.querySelector('.crud-form'),
    $title = d.querySelector('.crud-title'),
    $template = d.getElementById('crud-template').content,
    $fragment = d.createDocumentFragment();

const getAll = async () => {
    try {
        let res = await fetch('http://127.0.0.1:5000/santos');
        console.log(res);
        if(!res.ok) throw ({status: res.status, message: res.statusText});
        let json = await res.json();

        json.forEach(santo => {
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

    } catch (err) {
        $table.insertAdjacentHTML('afterend',`<p><b>Error ${err.status}: ${err.message}</b></p>`);
    }
} 

d.addEventListener('DOMContentLoaded', getAll);

d.addEventListener('submit', async (e)=>{
    if(e.target === $form){
        e.preventDefault();
        if(!e.target.id.value){
            //POST
            data = {
                nombre: e.target.nombre.value,
                constelacion: e.target.constelacion.value,
            }
            
            try {
                let res = await fetch('http://127.0.0.1:5000/santos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset= utf-8'
                        },
                    body: JSON.stringify(data)
                })
                if(!res.ok) throw ({status: res.status, message: res.statusText});
                let json = await res.json();
                location.reload();
                
                    
            } catch (error) {
                alert(`Hubo un error al insertar ${error.status}: ${error.message}`);
            }
        } else{
            //PUT
            data = {
                nombre: $form.nombre.value,
                constelacion: $form.constelacion.value,
            }
            
            try {
                let res = await fetch(`http://127.0.0.1:5000/santos/${$form.id.value}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json; charset= utf-8'
                        },
                    body: JSON.stringify(data)
                })
                if(!res.ok) throw ({status: res.status, message: res.statusText});
                let json = await res.json();
                location.reload();

            } catch (err) {
                $table.insertAdjacentHTML('afterend', `<p><b>Error no se pudo editar cod(${err.status}): ${err.message}`);
            }
        }
    }
})

d.addEventListener('click', async (e)=>{
    if(e.target.matches('.edit')){
        $title.textContent = `Editar Santo ${e.target.dataset.nombre}`;
        $form.nombre.value = e.target.dataset.nombre;
        $form.constelacion.value = e.target.dataset.constelacion;
        $form.id.value = e.target.dataset.id;
    }
    if(e.target.matches('.delete')){
        console.dir(e.target)
        let isDelete = confirm(`Seguro que quieres eliminar el santo ${e.target.previousElementSibling.dataset.nombre}`);
        if(isDelete){
            
            try {
                let res = await fetch(`http://127.0.0.1:5000/santos/${e.target.dataset.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json; charset= utf-8'
                        },
                })
                if(!res.ok) throw ({status: res.status, message: res.statusText || 'ocurrio un error'});
                let json = await res.json();
                    
                location.reload();
                
            } catch (err) {
                alert(`Error no se pudo ELIMINAR cod(${err.status}): ${err.message}`);
            }
                
        }             
    }
})