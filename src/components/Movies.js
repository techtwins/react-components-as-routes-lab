import React from "react";
import { movies } from "../data";

const Movies = () => {
  let shows = movies.map((movie, id) => (
    <div key={id}>
      <h3>Title: </h3> {movie.title}
      <br />
      <h4>Time: </h4> <span>{movie.time} mins </span>
      <h3>Genre: </h3>
      <ul>
        {movie.genres.map((genre, id) => (
          <li key={id}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      {shows}
    </div>
  );
};

export default Movies;
