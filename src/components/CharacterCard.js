import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <img src={props.img} alt={props.name}></img>
      <h2>{props.name}</h2>
      <gender>{props.gender}</gender>
      <br />
      <type>{props.type}</type>
    </div>
  );
}
