import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
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
                <h1>Pokemons</h1>
            </main>
            <Footer />

        </>
    );
}

export default Pokemons;