// scrooll up

const d = document;
// w = window;
export function scrollUp(idScroll){
    const $scrollToTopBtn = d.getElementById(idScroll);
    let rootElement = document.documentElement

    
    d.addEventListener('click', (e)=> {
        if(e.target.matches(`#${idScroll}`) || e.target.matches(`#${idScroll} *`)){
            console.log(e)
            scroll({top: 0, left: 0, behavior: 'smooth'});
        }
    })

    d.addEventListener('scroll', (e)=> {
        let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
        if ((rootElement.scrollTop / scrollTotal ) > 0.20) {
            //show button
            $scrollToTopBtn.classList.add('showBtn');
        } else {
            //hide button
            $scrollToTopBtn.classList.remove('showBtn');
        }
        })

    /*
    OTRA FORMA
        w.addEventListener('scroll', (e)=> {
            let scrollTop = w.pageYOffset || d.documentElement.scrollTOp;
            
            if(scrollTop > 600) {
            //show button
            $scrollToTopBtn.classList.add('showBtn');
        } else {
            //hide button
            $scrollToTopBtn.classList.remove('showBtn');
        }
        })
        })
    
    */
}
