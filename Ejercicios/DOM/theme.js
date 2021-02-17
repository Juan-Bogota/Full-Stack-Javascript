// THEME: DARK - LIGHT

const d = document;

export default function theme(id){
    const $btnTheme = d.getElementById(id);

    if(localStorage.getItem('themeDark') === 'dark'){
        $btnTheme.firstElementChild.classList.toggle('is-active');
        $btnTheme.lastElementChild.classList.toggle('is-active');
        d.querySelector('body').style.backgroundColor = 'black';
        d.querySelector('body').style.color = 'var(--color-yellow)';
        d.querySelector('.black-rectangle').style.backgroundColor = 'white';  
    }
    d.addEventListener('click', (e)=> {
        if(e.target.matches(`#${id}`) || e.target.matches(`#${id} *`)){
            $btnTheme.firstElementChild.classList.toggle('is-active');
            $btnTheme.lastElementChild.classList.toggle('is-active');
            if($btnTheme.firstElementChild.classList.contains('is-active')){
                d.querySelector('body').style.backgroundColor = 'white';
                d.querySelector('body').style.color = 'black';
                d.querySelector('.black-rectangle').style.backgroundColor = 'var(--modal-color-black)';
                localStorage.setItem('themeDark', 'light');
            } else {
                d.querySelector('body').style.backgroundColor = 'black';
                d.querySelector('body').style.color = 'var(--color-yellow)';
                d.querySelector('.black-rectangle').style.backgroundColor = 'white';
                localStorage.setItem('themeDark', 'dark');
            }
        }
    })
}



export function themeDark(id, classDark){
    const $btnTheme = d.getElementById(id),
        $selectors = d.querySelectorAll('[data-dark]');
    const light = () => {
        $selectors.forEach((el) => el.classList.remove(classDark));
        localStorage.setItem('themeDark', 'light');
    }
    
    const dark = () => {
        $selectors.forEach((el) => el.classList.add(classDark));
        localStorage.setItem('themeDark', 'dark');
    }

    d.addEventListener('click', (e)=> {
        if(e.target.matches(`#${id}`) || e.target.matches(`#${id} *`)){
            
                $btnTheme.firstElementChild.classList.toggle('is-active');
                $btnTheme.lastElementChild.classList.toggle('is-active');
                if($btnTheme.firstElementChild.classList.contains('is-active')){
                    light();
                } else {
                    dark();
                
    }}})

    d.addEventListener('DOMContentLoaded', (e)=> {
        if(localStorage.getItem('themeDark') === 'dark') {
            $btnTheme.firstElementChild.classList.toggle('is-active');
            $btnTheme.lastElementChild.classList.toggle('is-active');
            dark();
        }
        
    })
}
