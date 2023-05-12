import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie, index) => {
        return (
          <div>
            <MovieCard movie={movie} />
          </div>
        );
      })}
    </>
  );
}

export default MovieList;
