import React from "react";
import MovieCard from "./MovieCard";

// handleRemoveFavourite = { removeFavouriteMovie };
function MovieList({ movies, AddFavourite, handleFavouritesAddition }) {
  return (
    <>
      {/* {movies && movies.map((movie, index) => {
        return (
          <div key={index}>
            <MovieCard
              movie={movie}
              AddFavourite={AddFavourite}
              handleFavouritesAddition={handleFavouritesAddition}
            />
          </div>
        );
      })} */}
    </>
  );
}

export default MovieList;
