import React from "react";

function SearchBox({ searchName, setSearchName }) {
  return (
    <div className="col col-sm-6">
      {/* <input
        className="form-control"
        placeholder="Search your movie here..."
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      /> */}
    </div>
  );
}

export default SearchBox;
