import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleItem = ({
  handleAddToFavorites,
  myFavourites,
  handleremoveFavourites,
  watchLater,
  handleWatchLater,
  handleRemoveWatch,
}) => {
  console.log("THis is favorites", myFavourites);
  // console.log("This is watch later", watchLater);

  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getMovie = () => {
    const URL2 = `https://www.omdbapi.com/?&apikey=cc8b48eb&i=${id}`;

    fetch(URL2)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
          setMovie(data);
        }
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  const {
    imdbID: ID,
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
    Actors: actors,
    Awards: awards,
    Director: director,
  } = movie;
  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>Directed by {director} and,</p>
        <p>Starred by {actors}</p>
        <p>{plot}</p>
        <h4>{year}</h4>
        <p>{awards}</p>
        <Link to="/" className="btn btn-outline-warning m-2">
          Back to movies
        </Link>
        {/* Watch later button */}
        {watchLater.includes(movie) ? (
          <button
            onClick={() => handleRemoveWatch(movie)}
            className="btn btn-outline-secondary m-2"
          >
            Remove from Watch Later?
          </button>
        ) : (
          <button
            onClick={() => handleWatchLater(movie)}
            className="btn btn-outline-secondary m-2"
          >
            Add to Watch Later?
          </button>
        )}
        {/* Add Favorites button */}
        <button
          onClick={() => {
            myFavourites.includes(movie)
              ? handleremoveFavourites(movie)
              : handleAddToFavorites(movie);
          }}
          className="btn btn-outline-secondary m-2"
        >
          {myFavourites.includes(movie)
            ? "Remove from Favourites"
            : "Add Favourite"}
        </button>
      </div>
    </section>
  );
};

export default SingleItem;
