import React, { useState, useEffect } from "react";
import "bootswatch/dist/slate/bootstrap.min.css"; // Added this :boom:
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const URL = "http://www.omdbapi.com/?s=Avengers&apikey=cc8b48eb";
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => console.log(data.Search));
  }, []);
  return (
    <div className="container-fluid movie-container">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
