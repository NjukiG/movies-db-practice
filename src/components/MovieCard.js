import React from "react";

function MovieCard({ movie, AddFavourite, handleFavouritesAddition }) {
  const FavouriteComponent = AddFavourite;
  return (
    <div className="image-container d-block justify-content-start m-3">
      {/* <img src={movie.Poster} alt={movie.Title} />

      <br />
      <br />
      <div>
        <h5>{movie.Title}</h5>
        <h6>Year: {movie.Year}</h6>
        <h6>{movie.Type}</h6>
      </div>
      <div
        onClick={() => handleFavouritesAddition(movie)}
        className="overlay d-flex align-items-center justify-content-center"
      >
        <FavouriteComponent />
      </div> */}
    </div>
  );
}

export default MovieCard;
