import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import { Link } from "react-router-dom";

import BulbasaurPic from "../assets/bulbasaur.gif";
import styles from "./pokemons.module.css"
import { fetchPokemons } from "../api/fetchPokemons";
import { Pokemon } from "../types/types";

/*
Esto va a funcionar como pagina principal
*/

const Pokemons = () =>{

    /* Es lo que que es consultal el nombre ingresado(query) por el input para obtener los datos del pokemon */
    const [query, setQuery] = useState("");
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);


    useEffect(() => {
        const fetchAllPokemons = async() => {
            const allPokemons = await fetchPokemons();
            console.log(allPokemons)
            setPokemons(allPokemons);
        };
        fetchAllPokemons();
    },[])

    return(
        <>
            <Header query={query} setQuery={setQuery} />
            <main>
                <nav>
                    {pokemons?.slice(0, 151).map((pokemon) => (
                        <Link className={styles.listItem} to="/">
                        <img className={styles.listItemIcon} src={BulbasaurPic} alt="Bulbasaur" />
                        <div className={styles.listItemText}>
                            <span>Bulbasaur</span>
                            <span>001</span>
                        </div>
                    </Link>
                    ))};
                    
                </nav>
            </main>
            <Footer />

        </>
    );
}

export default Pokemons;