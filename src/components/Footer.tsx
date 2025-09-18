import { Link } from "react-router-dom";
import styles from "./footer.module.css"

//importamos las imagenes Assets
import PokemonsPic from "../assets/pikachu.png";
import LocationPic from "../assets/pointer.png"
import ItemsPic from "../assets/pokeball.png"

const Footer = () =>{
    return <footer className={styles.footer}>
        <Link className={styles.footerLink} to="/pokemons">
            <img className={styles.footerIcon} src={PokemonsPic} alt="pokeball" />
            Pokemons
        </Link>
        <Link onClick={(event) => event.preventDefault()} className={styles.footerLink} to="/items">
            <img className={styles.footerIcon} src={ItemsPic} alt="pokeball" />
            Items
        </Link>
        <Link onClick={(event) => event.preventDefault()} className={styles.footerLink} to="/location">
            <img className={styles.footerIcon} src={LocationPic} alt="pokeball" />
            Mapa
        </Link>
    </footer>
}

export default Footer;