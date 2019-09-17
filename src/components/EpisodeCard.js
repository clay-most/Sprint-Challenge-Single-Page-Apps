import React from "react";

export default function EpisodeCard(props) {
  return (
  	<div>
		<h4>Episode #{props.episode.episode}:{props.episode.name}</h4>
		<p>Air Date: {props.episode.air_date} </p>
	</div>
  )
}