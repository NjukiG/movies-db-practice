import React, { useState, useEffect } from "react";
import "./App.css";
import "bootswatch/dist/sketchy/bootstrap.min.css"; // Added this :boom:
// import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchName, setSearchName] = useState("");

  const getMovies = (searchName) => {
    const URL = `http://www.omdbapi.com/?s=${!searchName ? "Steel" : searchName}&apikey=cc8b48eb`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
  };

  useEffect(() => {
    getMovies(searchName);
  }, [searchName]);
  return (
    <div className="container-fluid movie-container">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="My Movies" />
        <SearchBox searchName={searchName} setSearchName={setSearchName} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
