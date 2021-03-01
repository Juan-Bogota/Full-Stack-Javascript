import api from '../helpers/wp_api.js';

export function Title(){
    const $h1 = document.createElement('h1');
    $h1.innerHTML = //html
    ` <a href="${api.DOMAIN}" target="_blank" rel="noopeer">${api.NAME.toUpperCase()}</a>
    `;
    
    return $h1;

}