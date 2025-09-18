import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import { Link } from "react-router-dom";

import BulbasaurPic from "../assets/bulbasaur.gif";
import styles from "./pokemons.module.css"

/*
Esto va a funcionar como pagina principal
*/

const Pokemons = () =>{

    /* Es lo que que es consultal el nombre ingresado(query) por el input para obtener los datos del pokemon */
    const [query, setQuery] = useState("BULBASUR");


    return(
        <>
            <Header query={query} setQuery={setQuery} />
            <main>
                <nav>
                    <Link className={styles.listItem} to="/">
                        <img className={styles.listItemIcon} src={BulbasaurPic} alt="Bulbasaur" />
                        <div className={styles.listItemText}>
                            <span>Bulbasaur</span>
                            <span>001</span>
                        </div>
                    </Link>
                    <Link className={styles.listItem} to="/">
                        <img className={styles.listItemIcon} src={BulbasaurPic} alt="Ivysaur" />
                        <div className={styles.listItemText}>
                            <span>Ivysaur</span>
                            <span>002</span>
                        </div>
                    </Link>
                    <Link className={styles.listItem} to="/">
                        <img className={styles.listItemIcon} src={BulbasaurPic} alt="" />
                        <div className={styles.listItemText}>
                            <span>Venusaur</span>
                            <span>003</span>
                        </div>
                    </Link>
                </nav>
            </main>
            <Footer />

        </>
    );
}

export default Pokemons;