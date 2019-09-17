import React from "react";

export default function CharacterCard(props) {
  return (
  <div className="characterCard">
    <h4>{props.character.name}</h4>
    <img src={props.character.img}></img>
    <p>Species:{props.character.species}Origin:{props.character.origin}Status:{props.character.status}Location:{props.character.location}</p>
  </div>
    );
}
