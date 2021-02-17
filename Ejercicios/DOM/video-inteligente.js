// VIDEO INTELIGENTE

const d = document;

export default function videoInteligente(){
    const $selectorVideos = d.querySelectorAll('video[data-smart-video]');
    //console.log($selectorVideos);

    const callback = (entries) => {
        
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if(entry.isIntersecting){
                entry.target.play();
                
            }else {
                entry.target.pause();
            }

            window.addEventListener('visibilitychange', e => (d.visibilityState === 'visible' ? entry.target.play(): entry.target.pause()))
            
        });
    }
    
    const observer = new IntersectionObserver(callback, {
        threshold: 0.5,
    });
    $selectorVideos.forEach($selector =>{
        observer.observe($selector);
    })

}