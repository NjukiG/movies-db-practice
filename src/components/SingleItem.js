import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleItem = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getMovie = () => {
    const URL2 = `http://www.omdbapi.com/?&apikey=cc8b48eb&i=${id}`;

    fetch(URL2)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
          setMovie(data);
        }
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  const { Actors: actors } = movie;
  return <div>{actors}</div>;
};

export default SingleItem;
