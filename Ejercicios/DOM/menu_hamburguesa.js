// JAVASCRIPT

// BUTTON

export default function hamburgerMenu(panelBtn, panel,menuLink) {
    const d = document;

    const $buttonMenu = d.getElementById(panelBtn);
    const $navBarHidden = d.querySelector(panel);
    
    d.addEventListener('click', (e) => {
        if(e.target.matches(`#${panelBtn}`) || e.target.matches(`#${panelBtn} *`)){
            $buttonMenu.classList.toggle('is-active');
            $navBarHidden.classList.toggle('is-active');
        }
        if(e.target.matches(`${menuLink} a`)){
        $buttonMenu.classList.toggle('is-active');
        $navBarHidden.classList.toggle('is-active');
    }
       
    })


    /*
    otra forma
    
        $buttonMenu.addEventListener('click', ()=> {
        $buttonMenu.classList.toggle('is-active');
        $navBarHidden.classList.toggle('is-active');
    });

    $menuAnchor.addEventListener('click', () => {
        $buttonMenu.classList.toggle('is-active');
        $navBarHidden.classList.toggle('is-active');
    }) 


    */
   
}   
