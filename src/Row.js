import React from "react";
import axios from "./axios";
import "./Row.css";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "movie-trailer";
import movieTrailer from "movie-trailer";

function Row(props) {
  const [movies, setmovies] = useState([]);
  const [movieClicked, setMovieClicked] = useState(false);
  const imgPath = "https://image.tmdb.org/t/p/original";
  const opts = {
    height: "360",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

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

  function movieClick(movie) {
    console.log("clicked");
    // search for trailer

    if (movieClicked) setMovieClicked(false);
    else {
      console.log("name", movie.name);
      movieTrailer("The War Next-door")
        .then((result) => console.log("res", result))
        .catch((error) => console.log(error));

      setMovieClicked(true);
    }
  }
  return (
    <div>
      {/* title */}
      <h2>{props.title}</h2>
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
            onClick={() => movieClick(movie)}
          />
        ))}
        {/**/}
      </div>
      <div>{movieClicked && <YouTube videoId="kKJSsOuY1lM" opts={opts} />}</div>
    </div>
  );
}

export default Row;
