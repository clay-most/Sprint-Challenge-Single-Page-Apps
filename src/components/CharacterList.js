import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => {
        return (
          <CharacterCard
            key={character.id}
            name={character.name}
            type={character.type}
            gender={character.gender}
            img={character.image}
          ></CharacterCard>
        );
      })}
    </section>
  );
}
