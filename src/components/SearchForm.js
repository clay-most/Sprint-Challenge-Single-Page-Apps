import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import Axios from "axios";

export default function SearchForm() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      const resultsLocal = response.data.results.filter(character =>
        character.name.toLowerCase().includes(search.toLocaleLowerCase())
      );
      setData(resultsLocal);
    });
  }),
    [search];

  const HandleChange = event => {
    setSearch(event.target.value);
  };

  return (
    <section className="search-form">
      <form>
        <input type="text" name="search" placeholder="Search by Name" />
        <button>Search</button>
      </form>
      {data.map(character => {
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
