// FORM TESTER JAVASCRIPT

const d = document,
    w = window;

export default function responsiveTester(idWP, idW, idH, btnProbar, btnCerrar){
    const $inpWebPage = d.getElementById(idWP),
        $inpWidth = d.getElementById(idW),
        $inpHeight = d.getElementById(idH);
    let ventana;

    d.addEventListener('click',(e)=> {
        if(e.target.matches(`#${btnProbar}`)){
            e.preventDefault();
            ventana = window.open($inpWebPage.value, 'paginaWeb', `width=${$inpWidth.value}, height=${$inpHeight.value}`);
        }
        if(e.target.matches(`#${btnCerrar}`)){
            e.preventDefault();
            ventana.close();
        }

    })
}
//segunda forma
export function responsiveTester1(form){
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener('submit', (e)=> {
        if(e.target === $form){ // alternativa a e.target.matches
            e.preventDefault();
            tester = w.open($form.webpage.value, 'pagina web', `innerWidth=${$form.width.value}, innerHeight=${$form.height.value}`)  
        }
        
    })

    d.addEventListener('click',(e)=> {
        if(e.target === $form.cerrar) tester.close();
    })
}