import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleItem = ({
  handleAddToFavorites,
  myFavourites,
  handleremoveFavourites,
}) => {
  // console.log(myFavourites);

  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getMovie = () => {
    const URL2 = `http://www.omdbapi.com/?&apikey=cc8b48eb&i=${id}`;

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
        <button className="btn btn-outline-success m-2">Watch Later?</button>

        {myFavourites.includes(movie) ? (
          <button
            onClick={() => handleremoveFavourites(movie)}
            className="btn btn-outline-secondary m-2"
          >
            Remove from Favourites?
          </button>
        ) : (
          <button
            onClick={() => handleAddToFavorites(movie)}
            className="btn btn-outline-secondary m-2"
          >
            Add to Favourites?
          </button>
        )}
      </div>
    </section>
  );
};

export default SingleItem;
