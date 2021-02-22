import keys from './strip-keys.js';

const d = document,
    $tacos = d.getElementById('tacos'),
    $template = d.getElementById('taco-template').content,
    $fragment = d.createDocumentFragment(),
    fetchOptions = {
        headers:{
            Authorization: `Bearer ${keys.secret}`,
        }
    };
    let products, prices;

    Promise.all([
        fetch('https://api.stripe.com/v1/products', fetchOptions),
        fetch('https://api.stripe.com/v1/prices', fetchOptions)
    ]).then(responses => Promise.all(responses.map(res => res.json())))
    .then(json =>{
        //console.log(json);
        products = json[0].data;    
        prices = json[1].data;
        //console.log(products, prices);
        prices.forEach(el => {
            let productData = products.filter(product => product.id === el.product);
            //console.log(productData);

            $template.querySelector('.taco').setAttribute('data-price', el.id);
            $template.querySelector('img').src = productData[0].images[0];
            $template.querySelector('img').alt = productData[0].name;
            $template.querySelector('figcaption').innerHTML = `
                ${productData[0].name}
                <br>
                $ ${el.unit_amount_decimal.slice(0, -2)}.${el.unit_amount_decimal.slice(-2)} ${el.currency.toUpperCase()}
            `;
            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        })
        $tacos.appendChild($fragment);
    })
    .catch(err => {
        console.log(err);
        let message = err.statusText || 'Ocurrio un error con la API de Stripe';
        $tacos.innerHTML = `<p>Error ${err.status}: ${message}</p>`
    })



    d.addEventListener('click', (e)=>{
        if(e.target.matches('.taco *')){
            let price = e.target.parentElement.getAttribute('data-price');
            console.log(price);
            Stripe(keys.public).redirectToCheckout({
                lineItems:[{price, quantity: 1}],
                mode: 'subscription',
                successUrl: "http://127.0.0.1:8080/Ejercicios/AJAX/archivos/stripe-sucess.html",
                cancelUrl: "http://127.0.0.1:8080/Ejercicios/AJAX/stripe-checkout.html"
            }).then(res => {
                console.log(res);
                if(res.error){
                    $tacos.insertAdjacentElement('afterend', res.error.message);
                }
            })

        }
    })