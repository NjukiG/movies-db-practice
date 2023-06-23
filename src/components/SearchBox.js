import React from "react";

function SearchBox({ searchName, setSearchName }) {
  return (
    <div className="container-fluid m-4">
      <h1>Welcome.</h1>
      <h4>Millions of movies, TV shows and people to discover. Explore now.</h4>
      <div className="col col-sm-6 m-2">
        <input
          className="form-control"
          placeholder="Search your movie here..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBox;
