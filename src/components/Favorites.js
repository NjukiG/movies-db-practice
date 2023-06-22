import React from "react";
import MovieList from "./MovieList";
import MovieListHeading from "./MovieListHeading";

const Favorites = ({myFavourites, RemoveFavourite, removeFavouriteMovie}) => {
  return (
    <div>
      <div className="row d-flex align-items-center justify-content-between mt-4 mb-4">
        <MovieListHeading heading="My Favourites" />
      </div>
      <div className="row">
        <MovieList
          movies={myFavourites}
          AddFavourite={RemoveFavourite}
          handleFavouritesAddition={removeFavouriteMovie}
        />
      </div>
    </div>
  );
};

export default Favorites;
