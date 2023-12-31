import React from "react";
import { Link } from "react-router-dom";

const Favorites = ({ myFavourites }) => {
  // console.log(myFavourites);
  return (
    <div className="container-fluid">
      <h3 className="m-4">
        {myFavourites
          ? "These are my Favorites!"
          : "You currently dont have any favorites"}
      </h3>
      <section className="movies">
        {myFavourites &&
          myFavourites.map((movie) => {
            const {
              Type: type,
              imdbID: id,
              Poster: poster,
              Title: title,
              Year: year,
            } = movie;

            return (
              <Link to={`/movies/${id}`} key={id} className="movie">
                <article>
                  <img src={poster} alt={title} />
                </article>
                <div className="movie-info">
                  <h4 className="title">{title}</h4>
                  <p>{year}</p>
                  <p>
                    {type.charAt(0).toUpperCase()}
                    {type.slice(1)}
                  </p>
                </div>
              </Link>
            );
          })}
      </section>
    </div>
  );
};

export default Favorites;
