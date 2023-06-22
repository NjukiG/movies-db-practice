import React from "react";
import MovieList from "./MovieList";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";

const Home = ({
  searchName,
  setSearchName,
  movies,
  AddFavourite,
  addFavouriteMovie,
}) => {
  return (
    <div>
      <div className="container-fluid movie-container">
        <div className="row d-flex align-items-center justify-content-between mt-4 mb-4">
          <MovieListHeading heading="My Movies" />
          <SearchBox searchName={searchName} setSearchName={setSearchName} />
        </div>
        <div className="row">
          <MovieList
            movies={movies}
            AddFavourite={AddFavourite}
            handleFavouritesAddition={addFavouriteMovie}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
