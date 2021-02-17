// FILTRO BUSQUEDA

const d = document;

export default function filtroBusqueda(idCards, idInput) {
    const $input = d.getElementById(idInput),
        $cards = d.getElementById(idCards),
        elements = ['Tech', 'Any', 'Animals', 'People', 'Arch', 'Nature'];
    const print = (elements) => {

        const $fragment = document.createDocumentFragment();
        $cards.innerHTML = "";
        elements.forEach(el=>{
            const $figure = document.createElement('figure');
            $figure.classList.add('card');
            let $contentCard = `
                <img src="https://placeimg.com/200/200/${el.toLowerCase()}" alt="${el}">
                <figcaption>${el}</figcaption>
            `;
        $figure.innerHTML = $contentCard;
        $fragment.appendChild($figure);
            
    }) 
    $cards.appendChild($fragment);}
    print(elements);
    
    d.addEventListener('keyup', (e)=>{
        console.log(e)
        if(e.target.matches(`#${idInput}`)){
            let text = $input.value;

            const filterList = elements.filter(el=> new RegExp(text, 'i').test(el));
              
            print(filterList);
            
    }})

}

export function filtroBusqueda1(idCards, selector, idInput) {
    const $input = d.getElementById(idInput),
        $cards = d.getElementById(idCards),
        elements = ['Tech', 'Any', 'Animals', 'People', 'Arch', 'Nature'];
    const print = (elements) => {

        const $fragment = document.createDocumentFragment();
        $cards.innerHTML = "";
        elements.forEach(el=>{
            const $figure = document.createElement('figure');
            $figure.classList.add('card');
            let $contentCard = `
                <img src="https://placeimg.com/200/200/${el.toLowerCase()}" alt="${el}">
                <figcaption>${el}</figcaption>
            `;
        $figure.innerHTML = $contentCard;
        $fragment.appendChild($figure);
            
    }) 
    $cards.appendChild($fragment);}
    print(elements);
    
    d.addEventListener('keyup', (e)=>{
        if(e.target.matches(`#${idInput}`)){
            const $card = d.querySelectorAll(selector);
            let text = $input.value;
            if(e.key === "Escape") text = "";
            console.log($card);
            $card.forEach(el => {
                el.textContent.toLowerCase().includes(text) ? el.classList.remove('filter'): el.classList.add('filter')
            })
    }})

}

