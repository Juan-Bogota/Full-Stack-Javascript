export function SearchCard(props){
    let {id, title, _embedded} = props;

    let slug = _embedded.self[0].slug;

    /*html*/
    return ` 
    <article class="post-card"> 
        <h2> ${title}</h2>
        <p>
            <a href="#/${slug}" data-id="${id}">Ver Publicacion</a>
        </p>
    </article>
    `
}