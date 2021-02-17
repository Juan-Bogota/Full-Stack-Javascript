// CARROUSEL


const d = document;

export default function carrousel(idCarrousel, back, next){
    const $carrousel = d.getElementById(idCarrousel),
    $back = d.getElementById(back),
    $next = d.getElementById(next);
    let count = 0;

    d.addEventListener('click', (e)=>{
        
        const $length = d.querySelectorAll('.carrousel-item');
        console.log($length)

        if(e.target.matches(`#${next}`)){
            count++;
            if(count >= $length.length) count= 0;
            $carrousel.style.transform = `translateX(${count * -90}vw)`;
        }
        if(e.target.matches(`#${back}`)){
            count --;
            if(count < 0)count = $length.length - 1;
            $carrousel.style.transform = `translateX(${count* -90}vw)`;
        }
    })
}

export function slider(){
    const $next = d.querySelector('.slider-btns .next'),
    $prev = d.querySelector('.slider-btns .prev'),
    $slides = d.querySelectorAll('.slider-slide');

    let i = 0;

    const autoplay = ()=>{
        
            $slides[i].classList.remove('active');
            i++;
            if(i > $slides.length -1) i = 0;
            $slides[i].classList.add('active');
    }

    d.addEventListener('click',(e)=>{
        
        if(e.target === $prev){
            e.preventDefault();
            $slides[i].classList.remove('active');
            i--;
            if(i < 0) i = $slides.length -1;
            $slides[i].classList.add('active');
        }

        if(e.target === $next){
            e.preventDefault();
            autoplay();
        }
    })
    const ap = setInterval(() => {
        autoplay();
    }, 10000); 

}