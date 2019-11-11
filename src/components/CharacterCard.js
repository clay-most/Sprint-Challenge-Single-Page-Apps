import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <img src={props.img} alt={props.name}></img>
      <h2>{props.name}</h2>
      <p>{props.gender}</p>
      <br />
      <p>{props.type}</p>
    </div>
  );
}
