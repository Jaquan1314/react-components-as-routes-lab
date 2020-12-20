import React from "react";
import { directors } from "../data";

const Directors = () => {
  console.log(directors);
  let eachDirector = directors.map((director) => (
    <div>
      {director.name}
      <ul>
        {director.movies.map((movie) => (
          <li>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Directors Page</h1>
      {eachDirector}
    </div>
  );
};

export default Directors;
