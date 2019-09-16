import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const chars = response.data;
        setCharacters(chars.results);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(character => {
        return (
          <CharacterCard
          key={character.id}
          name={character.name}
          image={character.image}
          location={character.location}
          origin={character.origin}
          species={character.species}
          status={character.status}
          >
          </CharacterCard>
        );
      })}
    </section>
  );
}
