import React from "react";

function MovieCard({ movie }) {
  return (
    <div className='image-container d-block justify-content-start m-3'>
      <img src={movie.Poster} alt={movie.Title} />
      <br />
      <br />
      <div>
        <h5>{movie.Title}</h5>
        <h6>Year: {movie.Year}</h6>
        <h6>{movie.Type}</h6>
      </div>
    </div>
  );
}

export default MovieCard;
