//

const d = document,
    $table = d.querySelector('.crud-table'),
    $form = d.querySelector('.crud-form'),
    $title = d.querySelector('.crud-title'),
    $template = d.getElementById('crud-template').content,
    $fragment = d.createDocumentFragment()
    flag = "POST";



const getData = ()=>{
    let xhr = new XMLHttpRequest();
    let id;

    xhr.addEventListener('readystatechange', ()=>{
        console.log(xhr)
        if(xhr.readyState !== 4) return;
        if(xhr.status >= 200 && xhr.status < 300){
            const data = JSON.parse(xhr.response);
            console.log(data)
            $table.lastElementChild.textContent = '';
            data.forEach(santo => {
                $template.querySelector('tr').classList = '';
                $template.querySelector('tr').classList.add(santo.id);
                $template.querySelector('tr').children[0].textContent = santo.nombre;
                $template.querySelector('tr').children[1].textContent = santo.constelacion;
                let $clone = document.importNode($template, true);
                $fragment.appendChild($clone);
                
            });
            $table.lastElementChild.appendChild($fragment);
        }
    });

    d.addEventListener('click',(e)=>{
        if(e.target.matches(`.delete`) ){
            let id = e.target.parentElement.parentElement.className;
            xhr.open('DELETE', `http://127.0.0.1:5000/santos/${id}`, true);
            xhr.send();
        }
        
        if(e.target.matches(`.edit`) ){
            
            $title.textContent = `Editar Santo`;
            flag = 'PUT';
            id = e.target.parentElement.parentElement.className;
            
        }
    })

    d.addEventListener('submit', (e)=>{
        e.preventDefault();
        let data = {nombre: $form[0].value, constelacion: $form[1].value};
        let json = JSON.stringify(data);
        
        if(flag === 'PUT'){
            xhr.open('PUT', `http://127.0.0.1:5000/santos/${id}`, true);
            $title.textContent = `Agregar Santo`;
            flag = 'POST';
        } else {
            xhr.open('POST', `http://127.0.0.1:5000/santos`, true);
        }
        xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
        xhr.send(json);
    })
    xhr.open('GET', 'http://127.0.0.1:5000/santos');

    xhr.send();
}

getData();
    