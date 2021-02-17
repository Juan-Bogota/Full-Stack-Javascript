// SORTEO DIGITAL

const d = document;

export default function aleatorio(idLenguage, idWinner){
    const $language = d.getElementById(idLenguage),
        $btnWinner = d.getElementById(idWinner),
        $list = ['JavaScript', 'PHP', 'JAVA', 'C', 'Python', 'Ruby', 'Go', 'Visual Basic', 'Rust', 'Perl'];
        // si la lista esta en el <HTML seria con la lista de NodeList
        $list.forEach(el => {
            const $li = d.createElement('li');
            $li.textContent = el;
            $language.appendChild($li);
        })

        d.addEventListener('click', (e)=> {
            if(e.target.matches(`#${idWinner}`)){
                
                let result = getWinner($list);
                console.log(result);
                alert(result);
            }
        })


    const getWinner = ($list)=> {
        const ramdomList = Math.floor(Math.random()*$list.length);
        return `El ganador es ${$list[ramdomList]}`;
    } 

    
    
}

//comentarios en redes sociales
const getWinnerComment = (selector)=> {
    const $nodeList = document.querySelectorAll(selector),
    ramdomList = Math.floor(Math.random()*$nodeList.length);
    return `El ganador es ${$nodeList[ramdomList].textContent}`;
} 

//getWinnerComment("#body #author-text span")