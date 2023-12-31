import React, { useState, useEffect } from "react";
import "./App.css";
import "bootswatch/dist/superhero/bootstrap.min.css"; // Added this :boom:
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import SingleItem from "./components/SingleItem";
import WatchLater from "./components/WatchLater";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [myFavourites, setMyFavourites] = useState([]);
  const [watchLater, setWatchLater] = useState([]);

  // console.log(myFavourites);

  const getMovies = (searchName) => {
    const URL = `https://www.omdbapi.com/?&apikey=cc8b48eb&s=${
      !searchName ? "iron man" : searchName
    }`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          // console.log(data.Search);
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

  const saveLocally = (items) => {
    localStorage.setItem("my-movies", JSON.stringify(items));
  };
  const saveLocally2 = (items) => {
    localStorage.setItem("watch-later", JSON.stringify(items));
  };

  useEffect(() => {
    const watchLaterItems = JSON.parse(localStorage.getItem("watch-later"));

    if (watchLaterItems) {
      setWatchLater(watchLaterItems);
    }
  }, []);

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem("my-movies"));
    if (savedFavourites) {
      setMyFavourites(savedFavourites);
    }
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

  const addWatchLater = (movie) => {
    const toWatch = [...watchLater, movie];
    setWatchLater(toWatch);
    saveLocally2(toWatch);
  };

  const removeWatchLater = (movie) => {
    const toWatch = watchLater.filter((item) => {
      return item.id !== movie.id;
    });
    setWatchLater(toWatch);
    saveLocally2(toWatch);
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
              setSearchName={setSearchName}
              movies={movies}
              searchName={searchName}
            />
          }
        />
        <Route
          path="/movies/:id"
          element={
            <SingleItem
              handleAddToFavorites={addFavouriteMovie}
              handleremoveFavourites={removeFavouriteMovie} // Add this line
              myFavourites={myFavourites}
              watchLater={watchLater}
              handleWatchLater={addWatchLater}
              handleRemoveWatch={removeWatchLater}
            />
          }
        />
        <Route
          path="/favorites"
          element={<Favorites myFavourites={myFavourites} />}
        />

        <Route
          path="/later"
          element={
            <WatchLater
              watchLater={watchLater}
              // handleWatchLater={addWatchLater}
              // handleRemoveWatch={removeWatchLater}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

// const addFavouriteMovie = (movie) => {
//   if (myFavourites && myFavourites.includes(movie)) {
//     setMyFavourites(myFavourites.filter((favMovie) => favMovie !== movie));
//     saveLocally(myFavourites);
//   } else {
//     setMyFavourites([...myFavourites, movie]);
//     saveLocally(myFavourites);
//   }
// };
