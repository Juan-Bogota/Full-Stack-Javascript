// EVENTOS TECLADO SECCION 2

const d = document;
let x=0, y=0;

export function moveBall (rectangle , ball) {
    const $board = d.querySelector(rectangle),
        $ball = d.querySelector(ball);

        


    d.addEventListener('keydown', (e) => {
        const limitsBall = $ball.getBoundingClientRect(),
        limitBoard = $board.getBoundingClientRect();
        switch(e.key){
            case 'ArrowLeft': 
            
                if(limitsBall.left> limitBoard.left) {
                    e.preventDefault();
                    (limitsBall.left - 10 > limitBoard.left) ?  x-- : x -= (limitsBall.left - limitBoard.left)/10; 
                }
                break;

            case 'ArrowUp':
                if (limitsBall.top > limitBoard.top){
                    e.preventDefault();
                    (limitsBall.top - 10 > limitBoard.top) ? y--: y -= (limitsBall.top - limitBoard.top)/10; ;
                }
                break;
                
            case 'ArrowRight':
                e.preventDefault();
                (limitsBall.right + 10 < limitBoard.right ) ? x++: x += (limitBoard.right - limitsBall.right)/10;
                break;
            
            case 'ArrowDown':
                if(limitsBall.bottom < limitBoard.bottom){
                    e.preventDefault();
                    (limitsBall.bottom + 10 < limitBoard.bottom) ? y++:  y += (limitBoard.bottom - limitsBall.bottom)/10;
                }
                break;
            default:
                break;
        }
        $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        
    })
}

export function atajos() {

    d.addEventListener('keydown', (e)=> {
        if(e.altKey && e.code === 'KeyA'){
            alert('Soy una alerta');
        } else if(e.altKey && e.code === 'KeyP') {
            prompt('Escriba algo');
        } else if (e.altKey && e.code === 'KeyC'){
            confirm('soy una confirmacion');
        } 

    })

}