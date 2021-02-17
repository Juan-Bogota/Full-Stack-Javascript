// RESPONSIVE DESIGN

const w = window,
    d = document;


export default function responsiveDesing(id, mediaQ, contMobile, contDesktop){
    const $divId = d.getElementById(id);
    const mediaQuery = () => {
        if (window.matchMedia(mediaQ).matches) {
            $divId.innerHTML = contDesktop;
            `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3971492887677!2d-74.13321678523766!3d4.700868396585586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9caedc65abfb%3A0x9d428416c603884b!2sCra.%20110%20Bis%20%2363-83%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1613268666741!5m2!1sen!2sco" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
            $divMaps.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/16geDhp5Xmg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
          } else {
            $divId.innerHTML = contMobile;
            `<a href="https://www.google.es/maps/place/Cra.+110+Bis+%2363-83,+Bogot%C3%A1/@4.7008684,-74.1332168,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f9caedc65abfb:0x9d428416c603884b!8m2!3d4.7008684!4d-74.1310281" target="_blank" rel="noopener noreferrer">Ir al mapa</a>`
            $divMaps.innerHTML =`<a href="https://www.youtube.com/embed/16geDhp5Xmg" target="_blank" rel="noopener noreferrer">Ir al Video</a>`
          }  
    }

    mediaQuery();
    w.addEventListener('resize', (e) => {
      mediaQuery();
    })
}
export function responsiveMedia(id, mediaQ, contMobile, contDesktop){
    const $divId = d.getElementById(id);
    let breakpoint = w.matchMedia(mediaQ);
    

    const responsive = (e) => {
        if (e.matches) {
            $divId.innerHTML = contDesktop;
            
          } else {
            $divId.innerHTML = contMobile;
           
          }  
    }

    breakpoint.addListener(responsive);
    responsive(breakpoint);
}
