// FORMULARIOS
const d = document;

export default function forms(idForm){
    
    const validate = (bool, target) =>{
        if(bool){
            target.style.border = "2px solid green";
            target.nextElementSibling.classList.remove('is-active');
        } else {
            target.style.border = "2px solid red";
            target.nextElementSibling.classList.add('is-active'); 
        }
    }
    d.addEventListener('keyup', (e)=>{
        if(e.target.matches('#name-form')){ 
            let value = e.target.value;
            (/^[A-Za-z\s]+$/ig.test(value)) ? validate(true, e.target): validate(false,e.target);
        }
        if(e.target.matches('#email-form')){ 
            let value = e.target.value;
            if(value !== ''){
                (/^[A-Za-z0-9]+[A-Za-z0-9\.]+@[A-Za-z0-9]{3,}\.[a-z]{3,}$/ig.test(value)) ? validate(true, e.target): validate(false,e.target);
            }
        }
        if(e.target.matches('#asunt-form')){ 
            let value = e.target.value;
            if(value !== ''){
            (/^[A-Za-z0-9\s]+$/ig.test(value)) ? validate(true, e.target): validate(false,e.target);
            }
        }
        if(e.target.matches('#comments-form')){ 
            let value = e.target.value;
            if(value === ''){
                e.target.nextElementSibling.textContent = `No puede quedar los comentarios vacios`
                
            } else {
                e.target.nextElementSibling.textContent = `El comentario Excede los 255 caracteres`
            }
            (/^[\w\s]{1,255}$/ig.test(value)) ? validate(true, e.target): validate(false,e.target);
            
        }
    })
}

export function contactFormValidations(){
    const $form = d.querySelector('.contact-form'),
        $inputs = d.querySelectorAll('.contact-form [required]')

    $inputs.forEach(input =>{
        const $span = d.createElement('span');
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add('contact-form-error', 'none');
        input.insertAdjacentElement('afterend', $span);
    })

    d.addEventListener('keyup', (e)=> {

        if(e.target.matches(".contact-form [required]")){
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;
            //console.log($input, pattern);
            if(pattern && $input.value !== ""){
                let regex = new RegExp(pattern);
                return !regex.exec($input.value) ? d.getElementById($input.name).classList.add('is-active'): d.getElementById($input.name).classList.remove('is-active')
            }

            if(!pattern){
                return $input.value === "" ? d.getElementById($input.name).classList.add('is-active'): d.getElementById($input.name).classList.remove('is-active')
            }
        }
    })

    d.addEventListener('submit', (e)=>{
        //e.preventDefault();
        const $loader = d.querySelector('.contact-form-loader'),
        $response = d.querySelector('.contact-form-response');

        $loader.classList.remove('none');
        setTimeout(() => {
            $loader.classList.add('none');
            $response.classList.remove('none');
            $form.reset();
            setTimeout(() => {
                $response.classList.add('none');
            }, 3000);
        }, 3000);
    })

}