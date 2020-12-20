import React from "react";
import { movies } from "../data";

const Movies = () => {
  console.log(movies);
  let eachMovie = movies.map((movie) => (
    <div>
      {movie.title} - {movie.time} minutes
      <ul>
        {movie.genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
    // ul with a list of its genres
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      {eachMovie}
    </div>
  );
};

export default Movies;
