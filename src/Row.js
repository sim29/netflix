import React from "react";
import axios from "./axios";
import "./Row.css";
import { useState, useEffect } from "react";

function Row(props) {
  const [movies, setmovies] = useState([]);
  const imgPath = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(props.fetchURL);
      // console.table(req.data.results);
      console.log(req.data.results);
      setmovies(req.data.results);

      return req;
    }
    fetchData();
  }, [props.fetchURL]);
  return (
    <div>
      {/* title */}
      <h1>{props.title}</h1>
      {/* poster */}
      <div className="row__posters">
        {/**/}
        {movies.map((movie) => (
          <img
            className={`poster ${props.fullsized && "fullsized"}`}
            src={`${imgPath}${
              props.fullsized ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
        {/**/}
      </div>
    </div>
  );
}

export default Row;
