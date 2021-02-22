const d = document,
 $contenido = d.querySelector('main');

const loadData = async ()=>{
    try {
        let res = await axios.get('archivos/home.html'),
            json = await res.data;
        $contenido.innerHTML = json;

    } catch (error) {
        $contenido.innerHTML = `<p><b>Contenido no encontrado intentalo nuevamente ${err.response.status}`;
    }
} 
d.addEventListener('DOMContentLoaded', loadData);

d.addEventListener('click', async (e)=> {
    e.preventDefault();
    if(e.target.matches(`.navbar a`)){
        try {
            let res = await axios.get(e.target.href),
                json = await res.data;
            $contenido.innerHTML = json;

        } catch (error) {
            $contenido.innerHTML = `<p><b>Contenido no encontrado intentalo nuevamente ${err.response.status}`;
        }
    }
})