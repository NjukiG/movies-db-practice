import React, { useState, useEffect } from "react";
import "./App.css";
import "bootswatch/dist/superhero/bootstrap.min.css"; // Added this :boom:
// import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourite from "./components/AddFavourite";
import RemoveFavourite from "./components/RemoveFavourite";
import NavBar from "./components/NavBar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [myFavourites, setMyFavourites] = useState([]);

  const getMovies = (searchName) => {
    const URL = `http://www.omdbapi.com/?s=${
      !searchName ? "Steel" : searchName
    }&apikey=cc8b48eb`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  };

  const saveLocally = (items) => {
    localStorage.setItem("my-movies", JSON.stringify(items));
  };

  useEffect(() => {
    getMovies(searchName);
  }, [searchName]);

  useEffect(() => {
    const savedFavourites = JSON.parse(
      localStorage.getItem("favourite-recipes")
    );
    setMyFavourites(savedFavourites);
  }, []);

  const addFavouriteMovie = (movie) => {
    const newFavourites = [...myFavourites, movie];
    setMyFavourites(newFavourites);
    saveLocally(newFavourites);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavourites = myFavourites.filter((favourite) => {
      return favourite.imdbID !== movie.imdbID;
    });
    setMyFavourites(newFavourites);
    saveLocally(newFavourites);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              searchName={searchName}
              setSearchName={setSearchName}
              movies={movies}
              AddFavourite={AddFavourite}
              addFavouriteMovie={addFavouriteMovie}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
            myFavourites={myFavourites}
              movies={movies}
              addFavouriteMovie={addFavouriteMovie}
              removeFavouriteMovie={removeFavouriteMovie}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
