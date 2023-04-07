import React from "react";
import Movie from './Movie'
const MovieList = (props) => {
  return (
    <ul>
      {props.movies.map((movie,i) => (
        <Movie  key={i}>
       <li>
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}</li>
        </Movie>
      ))}
    </ul>
  );
};

export default MovieList;
