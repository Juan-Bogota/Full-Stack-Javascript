import api from "./helpers/wp_api.js";
import {ajax} from "./helpers/ajax.js";
import {Loader} from "./components/Loader.js";
import { Header } from "./components/Header.js";
import { SearchForm } from "./components/SearchForm.js";
import { Menu } from "./components/Menu.js";
import { Main } from "./components/Main.js";
import { PostCard } from "./components/PostCard.js";
import { Router } from "./components/Router.js";
import { InfiniteScroll } from "./helpers/scroll.js";

export function App(){
    
    const d = document,

        $root = d.getElementById('root');
        $root.innerHTML = null;
        $root.appendChild(Header());
        $root.appendChild(Main());
        $root.appendChild(Loader());
        Router();
        InfiniteScroll();
}

