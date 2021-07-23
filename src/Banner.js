import React, { useEffect, useState } from "react";
import Axios from "./axios";
import request from "./request";

function Banner() {
  const [randomMovie, setRandomMovie] = useState([]);
  const imgPath = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function makeRequest() {
      let movie = await Axios.get(request.fetchNetflixOriginals);
      const randomIndex = Math.floor(
        Math.random() * (movie.data.results.length - 1)
      );
      movie = movie.data.results[randomIndex];
      setRandomMovie(movie);
    }
    makeRequest();
  }, []);
  return (
    <div>
      {/* Netflix Logo */}
      {/* Background image of any random Nx Originals */}
      <img src={`${imgPath}${randomMovie.backdrop_path}`} />

      {/*  Play button */}
      {/*  My-list button */}
      {/*  Show Description */}
    </div>
  );
}

export default Banner;
