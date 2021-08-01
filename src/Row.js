import React from "react";
import axios from "./axios";
import "./Row.css";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row(props) {
  const API_KEY = "8562c99573f71513c73e7781f282f930";
  const [movies, setmovies] = useState([]);
  const [movieURL, setMovieURL] = useState("");
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

  async function movieClick(movie) {
    // console.log("clicked");
    // search for trailer

    if (movieURL != "") setMovieURL("");
    else {
      console.log("name", movie.id);
      // using tmdb api for fetching YT vid instead movie-trailer dependencies
      let trailerUrl;
      if (props.tvshows) {
        trailerUrl = await axios.get(
          `/tv/${movie.id}/videos?api_key=${API_KEY}`
        );
      } else {
        trailerUrl = await axios.get(
          `/movie/${movie.id}/videos?api_key=${API_KEY}`
        );
      }

      setMovieURL(
        trailerUrl.data.results[0] ? trailerUrl.data.results[0].key : ""
      );
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
      <div>{movieURL && <YouTube videoId={movieURL} opts={opts} />}</div>
    </div>
  );
}

export default Row;
