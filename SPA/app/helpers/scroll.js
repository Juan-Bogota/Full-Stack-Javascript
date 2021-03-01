import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";
import api from "./wp_api.js";

export function Scroll(){

    const w = window,
        d = document,
        $main = d.getElementById('main');
    let pageHome = 1, per_page = 12, pageSearch = 1;
    let {hash} = location;
    
    w.addEventListener('scroll', async (e)=>{
        let {clientHeight, scrollHeight, scrollTop} = d.documentElement;
        console.log(clientHeight, scrollTop, scrollHeight);
        
        if(clientHeight + scrollTop >= scrollHeight){
            if(!hash || hash === "#/"){
                pageHome +=1;
                
                d.querySelector('.loader').style.display = "block";
                
                await ajax({
                    url: `${api.POSTS}&page=${pageHome}&per_page=${per_page}`,
                    cbSuccess(posts){
                        console.log(posts);
                        let html = "";
                        posts.forEach(post => {
                            html += PostCard(post);
                        }); 
                        $main.innerHTML += html;
                    }
                })
            d.querySelector('.loader').style.display = "none";
            } else if (hash.includes("#/search")) {
                pageSearch += 1;
                d.querySelector('.loader').style.display = "block";
                let query = localStorage.getItem('wpSearch');
                if(!query) {
                    d.querySelector('.loader').style.display = "none";
                    return false;
                }
                await ajax({
                    url: `${api.SEARCH}${query}&page=${pageSearch}&per_page=${per_page}`,
                    cbSuccess(search){
                        let html = "";
                        if(search.length === 0) {
                            html = `<p class="error">
                            No existe resultados para la palabra <mark>${query}</mark>
                            </p>`
                        } else {
                            search.forEach(post => {
                                html += SearchCard(post);
                            })
                        }
                       
                        $main.innerHTML += html
                    }
                })
                d.querySelector('.loader').style.display = "none";
            }

        }
            

    })
}

export async function InfiniteScroll(){
    const d = document,
    w=window,
    $main = d.getElementById('main');

    let query = localStorage.getItem('wpSearch'),
    apiURL,
    Component; //HIGH ORDER COMPONENT

    w.addEventListener('scroll', async (e)=>{
        let {clientHeight, scrollHeight, scrollTop} = d.documentElement,
        {hash} = location;
        if(clientHeight + scrollTop >= scrollHeight){
            api.page++;
            if(!hash || hash === "#/"){
                apiURL = `${api.POSTS}&page=${api.page}`;
                Component = PostCard;
            } else if (hash.includes("#/search")) {
                apiURL = `${api.SEARCH}${query}&page=${api.page}`;
                Component = SearchCard;
            } else {
                return false;
            }
            d.querySelector('.loader').style.display = "block";
            await ajax({
                url: apiURL,
                cbSuccess(posts){
                    //console.log(posts);
                    let html = "";
                    posts.forEach(post => {
                        html += Component(post);
                    })
                    $main.insertAdjacentHTML('beforeend', html);

                }
            })
            d.querySelector('.loader').style.display = "none";
        }

    })
}
