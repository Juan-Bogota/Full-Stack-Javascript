const d = document,
 $contenido = d.querySelector('main');

const loadData = async ()=>{
    console.log(d.body);
    try {
        let res = await axios.get('archivos/header.html'),
                json = await res.data;
        d.body.insertAdjacentHTML('afterbegin', json);
        res = await axios.get('archivos/home.html');
        json = await res.data;
        $contenido.innerHTML = json;
        res = await axios.get('archivos/footer.html');
        json = await res.data;
        d.body.insertAdjacentHTML('beforeend', json);

    } catch (err) {
        $contenido.innerHTML = `Ocurrio un error: ${err}`;
    }

    


} 



d.addEventListener('DOMContentLoaded', loadData);

d.addEventListener('click', async (e)=> {
    e.preventDefault();
    if(e.target.matches(`.navbar a`)){
        try {
            let res = await axios.get(e.target.href),
                json = await res.data;
            //console.log(json);
            $contenido.innerHTML = json;

        } catch (error) {
            $contenido.innerHTML = `<p><b>Contenido no encontrado intentalo nuevamente ${err.response.status}`;
        }
    }
})