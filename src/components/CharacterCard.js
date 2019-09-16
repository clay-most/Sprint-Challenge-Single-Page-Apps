import React from "react";

export default function CharacterCard(props) {
  return (
  <div className="characterCard">
    <h4>{props.name}</h4>
    <img src={props.img}></img>
    <p>Species:{props.species}Origin:{props.origin}Status:{props.status}Location:{props.location}</p>
  </div>
    );
}
