import React, { useState, useEffect } from "react";
import "./App.css";
import "bootswatch/dist/superhero/bootstrap.min.css"; // Added this :boom:

import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
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
          console.log(data.Search)
          setMovies(data.Search);
        }
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  };

  useEffect(() => {
    getMovies(searchName);
  }, [searchName]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;

// const saveLocally = (items) => {
//   localStorage.setItem("my-movies", JSON.stringify(items));
// };

// useEffect(() => {
//   const savedFavourites = JSON.parse(
//     localStorage.getItem("favourite-recipes")
//   );
//   setMyFavourites(savedFavourites);
// }, []);

// const addFavouriteMovie = (movie) => {
//   const newFavourites = [...myFavourites, movie];
//   setMyFavourites(newFavourites);
//   saveLocally(newFavourites);
// };

// const removeFavouriteMovie = (movie) => {
//   const newFavourites = myFavourites.filter((favourite) => {
//     return favourite.imdbID !== movie.imdbID;
//   });
//   setMyFavourites(newFavourites);
//   saveLocally(newFavourites);
// };
