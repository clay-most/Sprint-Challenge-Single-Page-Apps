import React from "react";

export default function EpisodeCard(props) {
  return (
  	<div>
		<h4>Episode #{props.episode}:{props.name}</h4>
		<p>Air Date: {props.air_date} </p>
	</div>
  )
}