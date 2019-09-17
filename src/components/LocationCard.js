import React from 'react';

export default function LocationCard(props) {
  return (
    <div>
      <h4>{props.location.name}</h4>
      <p>
        Type:{props.location.type} Dimension:{props.location.dimension}
      </p>
      <ul>
        Residents:
        {props.location.residents.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
