import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
	const [episodes, setEpisodes] = useState( [] );
  	useEffect(() => {
      axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(response => {
          const episodes = response.data;
          setEpisodes([episodes.results]);
      })
        .catch(error => {
          console.log('error', error);
        })
  	},[]);

  	return (
    	<section className="episodes-list">
      		{episodes.map(episode => {
		        return (
		          <EpisodeCard 
		            key={episode.id}
		            episode={episode.episode}
		           	name={episode.name}
		           	air_date={episode.air_date}
		          />
		        )
      	})}
        
    </section>
  );
}