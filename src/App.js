import React, { useState, useEffect } from "react";
import "bootswatch/dist/slate/bootstrap.min.css"; // Added this :boom:
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      Title: "Atlanta",
      Year: "2016–2022",
      imdbID: "tt4288182",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGU1MzRhNmMtNDExOS00NTk2LWJlYzMtMzc4YWYyN2Q3M2ZmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
    },
    {
      Title: "The Real Housewives of Atlanta",
      Year: "2008–",
      imdbID: "tt1252370",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmVmM2VmMTctOGY5NS00NGU3LTlmNTItY2JkZWY3N2I2NWUyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Love & Hip Hop: Atlanta",
      Year: "2012–",
      imdbID: "tt2224452",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmZiMTI3N2ItZmIyMy00MDUzLTkyNDgtYzEyYWQwNTljNmY2XkEyXkFqcGdeQXVyMTMxNjUyMDkx._V1_SX300.jpg",
    },
    {
      Title: "Say Yes to the Dress: Atlanta",
      Year: "2010–",
      imdbID: "tt1730755",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTU1ZmM5NjgtYTM0My00Zjc3LWEyNDctNDI1MWM2YThiYTIyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "The Atlanta Child Murders",
      Year: "1985",
      imdbID: "tt0088750",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTQ1MzNmYjctNGJmOC00ODNhLTg1MDEtOTJlZDI3NmVkYzcyXkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_SX300.jpg",
    },
  ]);

  const URL = "http://www.omdbapi.com/?s=Atlanta&apikey=cc8b48eb";
  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status code ${res.status}`);
        } else {
          res.json();
        }
      })
      .then((data) => {
        if (data) {
          console.log(data);
        } else {
          console.log("No results found.");
        }
      });
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
