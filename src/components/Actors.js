import React from "react";
import { actors } from "../data";

const Actors = () => {
  let actor = actors.map((actor, id) => (
    <div key={id}>
      <h3>Name: </h3>
      {actor.name}
      <h3>Movies: </h3>
      <ul>
        {actor.movies.map((movie, id) => (
          <li key={id}>{movie}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Actors Page</h1>
      {actor}
    </div>
  );
};

export default Actors;
