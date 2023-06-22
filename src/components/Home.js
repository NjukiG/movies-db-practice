import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const Home = ({ movies, searchName, setSearchName }) => {
  console.log(movies, searchName);
  return (
    <div className="container-fluid">
      <SearchBox searchName={searchName} setSearchName={setSearchName} />
      <section className="movies">
        {movies &&
          movies.map((movie) => {
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

export default Home;
