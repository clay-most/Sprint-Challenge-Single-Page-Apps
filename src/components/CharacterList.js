import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, []);
  

  return (
    <section className="character-list">
      {characters.map((item, index) => {
        return <CharacterCard key={index} character={item}></CharacterCard>;
      })}
    </section>
  );
};

export default CharacterList;
