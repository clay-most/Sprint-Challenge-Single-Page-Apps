import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      const characters = response.data.results.filter(char =>
        char.name.toLowerCase().includes(query.toLowerCase())
      );

      setCharacters(characters);
    });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div>
      <form>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
        />
      </form>

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
    </div>
  );
}
