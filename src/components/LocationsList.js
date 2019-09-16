import React, { useEffect, useState } from "react";
import axios from "axios"
import LocationCard from "./LocationCard"

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const locs = response.data;
        setLocations(locs.results);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, []);

  return (
    <section className="location-list">
      {locations.map(location => {
        return (
          <LocationCard
          key={location.id}
          name={location.name}
          type={location.type}
          dimension={location.dimension}
          residents={location.residents}
          >
          </LocationCard>
        );
      })}
    </section>
  );
}