import React from "react";
import { directors } from "../data";

const Directors = () => {
  let director = directors.map((director, id) => (
    <div key={id}>
      <h3>Name: </h3> {director.name}
      <h3>Genre: </h3>
      <ul>
        {director.movies.map((movie, id) => (
          <li key={id}>{movie}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Directors Page</h1>
      {director}
    </div>
  );
};

export default Directors;
