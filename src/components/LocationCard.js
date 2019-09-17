import React from 'react';

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>
        Type:{type} Dimension:{dimension}
      </p>
      <ul>
        Residents:
        {residents.map(resident => {
          return <li>{resident}</li>;
        })}
      </ul>
    </div>
  );
}
