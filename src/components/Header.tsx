import styles from "../components/header.module.css";

//defino los tipos de datos
type HeaderProps = {
    query: string;
    setQuery: (query: string) => void;
}

const Header = ({query, setQuery}: HeaderProps) => {
    return(
        <header className={styles.header}>
            <input className={styles.input} placeholder="Busca un pokemon" type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
        </header>
    )
}

export default Header;