// NARRADOR

const d = document,
    w = window;

export default function speechText(id){
    const synth = w.speechSynthesis,
        $select = d.getElementById(id),
        $text = d.getElementById('comment-speech');
    //speechMessage = new SpeechSynthesisUtterance();

    let voices = []; 
    
    d.addEventListener('DOMContentLoaded', (e) => {
        console.log(synth.getVoices())
        speechSynthesis.addEventListener('voiceschanged', e => {

            voices = w.speechSynthesis.getVoices();
            console.log(voices);
            voices.forEach(el => {
                const $option = d.createElement('option');
                $option.textContent = `${el.name} *** ${el.lang}`;
                $option.setAttribute('data-lang', el.lang);
                $option.setAttribute('data-name', el.name);
                $select.appendChild($option);
            });
            
        })
        /* ALTERNATIVA
        d.addEventListener('change', (e)=> {
            if(e.target === $select){
                speechMessage.voice = voices.find(voice => voice.name === e.target.value);
            }
        })
        d.addEventListener('click', (e)=> {
            if(e.target === d.querySelector('.speech-form')){
                speechMessage.text = $text.value;
                speechSysnthesis.speak(speechMessage)
            }
            

        */
        d.addEventListener('submit', (e)=> {
            if(e.target === d.querySelector('.speech-form')){
                e.preventDefault();
                let utterance = new SpeechSynthesisUtterance($text.value);
                let selectedOption = $select.selectedOptions[0].getAttribute('data-name');
                voices.forEach(el=>{
                    if(el.name === selectedOption) utterance.voice = el;
                })
                synth.speak(utterance);
            }
                
    
        })

        
    })
    

}