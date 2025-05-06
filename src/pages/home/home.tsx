import { useEffect, useState } from "react";
import axios from "axios";


type CharacterProps = {
    _id: number,
    name: string,
    imageUrl: string,
    sourceUrl: string,
}

const Home = () => {
    const [characters, setCharacters] = useState<CharacterProps[]>([]);
    useEffect(() => {
        axios
            .get<{ data: CharacterProps[] }>('https://api.disneyapi.dev/character')
            .then((res) => {
                setCharacters(res.data.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });   
    },[])

  return (
    <div>
        <h1>Disney Characters</h1>
        <div className="characters-container">
            {characters.map((character) => (
            <div key={character._id} className="character-card">
                <img src={character.imageUrl} alt={character.name} />
                <h2>{character.name}</h2>
                <a href={character.sourceUrl} target="_blank" rel="noopener noreferrer">Source</a>
            </div>
            ))}
        </div>
    </div>
  );
}

export default Home;
export { Home };