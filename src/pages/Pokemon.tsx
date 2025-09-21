import { useNavigate, useParams } from "react-router-dom";
import pokeballImg from "../assets/pokeball.png";
import Footer from "../components/Footer"; 
import BulbasaurImg from "../assets/bulbasaur.gif"

const Pokemon = () =>{

    const {name} = useParams();
    const navigate = useNavigate();

    return <>
            <button onClick= {() => navigate(-1)}>
                <img src={pokeballImg} alt="pokeball" /> Go back
            </button>
            <div>
                <main>
                    <div>{name?.toUpperCase()}</div>
                    <div>Nr. 001</div>
                    <div>
                        <img src={BulbasaurImg} alt="" />
                    </div>
                    <div>HP: 80</div>
                    <div>Attack: 50</div>
                    <div>Defense: 30</div>
                </main>
            </div>
            <Footer />
        </>
    
}

export default Pokemon;