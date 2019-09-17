import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(response => {
        setEpisodes([response.data.results]);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, []);

  return (
    <section className="episodes-list">
      {episodes.map((item, index) => {
        return <EpisodeCard key={index} episode={item} />;
      })}
    </section>
  );
}
