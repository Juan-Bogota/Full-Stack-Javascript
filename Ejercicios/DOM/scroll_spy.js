// SCROLL SPY
// detecta en la parte visible de viewport un elemento

const d = document;

export default function scrollSpy(){

    const $sections = d.querySelectorAll('section[data-scroll-spy]');
    const callback = (entries) => {
        //console.log(`Entries:`,entries);
        entries.forEach(entry => {
            //console.log(`entry`, entry);
            const id = entry.target.getAttribute('id');
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active');
            }else {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active');
            }
        })
    }



    const observer = new IntersectionObserver(callback, {
        //root
        //rootMargin: ("-250px"),
        threshold: [0.4, 0.75], //porcentajes de visualizacion
    });

    //console.log(`observer`, observer);
    $sections.forEach(el => {
        observer.observe(el);
    })

}